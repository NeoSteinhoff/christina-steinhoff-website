"use client";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Primary CTA. A fully-rounded pill with a nested "button-in-button" trailing
 * icon that shifts diagonally on hover, and a physical press on active.
 */
export function GoldButton({
  href,
  children,
  variant = "solid",
  external = true,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full pl-7 pr-2.5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]";

  const variants = {
    solid: "bg-gold text-ink hover:bg-gold-soft",
    outline: "border border-white/15 text-white hover:border-gold/50 hover:text-gold-soft",
    ghost: "border border-cream-text/15 text-cream-text hover:border-gold/60",
  } as const;

  const iconBg = {
    solid: "bg-ink/12 text-ink",
    outline: "bg-white/10 text-current",
    ghost: "bg-cream-text/8 text-current",
  } as const;

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, variants[variant], className)}
    >
      <span>{children}</span>
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          iconBg[variant]
        )}
      >
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}
