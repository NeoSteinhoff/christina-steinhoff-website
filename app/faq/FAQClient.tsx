"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CALENDLY } from "@/lib/constants";

const faqs = [
  {
    q: "How is Christina's approach different from traditional coaching?",
    a: "Most coaching operates at the level of strategy, habits, and mindset — useful, but surface-level. Christina's Science + Soul Fusion™ method goes into the root cause: the subconscious programs, nervous system patterns, and identity structures that determine your results. We use neuroscience, NLP, clinical hypnotherapy, and somatic release to create permanent change, not temporary motivation.",
  },
  {
    q: "What's the difference between a life coach and a life mentor?",
    a: "A coach asks questions to help you find your own answers. A mentor draws on deep experience, proven methodology, and a structured transformation framework to guide you through proven territory. Christina has walked this path herself and with hundreds of clients — she leads you through transformation, not just alongside it.",
  },
  {
    q: "Who is Christina's ideal client?",
    a: "Executives, founders, entrepreneurs, and high-achieving professionals — typically 30-55 — who have built significant outer success but feel an inner disconnect. Often they're dealing with burnout, self-doubt, relationship strain, or a nagging sense that something important is missing despite having 'everything.' Christina also runs women-specific programmes for female leaders scaling businesses.",
  },
  {
    q: "How long does the process take?",
    a: "Transformation is not linear, but most clients begin experiencing significant shifts within 4-6 sessions. A standard engagement is 3-6 months of private sessions. Bespoke retreats offer an accelerated immersive experience over 2-5 days. Every programme is tailored to the individual.",
  },
  {
    q: "Do you work with couples as well as individuals?",
    a: "Yes. The Conscious Relationship Coaching programme is available for both individuals and couples. Many executive clients find that healing relational patterns is the single biggest unlock for both their personal fulfilment and professional performance.",
  },
  {
    q: "What happens on the discovery call?",
    a: "A complimentary 30-minute conversation where Christina listens deeply to your situation, identifies the core patterns at play, and shares whether and how she can help. There is no sales pressure. If there's a fit, she will propose a tailored programme. You leave the call with clarity regardless of whether you proceed.",
  },
  {
    q: "Do you work internationally or only in Dubai?",
    a: "Christina is based in Dubai but works with clients across three continents via private online sessions. Bespoke retreats are available in Dubai or your preferred location worldwide.",
  },
  {
    q: "What is the investment?",
    a: "Christina's work is positioned at the premium end of the market, reflecting the depth of methodology and the calibre of transformation delivered. Pricing is discussed on the discovery call and varies by programme. If you're serious about change, the ROI — in clarity, confidence, relationships, and performance — is consistently reported as transformational.",
  },
];

export function FAQClient() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-[#FAF5ED] min-h-screen">
      <Navbar />

      <div className="bg-[#060606] pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-7 bg-[#c9a86c]/30" />
            <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">FAQ</span>
            <span className="h-px w-7 bg-[#c9a86c]/30" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            Your questions, <em className="text-[#c9a86c]">answered</em>
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
              >
                <span className="text-[#1c160e] font-light text-[15px] leading-snug"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#c9a86c] text-2xl leading-none shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-8 pb-6 text-[#1c160e]/55 font-light leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#1c160e]/40 font-light mb-6">Still have questions?</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
             className="inline-flex px-9 py-4 bg-[#060606] text-white text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#1a1410] transition-colors">
            Book a Discovery Call
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
