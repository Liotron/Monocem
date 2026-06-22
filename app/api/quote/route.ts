import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_ADDRESS = "MONOCEM <onboarding@resend.dev>";
const NOTIFICATION_EMAIL = process.env.QUOTE_NOTIFICATION_EMAIL || "monocem.surface@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, phone, projectType, surfaces, area, location, timeline, notes } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const enquiry = {
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
    };

    console.log("Quote enquiry received:", enquiry);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY not set — skipping email delivery, enquiry logged only.");
      return NextResponse.json({ success: true, message: "Enquiry received" }, { status: 200 });
    }

    const resend = new Resend(apiKey);

    const notificationHtml = `
      <h2>New Quote Enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      <p><strong>Project Type:</strong> ${escapeHtml(projectType || "—")}</p>
      <p><strong>Surface(s):</strong> ${escapeHtml(Array.isArray(surfaces) ? surfaces.join(", ") : surfaces || "—")}</p>
      <p><strong>Area:</strong> ${escapeHtml(area || "—")}</p>
      <p><strong>Location:</strong> ${escapeHtml(location || "—")}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timeline || "—")}</p>
      <p><strong>Notes:</strong> ${escapeHtml(notes || "—")}</p>
    `;

    const confirmationHtml = `
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thank you for your enquiry with MONOCEM. We've received your project details and a member of our team will be in touch within 1–2 business days with a detailed quote.</p>
      <p>— The MONOCEM Team</p>
    `;

    const results = await Promise.allSettled([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: NOTIFICATION_EMAIL,
        replyTo: email,
        subject: `New Quote Enquiry — ${name}`,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: "We've received your MONOCEM enquiry",
        html: confirmationHtml,
      }),
    ]);

    const failed = results.filter((r) => r.status === "rejected");
    if (failed.length > 0) {
      console.error("Resend delivery failure:", failed);
    }

    return NextResponse.json({ success: true, message: "Enquiry received" }, { status: 200 });
  } catch (err) {
    console.error("Quote route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
