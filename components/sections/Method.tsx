"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const science = [
  "Neuro-Linguistic Programming (NLP)",
  "Master hypnosis",
  "Emotional regulation",
  "Subconscious pattern reprogramming",
];

const soul = ["Purpose", "Values", "Intuition", "Authentic leadership"];

export function Method() {
  const reduce = useReducedMotion();
  return (
    <section id="method" className="relative overflow-hidden bg-[#060606] py-28 md:py-40">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#a8884e]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Lead — asymmetric, no centered eyebrow */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">The method</span>
            <h2
              className="mt-5 text-[clamp(2.4rem,5vw,4.25rem)] font-light leading-[1.02] text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Why most coaching
              <br />
              <em className="font-medium text-[#c9a86c]">doesn&apos;t last</em>
            </h2>
          </div>
          <Reveal direction="left" className="md:col-span-5 md:pt-16">
            <p className="text-base font-light leading-relaxed text-white/65">
              Coaching usually works at the conscious level — mindset, habits, strategy. But results
              are driven far more by subconscious patterns and unresolved emotion. Science + Soul
              Fusion™ addresses both at once, which is why the change is permanent, not temporary.
            </p>
          </Reveal>
        </div>

        {/* Two pillars, fused */}
        <div className="mt-20 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-8"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">Science</span>
            <ul className="mt-5 space-y-3.5">
              {science.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a86c]" />
                  <span className="text-base font-light text-white/75">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <span
            className="mx-auto hidden font-display text-3xl font-light text-[#c9a86c]/40 md:block"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            aria-hidden
          >
            +
          </span>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/8 bg-white/[0.02] p-8"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">Soul</span>
            <ul className="mt-5 space-y-3.5">
              {soul.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#c9a86c]" />
                  <span className="text-base font-light text-white/75">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <Reveal className="mt-10 text-center" blur={false}>
          <a
            href="/emotional-healing-dubai"
            className="link-underline text-sm font-light text-[#c9a86c]/80 hover:text-[#c9a86c] transition-colors"
          >
            More on emotional healing coaching →
          </a>
        </Reveal>

        <Reveal className="mt-16 text-center" blur={false}>
          <p
            className="mx-auto max-w-2xl text-2xl font-light italic leading-relaxed text-white/55 md:text-3xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            &ldquo;The goal isn&apos;t a better version of you.{" "}
            <span className="not-italic text-[#c9a86c]">It&apos;s the real one.&rdquo;</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
