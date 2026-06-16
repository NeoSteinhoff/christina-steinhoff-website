"use client";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { GoldButton } from "@/components/ui/GoldButton";
import { CALENDLY } from "@/lib/constants";
import { faqs } from "./faqs";

export function FAQClient() {
  return (
    <div className="min-h-screen bg-[#f7f1e7]">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden bg-[#060606] px-6 pb-20 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.06] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/75">Questions &amp; Answers</span>
          <h1
            className="mt-5 text-[clamp(2.6rem,6vw,4.5rem)] font-light leading-[1.02] text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Your questions, <em className="font-medium text-[#c9a86c]">answered</em>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-white/60">
            Everything you might want to know before reaching out — from how the method works to what
            the investment looks like.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <FAQAccordion items={faqs} />

        <div className="mt-16 rounded-2xl border border-[#1c160e]/8 bg-white p-9 text-center">
          <p
            className="text-2xl font-light text-[#1c160e]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Still have a question?
          </p>
          <p className="mx-auto mt-2 max-w-sm text-sm font-light text-[#1c160e]/60">
            The discovery call answers most of them — and there&apos;s no pressure to proceed.
          </p>
          <div className="mt-6 flex justify-center">
            <GoldButton href={CALENDLY} variant="ghost">Book a discovery call</GoldButton>
          </div>
        </div>
      </div>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
