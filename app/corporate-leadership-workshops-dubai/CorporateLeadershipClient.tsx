"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { GoldButton } from "@/components/ui/GoldButton";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { CALENDLY, CTA_LABEL, SITE, STATS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { n: "4", label: "Core themes · communication, connection, confidence, limiting beliefs" },
  { n: "3", label: "Formats · corporate event, leadership workshop, team day" },
  { n: "4", label: "Stages · from your brief to what happens next" },
];

const signals = [
  "Meetings where the same few people speak and everyone else stays politely quiet.",
  "Capable individuals working in silos, or cross-cultural misreads that go unspoken.",
  "New or newly promoted leaders second-guessing themselves, and strong people holding back ideas.",
  "“That’s just how I am” and “I’m not a natural presenter” stories repeated across the team.",
  "Workload peaks, with early signs of overload: cynicism, exhaustion, a shorter fuse.",
  "A training or team day that felt good at the time but changed little afterwards.",
  "Managers promoted for technical skill who were never supported with the human side of leading.",
];

const formats = [
  {
    label: "Conferences · town halls · wellbeing weeks",
    name: "Corporate Event",
    body: "A talk with an interactive session for a conference, town hall, wellbeing week or leadership summit. Participants leave with practical tools for communication, connection and confidence, and a clearer view of the beliefs that hold people back.",
  },
  {
    label: "For leadership teams & managers",
    name: "Leadership Workshop",
    body: "A single session or a short series on communication, confidence and limiting beliefs. Participants examine the automatic patterns behind how they lead under pressure, and practise alternatives with each other.",
  },
  {
    label: "On-site or offsite",
    name: "Team-Building Event",
    body: "A facilitated, conversation-based alternative to an activity-only day. Teams work on trust, listening and connection through guided exercises and reflection, followed by a debrief. It can also sit alongside an activity day if you want both.",
  },
];

const stages = [
  {
    stage: "Stage 01",
    title: "Brief",
    tag: "Listening first",
    participants:
      "Participants may answer a few short, anonymous questions about what is working — and what is hard — in how the team communicates.",
    hr: "A discovery call on goals, audience, group size, timing and constraints, including anything that is off-limits.",
    leadership:
      "Agreement on what “better” looks like in observable behaviours, and on what the sponsor will — and will not — see.",
  },
  {
    stage: "Stage 02",
    title: "Design",
    tag: "Built from your brief",
    participants:
      "Their input shapes the content, so the examples and exercises feel like their own workplace, not a template.",
    hr: "A written proposal naming the themes chosen from the four, the format, length, group size, venue, language, and whether a stress and burnout module with Yulia is included.",
    leadership: "Sign-off on the proposal, with optional short conversations with leaders beforehand.",
  },
  {
    stage: "Stage 03",
    title: "Deliver",
    tag: "In the room",
    participants:
      "An interactive, conversation-based session with practical tools and reflection. No one is asked to share anything personal.",
    hr: "Logistics are handled with your team, and HR or L&D are welcome to attend.",
    leadership: "Leaders take part as participants, or in a dedicated leaders’ block, as agreed in the brief.",
  },
  {
    stage: "Stage 04",
    title: "Embed",
    tag: "After the day",
    participants:
      "Short practice tasks and, where agreed, a follow-up circle to keep the tools in use.",
    hr: "An anonymised summary of themes and session feedback.",
    leadership:
      "A debrief, plus suggestions for reinforcing the practice in meeting norms and everyday habits.",
  },
];

const includes = [
  { n: "4", label: "Core themes: communication, connection, confidence and limiting beliefs." },
  { n: "3", label: "Formats: corporate event, leadership workshop and team-building event." },
  { n: "4", label: "Stages, from your brief to what happens after the day." },
  { n: "1", label: "Named point of contact from first call to follow-up." },
];

const checklist = [
  "A discovery call and a written, tailored proposal.",
  "An agenda built from the four themes to match your brief.",
  "Live facilitation by Christina, with Yulia Sidova for stress-management and burnout modules.",
  "Practical tools and exercises participants keep.",
  "Short pre-session questions and post-session feedback, reported in anonymised aggregate.",
  "A defined step to keep the practice going after the day.",
  "A leadership debrief.",
  "One point of contact throughout.",
];

const notIncluded = [
  "Therapy, counselling, or psychological or medical treatment, assessment or diagnosis.",
  "Identifying or screening individuals — for example, anyone who may be burned out — for the employer.",
  "Individual one-to-one coaching (available separately, by request).",
  "Crisis or emergency support.",
  "Guaranteed outcomes, or anything outside the agreed brief.",
];

const boundaries = [
  "Feedback is collected anonymously and shared only in aggregate.",
  "No individual disclosures go to HR or management.",
  "Participation and sharing are always voluntary.",
  "Where someone needs clinical support, they are signposted to an appropriately licensed professional — and to emergency services in an emergency.",
  "Personal details are never shared without consent, except where required by law.",
];

const indicators = [
  "Participants’ self-rated confidence in speaking up, before and after.",
  "How clearly the team rates its own communication (short pulse questions).",
  "Felt connection and trust within the team (pulse questions).",
  "Participant ratings of how useful each session was.",
  "How many participants report using the tools at a 30-day check-in, where follow-up is included.",
  "Leadership’s own observations of changes in meetings and conversations, noted in the debrief.",
];

export function CorporateLeadershipClient({ faqs }: { faqs: FAQItem[] }) {
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden bg-background px-6 pb-24 pt-40 flex items-center">
        <div className="pointer-events-none absolute -top-1/4 left-0 h-[700px] w-[700px] rounded-full bg-gold/[0.07] blur-[160px]" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                Corporate Leadership Workshops · Dubai &amp; UAE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="text-[clamp(2.4rem,5.4vw,4.4rem)] font-light leading-[1.04] text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Skills are the visible part of leadership.{" "}
              <em className="font-medium text-gold">We work on the rest.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-6 text-sm uppercase tracking-[0.2em] text-gold/80"
            >
              Corporate events · Leadership workshops · Team-building days
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              className="measure mt-7 text-lg font-light leading-relaxed text-white/65"
            >
              Most teams already know what good communication looks like. What changes under
              pressure is the automatic response: the pause before speaking up, the story about how
              it will land, the habit of going quiet or sharp. These workshops are designed to help
              your people notice those patterns and practise something different.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48, ease: EASE }}
              className="measure mt-4 text-[15px] font-light leading-relaxed text-white/50"
            >
              Customised to your brief and led by Christina Steinhoff using Science + Soul
              Fusion™, around communication, connection, confidence and limiting beliefs — with
              stress-management and burnout-awareness sessions co-facilitated with Yulia Sidova.
              Coaching and education, not therapy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <GoldButton href={CALENDLY}>{CTA_LABEL}</GoldButton>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[12px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
              >
                Ask on WhatsApp
              </a>
            </motion.div>
            <p className="mt-4 text-xs font-light text-white/40">A tailored proposal follows the call.</p>
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
                alt="Christina Steinhoff, leadership workshop facilitator in Dubai"
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream border-b border-cream-text/8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease: EASE }}
              className="text-center"
            >
              <span
                className="block text-5xl font-light text-gold-deep"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {s.n}
              </span>
              <span className="mx-auto mt-2 block max-w-[16rem] text-[12px] font-light text-cream-text/60">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Is this for your organisation */}
      <section className="bg-cream py-24 px-6 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">
              Is This For Your Organisation
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-5 text-[clamp(1.9rem,3.8vw,2.9rem)] font-light leading-[1.1] text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Knowing what good looks like is rarely the problem.{" "}
              <em className="font-medium text-gold-deep">Doing it in the moment is.</em>
            </motion.h2>
            <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-cream-text/65">
              These workshops may be the right next step if you are noticing:
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 rounded-2xl border border-gold/20 bg-gold/[0.06] px-7 py-6"
            >
              <p
                className="text-base font-light italic leading-relaxed text-cream-text/80"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                &ldquo;Teams rarely lack knowledge of what good communication looks like. What gets
                in the way is the moment itself — the pause before speaking up, and the story about
                what others will think.&rdquo;
              </p>
            </motion.div>
          </div>

          <ul className="space-y-4 border-l border-cream-text/10 pl-8">
            {signals.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-[15px] font-light leading-relaxed text-cream-text/70"
              >
                {s}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-white py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">Formats</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-5 max-w-xl text-[clamp(1.9rem,3.6vw,2.8rem)] font-light leading-[1.1] text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Three formats, <em className="font-medium text-gold-deep">built around your brief.</em>
            </motion.h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] font-light leading-relaxed text-cream-text/65">
              Each one works on the same four themes — communication, connection, confidence and the
              limiting beliefs beneath them — and is customised to your organisation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {formats.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="flex flex-col rounded-2xl bg-cream p-8 ring-1 ring-cream-text/10"
              >
                <span className="text-[9px] uppercase tracking-[0.3em] text-gold-deep/80">{f.label}</span>
                <h3
                  className="mt-2 text-2xl font-light text-cream-text"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {f.name}
                </h3>
                <p className="mt-4 text-[14.5px] font-light leading-relaxed text-cream-text/70">{f.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: EASE }}
            className="mt-6 rounded-2xl border border-gold/20 bg-gold/[0.06] px-8 py-7 md:px-10"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold-deep">In every format</span>
            <h3
              className="mt-3 text-xl font-light text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Stress management &amp; burnout awareness
            </h3>
            <p className="mt-3 max-w-3xl text-[14.5px] font-light leading-relaxed text-cream-text/70">
              Add a stress-management and burnout-awareness module to any workshop, co-facilitated
              with Yulia Sidova. It focuses on practical stress-management skills and early signs of
              overload. The WHO describes burn-out as an occupational phenomenon resulting from
              chronic workplace stress that has not been successfully managed — so the work is
              about how people and teams work, not about diagnosing individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works — interactive stages */}
      <section className="bg-cream py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">How It Works</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-5 text-[clamp(1.9rem,3.6vw,2.8rem)] font-light text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              How your workshop <em className="font-medium text-gold-deep">is built.</em>
            </motion.h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] font-light leading-relaxed text-cream-text/65">
              &ldquo;Customised&rdquo; should mean something you can see. This is what happens at each stage.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {stages.map((t, i) => (
              <button
                key={t.stage}
                onClick={() => setActiveStage(i)}
                className={`rounded-full border px-5 py-3 text-left transition-all duration-300 ${
                  activeStage === i
                    ? "border-gold/40 bg-gold/10"
                    : "border-cream-text/10 bg-white/60 hover:border-cream-text/20"
                }`}
              >
                <span className="block text-[9px] uppercase tracking-[0.3em] text-gold-deep/70">{t.stage}</span>
                <span className={`text-sm font-light ${activeStage === i ? "text-cream-text" : "text-cream-text/60"}`}>
                  {t.title}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-cream-text/10 bg-white p-8 md:p-10"
            >
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold/70">{stage.tag}</span>
              <h3
                className="mt-2 text-2xl font-light text-cream-text"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {stage.title}
              </h3>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-deep/70">Participants</span>
                  <p className="mt-3 text-[14px] font-light leading-relaxed text-cream-text/70">{stage.participants}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-deep/70">HR &amp; L&amp;D</span>
                  <p className="mt-3 text-[14px] font-light leading-relaxed text-cream-text/70">{stage.hr}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-deep/70">
                    Leadership &amp; sponsor
                  </span>
                  <p className="mt-3 text-[14px] font-light leading-relaxed text-cream-text/70">{stage.leadership}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* What it includes + scope */}
      <section className="bg-white py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: EASE }}
              className="rounded-2xl border border-gold/20 bg-gold/[0.06] p-8 md:p-10"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">The Workshops</span>
              <h2
                className="mt-4 text-3xl font-light leading-tight text-cream-text"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                What it includes
              </h2>
              <div className="mt-8 space-y-6">
                {includes.map((it) => (
                  <div key={it.label} className="flex items-baseline gap-5 border-t border-cream-text/10 pt-5 first:border-0 first:pt-0">
                    <span
                      className="text-4xl font-light text-gold-deep"
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                    >
                      {it.n}
                    </span>
                    <span className="text-[14.5px] font-light text-cream-text/75">{it.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-[13.5px] font-light leading-relaxed text-cream-text/60">
                Every workshop is customised to your organisation&apos;s goals, team and working environment.
              </p>
              <GoldButton href={CALENDLY} variant="ghost" className="mt-6">
                {CTA_LABEL}
              </GoldButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, ease: EASE }}
              className="rounded-2xl border border-cream-text/10 bg-cream p-8 md:p-10"
            >
              <ul className="space-y-4">
                {checklist.map((c) => (
                  <li key={c} className="flex items-start gap-3 border-t border-cream-text/8 pt-4 first:border-0 first:pt-0">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span className="text-[14px] font-light leading-relaxed text-cream-text/75">{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-cream-text/10 bg-cream p-8 md:p-10"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">Scope</span>
              <h3
                className="mt-4 text-xl font-light text-cream-text"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                What the workshops do not include
              </h3>
              <ul className="mt-6 space-y-3.5">
                {notIncluded.map((n) => (
                  <li key={n} className="flex items-start gap-3 text-[14px] font-light leading-relaxed text-cream-text/70">
                    <span className="mt-0.5 text-cream-text/35">—</span>
                    {n}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-cream-text/10 pt-5 text-[13px] font-light leading-relaxed text-cream-text/55">
                These workshops are coaching and professional-development programmes. They are not
                psychotherapy, counselling or medical services, and they do not replace support from a
                licensed professional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-cream-text/10 bg-cream p-8 md:p-10"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">Confidentiality</span>
              <h3
                className="mt-4 text-xl font-light text-cream-text"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Privacy &amp; professional boundaries
              </h3>
              <ul className="mt-6 space-y-3.5">
                {boundaries.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] font-light leading-relaxed text-cream-text/70">
                    <span className="mt-0.5 text-gold">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Indicators */}
      <section className="bg-cream py-24 px-6 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">Indicators</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-5 text-[clamp(1.9rem,3.6vw,2.8rem)] font-light text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What we agree to <em className="font-medium text-gold-deep">look at together.</em>
            </motion.h2>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {indicators.map((ind, i) => (
              <motion.div
                key={ind}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 border-t border-cream-text/10 pt-5"
              >
                <span
                  className="text-sm font-light text-gold-deep/70"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[14.5px] font-light leading-relaxed text-cream-text/75">{ind}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center text-[13px] font-light leading-relaxed text-cream-text/50">
            These indicators capture participant feedback and observation. They are not a clinical
            assessment, and they don&apos;t guarantee a specific business outcome.
          </p>
        </div>
      </section>

      {/* Led by */}
      <section className="bg-white py-24 px-6 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]"
          >
            <Image
              src="/images/christina-workshop.webp"
              alt="Christina Steinhoff facilitating a workshop"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover object-top"
            />
          </motion.div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">Your Facilitators</span>
            <h2
              className="mt-5 text-[clamp(1.9rem,3.6vw,2.8rem)] font-light leading-[1.1] text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Led by <em className="font-medium text-gold-deep">Christina Steinhoff.</em>
            </h2>
            <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-cream-text/70">
              Christina is an Executive &amp; Emotional Mastery Coach based in Dubai and the creator of
              Science + Soul Fusion™ — her coaching methodology built on NLP, master hypnosis and Time
              Line Therapy®. Her work to date has been with private and executive clients; these
              workshops bring the same approach to teams, in a form designed for the group room.
            </p>
            <p className="mt-4 max-w-md text-[15px] font-light leading-relaxed text-cream-text/70">
              Stress-management and burnout-awareness sessions are co-facilitated with Yulia Sidova.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-cream-text/40">
              {STATS.years} {STATS.yearsLabel} · {STATS.clients} {STATS.clientsLabel} · {STATS.continents} {STATS.continentsLabel}
            </p>
            <p className="mt-3 max-w-md text-[12px] font-light leading-relaxed text-cream-text/50">
              Coaching and education — not psychotherapy or medical treatment.
            </p>
            <div className="mt-8">
              <GoldButton href="/#about" variant="ghost" external={false}>
                Meet Christina
              </GoldButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 px-6 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">Questions</span>
            <h2
              className="mt-5 text-4xl font-light text-cream-text md:text-5xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Before you <em className="text-gold-deep">get in touch.</em>
            </h2>
          </div>
          <FAQAccordion items={faqs} />
          <div className="mt-8">
            <ScopeNote tone="cream" />
          </div>
          <p className="mt-6 text-center text-[12px] font-light text-cream-text/50">
            Related:{" "}
            <a href="/executive-coaching-dubai" className="text-gold-deep underline underline-offset-4">
              Executive coaching in Dubai
            </a>
            {" · "}
            <a href="/science-soul-fusion" className="text-gold-deep underline underline-offset-4">
              Science + Soul Fusion™
            </a>
            {" · "}
            <a href="/faq" className="text-gold-deep underline underline-offset-4">
              All FAQs
            </a>
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative overflow-hidden bg-background py-28 px-6 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,108,0.08),transparent)]" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70">Start With A Conversation</span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-7 mt-5 text-3xl font-light leading-tight text-white md:text-5xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Tell us what you want your people <em className="text-gold">to do differently.</em>
          </motion.h2>
          <p className="mx-auto mb-10 max-w-md text-base font-light leading-relaxed text-white/60">
            Book a discovery call. We&apos;ll listen to your brief, and a tailored proposal follows.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <GoldButton href={CALENDLY}>{CTA_LABEL}</GoldButton>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[12px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="mt-10 text-xs font-light text-white/40">
            These workshops are coaching, not medical treatment or psychological consultation.
          </p>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
