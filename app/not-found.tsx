"use client";
import { motion } from "framer-motion";
import { CALENDLY } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060606] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-7 bg-[#c9a86c]/30" />
          <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">404</span>
          <span className="h-px w-7 bg-[#c9a86c]/30" />
        </div>

        <h1 className="text-6xl md:text-8xl font-light text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Lost in <em className="text-[#c9a86c]">thought?</em>
        </h1>

        <p className="text-white/35 font-light max-w-sm mx-auto mb-12 leading-relaxed">
          This page doesn't exist — but your transformation does. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/"
             className="px-8 py-4 bg-[#c9a86c] text-[#060606] text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#d4b880] transition-colors">
            Back to Home
          </a>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
             className="px-8 py-4 border border-white/10 text-white/50 text-[11px] tracking-[0.2em] uppercase rounded-full hover:border-[#c9a86c]/40 hover:text-[#c9a86c] transition-all">
            Book a Call
          </a>
        </div>
      </motion.div>

      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#c9a86c]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#c9a86c]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[#c9a86c]/8" />
      </div>
    </div>
  );
}
