"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { CALENDLY, SITE } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const struggles = [
  "Successful, and quietly unfulfilled",
  "Doing everything right, feeling nothing land",
  "Stuck between who you were and who you're becoming",
  "Confident at work, uncertain everywhere else",
  "Tired of advice that doesn't reach the root",
  "Ready — but not sure for what, exactly",
];

const bridges = [
  ["Who you were told to be", "Who you actually are"],
  ["Surviving", "Living"],
  ["Achievement", "Fulfilment"],
  ["Autopilot", "Intention"],
  ["Isolation", "Support"],
];

const credentials = [
  "Master NLP Practitioner",
  "Certified Master Hypnotist",
  "10+ years in practice",
  "400+ private clients",
];

const outcomes = [
  "Clarity on what you actually want, not what you're supposed to want",
  "Confidence that holds up outside work, not just inside it",
  "Fewer patterns running your reactions and relationships",
  "A felt sense of direction, not just a plan on paper",
  "Emotional steadiness under pressure",
  "A life that matches how capable you already are",
];

const whoFor = [
  "Founders & entrepreneurs",
  "Senior professionals",
  "Women in transition",
  "High achievers feeling stuck",
  "Expats rebuilding a life in Dubai",
  "Anyone starting over",
];

export function LifeCoachClient({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="bg-[#f7f1e7] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#060606] px-6 pb-24 pt-40 flex items-center">
        <div className="pointer-events-none absolute -top-1/4 left-0 h-[700px] w-[700px] rounded-full bg-[#c9a86c]/[0.07] blur-[160px]" />
        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a86c]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">Life Coaching · Dubai &amp; Worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="display text-white"
            >
              <span className="block text-[clamp(2.6rem,6vw,5.5rem)] font-[420] leading-[1.0] text-white/90">
                Private life coaching
              </span>
              <span className="block text-[clamp(3rem,8vw,7.5rem)] font-[680] leading-[0.92] text-[#c9a86c]">
                in the heart of Dubai.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="measure mt-8 text-lg font-light leading-relaxed text-white/65"
            >
              Christina Steinhoff is a certified life coach in Dubai working privately with people
              who look like they have it together — and quietly don&apos;t feel it. Her Science +
              Soul Fusion™ method reaches the patterns underneath the surface, so change actually holds.
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
        </div>
      </section>

      {/* Direct answer — what is a life coach */}
      <section className="bg-[#f7f1e7] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/40" />
            <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">What A Life Coach Actually Does</span>
            <span className="h-px w-7 bg-[#c9a86c]/40" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-light leading-relaxed text-[#1c160e]/85"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            A life coach helps you identify the beliefs, habits, and subconscious patterns keeping
            you stuck — then rebuild your direction, confidence, and daily choices around who you
            actually are, not who circumstance trained you to be. In Dubai&apos;s fast-moving,
            high-pressure environment, that work matters more than ever.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-[#1c160e]/65 font-light leading-relaxed text-base"
          >
            Unlike a therapist, a life coach isn&apos;t treating a diagnosis or processing clinical
            trauma — a good coach is forward-looking, working with your present-day patterns so
            your next chapter doesn&apos;t repeat your last one.
          </motion.p>
        </div>
      </section>

      {/* Struggles */}
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
                <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">Sound Familiar?</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Life looks fine
                <br />
                <em className="text-[#c9a86c]">from the outside</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-white/65 font-light leading-relaxed text-base"
              >
                Most people who come to Christina aren&apos;t in crisis. They&apos;re high-functioning,
                capable, and quietly aware that something underneath isn&apos;t working — even though,
                on paper, everything is.
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

      {/* Method bridges */}
      <section className="bg-[#f7f1e7] py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/40" />
            <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Science + Soul Fusion™</span>
            <span className="h-px w-7 bg-[#c9a86c]/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-[#1c160e] mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Change that reaches <em className="text-[#c9a86c]">the root</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#1c160e]/70 font-light leading-relaxed text-base max-w-2xl mx-auto mb-14"
          >
            Most life coaching stays at the level of goals and habits — useful, but shallow.
            Christina&apos;s method combines NLP-based coaching, NLP, and clinical
            hypnotherapy to work with the subconscious patterns actually driving your choices,
            so the shift isn&apos;t motivation. It&apos;s identity-level change.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-4">
            {bridges.map(([a, b], i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-[#1c160e]/8 bg-white px-4 py-6 flex flex-col items-center gap-1.5"
              >
                <span className="text-[#1c160e]/70 text-sm font-light">{a}</span>
                <span
                  className="text-[#c9a86c] text-xl leading-none font-light"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  →
                </span>
                <span className="text-[#1c160e] text-sm font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials / why Christina */}
      <section className="bg-[#060606] py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(201,168,108,0.06),transparent)]" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-px w-7 bg-[#c9a86c]/30" />
                <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">Why Christina</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-light text-white leading-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Credentialed.
                <br />
                <em className="text-[#c9a86c]">Not generic.</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-white/65 font-light leading-relaxed text-base"
              >
                Anyone can call themselves a life coach — Dubai has no shortage of them. Christina
                is a Licensed Master NLP Practitioner and Certified Master Hypnotist with 10+ years in
                practice and 400+ private clients, working across three continents. Her approach is
                structured, not motivational fluff.
              </motion.p>
            </div>

            <SpotlightCard>
              <ul className="grid gap-3.5">
                {credentials.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <span className="text-[#c9a86c] text-xs">✦</span>
                    <span className="text-white/80 text-base font-light">{c}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Outcomes + who it's for */}
      <section className="bg-[#f7f1e7] py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">What Changes</span>
            </motion.div>
            <div className="grid gap-3">
              {outcomes.map((o, i) => (
                <motion.div
                  key={o}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a86c] shrink-0" />
                  <span className="text-[#1c160e]/75 text-base font-light leading-relaxed">{o}</span>
                </motion.div>
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
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Who This Is For</span>
            </motion.div>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {whoFor.map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full border border-[#1c160e]/10 bg-white text-[#1c160e]/70 text-sm font-light"
                >
                  {w}
                </motion.span>
              ))}
            </div>
            <ScopeNote tone="cream" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#060606] py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <span className="h-px w-7 bg-[#c9a86c]/40" />
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Life Coaching FAQ</span>
              <span className="h-px w-7 bg-[#c9a86c]/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Questions people <em className="text-[#c9a86c]">ask</em>
            </motion.h2>
          </div>
          <div className="[&_div]:bg-white/[0.03] [&_div]:border-white/8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f1e7] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,108,0.08),transparent)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-[#1c160e] leading-tight mb-7"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            The version of you
            <br />
            <em className="text-[#c9a86c]">waiting to emerge</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-[#1c160e]/65 text-base font-light max-w-md mx-auto leading-relaxed mb-10"
          >
            Begin with a complimentary 30-minute discovery call. No pressure, no pitch — just
            clarity on what&apos;s actually in the way.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex justify-center"
          >
            <GoldButton href={CALENDLY} variant="ghost">Book a discovery call</GoldButton>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-[#1c160e]/55 text-sm font-light"
          >
            Leading a team, not just yourself?{" "}
            <a href="/executive-coaching-dubai" className="text-[#a8884e] hover:text-[#c9a86c] underline underline-offset-4 transition-colors">
              Explore executive coaching
            </a>{" "}
            · Working through something heavier?{" "}
            <a href="/emotional-healing-dubai" className="text-[#a8884e] hover:text-[#c9a86c] underline underline-offset-4 transition-colors">
              Explore emotional healing coaching
            </a>
          </motion.p>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
