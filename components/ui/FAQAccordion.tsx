"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = { q: string; a: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left px-8 py-6 flex items-center justify-between gap-4"
          >
            <span
              className="text-[#1c160e] font-light text-[17px] leading-snug"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
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
                <p className="px-8 pb-7 text-[#1c160e]/70 text-base font-light leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
