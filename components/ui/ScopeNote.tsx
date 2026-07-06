import { cn } from "@/lib/utils";

/**
 * Scope-of-practice disclaimer. Renders on every page/post that touches
 * emotional healing, burnout, or trauma-adjacent language — Christina is a
 * certified Licensed Master NLP Practitioner and Certified Master Hypnotist, not a
 * licensed psychotherapist or medical provider. This is both an ethical
 * requirement and a Google YMYL expertise-mismatch safeguard: content in
 * this territory needs a visible, un-buried scope line near the claim.
 */
export function ScopeNote({ tone = "dark", className }: { tone?: "dark" | "cream"; className?: string }) {
  const styles =
    tone === "dark"
      ? "border-white/10 bg-white/[0.02] text-white/50"
      : "border-[#1c160e]/10 bg-[#1c160e]/[0.02] text-[#1c160e]/55";

  return (
    <p className={cn("rounded-xl border px-5 py-4 text-xs font-light leading-relaxed", styles, className)}>
      Christina is a certified Licensed Master NLP Practitioner and Certified Master Hypnotist. Her coaching and
      mentorship support mindset, emotional resilience, and nervous-system regulation — it is not
      psychotherapy, medical treatment, or a substitute for licensed mental-health care. If you are in
      crisis or need clinical support, please contact a licensed professional or local emergency services.
    </p>
  );
}
