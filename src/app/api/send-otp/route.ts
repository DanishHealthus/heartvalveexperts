import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { phone } = await req.json();
 console.log("AUTH:", process.env.MSG91_AUTH_KEY);
  console.log("TEMPLATE:", process.env.MSG91_TEMPLATE_ID);
  const res = await fetch("https://control.msg91.com/api/v5/otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authkey: process.env.MSG91_AUTH_KEY as string,
    },
    body: JSON.stringify({
      template_id: process.env.MSG91_TEMPLATE_ID,
      mobile: `91${phone}`,
    }),
  });

  const data = await res.json();

  console.log("MSG91 Response:", data);

  return NextResponse.json(data);
}