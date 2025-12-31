import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, city, help, notes } = await req.json();

    if (!name || !phone || !city || !help) {
      return new Response(JSON.stringify({ success: false, message: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "ithealthus@gmail.com",
        pass: "mtxz gqin ddhz zfqk", // app password
      },
    });

    await transporter.sendMail({
      from: "ithealthus@gmail.com",
      to: "heartvalveexperts@gmail.com, naresh@healthus.ai, mohit@healthus.ai",
      subject: "New Consultation Request",
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Help:</b> ${help}</p>
        <p><b>Notes:</b> ${notes || "N/A"}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: "Mail sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Mailer Error:", error);
    return new Response(JSON.stringify({ success: false, message: "Mailer error", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
