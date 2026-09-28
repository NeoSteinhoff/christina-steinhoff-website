"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed";
import { SITE } from "@/lib/constants";
import { track } from "@/lib/track";
import { getEntrySource } from "@/lib/attribution";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-[#1c160e]/10 bg-[#f7f1e7] px-4 py-3 text-sm font-light text-[#1c160e] placeholder:text-[#1c160e]/30 transition-colors focus:border-[#c9a86c]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a86c]/15";

export function ApplyClient() {
  const [status, setStatus] = useState<Status>("idle");

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
        body: JSON.stringify({ type: "application", ...data, autoSource: getEntrySource() }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        track("generate_lead", { source: "apply" });
        return;
      }
      if (json.code === "unconfigured") {
        const subject = encodeURIComponent(`Mentorship application — ${data.firstName} ${data.lastName || ""}`.trim());
        const body = encodeURIComponent(
          `Name: ${data.firstName} ${data.lastName || ""}\nEmail: ${data.email}\n\nCurrent role: ${data.currentRole}\n\nWhat isn't working: ${data.whatIsntWorking}\n\nReady to invest in the next 90 days: ${data.readyToInvest}`
        );
        window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        track("generate_lead", { source: "apply" });
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

      <div className="relative overflow-hidden bg-[#060606] px-6 pb-16 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.06] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">Before you book</span>
          <h1
            className="mt-5 text-[clamp(2.4rem,5.5vw,4rem)] font-light leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            A short <em className="font-medium text-[#c9a86c]">application</em>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-white/60">
            Christina reviews every application personally, so the call is worth both of your time.
            Three questions — two minutes.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-lg px-6 py-16">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="calendly"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8 rounded-2xl border border-[#c9a86c]/25 bg-white p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a86c]/12 text-[#a8884e]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m5 13 4 4L19 7" /></svg>
                </div>
                <h2 className="mb-2 text-xl font-light text-[#1c160e]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                  Received — now find a time
                </h2>
                <p className="text-sm font-light text-[#1c160e]/55">
                  Christina will read this before your call. Pick whatever slot works for you below.
                </p>
              </div>
              <CalendlyEmbed />
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-[#1c160e]/8 bg-white p-8"
            >
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">
                    First name <span className="text-[#c9a86c]">*</span>
                  </label>
                  <input name="firstName" required placeholder="Sarah" autoComplete="given-name" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">Last name</label>
                  <input name="lastName" placeholder="Al Maktoum" autoComplete="family-name" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">
                  Email <span className="text-[#c9a86c]">*</span>
                </label>
                <input name="email" type="email" required placeholder="you@company.com" autoComplete="email" className={inputClass} />
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">
                  Your current role <span className="text-[#c9a86c]">*</span>
                </label>
                <input name="currentRole" required placeholder="e.g. Founder & CEO, 40-person team" className={inputClass} />
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">
                  What isn&apos;t working right now? <span className="text-[#c9a86c]">*</span>
                </label>
                <textarea
                  name="whatIsntWorking"
                  required
                  rows={4}
                  placeholder="Be specific — this is what Christina reads before your call."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#1c160e]/45">
                  Are you ready to invest in the next 90 days? <span className="text-[#c9a86c]">*</span>
                </label>
                <select name="readyToInvest" required defaultValue="" className={inputClass}>
                  <option value="" disabled>Select one</option>
                  <option value="Yes — I want to move now">Yes — I want to move now</option>
                  <option value="Likely — I need to understand the fit first">Likely — I need to understand the fit first</option>
                  <option value="Not yet — I'm exploring">Not yet — I&apos;m exploring</option>
                </select>
              </div>

              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                  Something went wrong sending your application. Please email{" "}
                  <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a> directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-[#0b0a08] py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#1a1410] disabled:opacity-50"
              >
                {status === "loading" ? "Sending…" : "Submit application"}
              </button>
              <p className="text-center text-xs font-light text-[#1c160e]/40">
                Or email directly at{" "}
                <a href={`mailto:${SITE.email}`} className="underline underline-offset-2 hover:text-[#a8884e]">{SITE.email}</a>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
