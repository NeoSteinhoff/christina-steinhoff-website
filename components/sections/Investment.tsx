"use client";
import { motion } from "framer-motion";
import { CALENDLY, PROGRAMS, ZBOONI_LINKS } from "@/lib/constants";
import { GoldButton } from "@/components/ui/GoldButton";

const zbooniKeyByIndex = ["essential", "signature", "private"] as const;

export function Investment() {
  return (
    <section id="investment" className="relative overflow-hidden bg-background py-28 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[640px] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-16 grid gap-6 md:grid-cols-[auto_1fr] md:items-end md:gap-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold/70">{PROGRAMS.eyebrow}</span>
            <h2
              className="mt-5 text-[clamp(2.2rem,4.6vw,3.75rem)] font-light leading-[1.05] text-foreground"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              {PROGRAMS.headline}
            </h2>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-foreground/60 md:justify-self-end md:text-right">
            {PROGRAMS.subtext}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROGRAMS.tiers.map((tier, i) => {
            const zbooniHref = ZBOONI_LINKS[zbooniKeyByIndex[i]];
            const href = zbooniHref || CALENDLY;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Breakthrough session banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col items-center justify-between gap-6 rounded-2xl border border-foreground/10 bg-foreground/[0.03] px-8 py-7 sm:flex-row"
        >
          <div>
            <p className="text-sm font-light text-foreground/60">{PROGRAMS.breakthrough.name}</p>
            <p className="mt-1 max-w-md text-base font-light leading-relaxed text-foreground/50">
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

        {/* Bridge to the flagship application-only format */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-3 text-center"
        >
          <p className="max-w-xl text-sm font-light leading-relaxed text-foreground/50">
            {PROGRAMS.bridge.text}
          </p>
          <a
            href={PROGRAMS.bridge.href}
            className="link-underline text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-soft transition-colors"
          >
            {PROGRAMS.bridge.linkLabel} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
