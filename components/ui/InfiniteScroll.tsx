/**
 * Brand marquee band. CSS-driven (GPU transform), pauses on hover, and is large
 * enough to read as a statement rather than a notice bar.
 */
export function InfiniteScrollBanner({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group relative overflow-hidden border-y border-white/[0.06] bg-[#0a0908] py-7">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0a0908] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0a0908] to-transparent" />
      <div className="flex w-max animate-[cos-marquee_34s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span
              className="px-8 text-2xl font-light tracking-tight text-white/70 md:text-3xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              {item}
            </span>
            <span className="text-[#c9a86c]/40">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes cos-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}
