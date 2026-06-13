"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CALENDLY } from "@/lib/constants";
import { faqs } from "./faqs";

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
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
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
                      style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
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
