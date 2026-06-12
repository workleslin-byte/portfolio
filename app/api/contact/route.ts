import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // TODO: parse body with zod, send email via resend
  const body = await request.json();
  console.log("Contact form submission:", body);
  return NextResponse.json({ success: true });
}
