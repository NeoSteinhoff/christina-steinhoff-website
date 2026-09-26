import { SITE } from "@/lib/constants";

export const runtime = "nodejs";

type Payload = {
  type?: "enquiry" | "newsletter" | "referral" | "application" | "quiz";
  firstName?: string;
  lastName?: string;
  email?: string;
  topic?: string;
  message?: string;
  company?: string; // honeypot — real users leave this empty
  source?: string; // enquiry/newsletter: how they heard about Christina, or the blog slug that captured them
  referredBy?: string; // enquiry: who referred them, when source === "referral"
  autoSource?: string; // passive referrer/utm capture, used when `source` wasn't self-reported
  // referral type — a client introducing someone else
  referrerName?: string;
  refereeName?: string;
  refereeContact?: string;
  note?: string;
  // application type — the 3-question mentorship qualifier at /apply
  currentRole?: string;
  whatIsntWorking?: string;
  readyToInvest?: string;
  // quiz type — "What's Really Running Your Success?" result capture
  resultKey?: string;
  resultName?: string;
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

const SOURCES: Record<string, string> = {
  referral: "Referred by a client",
  instagram: "Instagram",
  google: "Google search",
  press: "Press or article",
  blog: "Blog",
  other: "Other",
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
  const isReferral = body.type === "referral";
  const isApplication = body.type === "application";
  const isQuiz = body.type === "quiz";

  let subject: string;
  let text: string;
  let html: string;

  if (isApplication) {
    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const currentRole = (body.currentRole || "").trim();
    const whatIsntWorking = (body.whatIsntWorking || "").trim();
    const readyToInvest = (body.readyToInvest || "").trim();

    if (!firstName || !email || !currentRole || !whatIsntWorking || !readyToInvest || !valid(email)) {
      return Response.json({ ok: false, code: "invalid" }, { status: 422 });
    }

    const name = `${firstName} ${lastName}`.trim();
    subject = `[APPLICATION] 90-Day Private Mentorship — ${name}`;
    text = `New mentorship application\n\nName: ${name}\nEmail: ${email}\n\nCurrent role: ${currentRole}\n\nWhat isn't working: ${whatIsntWorking}\n\nReady to invest in the next 90 days: ${readyToInvest}`;
    html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1c160e">
        <h2 style="font-weight:600">New mentorship application 💛</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
        <strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Current role:</strong><br/>${escapeHtml(currentRole)}</p>
        <p><strong>What isn't working:</strong><br/>${escapeHtml(whatIsntWorking)}</p>
        <p><strong>Ready to invest in the next 90 days:</strong><br/>${escapeHtml(readyToInvest)}</p>
      </div>`;
  } else if (isQuiz) {
    const firstName = (body.firstName || "").trim();
    const resultName = (body.resultName || "").trim();
    const resultKey = (body.resultKey || "").trim();

    if (!firstName || !email || !valid(email)) {
      return Response.json({ ok: false, code: "invalid" }, { status: 422 });
    }

    subject = `New quiz lead — ${resultName || resultKey || "Unknown result"} — ${firstName}`;
    text = `New "What's Really Running Your Success?" quiz lead\n\nName: ${firstName}\nEmail: ${email}\nResult: ${resultName} (${resultKey})`;
    html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1c160e">
        <h2 style="font-weight:600">New quiz lead</h2>
        <p><strong>Name:</strong> ${escapeHtml(firstName)}<br/>
        <strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a><br/>
        <strong>Result:</strong> ${escapeHtml(resultName)} (${escapeHtml(resultKey)})</p>
      </div>`;
  } else if (isReferral) {
    const referrerName = (body.referrerName || "").trim();
    const refereeName = (body.refereeName || "").trim();
    const refereeContact = (body.refereeContact || "").trim();
    const note = (body.note || "").trim();

    if (!refereeName || !refereeContact) {
      return Response.json({ ok: false, code: "invalid" }, { status: 422 });
    }

    subject = `New client referral — ${refereeName} (via ${referrerName || "a client"})`;
    text = `New client referral\n\nReferred by: ${referrerName || "Not provided"}\nPerson to introduce: ${refereeName}\nContact: ${refereeContact}${note ? `\n\nNote: ${note}` : ""}`;
    html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1c160e">
        <h2 style="font-weight:600">New client referral 💛</h2>
        <p><strong>Referred by:</strong> ${escapeHtml(referrerName || "Not provided")}<br/>
        <strong>Person to introduce:</strong> ${escapeHtml(refereeName)}<br/>
        <strong>Contact:</strong> ${escapeHtml(refereeContact)}</p>
        ${note ? `<p style="white-space:pre-wrap;border-left:3px solid #c9a86c;padding-left:14px">${escapeHtml(note)}</p>` : ""}
      </div>`;
  } else if (isNewsletter) {
    if (!valid(email)) {
      return Response.json({ ok: false, code: "invalid" }, { status: 422 });
    }
    const sourceLabel = body.source ? `Blog: ${body.source}` : body.autoSource && body.autoSource !== "direct" ? body.autoSource : null;
    subject = "New newsletter subscriber";
    text = `New newsletter subscriber\n\nEmail: ${email}${sourceLabel ? `\nSource: ${sourceLabel}` : ""}`;
    html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1c160e">
        <h2 style="font-weight:600">New newsletter subscriber</h2>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        ${sourceLabel ? `<p><strong>Source:</strong> ${escapeHtml(sourceLabel)}</p>` : ""}
      </div>`;
  } else {
    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const topic = TOPICS[body.topic || "other"] || "General Enquiry";
    const message = (body.message || "").trim();

    if (!firstName || !email || !message || !valid(email)) {
      return Response.json({ ok: false, code: "invalid" }, { status: 422 });
    }

    const isClientReferral = body.source === "referral";
    const sourceLabel = SOURCES[body.source || ""] || body.autoSource || "Direct";
    const referredBy = (body.referredBy || "").trim();

    const name = `${firstName} ${lastName}`.trim();
    subject = `${isClientReferral ? "[REFERRAL] " : ""}New enquiry — ${topic} — ${name}`;
    text = `New enquiry from the website\n\nName: ${name}\nEmail: ${email}\nInterested in: ${topic}\nSource: ${sourceLabel}${referredBy ? `\nReferred by: ${referredBy}` : ""}\n\n${message}`;
    html = `
      <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1c160e">
        <h2 style="font-weight:600">New website enquiry${isClientReferral ? " — via referral 💛" : ""}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
        <strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a><br/>
        <strong>Interested in:</strong> ${escapeHtml(topic)}<br/>
        <strong>Source:</strong> ${escapeHtml(sourceLabel)}${referredBy ? `<br/><strong>Referred by:</strong> ${escapeHtml(referredBy)}` : ""}</p>
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
          reply_to: email || undefined,
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
