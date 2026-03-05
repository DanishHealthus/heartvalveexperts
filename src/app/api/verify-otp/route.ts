import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { phone, otp } = await req.json();

  const res = await fetch(
    `https://api.msg91.com/api/v5/otp/verify?mobile=91${phone}&otp=${otp}`,
    {
      method: "GET",
      headers: {
        authkey: process.env.MSG91_AUTH_KEY!,
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}