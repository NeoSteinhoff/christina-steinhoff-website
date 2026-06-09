"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorderButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden group",
        className
      )}
    >
      <span className="absolute inset-0 rounded-full border border-[#d4b483]/40 group-hover:border-[#d4b483]/80 transition-all duration-500" />
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, #d4b483 10deg, transparent 20deg)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <span className="absolute inset-[1px] rounded-full bg-[#0a0a0a]" />
      <span className="relative z-10 text-[#d4b483] font-medium tracking-wider text-sm uppercase">
        {children}
      </span>
    </button>
  );
}
