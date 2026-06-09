"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Christina's mentorship redefined success for me. I no longer chase results — I create from alignment. My business doubled, but more importantly, I came home to myself.",
    name: "Ahmed R.",
    role: "CEO, Dubai",
    arc: "Burnout → Balance",
  },
  {
    quote: "I was trapped in my own head, second-guessing every decision. After working with Christina, I lead from intuition. The creative clarity I have now is unlike anything I've experienced.",
    name: "Layla M.",
    role: "Creative Founder",
    arc: "Overthinking → Clarity",
  },
  {
    quote: "Fifteen years in finance and I was running on empty. Christina helped me dissolve the self-doubt that had silently limited my career for years. I was promoted within six months.",
    name: "James T.",
    role: "Finance Executive",
    arc: "Self-Doubt → Mastery",
  },
  {
    quote: "The pressure I was under was unsustainable. Through Christina's method I found a way to perform at the highest level while actually feeling present in my own life.",
    name: "Sara K.",
    role: "Wellness Entrepreneur",
    arc: "Pressure → Presence",
  },
  {
    quote: "I built my company on hustle. Christina helped me see that my greatest asset wasn't my work ethic — it was my aligned state. Everything changed from there.",
    name: "Daniel W.",
    role: "Tech Founder",
    arc: "Hustle → Harmony",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="bg-[#060606] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(201,168,108,0.05),transparent)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/30" />
            <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">Transformations</span>
            <span className="h-px w-7 bg-[#c9a86c]/30" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-white"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Real people. <em className="text-[#c9a86c]">Real results.</em>
          </motion.h2>
        </div>

        {/* Quote */}
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
              <span className="text-white/28 text-xs tracking-wide">{testimonials[active].role}</span>
              <span className="mt-2 px-3 py-0.5 rounded-full border border-[#c9a86c]/20 text-[#c9a86c]/50 text-[9px] tracking-widest uppercase">
                {testimonials[active].arc}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
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

        {/* Mini cards */}
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
