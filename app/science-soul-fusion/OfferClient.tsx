"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { GoldButton } from "@/components/ui/GoldButton";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { APPLY_URL, CALENDLY, PROGRAMS, STATS, ZBOONI_LINKS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    n: "01",
    title: "Awareness & Pattern Recognition",
    body: "Gain deep insight into the thought patterns, behaviours, and unconscious drivers quietly running your decisions.",
  },
  {
    n: "02",
    title: "Subconscious Transformation",
    body: "Rewire limiting beliefs and create new, empowering internal patterns — using NLP, hypnosis, and Time Line Therapy®.",
  },
  {
    n: "03",
    title: "Emotional Mastery & Identity",
    body: "Strengthen emotional resilience, regulate your nervous system, and step into your next-level identity.",
  },
  {
    n: "04",
    title: "Integration & Conscious Creation",
    body: "Turn insight into action — practical tools, real-world integration, and the conscious, intentional creation of your life and leadership.",
  },
];

const results = [
  "Stronger Leadership Impact",
  "Deeper Confidence",
  "Emotional Mastery",
  "Stronger Relationships",
  "Clearer Decisions",
  "Sustainable Success",
];

const zbooniKeyByIndex = ["essential", "signature", "private"] as const;

const faqs: FAQItem[] = [
  {
    q: "Is Science + Soul Fusion™ therapy or psychotherapy?",
    a: "No. This is executive and emotional mastery coaching, built on NLP, master hypnosis, and Time Line Therapy®. It isn't psychotherapy, and it isn't a medical or clinical treatment. If you're managing a clinical condition, please work with a licensed clinician first — this isn't the right entry point for that.",
  },
  {
    q: "What's the actual difference between the three levels?",
    a: "The methodology is identical across all three — the difference is duration, continuity, and how much ongoing support you have while the change integrates into real life. Fusion Essential is the focused starting point; Fusion Signature adds six months of structured integration; Fusion Private is twelve months of high-touch mentorship for the deepest, most durable version of the work.",
  },
  {
    q: "How do I know which level is right for me?",
    a: "Most people know intuitively once they see the three side by side — but if you're unsure, a free discovery call is the fastest way to find out. Christina will tell you honestly which level fits where you actually are, not which one is easiest to sell.",
  },
  {
    q: "Can I start smaller and go deeper later?",
    a: "Yes. The Private Breakthrough Session is a low-commitment way to experience the approach firsthand. Many clients start there, then move into Fusion Essential, Signature, or Private once they've felt how the method works for them specifically.",
  },
  {
    q: "What does a typical session actually involve?",
    a: "Private sessions with Christina, combining NLP techniques, hypnotherapy, and nervous-system regulation work, plus between-session application to whatever your actual week throws at you — not homework for its own sake.",
  },
];

const jsonLd = (faqItems: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Science + Soul Fusion™",
      serviceType: "Executive & Emotional Mastery Coaching",
      provider: {
        "@type": "Person",
        name: "Christina Steinhoff",
        jobTitle: "Executive & Emotional Mastery Coach",
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Place", name: "Online / Worldwide" },
      ],
      description:
        "Science + Soul Fusion™ is Christina Steinhoff's private coaching methodology for ambitious individuals, combining NLP, master hypnosis, and Time Line Therapy® to create lasting transformation from the inside out.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
});

export function OfferClient() {
  return (
    <div className="bg-cream min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(faqs)) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden bg-background px-6 pb-24 pt-40 flex items-center">
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
                Private Coaching for Extraordinary Individuals
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="text-[clamp(2.6rem,5.8vw,4.6rem)] font-light leading-[1.05] text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Your next level of success begins{" "}
              <em className="font-medium text-gold">within.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="measure mt-8 text-lg font-light leading-relaxed text-white/65"
            >
              Greater impact. Stronger leadership. Clearer decisions. Emotional mastery. Stronger
              relationships. Sustainable success. Science + Soul Fusion™ is Christina&apos;s private
              coaching methodology for ambitious individuals pursuing the next level of personal and
              professional success — from the inside out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <GoldButton href="#investment" external={false}>Explore Private Coaching</GoldButton>
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
                alt="Christina Steinhoff, Executive & Emotional Mastery Coach"
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pull-quote + pain point */}
      <section className="bg-cream grid md:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden bg-background px-10 py-16 md:min-h-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_30%,rgba(201,168,108,0.08),transparent)]" />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-sm text-xl font-light italic leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            &ldquo;Extraordinary success is not just what you achieve, but how you experience it
            along the way.&rdquo;
          </motion.p>
        </div>
        <div className="px-8 py-16 md:px-14 md:py-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">
            For Ambitious, High-Achieving Individuals
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 text-[clamp(1.8rem,3.4vw,2.6rem)] font-light leading-[1.1] text-cream-text"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            You&apos;ve achieved so much. <em className="font-medium text-gold-deep">But you know there&apos;s more.</em>
          </motion.h2>
          <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-cream-text/70">
            You&apos;re successful, driven, and accomplished — and yet you may still find yourself
            seeking greater clarity, emotional balance, stronger relationships, deeper confidence,
            and more fulfilling success. You want to perform at the highest level without burnout,
            and create a life that feels as good on the inside as it looks on the outside.
          </p>
        </div>
      </section>

      {/* Hidden challenge + Science + Soul Fusion */}
      <section className="grid md:grid-cols-2">
        <div className="bg-cream px-8 py-16 md:px-14 md:py-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">The Hidden Challenge</span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 text-[clamp(1.7rem,3.2vw,2.4rem)] font-light leading-[1.15] text-cream-text"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Your conscious goals and subconscious patterns can be misaligned.
          </motion.h2>
          <div className="mt-6 space-y-4 text-[15px] font-light leading-relaxed text-cream-text/70">
            <p>
              You may have clear goals, but old subconscious patterns, emotional triggers, or
              limiting beliefs can quietly keep you stuck — affecting your decisions, relationships,
              confidence, and overall fulfilment.
            </p>
            <p>
              True, lasting transformation happens when you align what you consciously want with
              what your subconscious believes is possible.
            </p>
          </div>
        </div>
        <div className="relative min-h-[320px] overflow-hidden bg-background px-8 py-16 md:min-h-0 md:px-14 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_30%,rgba(201,168,108,0.07),transparent)]" />
          <div className="relative z-10">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70">A New Way Forward</span>
            <h2
              className="mt-5 text-[clamp(1.9rem,3.6vw,2.8rem)] font-light text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Science + Soul Fusion<span className="align-top text-base">™</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-white/65">
              A unique, integrated methodology that combines the precision of modern psychological
              science with the depth of inner work — helping you transform from within, so you can
              lead, perform, and create with greater ease, clarity, and fulfilment.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="relative overflow-hidden bg-background py-24 px-6 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-gold/[0.05] blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70">The Four Pillars</span>
              <h2
                className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] text-white"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                A deeper level of <em className="font-medium text-gold">transformation.</em>
              </h2>
            </div>
            <p className="self-end text-[15px] font-light leading-relaxed text-white/55 md:col-span-5">
              Science + Soul Fusion™ is built on four integrated pillars that work together to
              create lasting, measurable change — from the inside out.
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="border-t border-white/10 pt-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-[11px] text-gold">
                  {p.n}
                </span>
                <h3
                  className="mt-5 text-lg font-light italic text-white"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-[13.5px] font-light leading-relaxed text-white/55">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-cream py-24 px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end md:gap-14">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">The Results</span>
              <h2
                className="mt-5 max-w-md text-[clamp(2rem,4vw,3rem)] font-light leading-[1.08] text-cream-text"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                More than success. <em className="font-medium text-gold-deep">A more fulfilling way of life.</em>
              </h2>
            </div>
            <p className="max-w-md text-[15px] font-light leading-relaxed text-cream-text/65">
              Clients experience greater leadership impact, deeper confidence, emotional mastery,
              stronger relationships, and sustainable high performance — creating success that
              feels as good on the inside as it looks on the outside.
            </p>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="flex items-center gap-3 rounded-2xl border border-cream-text/8 bg-white px-6 py-5"
              >
                <span className="text-gold">✦</span>
                <span className="text-[14px] font-light text-cream-text/80">{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Christina */}
      <section className="bg-cream py-24 px-6 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]"
          >
            <Image
              src="/images/christina.jpg"
              alt="Christina Steinhoff, seated portrait"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              className="object-cover object-bottom"
            />
          </motion.div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-deep">Meet Christina</span>
            <h2
              className="mt-5 text-[clamp(1.9rem,3.6vw,2.8rem)] font-light leading-[1.1] text-cream-text"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              A blend of science, <em className="font-medium text-gold-deep">experience, and intuition.</em>
            </h2>
            <p className="mt-6 max-w-md text-[15px] font-light leading-relaxed text-cream-text/70">
              I&apos;m Christina Steinhoff, a transformational coach working with C-suite executives,
              founders, senior leaders, and ambitious individuals around the world. Through{" "}
              <strong className="font-medium text-cream-text">Science + Soul Fusion™</strong>, I combine
              evidence-based psychological methodologies with deep inner work to help you create
              meaningful, lasting transformation.
            </p>
            <blockquote
              className="mt-8 max-w-sm text-base font-light italic leading-relaxed text-cream-text/60"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              &ldquo;True success is not just about what you achieve, but who you become in the
              process.&rdquo;
              <footer className="mt-2 text-[11px] not-italic uppercase tracking-[0.2em] text-gold-deep/80">
                Christina Steinhoff
              </footer>
            </blockquote>
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-cream-text/40">
              {STATS.years} {STATS.yearsLabel} · {STATS.clients} {STATS.clientsLabel} · {STATS.continents} {STATS.continentsLabel}
            </p>
            <div className="mt-8">
              <GoldButton href="#method-pillars" variant="ghost" external={false}>My Approach</GoldButton>
            </div>
          </div>
        </div>
      </section>

      {/* The Investment */}
      <section id="investment" className="relative overflow-hidden bg-background py-24 px-6 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-14 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70">The Investment</span>
              <h2
                className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] text-white"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Three levels of <em className="font-medium text-gold">Science + Soul Fusion™.</em>
              </h2>
            </div>
            <p className="max-w-md text-[15px] font-light leading-relaxed text-white/55 md:justify-self-end md:text-right">
              {PROGRAMS.subtext}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PROGRAMS.tiers.map((tier, i) => {
              const zbooniHref = ZBOONI_LINKS[zbooniKeyByIndex[i]];
              const href = zbooniHref || APPLY_URL;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                  className={`relative flex flex-col rounded-2xl bg-cream p-8 ${
                    tier.featured
                      ? "ring-1 ring-gold md:-translate-y-3 md:shadow-[0_30px_60px_-20px_rgba(201,168,108,0.35)]"
                      : "ring-1 ring-cream-text/10"
                  }`}
                >
                  {"badge" in tier && tier.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-3.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-ink">
                      {tier.badge}
                    </span>
                  )}
                  <span className="text-[9px] uppercase tracking-[0.35em] text-gold-deep/80">{tier.level}</span>
                  <h3
                    className="mt-2 text-2xl font-light text-cream-text"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className="mt-3 text-3xl font-medium text-cream-text"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {tier.price}
                  </p>
                  <ul className="mt-7 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] font-light leading-snug text-cream-text/75">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <GoldButton href={href} variant="ghost" className="mt-8 self-start">
                    Learn more
                  </GoldButton>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-7 sm:flex-row"
          >
            <div>
              <p className="text-sm font-light text-white/60">{PROGRAMS.breakthrough.name}</p>
              <p className="mt-1 max-w-md text-[15px] font-light leading-relaxed text-white/50">
                {PROGRAMS.breakthrough.description}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <span
                className="text-2xl font-medium text-gold"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {PROGRAMS.breakthrough.price}
              </span>
              <GoldButton href={ZBOONI_LINKS.breakthrough || CALENDLY} variant="solid">
                Book now
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-24 px-6 md:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center justify-center gap-4"
            >
              <span className="h-px w-7 bg-gold/40" />
              <span className="text-[10px] uppercase tracking-[0.45em] text-gold-deep">Questions</span>
              <span className="h-px w-7 bg-gold/40" />
            </motion.div>
            <h2
              className="text-4xl font-light text-cream-text md:text-5xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Before you <em className="text-gold-deep">begin</em>
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
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70">A More Fulfilling Next Chapter</span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-7 mt-5 text-3xl font-light leading-tight text-white md:text-5xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Let&apos;s explore <em className="text-gold">what&apos;s possible.</em>
          </motion.h2>
          <p className="mx-auto mb-10 max-w-md text-base font-light leading-relaxed text-white/60">
            Book a confidential, no-obligation introductory consultation to explore your goals,
            challenges, and how Science + Soul Fusion™ can support your next level of success.
          </p>
          <div className="flex justify-center">
            <GoldButton href={APPLY_URL} external={false}>Book a Consultation</GoldButton>
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
