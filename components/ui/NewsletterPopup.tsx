"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("newsletter-seen")) return;
    // Show after 45 seconds on site
    const t = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem("newsletter-seen", "1");
    }, 45000);
    return () => clearTimeout(t);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("https://formspree.io/mail@christinasteinhoff.com", {
      method: "POST",
      body: JSON.stringify({ email, _subject: "New newsletter subscriber" }),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });
    setLoading(false);
    setSubmitted(true);
  }

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
            className="fixed inset-0 z-[140] bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:bottom-8 md:w-96 z-[141]"
          >
            <div className="bg-[#FAF5ED] rounded-3xl p-8 relative shadow-2xl border border-[#c9a86c]/10">
              <button
                onClick={close}
                className="absolute top-4 right-4 text-[#1c160e]/20 hover:text-[#1c160e]/50 transition-colors text-lg leading-none"
              >
                ✕
              </button>

              {submitted ? (
                <div className="text-center py-4">
                  <div className="text-3xl mb-3">✦</div>
                  <h3 className="text-xl font-light text-[#1c160e] mb-2"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    You're in.
                  </h3>
                  <p className="text-[#1c160e]/45 text-sm font-light">
                    Expect insights worth your attention, not noise.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-5 bg-[#c9a86c]/40" />
                    <span className="text-[#c9a86c]/70 text-[9px] tracking-[0.4em] uppercase">Weekly Insights</span>
                  </div>
                  <h3 className="text-2xl font-light text-[#1c160e] mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                    Wisdom for the<br /><em className="text-[#c9a86c]">high achiever's mind</em>
                  </h3>
                  <p className="text-[#1c160e]/45 text-xs font-light leading-relaxed mb-5">
                    Short, sharp insights on mindset, neuroscience, and conscious performance. No fluff.
                  </p>
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-2.5 bg-white border border-[#1c160e]/8 rounded-full text-[#1c160e] text-sm font-light placeholder:text-[#1c160e]/25 focus:outline-none focus:border-[#c9a86c]/40"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-5 py-2.5 bg-[#060606] text-white text-[10px] tracking-widest uppercase rounded-full hover:bg-[#1a1410] transition-colors disabled:opacity-50 shrink-0"
                    >
                      {loading ? "..." : "Join"}
                    </button>
                  </form>
                  <p className="text-[#1c160e]/25 text-[10px] mt-3 text-center">No spam. Unsubscribe anytime.</p>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
