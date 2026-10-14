"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { GoldButton } from "@/components/ui/GoldButton";
import { CALENDLY } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const workshops = [
  {
    name: "Calm Under Pressure",
    tag: "90-Day Programme · Employees, HR & Leadership",
    body: "A 90-day organisational programme that brings nervous-system regulation and emotional mastery to the people carrying the pressure every day — built on Science + Soul Fusion™.",
    href: "/corporate-workshops/calm-under-pressure",
    image: "/images/christina-executive.webp",
  },
];

export function CorporateWorkshopsClient() {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background px-6 pb-24 pt-40">
        <div className="pointer-events-none absolute -top-1/4 left-1/2 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[160px]" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: EASE }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">For Organisations · Dubai & the UAE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="text-[clamp(2.6rem,5.8vw,4.6rem)] font-light leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Corporate <em className="font-medium text-gold">Workshops.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mx-auto mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/65"
          >
            Science + Soul Fusion™ — the methodology behind Christina&apos;s private coaching
            practice — adapted for teams. Structured, measured programmes that bring emotional
            mastery and nervous-system regulation to the people carrying organisational pressure
            every day.
          </motion.p>
        </div>
      </section>

      {/* Workshop cards */}
      <section className="bg-cream py-24 px-6 md:py-32">
        <div className="mx-auto max-w-5xl">
          {workshops.map((w, i) => (
            <motion.a
              key={w.name}
              href={w.href}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease: EASE }}
              className="group grid gap-8 overflow-hidden rounded-2xl border border-cream-text/10 bg-white p-3 transition-colors hover:border-gold/30 md:grid-cols-2 md:p-4"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl md:aspect-auto">
                <Image
                  src={w.image}
                  alt={w.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:px-6 md:py-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-deep/80">{w.tag}</span>
                <h2
                  className="mt-3 text-3xl font-light text-cream-text"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {w.name}
                </h2>
                <p className="mt-4 text-[15px] font-light leading-relaxed text-cream-text/70">{w.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-gold transition-all group-hover:gap-4">
                  Explore the programme <span>→</span>
                </span>
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 rounded-2xl border border-dashed border-cream-text/15 bg-white/40 px-8 py-10 text-center"
          >
            <p className="text-[15px] font-light leading-relaxed text-cream-text/60">
              Looking for something tailored to your organisation&apos;s specific challenge?
            </p>
            <div className="mt-5 flex justify-center">
              <GoldButton href={CALENDLY} variant="ghost">
                Talk to Christina
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
