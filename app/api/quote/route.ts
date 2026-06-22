import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_ADDRESS = "MONOCEM <onboarding@resend.dev>";
const NOTIFICATION_EMAIL = process.env.QUOTE_NOTIFICATION_EMAIL || "monocem.surface@gmail.com";

const SUBJECTS: Record<string, string> = {
  quote: "New Quote Enquiry",
  "trade-account": "New Trade Account Request",
  "installer-application": "New Installer Programme Application",
  "training-enquiry": "New Training Enquiry",
};

const CONFIRMATIONS: Record<string, string> = {
  quote:
    "Thank you for your enquiry with MONOCEM. We've received your project details and a member of our team will be in touch within 1–2 business days with a detailed quote.",
  "trade-account":
    "Thank you for applying to open a MONOCEM trade account. Our trade team will review your details and be in touch within 1–2 business days.",
  "installer-application":
    "Thank you for applying to the MONOCEM Approved Installer Programme. We'll review your application and be in touch within 1–2 business days.",
  "training-enquiry":
    "Thank you for your interest in MONOCEM training. A member of our team will be in touch within 1–2 business days with available dates.",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function labelize(key: string) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, formType: rawType, ...rest } = body;
    const formType = typeof rawType === "string" && rawType in SUBJECTS ? rawType : "quote";

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const enquiry = { formType, name, email, phone, ...rest, timestamp: new Date().toISOString() };

    console.log(`${SUBJECTS[formType]} received:`, enquiry);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY not set — skipping email delivery, enquiry logged only.");
      return NextResponse.json({ success: true, message: "Enquiry received" }, { status: 200 });
    }

    const resend = new Resend(apiKey);

    const fieldRows = Object.entries(rest)
      .map(([key, value]) => {
        const display = Array.isArray(value) ? value.join(", ") : value;
        return `<p><strong>${escapeHtml(labelize(key))}:</strong> ${escapeHtml(String(display || "—"))}</p>`;
      })
      .join("");

    const notificationHtml = `
      <h2>${SUBJECTS[formType]}</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
      ${fieldRows}
    `;

    const confirmationHtml = `
      <p>Hi ${escapeHtml(name)},</p>
      <p>${CONFIRMATIONS[formType]}</p>
      <p>— The MONOCEM Team</p>
    `;

    const results = await Promise.allSettled([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: NOTIFICATION_EMAIL,
        replyTo: email,
        subject: `${SUBJECTS[formType]} — ${name}`,
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
