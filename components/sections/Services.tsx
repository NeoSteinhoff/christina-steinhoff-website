"use client";
import { CALENDLY } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";



const services = [
  {
    tag: "1:1 Private",
    title: "Personal Life Mentorship",
    body: "Deeply personal and completely bespoke. We work on the core patterns holding you back — identity, purpose, relationships, and the subconscious contracts you've made with struggle. For those ready to transform from the inside out.",
    outcomes: ["Core values & vision clarity", "Subconscious reprogramming", "Emotional mastery", "Life redesign"],
  },
  {
    tag: "Executive",
    title: "High Performance Coaching",
    body: "Built for leaders operating at the edge of their capacity. We redefine what peak performance looks like when it comes from alignment rather than adrenaline. Sustainable excellence — not burnout.",
    outcomes: ["Burnout dissolution", "Decision clarity", "Leadership presence", "Sustainable peak state"],
  },
  {
    tag: "Couples & Individuals",
    title: "Conscious Relationship Coaching",
    body: "The most overlooked driver of executive performance is relational health. This work heals attachment wounds, improves communication, and builds the intimacy that fuels everything else in your life.",
    outcomes: ["Attachment healing", "Deep intimacy", "Communication mastery", "Partnership alignment"],
  },
  {
    tag: "Immersive",
    title: "Bespoke Retreat Experience",
    body: "A multi-day private experience in Dubai or your preferred location. For leaders who want transformational results in compressed time — this is the deepest work we offer.",
    outcomes: ["Full immersion", "Rapid transformation", "Luxury setting", "Complete life audit"],
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-[#FAF5ED] py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-7 bg-[#c9a86c]/40" />
            <span className="text-[#c9a86c]/70 text-[10px] tracking-[0.45em] uppercase">Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-[#1c160e] leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Choose your <em className="text-[#c9a86c]">path</em>
          </motion.h2>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-[280px_1fr] gap-4">
          {/* Tabs */}
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
                <span className={`text-sm font-light transition-colors ${active === i ? "text-[#1c160e]" : "text-[#1c160e]/45"}`}>
                  {s.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Panel */}
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
                <span className="text-[9px] tracking-widest text-[#c9a86c]/60 uppercase">{services[active].tag}</span>
                <h3
                  className="text-3xl font-light text-[#1c160e] mt-2 mb-6"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {services[active].title}
                </h3>
                <p className="text-[#1c160e]/50 font-light leading-relaxed text-[15px]">{services[active].body}</p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {services[active].outcomes.map((o) => (
                    <div key={o} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-[#c9a86c]" />
                      <span className="text-[#1c160e]/40 text-sm">{o}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 text-[#c9a86c] text-[11px] tracking-[0.25em] uppercase hover:gap-4 transition-all"
              >
                Book a discovery call <span>→</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
