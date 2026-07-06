import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

type Payload = {
  type?: "enquiry" | "newsletter";
  firstName?: string;
  lastName?: string;
  email?: string;
  topic?: string;
  message?: string;
  company?: string; // honeypot — real users leave this empty
};

const TOPICS: Record<string, string> = {
  personal: "Personal Life Mentorship",
  performance: "High Performance Coaching",
  executive: "Executive Coaching",
  relationships: "Conscious Relationship Coaching",
  retreat: "Bespoke Retreat",
  workshop: "UnleashHER Potential™ Workshop",
  other: "General Enquiry",
};

function valid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, code: "bad_request" }, { status: 400 });
  }

  // Honeypot: silently accept bots without doing anything.
  if (body.company) return Response.json({ ok: true, channel: "noop" });

  const email = (body.email || "").trim();
  const isNewsletter = body.type === "newsletter";

  let subject: string;
  let text: string;
  let html: string;

  if (isNewsletter) {
    if (!valid(email)) {
      return Response.json({ ok: false, code: "invalid" }, { status: 422 });
    }
    subject = "New newsletter subscriber";
    text = `New newsletter subscriber\n\nEmail: ${email}`;
    html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1c160e">
        <h2 style="font-weight:600">New newsletter subscriber</h2>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      </div>`;
  } else {
    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const topic = TOPICS[body.topic || "other"] || "General Enquiry";
    const message = (body.message || "").trim();

    if (!firstName || !email || !message || !valid(email)) {
      return Response.json({ ok: false, code: "invalid" }, { status: 422 });
    }

    const name = `${firstName} ${lastName}`.trim();
    subject = `New enquiry — ${topic} — ${name}`;
    text = `New enquiry from the website\n\nName: ${name}\nEmail: ${email}\nInterested in: ${topic}\n\n${message}`;
    html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1c160e">
        <h2 style="font-weight:600">New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
        <strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a><br/>
        <strong>Interested in:</strong> ${escapeHtml(topic)}</p>
        <p style="white-space:pre-wrap;border-left:3px solid #c9a86c;padding-left:14px">${escapeHtml(message)}</p>
      </div>`;
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const FROM = process.env.CONTACT_FROM_EMAIL || `Website <noreply@christinasteinhoff.com>`;
  const FORMSPREE_FORM_ID = process.env.FORMSPREE_FORM_ID;

  // Preferred: Resend (transactional email)
  if (RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [SITE.email],
          reply_to: email,
          subject,
          html,
          text,
        }),
      });
      if (res.ok) return Response.json({ ok: true, channel: "resend" });
      console.error("Resend error", res.status, await res.text());
    } catch (err) {
      console.error("Resend exception", err);
    }
  }

  // Fallback: modern Formspree form endpoint (https://formspree.io/f/<id>)
  if (FORMSPREE_FORM_ID) {
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, message: text, _subject: subject }),
      });
      if (res.ok) return Response.json({ ok: true, channel: "formspree" });
      console.error("Formspree error", res.status, await res.text());
    } catch (err) {
      console.error("Formspree exception", err);
    }
  }

  // No delivery channel configured — tell the client so it can fall back to mailto.
  return Response.json({ ok: false, code: "unconfigured" }, { status: 503 });
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
