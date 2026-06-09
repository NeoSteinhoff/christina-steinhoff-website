"use client";
import { CALENDLY } from "@/lib/constants";
import { motion } from "framer-motion";



const steps = [
  {
    n: "01",
    title: "Discovery Call",
    body: "A complimentary 30-minute session to understand where you are, where you want to be, and whether we're the right fit to work together.",
  },
  {
    n: "02",
    title: "Bespoke Design",
    body: "I map your unique patterns — the subconscious programs, emotional triggers, and identity constructs creating your current reality. Then we build your tailored path forward.",
  },
  {
    n: "03",
    title: "Transformation",
    body: "Private sessions using Science + Soul Fusion™. Each session builds on the last, creating permanent shifts that compound over time.",
  },
];

export function Process() {
  return (
    <section className="bg-[#FAF5ED] py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Process</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[#1c160e] leading-tight mb-10 md:sticky md:top-32"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              How we<br />
              <em className="text-[#c9a86c]">work together</em>
            </motion.h2>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#060606] text-white text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-[#1a1410] transition-colors"
            >
              Book your free call
            </motion.a>
          </div>

          {/* Steps */}
          <div className="relative">
            <div className="absolute left-[26px] top-8 bottom-8 w-px bg-gradient-to-b from-[#c9a86c]/30 via-[#c9a86c]/10 to-transparent" />

            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex gap-7 pb-12 last:pb-0"
              >
                <div className="relative z-10 w-[52px] h-[52px] rounded-full border border-[#c9a86c]/20 bg-[#FAF5ED] flex items-center justify-center shrink-0">
                  <span className="text-[#c9a86c] text-xs font-light">{s.n}</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-[#1c160e] text-xl font-light mb-2.5"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    {s.title}
                  </h3>
                  <p className="text-[#1c160e]/65 font-light leading-relaxed text-base">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
