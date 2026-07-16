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

     // ✅ Google Sheet Call AKfycbwGv5-QRjxLDzvls_Ij0nsiupeECpkpxFYuxFFb72aIb1qClpDvwhRE4fAxoqk_o8T2
    await fetch(
      "https://script.google.com/macros/s/AKfycbwGv5-QRjxLDzvls_Ij0nsiupeECpkpxFYuxFFb72aIb1qClpDvwhRE4fAxoqk_o8T2/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email: "",
          phone,
          city,
          help,
          notes,
        }),
      }
    );
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "danish@healthus.ai",
        pass: "odcp rsng jnfu dsys",
      },
    });
    await transporter.sendMail({
      from: "ithealthus@gmail.com",
      to: "heartvalveexperts@gmail.com, shwetha@healthus.ai, mohit@healthus.ai,info@healthus.ai ,drankurmd@gmail.com, customerservicemanager@hvshospitals.in, healthusads@gmail.com",
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
