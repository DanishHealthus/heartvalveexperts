import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return new Response("Missing fields", { status: 400 });
    }

    const wpPayload = {
      full_name: name,
      contact_number: phone,
      email: email,
      message: message,
    };

    const wpRes = await fetch(
      "https://backend.heartvalveexperts.com/wp-json/custom/v1/submit-wpgi-contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wpPayload),
      }
    );

    if (!wpRes.ok) {
      const text = await wpRes.text();
      return new Response("WP API Error: " + text, { status: 500 });
    }


    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "ithealthus@gmail.com",
        pass: "tbwn htaz sbyh bade", 
      },
    });

    await transporter.sendMail({
      from: "ithealthus@gmail.com",
      to: "ithealthus@gmail.com",
      replyTo: email,
      subject: "New Enquiry from Heart Valve Experts Site",
      html: `
            <div style="background:#f4f7fb;padding:40px 0;font-family:Arial, sans-serif;">
                <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:10px;box-shadow:0 4px 14px rgba(0,0,0,0.08);overflow:hidden;">
                
                <!-- Header -->
                <div style="background:#0A7CFF;padding:20px;text-align:center;color:#fff;">
                    <h1 style="margin:0;font-size:24px;">New Consultation Request</h1>
                </div>

                <!-- Body -->
                <div style="padding:30px;">
                    <p style="font-size:16px;color:#333;">You have received a new enquiry from your website:</p>

                    <table style="width:100%;border-collapse:collapse;margin-top:20px;">
                    <tr>
                        <td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;color:#555;">Name</td>
                        <td style="padding:12px;border-bottom:1px solid #eee;color:#333;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;color:#555;">Email</td>
                        <td style="padding:12px;border-bottom:1px solid #eee;color:#333;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;color:#555;">Phone</td>
                        <td style="padding:12px;border-bottom:1px solid #eee;color:#333;">${phone}</td>
                    </tr>
                    <tr>
                        <td style="padding:12px;border-bottom:1px solid #eee;font-weight:bold;color:#555;">Message</td>
                        <td style="padding:12px;border-bottom:1px solid #eee;color:#333;">${message}</td>
                    </tr>
                    </table>

                    <p style="margin-top:25px;font-size:14px;color:#777;text-align:center;">
                    This email was sent automatically from your website enquiry form.
                    </p>
                </div>

                <!-- Footer -->
                <div style="background:#f0f0f0;padding:15px;text-align:center;font-size:13px;color:#888;">
                    © ${new Date().getFullYear()} Heart Valve Experts — All Rights Reserved.
                </div>

                </div>
            </div>
            `

    });

    return new Response("1", { status: 200 });
  } catch (error) {
    return new Response("Mailer Error " + error, { status: 500 });
  }
}
