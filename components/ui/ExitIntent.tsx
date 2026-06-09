"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CALENDLY } from "@/lib/constants";

export function ExitIntent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("exit-intent-seen")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) {
        setVisible(true);
        sessionStorage.setItem("exit-intent-seen", "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    // Wait 10s before activating so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function close() { setVisible(false); }

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[151] flex items-center justify-center px-6 pointer-events-none"
          >
            <div className="bg-[#0a0907] border border-[#c9a86c]/15 rounded-3xl p-10 md:p-14 max-w-lg w-full pointer-events-auto text-center relative">
              <button
                onClick={close}
                className="absolute top-5 right-5 text-white/20 hover:text-white/50 transition-colors text-xl leading-none"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="w-12 h-12 rounded-full bg-[#c9a86c]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-[#c9a86c] text-xl">✦</span>
              </div>

              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-6 bg-[#c9a86c]/30" />
                <span className="text-[#c9a86c]/60 text-[9px] tracking-[0.45em] uppercase">Before you go</span>
                <span className="h-px w-6 bg-[#c9a86c]/30" />
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                One conversation can <em className="text-[#c9a86c]">change everything</em>
              </h2>

              <p className="text-white/40 font-light text-sm leading-relaxed mb-8">
                A complimentary 30-minute discovery call with Christina. No obligation, no pressure — just clarity on what's possible for you.
              </p>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="inline-flex w-full items-center justify-center px-8 py-4 bg-[#c9a86c] text-[#060606] text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#d4b880] transition-colors mb-3"
              >
                Book My Free Discovery Call
              </a>

              <button
                onClick={close}
                className="text-white/20 text-xs hover:text-white/40 transition-colors"
              >
                No thanks, I'll pass for now
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
