"use client";
import { CALENDLY, SITE } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { GoldButton } from "@/components/ui/GoldButton";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#060606] py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(201,168,108,0.07),transparent)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal blur={false}>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">Work with Christina</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="mt-6 text-[clamp(2.8rem,7vw,6.5rem)] font-light leading-[0.98] text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            The version of you
            <br />
            <em className="font-medium text-[#c9a86c]">waiting to emerge</em>
          </h2>
        </Reveal>

        <Reveal delay={0.12} blur={false}>
          <p className="measure mx-auto mt-8 text-base font-light leading-relaxed text-white/65">
            It starts with a complimentary 30-minute call. Christina reviews every application
            personally and takes a small number of clients at a time — so the work goes deep.
          </p>
        </Reveal>

        <Reveal delay={0.2} blur={false}>
          <div className="mt-11 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <GoldButton href={CALENDLY}>Book a discovery call</GoldButton>
            <a
              href={`mailto:${SITE.email}`}
              className="link-underline text-[12px] uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-white"
            >
              {SITE.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3} blur={false}>
          <p className="mt-10 text-[11px] uppercase tracking-[0.18em] text-white/35">
            Dubai Investment Park · Working with clients worldwide
          </p>
        </Reveal>
      </div>
    </section>
  );
}
