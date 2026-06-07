import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, projectType, surfaces, area, location, timeline, notes } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // In production, integrate with email service (Resend, SendGrid, etc.)
    // or a form service (Formspree). For now, log to console.
    console.log("Quote enquiry received:", {
      name,
      email,
      phone,
      projectType,
      surfaces,
      area,
      location,
      timeline,
      notes,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "Enquiry received" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
