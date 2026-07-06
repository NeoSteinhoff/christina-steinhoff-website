"use client";
import { CALENDLY, STATS } from "@/lib/constants";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { GoldButton } from "@/components/ui/GoldButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const trust = [
  "Licensed Master NLP Practitioner",
  "Certified Master Hypnotist",
  `${STATS.clients} private clients`,
  "Dubai · Worldwide",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden bg-[#060606] pt-28 pb-16 md:pt-24"
    >
      {/* ambient depth */}
      <div className="pointer-events-none absolute -top-1/4 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.07] blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#a8884e]/[0.05] blur-[140px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100dvh-9rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        {/* Text column */}
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a86c]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">
              Executive &amp; Emotional Mastery Coach · Dubai
            </span>
          </motion.div>

          <h1 className="display text-white">
            <Line delay={0.05}>
              <span className="block text-[clamp(2.4rem,5.6vw,5rem)] font-[420] leading-[1.05] text-white/90">
                Executive coaching for
              </span>
            </Line>
            <Line delay={0.16}>
              <span className="block text-[clamp(2.7rem,7vw,6.5rem)] font-[680] leading-[1.0] text-[#c9a86c]">
                high-achieving women &amp; leaders.
              </span>
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="measure mt-8 text-lg font-light leading-relaxed text-white/65"
          >
            Helping ambitious executives, founders, and professionals achieve emotional mastery,
            resilient leadership, and sustainable success through the Science + Soul Fusion™ methodology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <GoldButton href={CALENDLY}>Book a discovery call</GoldButton>
            <a
              href="/#method"
              className="link-underline text-[12px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
            >
              How the method works
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-white/45"
          >
            {trust.map((t, i) => (
              <li key={t} className="flex items-center gap-5">
                {i > 0 && <span className="h-3 w-px bg-white/15" aria-hidden />}
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Portrait column */}
        <motion.div
          style={{ y: portraitY }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[850/1040] w-full max-w-sm lg:max-w-none">
            <Image
              src="/images/christina-hero-duotone.webp"
              alt="Christina Steinhoff, executive and emotional mastery coach in Dubai"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-contain object-bottom"
            />
          </div>

          {/* floating credential chip */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
            className="absolute -bottom-5 left-4 rounded-2xl border border-white/10 bg-[#0c0b0a]/90 px-5 py-3 backdrop-blur-xl"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c9a86c]/80">The method</p>
            <p className="font-display text-lg font-medium text-white">Science + Soul Fusion™</p>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 1 : [0.3, 0.9, 0.3] }}
        transition={reduce ? { duration: 0.5 } : { duration: 2.6, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        aria-hidden
      >
        <span className="block h-9 w-px origin-top bg-gradient-to-b from-[#c9a86c]/60 to-transparent" />
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <span className="block">{children}</span>;
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
