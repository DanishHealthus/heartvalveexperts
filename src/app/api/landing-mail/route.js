export const runtime = "nodejs"; // important
import nodemailer from "nodemailer";
import formidable from "formidable";
import { Readable } from "stream";

export const config = {
  api: { bodyParser: false }, // disable Next.js body parsing
};

async function toNodeReadable(req) {
//   const buffer = Buffer.from(await req.arrayBuffer());
console.log(req)
  const readable = new Readable();
  readable._read = () => {};
  readable.push(buffer);
  readable.push(null);
  return readable;
}

export async function POST(req) {
  try {
    const nodeReq = await toNodeReadable(req);

    const form = formidable({ multiples: true });
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(nodeReq, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    const { name, phone, city, help, notes } = fields;

    if (!name || !phone || !city || !help) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "ithealthus@gmail.com",
        pass: "YOUR_APP_PASSWORD", // Gmail App Password
      },
    });

    let attachments = [];
    if (files.file) {
      const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file];
      attachments = uploadedFiles.map((f) => ({
        filename: f.originalFilename,
        path: f.filepath,
      }));
    }

    await transporter.sendMail({
      from: "ithealthus@gmail.com",
      to: "ithealthus@gmail.com",
      subject: "New Consultation Request",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Help:</b> ${help}</p>
        <p><b>Notes:</b> ${notes || "N/A"}</p>
      `,
      attachments,
    });

    return new Response(JSON.stringify({ success: true, message: "Mail sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
