"use client";
import { CALENDLY } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services: {
  tag: string;
  title: string;
  body: string;
  outcomes: string[];
  page?: { href: string; label: string };
}[] = [
  {
    tag: "1:1 Private",
    title: "Personal Life Mentorship",
    body: "For the high achiever who has everything on paper — and something essential is still missing. This is Christina's deepest, most transformational offering. Over 3-6 months of private sessions, we dissolve the subconscious patterns blocking your fulfilment, rebuild your relationship with yourself, and create a life that genuinely reflects who you are at your highest. Not who you were trained to be.",
    outcomes: ["Core identity & purpose clarity", "Subconscious reprogramming", "Emotional intelligence mastery", "Complete life redesign"],
    page: { href: "/life-coach-dubai", label: "Explore life coaching in Dubai" },
  },
  {
    tag: "Executive",
    title: "High Performance Coaching",
    body: "Built for leaders who are performing at the top of their field but running on fumes. Most high performers are operating at 60% of their real capacity because stress, unresolved pressure, and misalignment are draining the other 40%. This programme restores full mental and emotional capacity — so you lead with clarity, make better decisions, and achieve more by doing less from a place of force.",
    outcomes: ["Burnout recovery & prevention", "Executive decision clarity", "Authentic leadership presence", "Sustainable peak performance"],
    page: { href: "/executive-coaching-dubai", label: "Explore executive coaching" },
  },
  {
    tag: "Couples & Individuals",
    title: "Conscious Relationship Coaching",
    body: "The most overlooked driver of executive performance and personal fulfilment is the quality of your closest relationships. Attachment wounds, communication breakdowns, and emotional distance don't stay in your personal life — they follow you into the boardroom, your parenting, your self-worth. This work heals the relational patterns keeping you disconnected and builds the intimacy that makes everything else in life richer.",
    outcomes: ["Attachment healing & secure bonding", "Deep intimacy restoration", "Communication & conflict mastery", "Aligned partnership or self-relationship"],
  },
  {
    tag: "Immersive",
    title: "Bespoke Retreat Experience",
    body: "For leaders who want years of transformation in days. A fully private, fully bespoke multi-day experience in Dubai or your preferred location worldwide. You arrive at a carefully curated environment, with nothing to manage but your own evolution. This is the most intensive work Christina offers — and the results match the depth of the experience. Limited to a handful of clients per year.",
    outcomes: ["Full-immersion transformation", "Rapid subconscious reprogramming", "Fully private, curated setting", "Complete life & leadership audit"],
  },
  {
    tag: "Group · Women",
    title: "UnleashHER Potential™",
    body: "Christina's signature monthly group coaching workshop for ambitious women in Dubai. Entrepreneurs, leaders, creatives, and women in transition come together to work on confidence, emotional resilience, business clarity, and subconscious transformation — in a supportive community where personal growth meets business brilliance. No previous coaching experience required.",
    outcomes: ["Confidence & self-worth", "Emotional resilience", "Business & leadership clarity", "Community of ambitious women"],
    page: { href: "/group-workshop", label: "Explore the workshop" },
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="bg-[#FAF5ED] py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/40" />
            <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Coaching Programmes</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-[#1c160e] leading-tight max-w-xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Every programme is<br /><em className="text-[#c9a86c]">built around you</em>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-4">
          <div className="flex flex-col gap-2">
            {services.map((s, i) => (
              <motion.button
                key={s.title}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 ${
                  active === i
                    ? "border-[#c9a86c]/30 bg-[#c9a86c]/8"
                    : "border-[#1c160e]/8 bg-white/50 hover:border-[#1c160e]/15"
                }`}
              >
                <span className="block text-[9px] tracking-widest text-[#c9a86c]/60 uppercase mb-1">{s.tag}</span>
                <span className={`text-sm font-light transition-colors ${active === i ? "text-[#1c160e]" : "text-[#1c160e]/65"}`}>
                  {s.title}
                </span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-[#1c160e]/8 bg-white p-10 flex flex-col justify-between min-h-[380px]"
            >
              <div>
                <span className="text-[9px] tracking-widest text-[#c9a86c]/60 uppercase">{current.tag}</span>
                <h3
                  className="text-3xl font-light text-[#1c160e] mt-2 mb-6"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {current.title}
                </h3>
                <p className="text-[#1c160e]/70 font-light leading-relaxed text-base">{current.body}</p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {current.outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#c9a86c]" />
                      <span className="text-[#1c160e]/65 text-sm">{o}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#c9a86c] text-[11px] tracking-[0.25em] uppercase hover:gap-4 transition-all"
                >
                  Book a discovery call <span>→</span>
                </a>
                {current.page && (
                  <a
                    href={current.page.href}
                    className="inline-flex items-center gap-2 text-[#1c160e]/55 hover:text-[#1c160e] text-[11px] tracking-[0.25em] uppercase transition-colors"
                  >
                    {current.page.label} <span>→</span>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
