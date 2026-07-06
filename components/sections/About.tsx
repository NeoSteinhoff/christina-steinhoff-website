"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { CREDENTIALS, STATS } from "@/lib/constants";

const stats = [
  { n: STATS.clients, label: STATS.clientsLabel },
  { n: STATS.years, label: STATS.yearsLabel },
  { n: STATS.continents, label: STATS.continentsLabel },
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
                alt="Christina Steinhoff, executive and emotional mastery coach, seated portrait"
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
                <div key={s.label} className="text-center">
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
                Christina works with executives, founders, and high-achieving women who look
                unstoppable on paper and feel hollow underneath it — running on empty, disconnected
                from why they started, quietly certain that something is missing despite having
                &ldquo;everything.&rdquo;
              </p>
              <p>
                Her <strong className="font-medium text-[#1c160e]">Science + Soul Fusion™</strong>{" "}
                method works at three levels at once — conscious, subconscious, and spiritual —
                so it reaches the root, not the symptom. The outcome isn&apos;t a motivational high.
                It&apos;s a durable change in how you lead, decide, relate, and feel about your own life.
              </p>
              <p>
                Based in Dubai Investment Park, she works privately with executives and founders
                across the Middle East, Europe, and the Americas.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-2.5 sm:grid-cols-2">
              {CREDENTIALS.map((c) => (
                <div key={c} className="flex items-start gap-2.5">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#c9a86c]" />
                  <span className="text-[13px] font-light leading-snug text-[#1c160e]/75">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
