"use client";
import { motion } from "framer-motion";

export function InfiniteScrollBanner({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden py-4 bg-[#d4b483]/5 border-y border-[#d4b483]/10">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: [0, -50 + "%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[#d4b483]/60 text-xs tracking-[0.3em] uppercase font-light shrink-0"
          >
            {item}
            <span className="mx-8 text-[#d4b483]/30">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
