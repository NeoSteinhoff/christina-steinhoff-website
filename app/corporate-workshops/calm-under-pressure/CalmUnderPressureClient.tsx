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
import { CALENDLY, SITE, STATS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { n: "90", label: "Days · one full programme arc" },
  { n: "30", label: "Employees · per core cohort" },
  { n: "3", label: "Levels · employees, HR, leadership" },
];

const signals = [
  "Pressure has become the team's default state, not an occasional spike.",
  "Focus and decision-making quality drop during demanding stretches.",
  "Communication gets sharper — or goes quiet — the moment things get hard.",
  "People are present but running on empty: exhausted, checked out, disconnected.",
  "Managers are absorbing pressure without the tools to regulate it, let alone model it.",
  "Wellbeing initiatives exist, but nothing is actually measured or followed through.",
  "HR is carrying the ask for ongoing, practical support largely alone.",
];

const levels = [
  {
    level: "Level 01",
    name: "Employees",
    body: "Practical group sessions where participants learn to recognise their own pressure patterns, then build simple nervous-system regulation, presence, and communication tools they can use mid-workday.",
    badge: null as string | null,
  },
  {
    level: "Level 02",
    name: "Human Resources",
    body: "Structured follow-up that tracks participation and clears real-world barriers to engagement — without HR ever accessing an individual employee's personal information.",
    badge: null as string | null,
  },
  {
    level: "Level 03",
    name: "Business Owner or Senior Leadership",
    body: "Focused sessions connecting the programme to what's actually happening at the organisational level — aggregated indicators, leadership patterns, and the practices that shape a calmer working culture.",
    badge: "Strategic Oversight",
  },
];

const timeline = [
  {
    stage: "Before the Programme",
    title: "Assessment & Design",
    pillar: "Where awareness begins",
    employees:
      "A confidential baseline survey — no sessions yet, just an honest read on how pressure is actually showing up day to day.",
    hr: "A scoping meeting to define the organisation's challenges, objectives, and the programme's boundaries together.",
    leadership:
      "Alignment on what “better” looks like for this organisation specifically, and the indicators that will track it.",
  },
  {
    stage: "Month One",
    title: "Settle & Understand",
    pillar: "Pillar 01 · Awareness & Pattern Recognition",
    employees:
      "Session 1 — naming the pattern: how each person's nervous system actually responds under pressure. Session 2 — grounding and presence tools that work inside a live, demanding workday.",
    hr: "Early attendance check-ins and a first read on where friction or hesitation is showing up across the cohort.",
    leadership:
      "A short briefing on early themes — what's surfacing, in aggregate, with no individual names attached.",
  },
  {
    stage: "Month Two",
    title: "Build Skills",
    pillar: "Pillars 02–03 · Subconscious Transformation & Emotional Mastery",
    employees:
      "Session 3 — tools to hold focus and manage energy through demanding stretches of the day. Session 4 — emotional awareness and clearer communication when pressure or disagreement shows up.",
    hr: "A review of attendance and engagement, troubleshooting anything getting in the way, and simple reminder tools for the wider team.",
    leadership:
      "A progress review against the agreed indicators, and a conversation about which leadership behaviours or working practices could better support the team.",
  },
  {
    stage: "Month Three",
    title: "Integrate & Continue",
    pillar: "Pillar 04 · Integration & Conscious Creation",
    employees:
      "Session 5 — turning the tools into habits: what sticks once the formal sessions end. Session 6 — a closing session and the final confidential survey.",
    hr: "A final handover: what changed, what to keep reinforcing, and how to keep measuring it going forward.",
    leadership:
      "A closing report connecting the three months to organisational indicators, plus a 90-day continuation plan so the change outlasts the programme.",
  },
];

const includes = [
  { n: "90", label: "A full 90-day programme arc." },
  { n: "30", label: "Up to 30 employees per core cohort." },
  { n: "6", label: "Six live employee sessions across three months." },
  { n: "90", label: "A 90-day continuation plan after completion." },
];

const checklist = [
  "An assessment and preparation meeting before launch.",
  "A confidential employee survey, before and after the programme.",
  "Employee sessions of 75–90 minutes.",
  "Three follow-up touchpoints with Human Resources.",
  "Three meetings with the business owner or senior leadership.",
  "Short tools, exercises, and recordings between sessions.",
  "One Science + Soul Fusion™ point of contact throughout.",
  "A closing report with aggregated results and recommendations.",
];

const notIncluded = [
  "Individual, one-on-one employee sessions (available separately by request).",
  "Medical or psychological treatment, consultation, or diagnosis.",
  "Any sharing of an individual employee's personal information with management.",
  "Additional cohorts beyond the agreed participant count.",
];

const boundaries = [
  "Survey participation is confidential, individual by individual.",
  "Leadership receives aggregated indicators and themes only — never individual results.",
  "No diagnosis is made, and no medical or psychological treatment is provided.",
  "Personal details are never shared without explicit consent, except where required by law.",
  "Where a need sits outside the programme's scope, the employee is encouraged to reach out to an appropriately licensed professional.",
];

const indicators = [
  "Self-reported shifts in workplace pressure, before and after.",
  "How consistently employees use the tools introduced.",
  "Attendance and participation across the cohort.",
  "The team's perception of communication and support.",
  "Participant ratings of each session's usefulness.",
  "The measurable change between the initial and closing survey.",
];

export function CalmUnderPressureClient({ faqs }: { faqs: FAQItem[] }) {
  const [activeStage, setActiveStage] = useState(0);
  const stage = timeline[activeStage];

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
                Corporate Workshops · A 90-Day Programme
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="text-[clamp(2.8rem,6.4vw,5.4rem)] font-light leading-[1.0] text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Calm Under <em className="font-medium text-gold">Pressure.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-6 text-sm uppercase tracking-[0.2em] text-gold/80"
            >
              A Science + Soul Fusion™ programme for teams
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
              className="measure mt-7 text-lg font-light leading-relaxed text-white/65"
            >
              A 90-day organisational programme built on Christina&apos;s Science + Soul Fusion™
              method — NLP, nervous-system regulation, and pattern-level change — adapted for
              teams. Employees learn tools they can use mid-workday; leadership gets a clearer,
              evidence-based picture of what&apos;s actually driving the pressure.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48, ease: EASE }}
              className="measure mt-4 text-[15px] font-light leading-relaxed text-white/50"
            >
              Delivered across Dubai and the UAE, in person or online, for organisations ready to
              treat workplace pressure as a pattern to understand — not just a symptom to manage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <GoldButton href={CALENDLY}>Book an Assessment Call</GoldButton>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[12px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
              >
                Ask on WhatsApp
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
                alt="Christina Steinhoff, creator of Calm Under Pressure"
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
              <span className="mt-2 block text-[12px] font-light text-cream-text/60">{s.label}</span>
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
              className="mt-5 text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              When pressure becomes <em className="font-medium text-gold-deep">the pattern, not the exception.</em>
            </motion.h2>
            <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-cream-text/65">
              Calm Under Pressure may be the right next step if your organisation is noticing:
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
                &ldquo;Calm Under Pressure doesn&apos;t start with a ready-made solution. It starts
                with understanding how pressure actually moves through your people — then building
                the pattern-level tools to change it.&rdquo;
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

      {/* The Structure */}
      <section className="bg-white py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">The Structure</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mt-5 max-w-xl text-[clamp(1.9rem,3.6vw,2.8rem)] font-light leading-[1.1] text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Three levels, <em className="font-medium text-gold-deep">one pattern of change.</em>
            </motion.h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {levels.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className={`relative flex flex-col rounded-2xl bg-cream p-8 ${
                  l.badge ? "ring-1 ring-gold" : "ring-1 ring-cream-text/10"
                }`}
              >
                {l.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-3.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink">
                    {l.badge}
                  </span>
                )}
                <span className="text-[9px] uppercase tracking-[0.35em] text-gold-deep/80">{l.level}</span>
                <h3
                  className="mt-2 text-2xl font-light text-cream-text"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {l.name}
                </h3>
                <p className="mt-4 text-[14.5px] font-light leading-relaxed text-cream-text/70">{l.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 90 Days — interactive timeline */}
      <section className="bg-cream py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">The 90 Days</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-5 text-[clamp(1.9rem,3.6vw,2.8rem)] font-light text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              How the programme <em className="font-medium text-gold-deep">works.</em>
            </motion.h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {timeline.map((t, i) => (
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
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold/70">{stage.pillar}</span>
              <h3
                className="mt-2 text-2xl font-light text-cream-text"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {stage.title}
              </h3>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-deep/70">With Employees</span>
                  <p className="mt-3 text-[14px] font-light leading-relaxed text-cream-text/70">{stage.employees}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-deep/70">With Human Resources</span>
                  <p className="mt-3 text-[14px] font-light leading-relaxed text-cream-text/70">{stage.hr}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-deep/70">
                    With the Business Owner / Senior Leadership
                  </span>
                  <p className="mt-3 text-[14px] font-light leading-relaxed text-cream-text/70">{stage.leadership}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* What the programme includes */}
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
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">The Programme</span>
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
                Every cohort is adapted to your organisation&apos;s size, working environment, and team needs.
              </p>
              <GoldButton href={CALENDLY} variant="ghost" className="mt-6">
                Book an Assessment Call
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

          {/* Scope + confidentiality */}
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
                What the core package does not include
              </h3>
              <ul className="mt-6 space-y-3.5">
                {notIncluded.map((n) => (
                  <li key={n} className="flex items-start gap-3 text-[14px] font-light leading-relaxed text-cream-text/70">
                    <span className="mt-0.5 text-cream-text/35">—</span>
                    {n}
                  </li>
                ))}
              </ul>
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
                Privacy & professional boundaries
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
              What the organisation <em className="font-medium text-gold-deep">can measure.</em>
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
            These indicators measure the participant experience. They are not a clinical or
            medical assessment, and they don&apos;t guarantee a specific business outcome.
          </p>
        </div>
      </section>

      {/* Led by Christina */}
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">Your Guide</span>
            <h2
              className="mt-5 text-[clamp(1.9rem,3.6vw,2.8rem)] font-light leading-[1.1] text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Led by <em className="font-medium text-gold-deep">Christina Steinhoff.</em>
            </h2>
            <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-cream-text/70">
              Christina Steinhoff brings Science + Soul Fusion™ — her private coaching methodology
              built on NLP, master hypnosis, and Time Line Therapy® — into the workplace. Calm
              Under Pressure is delivered in partnership with HR and leadership, so the programme
              reflects how your organisation actually works, not a generic template.
            </p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-cream-text/40">
              {STATS.years} {STATS.yearsLabel} · {STATS.clients} {STATS.clientsLabel} · {STATS.continents} {STATS.continentsLabel}
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
              Find answers to <em className="text-gold-deep">common questions.</em>
            </h2>
          </div>
          <FAQAccordion items={faqs} />
          <div className="mt-8">
            <ScopeNote tone="cream" />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative overflow-hidden bg-background py-28 px-6 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,108,0.08),transparent)]" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70">Begin With An Honest Read</span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-7 mt-5 text-3xl font-light leading-tight text-white md:text-5xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Is Calm Under Pressure <em className="text-gold">right for your team?</em>
          </motion.h2>
          <p className="mx-auto mb-10 max-w-md text-base font-light leading-relaxed text-white/60">
            Book a confidential assessment call to find out whether this is the right next step
            for your organisation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <GoldButton href={CALENDLY}>Book an Assessment Call</GoldButton>
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
            This programme is coaching, not medical treatment or psychological consultation.
          </p>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
