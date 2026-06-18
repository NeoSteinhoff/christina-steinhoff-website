"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const credentials = [
  "Master NLP Practitioner",
  "Clinical Hypnotherapist",
  "Neuroscience-based coaching",
  "Somatic & trauma-informed practice",
  "Conscious leadership",
  "Subconscious reprogramming",
];

const stats = [
  { n: "500+", label: "Private clients" },
  { n: "12 yrs", label: "In practice" },
  { n: "3", label: "Continents" },
];

export function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="relative overflow-hidden bg-[#f7f1e7] py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
          {/* Portrait + stats */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-white to-[#efe7d9]">
              <Image
                src="/images/christina.jpg"
                alt="Christina Steinhoff, life mentor and executive coach, seated portrait"
                fill
                sizes="(max-width: 768px) 90vw, 45vw"
                className="object-cover object-bottom"
              />
            </div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="absolute -bottom-7 left-5 right-5 flex justify-between rounded-2xl bg-[#0b0a08] px-7 py-5"
            >
              {stats.map((s) => (
                <div key={s.n} className="text-center">
                  <p
                    className="font-display text-2xl font-medium text-[#c9a86c]"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {s.n}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/50">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Copy */}
          <div className="pt-10 md:pt-0">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#a8884e]">Meet Christina</span>
            <h2
              className="mt-5 text-[clamp(2.1rem,4vw,3.4rem)] font-light leading-[1.08] text-[#1c160e]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              The most successful people
              <br />
              <em className="font-medium text-[#a8884e]">still feel stuck inside.</em>
            </h2>

            <Reveal className="mt-7 space-y-4 text-[15px] font-light leading-relaxed text-[#1c160e]/75" blur={false}>
              <p>
                Christina works with high-achieving people who look unstoppable on paper and feel
                hollow underneath it — running on empty, disconnected from why they started, quietly
                certain that something is missing despite having &ldquo;everything.&rdquo;
              </p>
              <p>
                Her <strong className="font-medium text-[#1c160e]">Science + Soul Fusion™</strong>{" "}
                method works at three levels at once — neurological, psychological, and spiritual —
                so it reaches the root, not the symptom. The outcome isn&apos;t a motivational high.
                It&apos;s a durable change in how you think, lead, relate, and feel about your own life.
              </p>
              <p>
                Based in Dubai Investment Park, she works privately with founders and executives
                across the Middle East, Europe, and the Americas.
              </p>
            </Reveal>

            <div className="mt-9 flex flex-wrap gap-2.5">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-[#1c160e]/12 bg-white/50 px-3.5 py-1.5 text-xs font-light text-[#1c160e]/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
