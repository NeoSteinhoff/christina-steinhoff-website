"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SITE, SOCIAL, CALENDLY } from "@/lib/constants";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    // Sends via Formspree — replace with Christina's endpoint once set up
    await fetch("https://formspree.io/mail@christinasteinhoff.com", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setLoading(false);
    setSent(true);
  }

  return (
    <div className="bg-[#FAF5ED] min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#060606] pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-7 bg-[#c9a86c]/30" />
            <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">Get in Touch</span>
            <span className="h-px w-7 bg-[#c9a86c]/30" />
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            Let's <em className="text-[#c9a86c]">connect</em>
          </h1>
          <p className="text-white/40 font-light">
            Reach out directly, or book a complimentary discovery call below.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.4fr] gap-14">

        {/* Left — contact info */}
        <div>
          <h2 className="text-2xl font-light text-[#1c160e] mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            Contact details
          </h2>

          <div className="space-y-6 mb-10">
            <a href={`mailto:${SITE.email}`}
               className="flex items-start gap-4 group">
              <span className="w-10 h-10 rounded-full bg-[#c9a86c]/10 flex items-center justify-center shrink-0 text-[#c9a86c] text-sm group-hover:bg-[#c9a86c]/20 transition-colors">✉</span>
              <div>
                <p className="text-[#1c160e]/40 text-xs uppercase tracking-widest mb-0.5">Email</p>
                <p className="text-[#1c160e] font-light text-sm">{SITE.email}</p>
              </div>
            </a>

            <a href={`tel:${SITE.phone}`}
               className="flex items-start gap-4 group">
              <span className="w-10 h-10 rounded-full bg-[#c9a86c]/10 flex items-center justify-center shrink-0 text-[#c9a86c] text-sm group-hover:bg-[#c9a86c]/20 transition-colors">☎</span>
              <div>
                <p className="text-[#1c160e]/40 text-xs uppercase tracking-widest mb-0.5">Phone</p>
                <p className="text-[#1c160e] font-light text-sm">{SITE.phone}</p>
              </div>
            </a>

            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
               className="flex items-start gap-4 group">
              <span className="w-10 h-10 rounded-full bg-[#c9a86c]/10 flex items-center justify-center shrink-0 text-[#c9a86c] text-sm group-hover:bg-[#c9a86c]/20 transition-colors">💬</span>
              <div>
                <p className="text-[#1c160e]/40 text-xs uppercase tracking-widest mb-0.5">WhatsApp</p>
                <p className="text-[#1c160e] font-light text-sm">Message on WhatsApp</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-[#c9a86c]/10 flex items-center justify-center shrink-0 text-[#c9a86c] text-sm">📍</span>
              <div>
                <p className="text-[#1c160e]/40 text-xs uppercase tracking-widest mb-0.5">Location</p>
                <p className="text-[#1c160e] font-light text-sm leading-relaxed">{SITE.location}</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="border-t border-[#1c160e]/8 pt-8">
            <p className="text-[#1c160e]/35 text-xs uppercase tracking-widest mb-4">Follow Christina</p>
            <div className="flex gap-3">
              {[
                { href: SOCIAL.instagram, label: "Instagram", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                { href: SOCIAL.linkedin, label: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: SOCIAL.facebook, label: "Facebook", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full border border-[#1c160e]/10 flex items-center justify-center text-[#1c160e]/40 hover:border-[#c9a86c]/40 hover:text-[#c9a86c] transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Book call CTA */}
          <div className="mt-10 p-6 bg-[#060606] rounded-2xl">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-2">Prefer to talk?</p>
            <p className="text-white font-light mb-4" style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
              Book a complimentary 30-min discovery call
            </p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a86c] text-[#060606] text-[10px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#d4b880] transition-colors">
              Book Now
            </a>
          </div>
        </div>

        {/* Right — contact form */}
        <div>
          <h2 className="text-2xl font-light text-[#1c160e] mb-8"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            Send a message
          </h2>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-black/5 p-12 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#c9a86c]/10 flex items-center justify-center mx-auto mb-5 text-2xl">✓</div>
              <h3 className="text-xl font-light text-[#1c160e] mb-2"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                Message received
              </h3>
              <p className="text-[#1c160e]/50 font-light text-sm">Christina will be in touch within 24 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-black/5 p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#1c160e]/40 text-[10px] uppercase tracking-widest mb-2">First name</label>
                  <input name="firstName" required placeholder="Sarah"
                    className="w-full px-4 py-3 bg-[#FAF5ED] border border-[#1c160e]/8 rounded-xl text-[#1c160e] font-light text-sm placeholder:text-[#1c160e]/25 focus:outline-none focus:border-[#c9a86c]/40 transition-colors" />
                </div>
                <div>
                  <label className="block text-[#1c160e]/40 text-[10px] uppercase tracking-widest mb-2">Last name</label>
                  <input name="lastName" required placeholder="Johnson"
                    className="w-full px-4 py-3 bg-[#FAF5ED] border border-[#1c160e]/8 rounded-xl text-[#1c160e] font-light text-sm placeholder:text-[#1c160e]/25 focus:outline-none focus:border-[#c9a86c]/40 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-[#1c160e]/40 text-[10px] uppercase tracking-widest mb-2">Email</label>
                <input name="email" type="email" required placeholder="sarah@example.com"
                  className="w-full px-4 py-3 bg-[#FAF5ED] border border-[#1c160e]/8 rounded-xl text-[#1c160e] font-light text-sm placeholder:text-[#1c160e]/25 focus:outline-none focus:border-[#c9a86c]/40 transition-colors" />
              </div>
              <div>
                <label className="block text-[#1c160e]/40 text-[10px] uppercase tracking-widest mb-2">What brings you here?</label>
                <select name="topic"
                  className="w-full px-4 py-3 bg-[#FAF5ED] border border-[#1c160e]/8 rounded-xl text-[#1c160e] font-light text-sm focus:outline-none focus:border-[#c9a86c]/40 transition-colors">
                  <option value="personal">Personal Life Mentorship</option>
                  <option value="performance">High Performance Coaching</option>
                  <option value="relationships">Conscious Relationships</option>
                  <option value="retreat">Bespoke Retreat</option>
                  <option value="other">General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-[#1c160e]/40 text-[10px] uppercase tracking-widest mb-2">Message</label>
                <textarea name="message" required rows={5} placeholder="Tell Christina a little about yourself and what you're looking to work on..."
                  className="w-full px-4 py-3 bg-[#FAF5ED] border border-[#1c160e]/8 rounded-xl text-[#1c160e] font-light text-sm placeholder:text-[#1c160e]/25 focus:outline-none focus:border-[#c9a86c]/40 transition-colors resize-none" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full py-4 bg-[#060606] text-white text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#1a1410] transition-colors disabled:opacity-50">
                {loading ? "Sending..." : "Send Message"}
              </button>
              <p className="text-[#1c160e]/25 text-xs text-center">
                Or reach out directly at{" "}
                <a href={`mailto:${SITE.email}`} className="underline hover:text-[#c9a86c] transition-colors">{SITE.email}</a>
              </p>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
