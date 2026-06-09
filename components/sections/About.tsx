"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const credentials = [
  "Certified NLP Practitioner",
  "Clinical Hypnotherapist",
  "Neuroscience-Based Coaching",
  "Spiritual Integration",
];

const stats = [
  { n: "500+", label: "Lives Transformed" },
  { n: "10+", label: "Years Experience" },
  { n: "3", label: "Continents" },
];

export function About() {
  return (
    <section id="about" className="bg-[#FAF5ED] py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#e8dfd3]">
              <Image
                src="https://christinasteinhoff.com/wp-content/uploads/2025/10/about-me.png"
                alt="Christina Steinhoff"
                fill
                className="object-cover object-top"
                unoptimized
              />
              {/* subtle gold left bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[#c9a86c]/50 to-transparent" />
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 left-4 right-4 bg-[#060606] rounded-2xl px-6 py-5 flex justify-between"
            >
              {stats.map((s) => (
                <div key={s.n} className="text-center">
                  <p className="text-2xl font-light text-[#c9a86c]"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    {s.n}
                  </p>
                  <p className="text-white/35 text-[10px] tracking-widest uppercase mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="pt-8 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">About Christina</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[#1c160e] leading-tight mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Success without peace<br />
              <em className="text-[#c9a86c]">is just expensive chaos.</em>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-[#1c160e]/55 font-light leading-relaxed text-[15px]"
            >
              <p>
                I work with the world's most driven executives and entrepreneurs — people who have built remarkable outer success, yet still feel the quiet ache of misalignment between achievement and fulfilment.
              </p>
              <p>
                My Science + Soul Fusion™ method combines the precision of neuroscience and NLP with somatic healing and spiritual alignment. The result isn't incremental improvement — it's a complete transformation in how you relate to yourself, your work, and success itself.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-9 grid grid-cols-2 gap-3"
            >
              {credentials.map((c) => (
                <div key={c} className="flex items-start gap-2.5">
                  <span className="mt-[6px] w-1 h-1 rounded-full bg-[#c9a86c] shrink-0" />
                  <span className="text-[#1c160e]/50 text-sm">{c}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
