import { cn } from "@/lib/utils";

/**
 * An elegant brand plate used where a portrait sits, until Christina's
 * professional headshot is supplied. To use a real photo instead, drop it at
 * /public/images/christina.jpg and swap this component for next/image.
 */
export function BrandPanel({
  className,
  wordmark = true,
}: {
  className?: string;
  wordmark?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-[1.75rem] bg-[#0b0a08]", className)}>
      {/* gold depth */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_8%,rgba(201,168,108,0.28),transparent_60%)]" />
      <div className="absolute -bottom-1/4 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-[#a8884e]/20 blur-3xl" />
      {/* grain */}
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light" />
      {/* hairline frame */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-[#c9a86c]/20" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 py-16 text-center">
        <span className="text-2xl text-[#c9a86c]/70">✦</span>
        {wordmark && (
          <p
            className="mt-6 text-3xl font-light leading-tight text-white/90"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Christina
            <br />
            <em className="text-[#c9a86c]">Steinhoff</em>
          </p>
        )}
        <span className="mt-6 h-px w-10 bg-[#c9a86c]/40" />
        <p className="mt-5 text-[10px] uppercase tracking-[0.32em] text-white/45">Dubai · Worldwide</p>
      </div>
    </div>
  );
}
