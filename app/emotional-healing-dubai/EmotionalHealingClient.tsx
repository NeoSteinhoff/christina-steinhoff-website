"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { GoldButton } from "@/components/ui/GoldButton";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { CALENDLY, SITE } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const patterns = [
  "Emotionally exhausted, even when nothing's 'wrong'",
  "Reactive in moments you wish you weren't",
  "Carrying stress the body never fully releases",
  "Numb or disconnected from people you love",
  "Old patterns resurfacing in new relationships",
  "Successful outside, unsettled inside",
];

const modalities = [
  {
    n: "01",
    title: "Somatic release",
    body: "Stress and emotional charge live in the body, not just the mind. Somatic work discharges what talking alone often can't reach.",
  },
  {
    n: "02",
    title: "NLP",
    body: "Neuro-Linguistic Programming re-patterns the language and imagery your mind runs on, interrupting automatic emotional reactions at the source.",
  },
  {
    n: "03",
    title: "Advanced conversational hypnotherapy",
    body: "Works directly with the subconscious, where most emotional patterns were first encoded — often faster than conscious-only approaches.",
  },
  {
    n: "04",
    title: "Nervous system regulation",
    body: "Practical tools to calm a dysregulated nervous system, so you respond from choice rather than old, automatic survival patterns.",
  },
];

export function EmotionalHealingClient({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="bg-[#f7f1e7] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] overflow-hidden bg-[#060606] px-6 pb-20 pt-40 flex items-center">
        <div className="pointer-events-none absolute -top-1/4 right-0 h-[700px] w-[700px] rounded-full bg-[#c9a86c]/[0.07] blur-[160px]" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a86c]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">Emotional Healing Coaching · Dubai</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="display text-white"
            >
              <span className="block text-[clamp(2.6rem,6vw,5.5rem)] font-[420] leading-[1.0] text-white/90">
                Emotional healing,
              </span>
              <span className="block text-[clamp(3rem,7.5vw,7rem)] font-[680] leading-[0.92] text-[#c9a86c]">
                coaching in Dubai.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="measure mt-8 text-lg font-light leading-relaxed text-white/65"
            >
              Somatic, NLP, and advanced conversational hypnotherapy-based coaching for the emotional patterns
              you've outgrown but can't quite shake. This is coaching, not clinical treatment —
              and Christina will always tell you clearly which one you need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <GoldButton href={CALENDLY}>Book a discovery call</GoldButton>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[12px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
              >
                Message on WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="hidden md:col-span-5 md:block"
          >
            <div className="relative aspect-[850/1040] w-full overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/christina-emotional.webp"
                alt="Christina Steinhoff, emotional healing coach in Dubai"
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coaching, not clinical treatment — prominent, right after the hero */}
      <section className="bg-[#f7f1e7] py-16 px-6 border-b border-[#1c160e]/8">
        <div className="max-w-3xl mx-auto">
          <ScopeNote tone="cream" className="text-sm" />
        </div>
      </section>

      {/* Direct answer */}
      <section className="bg-[#f7f1e7] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/40" />
            <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">What Emotional Healing Coaching Is</span>
            <span className="h-px w-7 bg-[#c9a86c]/40" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-light leading-relaxed text-[#1c160e]/85"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Emotional healing coaching helps you process and release stress, emotional patterns,
            and nervous-system reactivity that keep showing up in your work and relationships —
            using somatic release, NLP, and advanced conversational hypnotherapy to work below the surface, where
            willpower alone doesn't reach.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-[#1c160e]/65 font-light leading-relaxed text-base"
          >
            It is not a diagnosis, a treatment, or a replacement for licensed mental health care.
            It's coaching for people who are functioning, not in acute crisis, and ready to work
            through patterns that talk therapy alone hasn't shifted — often alongside, not instead
            of, clinical support where that's needed.
          </motion.p>
        </div>
      </section>

      {/* Patterns */}
      <section className="bg-[#060606] py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,168,108,0.05),transparent)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-px w-7 bg-[#c9a86c]/30" />
                <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">Recognise This?</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Patterns that
                <br />
                <em className="text-[#c9a86c]">outlast willpower</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-white/65 font-light leading-relaxed text-base"
              >
                These aren&apos;t signs something is wrong with you. They&apos;re signs the pattern
                is stored somewhere talking alone hasn&apos;t reached yet.
              </motion.p>
            </div>

            <div className="grid gap-3">
              {patterns.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.03] px-6 py-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86c] shrink-0" />
                  <span className="text-white/75 text-base font-light">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="bg-[#f7f1e7] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">The Method</span>
              <span className="h-px w-7 bg-[#c9a86c]/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[#1c160e]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Four ways in, <em className="text-[#c9a86c]">one goal</em>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modalities.map((m, i) => (
              <motion.div
                key={m.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-[#1c160e]/8 bg-white p-7"
              >
                <span
                  className="text-[32px] font-light leading-none text-[#c9a86c]/25 block mb-3"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {m.n}
                </span>
                <h3 className="text-xl font-light text-[#1c160e] mb-2.5" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                  {m.title}
                </h3>
                <p className="text-[#1c160e]/70 text-[15px] font-light leading-relaxed">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to seek licensed support instead */}
      <section className="bg-[#060606] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/30" />
            <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">When To Seek Licensed Support Instead</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/65 font-light leading-relaxed text-base"
          >
            If you're navigating a mental health diagnosis, acute trauma, thoughts of self-harm, or
            a crisis, please reach out to a licensed psychologist, psychiatrist, or your local
            emergency services first. Christina is not a substitute for that care, and part of her
            practice is telling you honestly when coaching isn't the right tool — and helping you
            find one that is.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f7f1e7] py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Emotional Healing FAQ</span>
              <span className="h-px w-7 bg-[#c9a86c]/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[#1c160e]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Questions worth <em className="text-[#c9a86c]">asking</em>
            </motion.h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060606] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,108,0.06),transparent)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-white leading-tight mb-7"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Some patterns need
            <br />
            <em className="text-[#c9a86c]">more than time</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-base font-light max-w-md mx-auto leading-relaxed mb-10"
          >
            Start with a complimentary 30-minute call. Christina will help you understand what&apos;s
            actually going on — and whether coaching is the right next step.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex justify-center"
          >
            <GoldButton href={CALENDLY}>Book a discovery call</GoldButton>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-white/55 text-sm font-light"
          >
            Looking for something broader?{" "}
            <a href="/life-coach-dubai" className="text-[#c9a86c]/80 hover:text-[#c9a86c] underline underline-offset-4 transition-colors">
              Explore life coaching
            </a>{" "}
            · Leading a team?{" "}
            <a href="/executive-coaching-dubai" className="text-[#c9a86c]/80 hover:text-[#c9a86c] underline underline-offset-4 transition-colors">
              Explore executive coaching
            </a>
          </motion.p>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
