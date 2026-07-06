"use client";
import { motion, useReducedMotion } from "framer-motion";

const outcomes = [
  "Better decision-making",
  "Greater emotional regulation",
  "Executive presence",
  "Stronger leadership",
  "Reduced burnout",
  "Improved relationships",
  "Sustainable high performance",
  "Greater confidence and clarity",
];

export function Outcomes() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-[#f7f1e7] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#a8884e]">What Changes</span>
          <h2
            className="mt-5 text-[clamp(2.2rem,4.5vw,3.75rem)] font-light leading-[1.05] text-[#1c160e]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Results you can point to,
            <br />
            <em className="font-medium text-[#a8884e]">not just feel</em>
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={o}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-[#1c160e]/8 bg-white p-6"
            >
              <span className="mb-3 block text-[#c9a86c]">✦</span>
              <p className="text-[15px] font-light leading-snug text-[#1c160e]/80">{o}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
