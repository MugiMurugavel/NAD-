import { NextResponse } from "next/server";

/**
 * Contact form delivery — runs as a Vercel serverless function.
 * Forwards the submission to Formspree (https://formspree.io), which emails it
 * to your inbox. No npm dependencies, no domain/DNS setup. Configure with:
 *   FORMSPREE_ENDPOINT — your form URL, e.g. https://formspree.io/f/xxxxxxxx
 * (Create a form in the Formspree dashboard with notifications going to
 *  msl@lnad-med.science, then paste its endpoint here / in Vercel env vars.)
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

  const endpoint = process.env.FORMSPREE_ENDPOINT;
  if (!endpoint) {
    console.error("[contact] FORMSPREE_ENDPOINT is not set — cannot send.");
    return NextResponse.json({ error: "The contact form isn’t configured yet." }, { status: 503 });
  }

  const interest = (body.interest || "—").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email, // Formspree uses this as the reply-to address
        phone: phone || "—",
        interest,
        message: message || "(no message)",
        _subject: `New inquiry — ${interest} — ${name}`,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Formspree error", res.status, await res.text());
      return NextResponse.json({ error: "We couldn’t send your message. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "We couldn’t send your message. Please try again." }, { status: 502 });
  }
}
