"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { CALENDLY, SITE } from "@/lib/constants";

const struggles = [
  "Self-doubt and imposter syndrome",
  "Emotional overwhelm and anxiety",
  "Burnout and exhaustion",
  "Fear of visibility or success",
  "Lack of confidence in leadership",
  "Balancing business and personal life",
  "Limiting subconscious beliefs",
  "Feeling disconnected from purpose",
];

const method = [
  {
    n: "01",
    title: "Mindset Reprogramming",
    body: "Neuroscience-based techniques that shift limiting beliefs at the subconscious level and build empowering thought patterns that hold under pressure.",
  },
  {
    n: "02",
    title: "Emotional Intelligence",
    body: "Greater self-awareness, emotional regulation, and communication — the foundation of confidence in every room you walk into.",
  },
  {
    n: "03",
    title: "Business & Leadership Alignment",
    body: "Grow your business or career while staying aligned with your values and wellbeing. Ambition without self-abandonment.",
  },
  {
    n: "04",
    title: "Confidence & Self-Worth",
    body: "Strengthen inner confidence and dissolve self-doubt — in the boardroom, in relationships, and in how you speak to yourself.",
  },
  {
    n: "05",
    title: "Conscious Growth",
    body: "Mindful leadership, emotional wellness, and purpose-driven success. Growth that nourishes instead of depletes.",
  },
  {
    n: "06",
    title: "Community & Connection",
    body: "Grow alongside like-minded women in a safe, supportive, judgement-free environment. You were never meant to do this alone.",
  },
];

const whoFor = [
  "Female entrepreneurs",
  "Women business owners",
  "Corporate professionals",
  "Women leaders & managers",
  "Creatives & freelancers",
  "Women new to personal development",
  "Women navigating transitions",
  "Women recovering from burnout",
];

const outcomes = [
  "More confident",
  "Emotionally lighter",
  "Inspired and motivated",
  "Clearer about their goals",
  "More connected to themselves",
  "Empowered to take aligned action",
];

export function WorkshopClient({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="bg-[#FAF5ED] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#060606] pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(201,168,108,0.08),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="h-px w-10 bg-[#c9a86c]/30" />
            <span className="text-[#c9a86c]/60 text-[11px] tracking-[0.45em] uppercase font-light">
              Group Coaching for Women · Dubai
            </span>
            <span className="h-px w-10 bg-[#c9a86c]/30" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Empower. Evolve.
            <br />
            <em className="text-[#c9a86c]">Excel — together.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#c9a86c]/80 text-sm tracking-[0.2em] uppercase mb-8"
          >
            UnleashHER Potential™ — Christina&apos;s signature monthly workshop
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/70 text-lg font-light max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Success means more when you don&apos;t have to achieve it alone. A transformational
            group coaching workshop for ambitious women in Dubai — where personal growth meets
            business brilliance, and deep internal change meets external success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 bg-[#c9a86c] text-[#060606] text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#d4b880] transition-colors"
            >
              Reserve Your Place
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-[11px] tracking-[0.25em] uppercase transition-colors"
            >
              Ask a question on WhatsApp →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Silent struggles */}
      <section className="bg-[#FAF5ED] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">You Are Not Alone</span>
              <span className="h-px w-7 bg-[#c9a86c]/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[#1c160e] leading-tight max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What ambitious women
              <br />
              <em className="text-[#c9a86c]">carry silently</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-[#1c160e]/75 font-light leading-relaxed text-base max-w-xl mx-auto mt-6"
            >
              Building a business. Leading a team. Managing relationships, supporting family,
              maintaining composure — all at once. From the outside it looks effortless. On the
              inside, many women quietly experience:
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {struggles.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-xl border border-[#1c160e]/8 px-5 py-5 text-center"
              >
                <span className="text-[#1c160e]/75 text-[15px] font-light">{s}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-xl md:text-2xl font-light text-[#1c160e]/60 italic max-w-2xl mx-auto mt-14 leading-relaxed"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            "This is not motivation or networking. It is transformational coaching —{" "}
            <span className="text-[#c9a86c] not-italic">deep internal change, real external results."</span>
          </motion.p>
        </div>
      </section>

      {/* The UnleashHER Method */}
      <section className="bg-[#060606] py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(201,168,108,0.05),transparent)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/30" />
              <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">The UnleashHER Method™</span>
              <span className="h-px w-7 bg-[#c9a86c]/30" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What every workshop <em className="text-[#c9a86c]">includes</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-white/60 font-light leading-relaxed text-base max-w-2xl mx-auto mt-6"
            >
              Built on Christina&apos;s Science + Soul Fusion™ Method — combining neuroscience, NLP,
              emotional intelligence, and subconscious transformation in a supportive group
              environment. Most workshops address strategy. This one transforms the patterns
              underneath it.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {method.map((m, i) => (
              <motion.div
                key={m.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-8"
              >
                <span
                  className="text-[36px] font-light leading-none text-[#c9a86c]/20 block mb-4"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {m.n}
                </span>
                <h3 className="text-white text-lg font-light mb-3">{m.title}</h3>
                <p className="text-white/60 text-[15px] font-light leading-relaxed">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#FAF5ED] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-px w-7 bg-[#c9a86c]/40" />
                <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Who It&apos;s For</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-light text-[#1c160e] leading-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Every woman,
                <br />
                <em className="text-[#c9a86c]">every stage</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-[#1c160e]/75 font-light leading-relaxed text-base mb-8"
              >
                No previous coaching experience required. Whether you&apos;re starting your
                entrepreneurial journey, scaling a business, navigating a career change, or simply
                ready to rediscover yourself — the room is designed for you.
              </motion.p>
              <div className="flex flex-wrap gap-2.5">
                {whoFor.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="px-4 py-2 rounded-full border border-[#1c160e]/10 bg-white text-[#1c160e]/70 text-sm font-light"
                  >
                    {w}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl bg-[#060606] border border-[#c9a86c]/20 p-10"
            >
              <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase block mb-6">
                Women leave feeling
              </span>
              <ul className="grid gap-4 mb-8">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-3">
                    <span className="text-[#c9a86c] text-xs">✦</span>
                    <span className="text-white/75 text-lg font-light" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                      {o}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/50 text-sm font-light leading-relaxed">
                  Held <span className="text-[#c9a86c]">monthly in Dubai</span> — ongoing growth,
                  accountability, and a community of women who understand the journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAF5ED] pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Workshop FAQ</span>
              <span className="h-px w-7 bg-[#c9a86c]/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-[#1c160e]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Before you <em className="text-[#c9a86c]">join</em>
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
            Transformation begins the moment
            <br />
            <em className="text-[#c9a86c]">you prioritise yourself</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/60 text-base font-light max-w-md mx-auto leading-relaxed mb-10"
          >
            Join the next UnleashHER Potential™ workshop in Dubai. Spaces are intentionally
            limited to keep the room intimate and the work deep.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-[#c9a86c] text-[#060606] text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#d4b880] transition-colors"
            >
              Reserve Your Place
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-white/40 text-sm font-light"
          >
            Looking for deeper one-to-one transformation?{" "}
            <a href="/#services" className="text-[#c9a86c]/80 hover:text-[#c9a86c] underline underline-offset-4 transition-colors">
              Explore Christina&apos;s bespoke private programmes
            </a>
          </motion.p>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
