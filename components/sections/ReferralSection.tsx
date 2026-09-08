"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/constants";
import { track } from "@/lib/track";

const SHARE_URL = `${SITE.url}?ref=client_share`;
const SHARE_MESSAGE = `A coach I worked with, Christina Steinhoff in Dubai, does exceptional work on leadership and emotional mastery. Thought of you — worth a look: ${SHARE_URL}`;

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-light text-white placeholder:text-white/30 transition-colors focus:border-[#c9a86c]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a86c]/15";

type Status = "idle" | "loading" | "success" | "error";

export function ReferralSection() {
  const [canShare, setCanShare] = useState(false);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    // Feature-detected post-mount (navigator is unavailable during SSR) so the
    // server-rendered fallback links never mismatch the client's first paint.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (typeof navigator !== "undefined" && "share" in navigator) setCanShare(true);
  }, []);

  async function handleNativeShare() {
    try {
      await navigator.share({ title: "Christina Steinhoff", text: SHARE_MESSAGE, url: SHARE_URL });
      track("referral_submitted", { channel: "native_share" });
    } catch {
      // user cancelled — not an error
    }
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
        body: JSON.stringify({ type: "referral", ...data }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        track("referral_submitted", { channel: "form" });
        return;
      }
      // No backend configured yet — make sure the referral still reaches Christina.
      if (json.code === "unconfigured") {
        const subject = encodeURIComponent(`New client referral — ${data.refereeName || ""}`);
        const body = encodeURIComponent(
          `Referred by: ${data.referrerName || "Not provided"}\nPerson to introduce: ${data.refereeName}\nContact: ${data.refereeContact}${data.note ? `\n\nNote: ${data.note}` : ""}`
        );
        window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        track("referral_submitted", { channel: "form" });
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="refer" className="relative overflow-hidden bg-[#030303] py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a86c]/[0.04] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal blur={false}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">Pay it forward</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-6 text-[clamp(2.2rem,5vw,4rem)] font-light leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Know someone carrying
            <br />
            <em className="font-medium text-[#c9a86c]">what you used to carry?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.12} blur={false}>
          <p className="measure mx-auto mt-6 text-base font-light leading-relaxed text-white/60">
            Most people who find their way here come through someone who&apos;s already done the
            work. If a name comes to mind, sending it their way costs you nothing more than a
            two-line message.
          </p>
        </Reveal>

        <Reveal delay={0.2} blur={false}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {canShare ? (
              <button
                onClick={handleNativeShare}
                className="rounded-full bg-[#c9a86c] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#0b0a08] transition-colors hover:bg-[#d8bd8a]"
              >
                Share Christina&apos;s work
              </button>
            ) : (
              <>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(SHARE_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("referral_submitted", { channel: "whatsapp_share" })}
                  className="rounded-full bg-[#c9a86c] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#0b0a08] transition-colors hover:bg-[#d8bd8a]"
                >
                  Share on WhatsApp
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent("Thought you'd want to know about Christina Steinhoff")}&body=${encodeURIComponent(SHARE_MESSAGE)}`}
                  onClick={() => track("referral_submitted", { channel: "email_share" })}
                  className="rounded-full border border-white/15 px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:border-[#c9a86c]/50 hover:text-[#d8bd8a]"
                >
                  Share by email
                </a>
              </>
            )}
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-[12px] uppercase tracking-[0.2em] text-white/50 underline underline-offset-4 transition-colors hover:text-white"
            >
              {open ? "Hide the form" : "Prefer I reach out directly?"}
            </button>
          </div>
        </Reveal>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-10 max-w-md text-left"
          >
            {status === "success" ? (
              <div className="rounded-2xl border border-[#c9a86c]/20 bg-white/[0.02] p-6 text-center">
                <p className="font-light text-white">Thank you 💛 Christina will take it from here, gently.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/45">Your name (optional)</label>
                  <input name="referrerName" placeholder="So Christina knows who to thank" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Their name <span className="text-[#c9a86c]">*</span>
                  </label>
                  <input name="refereeName" required placeholder="Who should she reach out to?" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/45">
                    Their email or number <span className="text-[#c9a86c]">*</span>
                  </label>
                  <input name="refereeContact" required placeholder="So Christina can reach out gently" className={inputClass} />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/45">Anything worth knowing? (optional)</label>
                  <textarea name="note" rows={3} placeholder="A little context helps" className={`${inputClass} resize-none`} />
                </div>
                {status === "error" && (
                  <p className="text-xs text-red-400" role="alert">
                    Something went wrong. Please email {SITE.email} directly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-[#c9a86c] py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#0b0a08] transition-colors hover:bg-[#d8bd8a] disabled:opacity-50"
                >
                  {status === "loading" ? "Sending…" : "Introduce them"}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
