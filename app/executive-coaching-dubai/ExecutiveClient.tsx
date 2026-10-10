"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { RelatedReading } from "@/components/sections/RelatedReading";
import { APPLY_URL, SITE } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const struggles = [
  "Burnout and chronic stress",
  "Emotional exhaustion behind a composed exterior",
  "Decision fatigue and lack of clarity",
  "Self-doubt despite external success",
  "Leadership fatigue and pressure to perform",
  "A life that looks balanced but doesn't feel it",
];

const bridges = [
  ["Logic", "Intuition"],
  ["Performance", "Peace"],
  ["Strategy", "Self-awareness"],
  ["Ambition", "Emotional balance"],
  ["External success", "Inner fulfilment"],
];

const focusAreas = [
  {
    n: "01",
    title: "Leadership Clarity",
    body: "A deeper understanding of your leadership identity, communication patterns, and how you actually make decisions — so you can lead deliberately rather than reactively.",
  },
  {
    n: "02",
    title: "Emotional Intelligence",
    body: "Self-awareness, empathy, and emotional regulation under pressure. The single biggest differentiator between leaders who are followed and leaders who are merely obeyed.",
  },
  {
    n: "03",
    title: "Executive Presence",
    body: "Confidence, influence, and authentic communication that holds the room — built from genuine self-trust, not performance.",
  },
  {
    n: "04",
    title: "Burnout Recovery",
    body: "A structured path out of chronic stress and exhaustion into sustainable energy. Not a holiday — a rewiring of the patterns that created the burnout.",
  },
  {
    n: "05",
    title: "Purpose-Driven Leadership",
    body: "Reconnecting professional success with meaning. When your leadership is aligned with your values, performance stops costing you and starts feeding you.",
  },
];

const whoFor = [
  "CEOs & founders",
  "Corporate executives",
  "Senior management",
  "Entrepreneurs & business owners",
  "Female leaders & executives",
  "Emerging leaders",
  "Leaders in transition",
];

const outcomes = [
  "Greater mental clarity and focus",
  "Stronger leadership presence",
  "Confident, aligned decision-making",
  "Reduced stress and burnout",
  "Better communication and relationships",
  "Sustainable high performance",
  "Work-life balance that actually holds",
  "Alignment with values and purpose",
];

export function ExecutiveClient({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="bg-[cream] min-h-screen">
      <Navbar />

      {/* Hero — editorial, left-aligned (distinct from the homepage & workshop heroes) */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[background] px-6 pb-24 pt-40 flex items-center">
        <div className="pointer-events-none absolute -top-1/4 right-0 h-[700px] w-[700px] rounded-full bg-[gold]/[0.07] blur-[160px]" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[gold]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">Executive Coaching · Dubai &amp; UAE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="display text-white"
            >
              <span className="block text-[clamp(2.6rem,6vw,5.5rem)] font-[420] leading-[1.0] text-white/90">
                Lead with clarity.
              </span>
              <span className="block text-[clamp(3rem,8vw,8rem)] font-[680] leading-[0.92] text-[gold]">
                Carry less.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="measure mt-8 text-lg font-light leading-relaxed text-white/65"
            >
              For CEOs, founders, and senior leaders in Dubai who carry success without truly
              enjoying it. Christina rebuilds leadership from the inside out — clarity, emotional
              intelligence, and high performance that doesn&apos;t cost you the burnout.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <GoldButton href={APPLY_URL} external={false}>Book a discovery call</GoldButton>
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
                src="/images/christina-executive.webp"
                alt="Christina Steinhoff, executive coach in Dubai"
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The hidden weight */}
      <section className="bg-[cream] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-px w-7 bg-[gold]/40" />
                <span className="text-[gold]/70 text-[10px] tracking-[0.45em] uppercase">The Reality</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light text-[cream-text] leading-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                The hidden weight
                <br />
                <em className="text-[gold]">of leadership</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-[cream-text]/75 font-light leading-relaxed text-base"
              >
                Dubai attracts ambitious leaders from around the world — and asks everything of them.
                Behind rapid growth, high expectations, and constant performance pressure, many
                executives silently struggle. Christina&apos;s coaching goes beyond conventional
                leadership strategy to the subconscious patterns actually shaping your behaviour,
                resilience, confidence, and wellbeing.
              </motion.p>
            </div>

            <div className="grid gap-3">
              {struggles.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-4 bg-white rounded-xl border border-[cream-text]/8 px-6 py-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[gold] shrink-0" />
                  <span className="text-[cream-text]/75 text-base font-light">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Method bridges */}
      <section className="bg-[background] py-28 px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,108,0.05),transparent)]" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-7 bg-[gold]/30" />
            <span className="text-[gold]/60 text-[10px] tracking-[0.45em] uppercase">Science + Soul Fusion™</span>
            <span className="h-px w-7 bg-[gold]/30" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Leadership from the <em className="text-[gold]">inside out</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 font-light leading-relaxed text-base max-w-2xl mx-auto mb-14"
          >
            Traditional executive coaching optimises the external — strategy, metrics, habits.
            Christina&apos;s Science + Soul Fusion™ Method integrates NLP-based coaching,
            NLP, hypnotherapy, emotional intelligence, and conscious leadership to transform the
            internal patterns driving it all: stress responses, imposter syndrome, overworking,
            fear of failure.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-14">
            {bridges.map(([a, b], i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-6 flex flex-col items-center gap-1.5"
              >
                <span className="text-white/70 text-sm font-light">{a}</span>
                <span
                  className="text-[gold] text-xl leading-none font-light"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  +
                </span>
                <span className="text-white/70 text-sm font-light">{b}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-light text-white/50 italic max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            "The goal is not to work harder —{" "}
            <span className="text-[gold] not-italic">it&apos;s to lead from a different place."</span>
          </motion.p>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-[cream] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-7 bg-[gold]/40" />
              <span className="text-[gold]/70 text-[10px] tracking-[0.45em] uppercase">What We Work On</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[cream-text] leading-tight max-w-2xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Five dimensions of
              <br />
              <em className="text-[gold]">executive transformation</em>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((f, i) => (
              <motion.div
                key={f.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-[cream-text]/8 bg-white p-8"
              >
                <span
                  className="text-[36px] font-light leading-none text-[gold]/25 block mb-4"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {f.n}
                </span>
                <h3
                  className="text-2xl font-light text-[cream-text] mb-3"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-[cream-text]/70 text-base font-light leading-relaxed">{f.body}</p>
              </motion.div>
            ))}

            <motion.a
              href={APPLY_URL}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-[gold]/30 bg-[background] p-8 flex flex-col justify-between group"
            >
              <p
                className="text-2xl font-light text-white leading-snug"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Every programme is <em className="text-[gold]">bespoke</em> — built around your
                goals, challenges, and stage of growth.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[gold] text-[11px] tracking-[0.25em] uppercase group-hover:gap-4 transition-all">
                Start with a discovery call <span>→</span>
              </span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Who it's for + outcomes */}
      <section className="bg-[background] py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(201,168,108,0.05),transparent)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-px w-7 bg-[gold]/30" />
                <span className="text-[gold]/60 text-[10px] tracking-[0.45em] uppercase">Who It&apos;s For</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-light text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Built for leaders who
                <br />
                <em className="text-[gold]">hold the weight</em>
              </motion.h2>
              <div className="flex flex-wrap gap-2.5">
                {whoFor.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/70 text-sm font-light"
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-px w-7 bg-[gold]/30" />
                <span className="text-[gold]/60 text-[10px] tracking-[0.45em] uppercase">What Changes</span>
              </motion.div>
              <SpotlightCard>
                <ul className="grid gap-3.5">
                  {outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-3">
                      <span className="text-[gold] text-xs">✦</span>
                      <span className="text-white/70 text-base font-light">{o}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[cream] py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-7 bg-[gold]/40" />
              <span className="text-[gold]/70 text-[10px] tracking-[0.45em] uppercase">Executive Coaching FAQ</span>
              <span className="h-px w-7 bg-[gold]/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[cream-text]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Questions leaders <em className="text-[gold]">ask</em>
            </motion.h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <RelatedReading pillarSlug="executive-coaching-dubai" />

      {/* CTA */}
      <section className="bg-[background] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,108,0.06),transparent)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-white leading-tight mb-7"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Leadership shouldn&apos;t cost you
            <br />
            <em className="text-[gold]">your wellbeing</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-base font-light max-w-md mx-auto leading-relaxed mb-10"
          >
            Begin with a complimentary 30-minute discovery call. No pressure, no pitch — just
            clarity on what&apos;s actually holding your leadership back.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex justify-center"
          >
            <GoldButton href={APPLY_URL} external={false}>Book a discovery call</GoldButton>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-white/55 text-sm font-light"
          >
            Leading a team rather than yourself?{" "}
            <a href="/group-workshop" className="text-[gold]/80 hover:text-[gold] underline underline-offset-4 transition-colors">
              Explore group workshops & leadership programmes
            </a>
          </motion.p>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
