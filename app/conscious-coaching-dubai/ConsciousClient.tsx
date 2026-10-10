"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQAccordion, FAQItem } from "@/components/ui/FAQAccordion";
import { GoldButton } from "@/components/ui/GoldButton";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { RelatedReading } from "@/components/sections/RelatedReading";
import { APPLY_URL } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

const problemParagraphs = [
  "Most of the women who come to Christina for this work are not in crisis. By any external measure, they are doing extremely well — running companies, closing deals, holding entire households together. What brings them in is quieter than a crisis: a partner who says she feels distant. A child who says she's “always working, even when she's home.” A conversation with someone she loves that starts to feel like another meeting to manage, rather than a place to rest.",
  "This is not a character flaw. It is the same pattern that made her successful, running in the wrong room. The vigilance, control, and composure that let her stay steady under pressure at work do not switch off at the front door — they keep doing their job with the people who most need her to simply be present: scanning for problems, managing reactions, staying one step ahead of whatever might go wrong. Over years, this looks like a marriage that runs efficiently but not warmly, a closeness with her children that feels performed rather than felt, or a pattern of relationships that end for reasons she can describe with total accuracy and still not change.",
  "What usually brings her to this work is one specific, ordinary moment: a partner naming the distance out loud, a child asking why she seems somewhere else even sitting right there, or simply noticing that she can direct a board meeting with complete presence and can't sit through dinner without reaching for her phone. She doesn't need to be convinced to want a family that works — she has one, and wants to actually be in it. What she needs is to understand why the exact traits that built her success are the ones now keeping the people she loves at arm's length, and how to change that without becoming someone softer, someone who has to choose between what she's built and who she loves.",
];

const approachParagraphs = [
  "Christina doesn't start with communication scripts or date-night advice. Conscious relationship work, in her practice, starts with the subconscious pattern underneath the distance: the specific point, usually years or decades old, where staying guarded, staying in control, or staying busy was the safest and smartest response available. Time Line Therapy® is used to locate that origin point and release the emotional charge attached to it, so the pattern stops firing automatically every time a relationship asks for something her nervous system once decided was unsafe to give.",
  "From there, she uses NLP and master hypnosis to install a different automatic response — not “trying harder” to be present, but a nervous system that can actually stay open and regulated when someone she loves asks for her attention, instead of defaulting to control, distance, or problem-solving. This is the Science half of Science + Soul Fusion™: precise, structured, repeatable work with the subconscious, not affirmations or willpower.",
  "The Soul half is what the work is for: reconnecting a woman's professional success with the relationships it was supposed to make possible in the first place. Sessions are built around her actual relationship and the specific incidents inside it, not generic relationship theory, so what changes shows up at her own dinner table — not just in how she describes it afterward. This is coaching, not therapy or a clinical treatment: Christina works with the pattern you bring into your relationships, one-on-one, rather than treating the relationship itself as the patient.",
];

const outcomes = [
  "Presence with your partner and children that doesn't require leaving work at the door, because it's no longer competing for the same nervous-system resources",
  "Conversations at home that stop feeling like negotiations to win or problems to solve",
  "The vigilance and control that serve you in the boardroom no longer running by default at the dinner table",
  "Able to ask for support without it registering as a threat to your competence",
  "Noticing the old pattern in the moment it starts, instead of only in hindsight, hours or days later",
  "A steadier relationship with your own emotions, so you're no longer managing everyone else's on top of your own",
];

export function ConsciousClient({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="bg-[#f7f1e7] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#060606] px-6 pb-24 pt-40 flex items-center">
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
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">Conscious Relationship Coaching · Dubai</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="text-[clamp(2.4rem,5.5vw,4.4rem)] font-light leading-[1.08] text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              You can hold a boardroom.
              <br />
              Can you hold <em className="font-medium text-[#c9a86c]">a dinner table?</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
              className="measure mt-8 text-lg font-light leading-relaxed text-white/65"
            >
              Christina Steinhoff works with high-achieving women — executives and founders — on
              the subconscious patterns that built their careers and are now quietly running their
              closest relationships.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            >
              <GoldButton href={APPLY_URL} external={false}>Book a discovery call</GoldButton>
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
                alt="Christina Steinhoff, conscious relationship coach in Dubai"
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-[#f7f1e7] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/40" />
            <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Sound Familiar?</span>
          </motion.div>
          {problemParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="mt-5 text-base font-light leading-relaxed text-[#1c160e]/75"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#060606] py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,168,108,0.05),transparent)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/30" />
            <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">Science + Soul Fusion™</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Not scripts. <em className="text-[#c9a86c]">The pattern underneath.</em>
          </motion.h2>
          {approachParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="mt-5 text-white/65 font-light leading-relaxed text-base"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-[#f7f1e7] py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-7 bg-[#c9a86c]/40" />
            <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">What Changes</span>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((o, i) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-[#1c160e]/8 bg-white px-5 py-4"
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-[#c9a86c] shrink-0" />
                <span className="text-[#1c160e]/75 text-[15px] font-light leading-relaxed">{o}</span>
              </motion.div>
            ))}
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
              <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Questions People Ask</span>
              <span className="h-px w-7 bg-[#c9a86c]/40" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Before you <em className="text-[#c9a86c]">begin</em>
            </motion.h2>
          </div>
          <div className="[&_div]:bg-white/[0.03] [&_div]:border-white/8">
            <FAQAccordion items={faqs} />
          </div>
          <div className="mt-8">
            <ScopeNote tone="dark" />
          </div>
        </div>
      </section>

      <RelatedReading pillarSlug="conscious-coaching-dubai" />

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
            Success at work.
            <br />
            <em className="text-[#c9a86c]">Closeness at home.</em>
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
            <GoldButton href={APPLY_URL} external={false} variant="ghost">Book a discovery call</GoldButton>
          </motion.div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
