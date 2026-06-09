"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <section className="bg-[#FAF5ED] py-20 px-6 border-t border-[#1c160e]/5">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-7 bg-[#c9a86c]/30" />
          <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">Weekly Insights</span>
          <span className="h-px w-7 bg-[#c9a86c]/30" />
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-[#1c160e] mb-4"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Wisdom for the <em className="text-[#c9a86c]">high achiever</em>
        </h2>
        <p className="text-[#1c160e]/45 font-light mb-8 leading-relaxed">
          Short, sharp insights on mindset, neuroscience, and conscious performance.<br className="hidden md:block" /> Delivered weekly. No fluff, ever.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-[#c9a86c]/20 rounded-full"
          >
            <span className="text-[#c9a86c]">✦</span>
            <span className="text-[#1c160e] font-light text-sm">You're in — watch your inbox.</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white border border-[#1c160e]/8 rounded-full text-[#1c160e] font-light text-sm placeholder:text-[#1c160e]/25 focus:outline-none focus:border-[#c9a86c]/40 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-7 py-4 bg-[#060606] text-white text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#1a1410] transition-colors disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? "Joining..." : "Join Free"}
            </button>
          </form>
        )}
        <p className="text-[#1c160e]/25 text-xs mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
