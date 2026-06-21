import { NextResponse } from "next/server";

/**
 * Contact form delivery — runs as a Vercel serverless function.
 * Hands the message to Resend (https://resend.com) via its REST API, so we
 * add no npm dependencies. Configure with env vars (see .env.example):
 *   RESEND_API_KEY     (required) — your Resend API key
 *   CONTACT_TO_EMAIL   where inquiries are delivered
 *   CONTACT_FROM_EMAIL verified sender, e.g. "Cell Context <msl@lnad-med.science>"
 */

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  consent?: boolean;
  company?: string; // honeypot — real users never fill this
};

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const ESC: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ESC[c]);

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Accept silently, send nothing.
  if (body.company) return NextResponse.json({ ok: true });

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  if (name.length < 2 || !EMAIL_RE.test(email) || !body.consent) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — cannot send.");
    return NextResponse.json({ error: "The contact form isn’t configured yet." }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL || "msl@lnad-med.science";
  const from = process.env.CONTACT_FROM_EMAIL || "Cell Context <onboarding@resend.dev>";
  const interest = (body.interest || "—").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Reaching out as", interest],
  ];

  const html = `
  <div style="font-family:ui-sans-serif,system-ui,Arial,sans-serif;max-width:560px;margin:0 auto;color:#16233B">
    <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#876320;margin:0 0 8px">New inquiry · Cell Context</p>
    <h2 style="font-size:20px;margin:0 0 16px">${esc(interest)} — ${esc(name)}</h2>
    <table style="border-collapse:collapse;width:100%;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 14px 6px 0;color:#6B6655;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:6px 0;color:#16233B">${esc(v)}</td></tr>`
        )
        .join("")}
    </table>
    ${
      message
        ? `<p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#876320;margin:20px 0 6px">Message</p><p style="font-size:15px;line-height:1.6;white-space:pre-wrap;margin:0">${esc(message)}</p>`
        : ""
    }
  </div>`;

  const text = [
    "New inquiry · Cell Context",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    message ? `Message:\n${message}` : "(no message)",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New inquiry — ${interest} — ${name}`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend error", res.status, await res.text());
      return NextResponse.json({ error: "We couldn’t send your message. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "We couldn’t send your message. Please try again." }, { status: 502 });
  }
}
