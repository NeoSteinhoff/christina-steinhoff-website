"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only show on first visit per session
    const seen = sessionStorage.getItem("loader-seen");
    if (seen) { setVisible(false); return; }
    sessionStorage.setItem("loader-seen", "1");
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-[#060606] flex flex-col items-center justify-center"
        >
          {/* Name reveal */}
          <div className="overflow-hidden mb-3">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-[#c9a86c] text-sm tracking-[0.35em] uppercase font-light"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Christina Steinhoff
            </motion.p>
          </div>

          {/* Tagline reveal */}
          <div className="overflow-hidden mb-10">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-light"
            >
              Science + Soul Fusion™
            </motion.p>
          </div>

          {/* Progress bar */}
          <motion.div className="w-32 h-px bg-white/8 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute inset-0 bg-[#c9a86c]/60"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
