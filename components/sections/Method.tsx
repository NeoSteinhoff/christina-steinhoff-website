"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    n: "01",
    title: "Neuroscience & brain rewiring",
    body: "Chronic stress, decision fatigue, and reactivity are neurological patterns — not character flaws. We rewire the pathways driving your most limiting responses, so change holds at the level of biology.",
  },
  {
    n: "02",
    title: "NLP & clinical hypnotherapy",
    body: "Most of your behaviour runs from the subconscious. NLP and clinical hypnotherapy update the programs governing identity, confidence, and performance — often in a fraction of the time talk therapy takes.",
  },
  {
    n: "03",
    title: "Somatic & trauma release",
    body: "Unresolved stress lives in the body, not just the mind. Somatic work discharges the physiological residue of past experience, freeing a nervous system that has been quietly running the show for years.",
    href: "/emotional-healing-dubai",
    linkLabel: "More on emotional healing coaching",
  },
  {
    n: "04",
    title: "Soul alignment & purpose",
    body: "Strategy without meaning is exhausting. When your goals, values, and vision genuinely line up, high performance stops feeling like force and starts feeling inevitable. This is what makes it last.",
  },
];

export function Method() {
  const reduce = useReducedMotion();
  return (
    <section id="method" className="relative overflow-hidden bg-[#060606] py-28 md:py-40">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#a8884e]/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Lead — asymmetric, no centered eyebrow */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">The method</span>
            <h2
              className="mt-5 text-[clamp(2.4rem,5vw,4.25rem)] font-light leading-[1.02] text-white"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Why most coaching
              <br />
              <em className="font-medium text-[#c9a86c]">doesn&apos;t last</em>
            </h2>
          </div>
          <Reveal direction="left" className="md:col-span-5 md:pt-16">
            <p className="text-base font-light leading-relaxed text-white/65">
              Coaching usually works at the conscious level — mindset, habits, strategy. But results
              are driven far more by subconscious programs, nervous-system patterns, and unresolved
              emotion. Science + Soul Fusion™ is the rare method that addresses all four at once.
              That&apos;s why the change is permanent, not temporary.
            </p>
          </Reveal>
        </div>

        {/* Pillars as an editorial numbered list */}
        <div className="mt-20 border-t border-white/8">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.n}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group grid gap-4 border-b border-white/8 py-9 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span
                className="font-display text-3xl font-light text-[#c9a86c]/40 transition-colors duration-500 group-hover:text-[#c9a86c]/80 md:col-span-1"
              >
                {p.n}
              </span>
              <h3 className="text-xl font-medium text-white md:col-span-4 md:text-2xl">{p.title}</h3>
              <div className="md:col-span-7">
                <p className="text-base font-light leading-relaxed text-white/60">{p.body}</p>
                {p.href && (
                  <a
                    href={p.href}
                    className="link-underline mt-2 inline-block text-sm font-light text-[#c9a86c]/80 hover:text-[#c9a86c] transition-colors"
                  >
                    {p.linkLabel} →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-20 text-center" blur={false}>
          <p
            className="mx-auto max-w-2xl text-2xl font-light italic leading-relaxed text-white/55 md:text-3xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            &ldquo;The goal isn&apos;t a better version of you.{" "}
            <span className="not-italic text-[#c9a86c]">It&apos;s the real one.&rdquo;</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
