import nodemailer from "nodemailer";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwGv5-QRjxLDzvls_Ij0nsiupeECpkpxFYuxFFb72aIb1qClpDvwhRE4fAxoqk_o8T2/exec";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  auth: {
    user: 'danish@healthus.ai',
    pass: 'odcp rsng jnfu dsys',
  },
});

export async function POST(req) {
  try {
    const { name, phone, city, help, notes } = await req.json();

    if (!name || !phone || !city || !help) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing fields",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const leadData = {
      name: name.trim(),
      email: "",
      phone: phone.trim(),
      city: city.trim(),
      help: help.trim(),
      notes: notes?.trim() || "",
    };

    // Start both operations together
    const sheetPromise = fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    const mailPromise = transporter.sendMail({
      from: `"Heart Valve Experts" <${process.env.SMTP_USER}>`,
      to: [
        "heartvalveexperts@gmail.com",
        "drankurmd@gmail.com",
        "customerservicemanager@hvshospitals.in",
        "healthusads@gmail.com",
      ],
      subject: "New Consultation Request",
      html: `
        <h2>New Consultation Request</h2>

        <p><b>Name:</b> ${leadData.name}</p>
        <p><b>Phone:</b> ${leadData.phone}</p>
        <p><b>City:</b> ${leadData.city}</p>
        <p><b>Help:</b> ${leadData.help}</p>
        <p><b>Notes:</b> ${leadData.notes || "N/A"}</p>
      `,
    });

    /*
     * Don't wait for Google Sheet + email.
     * Let them continue in the background.
     */
    Promise.allSettled([sheetPromise, mailPromise]).then((results) => {
      results.forEach((result, index) => {
        if (result.status === "rejected") {
          console.error(
            index === 0
              ? "Google Sheet Error:"
              : "Email Error:",
            result.reason
          );
        }
      });
    });

    // Respond immediately
    return new Response(
      JSON.stringify({
        success: true,
        message: "Consultation submitted successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("API Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Something went wrong",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}