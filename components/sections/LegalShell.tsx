import type { ReactNode } from "react";

/**
 * Shared layout + prose styling for legal pages (privacy, terms).
 */
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="relative overflow-hidden bg-[#060606] px-6 pb-16 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.05] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h1
            className="text-[clamp(2.4rem,5vw,3.5rem)] font-light text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            {title}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">Last updated · {updated}</p>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="legal-prose space-y-5 text-[15px] font-light leading-relaxed text-[#1c160e]/80">
          {children}
        </div>
      </div>

      <style>{`
        .legal-prose h2 {
          font-family: var(--font-fraunces), Georgia, serif;
          font-size: 1.4rem;
          font-weight: 500;
          color: #1c160e;
          margin-top: 2.25rem;
          margin-bottom: 0.5rem;
        }
        .legal-prose ul { list-style: none; padding: 0; display: grid; gap: 0.6rem; }
        .legal-prose li { position: relative; padding-left: 1.1rem; }
        .legal-prose li::before {
          content: ""; position: absolute; left: 0; top: 0.65rem;
          width: 4px; height: 4px; border-radius: 999px; background: #c9a86c;
        }
        .legal-prose a { color: #a8884e; text-decoration: underline; text-underline-offset: 3px; }
        .legal-prose strong { color: #1c160e; font-weight: 500; }
      `}</style>
    </>
  );
}
