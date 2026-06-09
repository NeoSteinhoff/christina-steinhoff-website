"use client";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const pillars = [
  {
    n: "01",
    title: "Neuroscience",
    body: "Rewire the neural patterns driving reactive behaviour, decision fatigue, and chronic stress. We work at the biology level — changing how your brain actually fires.",
  },
  {
    n: "02",
    title: "NLP & Hypnotherapy",
    body: "Access the subconscious programs running your identity and performance. Reprogram limiting beliefs before they cost you another decade of results.",
  },
  {
    n: "03",
    title: "Somatic Release",
    body: "Trauma and tension live in the body, not just the mind. Emotional release work clears the physiological charge keeping you stuck in old cycles.",
  },
  {
    n: "04",
    title: "Soul Alignment",
    body: "Reconnect with your authentic vision and values. When strategy aligns with essence, you stop grinding and start flowing — and results amplify naturally.",
  },
];

export function Method() {
  return (
    <section id="method" className="bg-[#060606] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,108,0.05),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/30" />
              <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">The Method</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-light text-white leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Science + Soul<br />
              <em className="text-[#c9a86c]">Fusion™</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/35 font-light leading-relaxed text-[15px] md:pb-2"
          >
            Four integrated pillars that dissolve the gap between your highest ambitions and your deepest sense of peace. No surface-level tactics — only permanent transformation.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <SpotlightCard className="h-full">
                <div className="flex gap-6 h-full">
                  <span
                    className="text-[42px] font-light leading-none mt-1 shrink-0 text-[#c9a86c]/15"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-white text-lg font-light mb-3">{p.title}</h3>
                    <p className="text-white/35 text-sm font-light leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 border-t border-white/6 pt-14 text-center"
        >
          <p
            className="text-2xl md:text-3xl font-light text-white/50 italic max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            "Luxury is alignment. Power is presence.{" "}
            <span className="text-[#c9a86c] not-italic">Success is both."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
