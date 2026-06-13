"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed";
import { SITE, SOCIAL, CALENDLY } from "@/lib/constants";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-[#1c160e]/10 bg-[#f7f1e7] px-4 py-3 text-sm font-light text-[#1c160e] placeholder:text-[#1c160e]/30 transition-colors focus:border-[#c9a86c]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a86c]/15";

export default function ContactPage() {
  const [tab, setTab] = useState<"book" | "form">("book");
  const [status, setStatus] = useState<Status>("idle");

  function mailtoFallback(data: Record<string, string>) {
    const subject = encodeURIComponent(`Enquiry — ${data.topic || "General"} — ${data.firstName} ${data.lastName}`);
    const body = encodeURIComponent(
      `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nInterested in: ${data.topic}\n\n${data.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        return;
      }
      // No backend configured yet — make sure the lead still reaches Christina.
      if (json.code === "unconfigured") {
        mailtoFallback(data);
        setStatus("success");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f1e7]">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden bg-[#060606] px-6 pb-20 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.06] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">Get in touch</span>
          <h1
            className="mt-5 text-[clamp(2.6rem,6vw,4.5rem)] font-light leading-[1.02] text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Start the <em className="font-medium text-[#c9a86c]">conversation</em>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-white/60">
            Book a complimentary discovery call, or send a message and Christina will reply personally.
          </p>

          <div className="mt-9 inline-flex gap-1 rounded-full bg-white/[0.06] p-1">
            {(["book", "form"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-6 py-2.5 text-[10px] uppercase tracking-[0.22em] transition-all ${
                  tab === t ? "bg-[#c9a86c] font-medium text-[#0b0a08]" : "text-white/50 hover:text-white/80"
                }`}
              >
                {t === "book" ? "Book a call" : "Send a message"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {tab === "book" && (
        <div className="mx-auto max-w-4xl px-6 py-16">
          <CalendlyEmbed />
          <p className="mt-6 text-center text-sm font-light text-[#1c160e]/55">
            Prefer to write first?{" "}
            <button onClick={() => setTab("form")} className="text-[#a8884e] underline underline-offset-4 hover:text-[#c9a86c]">
              Send a message instead
            </button>
          </p>
        </div>
      )}

      {tab === "form" && (
        <div className="mx-auto grid max-w-5xl gap-14 px-6 py-16 md:grid-cols-[1fr_1.4fr]">
          {/* Contact details */}
          <div>
            <h2 className="mb-8 text-2xl font-light text-[#1c160e]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
              Contact details
            </h2>
            <div className="mb-10 space-y-5">
              <ContactRow
                href={`mailto:${SITE.email}`}
                label="Email"
                value={SITE.email}
                icon={<path d="M3 5h18v14H3z M3 7l9 6 9-6" />}
              />
              <ContactRow
                href={`tel:${SITE.phone}`}
                label="Phone"
                value={SITE.phone}
                icon={<path d="M3 5a2 2 0 0 1 2-2h2.5a1 1 0 0 1 1 .76l1 4a1 1 0 0 1-.29.95l-1.8 1.6a14 14 0 0 0 6 6l1.6-1.8a1 1 0 0 1 .95-.29l4 1a1 1 0 0 1 .76 1V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z" />}
              />
              <ContactRow
                href={SITE.whatsapp}
                external
                label="WhatsApp"
                value="Message on WhatsApp"
                icon={<path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z M8.5 8.5c0 4 3 7 7 7" />}
              />
              <ContactRow
                label="Studio"
                value={SITE.location}
                icon={<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z M12 10.5a2 2 0 1 0 0-0.01" />}
              />
            </div>

            <div className="border-t border-[#1c160e]/10 pt-8">
              <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#1c160e]/45">Follow Christina</p>
              <div className="flex gap-3">
                {[
                  { href: SOCIAL.instagram, label: "Instagram", d: "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.93 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.84a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" },
                  { href: SOCIAL.linkedin, label: "LinkedIn", d: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" },
                  { href: SOCIAL.facebook, label: "Facebook", d: "M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.69.24 2.69.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.02 24 18.06 24 12.07Z" },
                ].map(({ href, label, d }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c160e]/12 text-[#1c160e]/45 transition-all hover:border-[#c9a86c]/50 hover:text-[#a8884e]"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-[#0b0a08] p-6">
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/50">Prefer to talk?</p>
              <p className="mb-4 font-light text-white" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                Book a complimentary 30-minute discovery call.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#c9a86c] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0b0a08] transition-colors hover:bg-[#d8bd8a]"
              >
                Book now
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-8 text-2xl font-light text-[#1c160e]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
              Send a message
            </h2>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-[#c9a86c]/25 bg-white p-12 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a86c]/12 text-[#a8884e]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m5 13 4 4L19 7" /></svg>
                </div>
                <h3 className="mb-2 text-xl font-light text-[#1c160e]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                  Message received
                </h3>
                <p className="text-sm font-light text-[#1c160e]/55">Christina will be in touch within one business day.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-[#1c160e]/8 bg-white p-8">
                {/* honeypot */}
                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="First name" name="firstName" placeholder="Sarah" autoComplete="given-name" required />
                  <Field label="Last name" name="lastName" placeholder="Al Maktoum" autoComplete="family-name" />
                </div>
                <Field label="Email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">What brings you here?</label>
                  <select name="topic" defaultValue="personal" className={inputClass}>
                    <option value="personal">Personal Life Mentorship</option>
                    <option value="executive">Executive Coaching</option>
                    <option value="performance">High Performance Coaching</option>
                    <option value="relationships">Conscious Relationship Coaching</option>
                    <option value="workshop">UnleashHER Potential™ Workshop</option>
                    <option value="retreat">Bespoke Retreat</option>
                    <option value="other">General enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="A little about you and what you'd like to work on…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                    Something went wrong sending your message. Please email{" "}
                    <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a> directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-[#0b0a08] py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#1a1410] disabled:opacity-50"
                >
                  {status === "loading" ? "Sending…" : "Send message"}
                </button>
                <p className="text-center text-xs font-light text-[#1c160e]/40">
                  Or email directly at{" "}
                  <a href={`mailto:${SITE.email}`} className="underline underline-offset-2 hover:text-[#a8884e]">{SITE.email}</a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">
        {label}
        {required && <span className="text-[#c9a86c]"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className={inputClass}
      />
    </div>
  );
}

function ContactRow({
  href,
  external,
  label,
  value,
  icon,
}: {
  href?: string;
  external?: boolean;
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  const inner = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c9a86c]/10 text-[#a8884e] transition-colors group-hover:bg-[#c9a86c]/20">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </span>
      <span>
        <span className="mb-0.5 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">{label}</span>
        <span className="block text-sm font-light text-[#1c160e]">{value}</span>
      </span>
    </>
  );
  if (!href) return <div className="flex items-start gap-4">{inner}</div>;
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-start gap-4"
    >
      {inner}
    </a>
  );
}
