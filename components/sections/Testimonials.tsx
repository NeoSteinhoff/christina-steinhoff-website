"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "I'd burned out three times in five years. Therapy, meditation, the usual — nothing reached the root. Four sessions in, something structural shifted. Revenue is up since, but that's the least of what changed.",
    name: "Ahmed R.",
    role: "Founder & CEO",
    place: "Dubai",
    arc: "Burnout → Clarity",
  },
  {
    quote:
      "I was making decisions from fear dressed up as logic. Christina showed me my 'rational' thinking was a nervous system trying to stay safe. I lead from conviction now, and my team feels the difference.",
    name: "Layla M.",
    role: "Managing Partner",
    place: "Abu Dhabi",
    arc: "Fear → Conviction",
  },
  {
    quote:
      "Fifteen years in finance and every credential except peace of mind. The self-doubt I assumed was just how I'm wired dissolved. I made MD six months later — but mostly, I stopped waking at 3am.",
    name: "James T.",
    role: "Managing Director",
    place: "London",
    arc: "Self-doubt → Mastery",
  },
  {
    quote:
      "As a woman building in the Gulf, I was performing a strength I didn't always feel. Christina helped me stop performing and start embodying. Every relationship I have — work and home — changed because of it.",
    name: "Sara K.",
    role: "Entrepreneur",
    place: "Dubai",
    arc: "Performance → Presence",
  },
  {
    quote:
      "I'd spent a decade confusing hustle with high performance. She gave me a different internal gear — results without the cost to my health or marriage. The business has never been stronger, and I'm finally enjoying it.",
    name: "Daniel W.",
    role: "Tech Founder",
    place: "Dubai",
    arc: "Hustle → Harmony",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const t = testimonials[i];
  const go = (n: number) => setI((n + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#060606] py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.05] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">In their words</span>
            <h2
              className="mt-4 text-4xl font-light leading-[1.05] text-white md:text-6xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Not what they achieved.
              <br />
              <em className="font-medium text-[#c9a86c]">Who they became.</em>
            </h2>
          </div>
          <span className="hidden shrink-0 font-display text-sm tabular-nums text-white/35 md:block">
            {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="min-h-[300px] md:min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduce ? undefined : { opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="block text-6xl leading-none text-[#c9a86c]/30"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote
                className="-mt-4 text-2xl font-light leading-[1.4] text-white/85 md:text-[2rem]"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="text-sm font-medium text-white">{t.name}</span>
                <span className="h-3 w-px bg-white/20" aria-hidden />
                <span className="text-sm font-light text-white/55">
                  {t.role} · {t.place}
                </span>
                <span className="rounded-full border border-[#c9a86c]/25 px-3 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[#c9a86c]/70">
                  {t.arc}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls — proper 44px touch targets */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <button
            onClick={() => go(i - 1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/60 transition-colors hover:border-[#c9a86c]/50 hover:text-[#c9a86c]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => go(i + 1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/60 transition-colors hover:border-[#c9a86c]/50 hover:text-[#c9a86c]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="ml-2 flex flex-wrap gap-1.5">
            {testimonials.map((tt, idx) => (
              <button
                key={tt.name}
                onClick={() => setI(idx)}
                aria-label={`Show ${tt.name}'s story`}
                aria-current={idx === i}
                className={`rounded-full px-3.5 py-2 text-xs transition-colors ${
                  idx === i ? "bg-[#c9a86c]/12 text-[#c9a86c]" : "text-white/40 hover:text-white/70"
                }`}
              >
                {tt.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
