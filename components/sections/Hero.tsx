"use client";
import { CALENDLY } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlowingStarsBackground } from "@/components/ui/GlowingStars";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060606]">
      <GlowingStarsBackground />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#c9a86c]/5 blur-[140px] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="h-px w-10 bg-[#c9a86c]/30" />
          <span className="text-[#c9a86c]/60 text-[11px] tracking-[0.45em] uppercase font-light">
            Dubai's Premier Life Mentor & Executive Coach
          </span>
          <span className="h-px w-10 bg-[#c9a86c]/30" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-[64px] md:text-[96px] font-light text-white leading-[1.02] tracking-tight mb-7"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          You built the life.
          <br />
          <em className="not-italic" style={{ color: "#c9a86c" }}>Now master it.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/70 text-lg font-light max-w-xl mx-auto leading-relaxed mb-12"
        >
          Private mentorship for executives and entrepreneurs in Dubai who have achieved remarkable success — and are ready to feel as good on the inside as it looks on the outside.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 bg-[#c9a86c] text-[#060606] text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#d4b880] transition-colors"
          >
            Book a Free Discovery Call
          </a>
          <a
            href="#method"
            className="text-white/60 hover:text-white/60 text-[11px] tracking-[0.25em] uppercase transition-colors"
          >
            Discover the method ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-24 flex items-center justify-center gap-1 flex-wrap"
        >
          <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase mr-4">As seen in</span>
          {["UAE Times", "Khaleej Times", "Impactpreneur"].map((p) => (
            <span key={p} className="text-white/40 text-[10px] tracking-[0.3em] uppercase px-4 border-r border-white/10 last:border-0">
              {p}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ scaleY: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-px h-10 bg-[#c9a86c]/40 mx-auto origin-top"
        />
      </motion.div>
    </div>
  );
}
