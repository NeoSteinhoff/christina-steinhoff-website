"use client";
import { CALENDLY, SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contact" className="bg-[#060606] py-40 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,108,0.06),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(#c9a86c 1px,transparent 1px),linear-gradient(90deg,#c9a86c 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="h-px w-7 bg-[#c9a86c]/30" />
          <span className="text-[#c9a86c]/55 text-[10px] tracking-[0.45em] uppercase">Work With Christina</span>
          <span className="h-px w-7 bg-[#c9a86c]/30" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-light text-white leading-tight mb-8"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          The version of you
          <br />
          <em className="text-[#c9a86c]">waiting to emerge</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-base font-light max-w-md mx-auto leading-relaxed mb-4"
        >
          Begin with a complimentary 30-minute discovery call. Christina personally reviews every application — she works with a select number of clients at any one time to ensure complete dedication to your transformation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-white/20 text-xs tracking-widest uppercase mb-10"
        >
          Currently accepting new clients in Dubai & globally
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-[#c9a86c] text-[#060606] text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#d4b880] transition-colors"
          >
            Book Your Discovery Call
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="text-white/30 hover:text-white/55 text-[11px] tracking-[0.2em] uppercase transition-colors"
          >
            {SITE.email}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-white/35 text-xs"
        >
          Dubai Investment Park · UAE · Working globally across three continents
        </motion.p>
      </div>
    </section>
  );
}
