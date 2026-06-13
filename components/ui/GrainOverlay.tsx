/**
 * Fixed, non-interactive film-grain layer. Breaks the flat digital surface
 * across the whole site for a more physical, editorial feel.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.04] mix-blend-soft-light"
    />
  );
}
