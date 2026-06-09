"use client";
import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const pillars = [
  {
    n: "01",
    title: "Neuroscience & Brain Rewiring",
    body: "Chronic stress, decision fatigue, and reactive behaviour are neurological patterns — not personality flaws. Using proven neuroscience protocols, we literally rewire the neural pathways driving your most limiting responses, creating lasting change at the biology level.",
  },
  {
    n: "02",
    title: "NLP & Clinical Hypnotherapy",
    body: "95% of your behaviour runs from the subconscious. NLP and clinical hypnotherapy bypass the critical mind to directly update the programs running your identity, confidence, and performance — often in a fraction of the time traditional therapy takes.",
  },
  {
    n: "03",
    title: "Somatic & Trauma Release",
    body: "Unresolved stress and trauma are stored in the body — not just the mind. Somatic release work dissolves the physiological charge of past experiences, freeing the nervous system from patterns that have silently shaped your decisions and relationships for years.",
  },
  {
    n: "04",
    title: "Soul Alignment & Purpose",
    body: "Strategy without soul is exhausting. When your goals, values, and authentic vision are genuinely aligned, high performance stops feeling like effort and starts feeling inevitable. This is the work that makes everything else sustainable.",
  },
];

export function Method() {
  return (
    <section id="method" className="bg-[#060606] py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,108,0.05),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
              Why most coaching
              <br />
              <em className="text-[#c9a86c]">doesn't last</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/35 font-light leading-relaxed text-[15px] md:pb-2"
          >
            Most coaching works at the conscious level — mindset, habits, strategy. But your results are driven 95% by subconscious programs, nervous system patterns, and unresolved emotional charge. Science + Soul Fusion™ is the only method that addresses all four layers simultaneously, which is why the transformations are permanent rather than temporary.
          </motion.p>
        </div>

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
            "The goal is not a better version of you.{" "}
            <span className="text-[#c9a86c] not-italic">It's the real one.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
