"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-xl"
        >
          <div className="bg-[#0e0e0e] border border-white/8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
            <p className="text-white/55 text-xs font-light leading-relaxed flex-1">
              This site uses cookies to improve your experience and analyse traffic.{" "}
              <a href="https://christinasteinhoff.com/privacy-policy/" target="_blank" rel="noopener noreferrer"
                 className="text-[#c9a86c]/70 underline hover:text-[#c9a86c] transition-colors">
                Privacy policy
              </a>
            </p>
            <div className="flex gap-2 shrink-0">
              <button onClick={decline}
                className="px-4 py-2 text-white/35 text-[10px] tracking-widest uppercase border border-white/10 rounded-full hover:border-white/20 transition-colors">
                Decline
              </button>
              <button onClick={accept}
                className="px-4 py-2 bg-[#c9a86c] text-[#060606] text-[10px] tracking-widest uppercase font-medium rounded-full hover:bg-[#d4b880] transition-colors">
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
