"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "I came to Christina after burning out for the third time in five years. I'd tried therapy, I'd tried meditation — nothing touched the root. Within four sessions something fundamentally shifted. My revenue has grown 40% since, but honestly, that's the least interesting part of what changed.",
    name: "Ahmed R.",
    role: "CEO · Dubai",
    arc: "Burnout → Clarity",
  },
  {
    quote: "I was making decisions from fear disguised as logic. Christina helped me see that my 'rational' thinking was actually my nervous system trying to stay safe. Now I lead from genuine conviction. The difference in how my team responds to me has been night and day.",
    name: "Layla M.",
    role: "Founder · UAE",
    arc: "Fear → Conviction",
  },
  {
    quote: "Fifteen years in finance and I had every credential except peace of mind. The self-doubt I thought was just 'how I was wired' dissolved completely. I was promoted to Managing Director six months after working with Christina. More importantly, I stopped waking up at 3am.",
    name: "James T.",
    role: "Managing Director · London",
    arc: "Self-Doubt → Mastery",
  },
  {
    quote: "As a female entrepreneur in the Gulf, I was performing strength I didn't always feel. Christina helped me stop performing and start embodying. My relationships — business and personal — transformed as a direct result. I finally stopped apologising for taking up space.",
    name: "Sara K.",
    role: "Entrepreneur · Abu Dhabi",
    arc: "Performance → Presence",
  },
  {
    quote: "I spent a decade confusing hustle with high performance. What Christina gave me was the ability to create results from a completely different internal state — one that doesn't cost me my health or my marriage. My business has never done better and for the first time I'm actually enjoying it.",
    name: "Daniel W.",
    role: "Tech Founder · Dubai",
    arc: "Hustle → Harmony",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="bg-[#060606] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(201,168,108,0.05),transparent)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/30" />
            <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">Client Transformations</span>
            <span className="h-px w-7 bg-[#c9a86c]/30" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Not what they achieved.{" "}
            <em className="text-[#c9a86c]">Who they became.</em>
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-12"
          >
            <p
              className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              "{testimonials[active].quote}"
            </p>
            <div className="mt-8 flex flex-col items-center gap-1">
              <span className="text-white/70 text-sm font-light">{testimonials[active].name}</span>
              <span className="text-white/45 text-xs tracking-wide">{testimonials[active].role}</span>
              <span className="mt-2 px-3 py-0.5 rounded-full border border-[#c9a86c]/20 text-[#c9a86c]/50 text-[9px] tracking-widest uppercase">
                {testimonials[active].arc}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-2.5 mb-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                active === i ? "w-6 h-[3px] bg-[#c9a86c]" : "w-[3px] h-[3px] bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-5 gap-2">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`p-3 rounded-xl border text-left transition-all duration-300 ${
                active === i
                  ? "border-[#c9a86c]/25 bg-[#c9a86c]/5"
                  : "border-white/5 bg-white/[0.02] hover:border-white/10"
              }`}
            >
              <span className="block text-[9px] text-[#c9a86c]/45 tracking-widest uppercase mb-1">{t.arc}</span>
              <span className="text-white/30 text-xs">{t.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
