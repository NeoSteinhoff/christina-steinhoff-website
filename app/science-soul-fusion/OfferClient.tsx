"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { GoldButton } from "@/components/ui/GoldButton";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { APPLY_URL } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const forWho = [
  "You're successful by every external measure — the role, the revenue, the team — and something underneath it still doesn't add up.",
  "You've already done therapy, coaching, or the reading. You understand the pattern intellectually. It hasn't changed.",
  "You're running on vigilance and overwork to sustain what you've built, and you know it isn't sustainable at this pace.",
  "You want to work privately and directly with Christina for 90 days — not in a group, not adjacent to the work, in it.",
];

const notForWho = [
  "You want a quick pep talk before a big presentation — this rewires a pattern, it doesn't paper over one.",
  "You're looking for group coaching or a lower-commitment format — that's a different offer, not this one.",
  "You're in acute crisis or need clinical or medical care — this is coaching, not therapy, and isn't the right first step.",
];

const phases = [
  {
    phase: "Map the Pattern",
    weeks: "Weeks 1–2",
    description:
      "One-to-one diagnostic work identifies the exact subconscious pattern running your success and what it's costing you — named precisely, not in the abstract.",
  },
  {
    phase: "Rewire at the Root",
    weeks: "Weeks 3–9",
    description:
      "Using Time Line Therapy®, master hypnosis, and NLP, you clear the root of the pattern and install the response you actually want running underneath your decisions.",
  },
  {
    phase: "Integrate Under Pressure",
    weeks: "Weeks 10–13",
    description:
      "The new pattern gets tested against your real week — real meetings, real decisions, real stakes — until it holds without you having to manage it.",
  },
];

export function OfferClient({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="bg-[#f7f1e7] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden bg-[#060606] px-6 pb-24 pt-40 flex items-center">
        <div className="pointer-events-none absolute -top-1/4 left-0 h-[700px] w-[700px] rounded-full bg-[#c9a86c]/[0.07] blur-[160px]" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a86c]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                Science + Soul Fusion™ · Private Mentorship
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="text-[clamp(2.4rem,5.5vw,4.4rem)] font-light leading-[1.08] text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              In 90 days, the pattern running your success{" "}
              <em className="font-medium text-[#c9a86c]">stops costing you.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="measure mt-8 text-lg font-light leading-relaxed text-white/65"
            >
              A private mentorship for high-achieving women who&apos;ve already won by every
              outside measure — and are done paying for it on the inside.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <GoldButton href={APPLY_URL} external={false}>Apply for a place</GoldButton>
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
                alt="Christina Steinhoff"
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The one outcome */}
      <section className="bg-[#f7f1e7] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/40" />
            <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">The One Outcome</span>
            <span className="h-px w-7 bg-[#c9a86c]/40" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-light leading-relaxed text-[#1c160e]/85"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            By the end of 90 days, you produce the same results — or better — without the
            vigilance, the overworking, or the quiet fear that has been driving them. The output
            stays. What it costs you stops.
          </motion.p>
        </div>
      </section>

      {/* For who / not for who */}
      <section className="bg-[#060606] py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,168,108,0.05),transparent)]" />
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-[#c9a86c]/25 bg-white/[0.03] p-8">
            <span className="text-[#c9a86c]/80 text-[10px] tracking-[0.35em] uppercase">This is for you if</span>
            <div className="mt-6 grid gap-4">
              {forWho.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#c9a86c] shrink-0" />
                  <span className="text-white/75 text-[15px] font-light leading-relaxed">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.015] p-8">
            <span className="text-white/40 text-[10px] tracking-[0.35em] uppercase">This isn&apos;t for you if</span>
            <div className="mt-6 grid gap-4">
              {notForWho.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                  <span className="text-white/50 text-[15px] font-light leading-relaxed">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#f7f1e7] py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">The 90 Days</span>
              <span className="h-px w-7 bg-[#c9a86c]/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[#1c160e]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              How it <em className="text-[#c9a86c]">works</em>
            </motion.h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-[#1c160e]/8 bg-white p-8"
              >
                <span
                  className="text-[36px] font-light leading-none text-[#c9a86c]/25 block mb-4"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  0{i + 1}
                </span>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#a8884e] mb-2">{p.weeks}</p>
                <h3 className="text-[#1c160e] text-xl font-light mb-3" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                  {p.phase}
                </h3>
                <p className="text-[#1c160e]/65 text-[15px] font-light leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scarcity */}
      <section className="bg-[#060606] py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-light italic leading-relaxed text-white/70"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            &ldquo;Christina works with 3 private mentorship clients per quarter, by design — the
            depth this requires doesn&apos;t scale past that. When those 3 places are filled, the
            next opening is next quarter.&rdquo;
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
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Questions</span>
              <span className="h-px w-7 bg-[#c9a86c]/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[#1c160e]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Before you <em className="text-[#c9a86c]">apply</em>
            </motion.h2>
          </div>
          <FAQAccordion items={faqs} />
          <div className="mt-8">
            <ScopeNote tone="cream" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#060606] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,108,0.08),transparent)]" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-white leading-tight mb-7"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            If this is the 90 days that
            <br />
            <em className="text-[#c9a86c]">finally changes it</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-base font-light max-w-md mx-auto leading-relaxed mb-10"
          >
            Apply for one of the 3 places below — Christina reviews every application personally.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex justify-center"
          >
            <GoldButton href={APPLY_URL} external={false}>Apply for a place</GoldButton>
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
