"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";

type Choice = "granted" | "denied" | null;
const KEY = "cos-cookie-consent";

/**
 * Privacy-first consent. Google Analytics + Microsoft Clarity load ONLY after
 * the visitor accepts. Declining keeps them off entirely.
 */
export function CookieConsent({ gaId, clarityId }: { gaId: string; clarityId: string }) {
  const [choice, setChoice] = useState<Choice>(null);
  const [decided, setDecided] = useState(true); // assume decided until we read storage

  useEffect(() => {
    const stored = (localStorage.getItem(KEY) as Choice) || null;
    setChoice(stored);
    setDecided(stored !== null);
  }, []);

  const decide = (value: Exclude<Choice, null>) => {
    localStorage.setItem(KEY, value);
    setChoice(value);
    setDecided(true);
  };

  const analyticsOn = choice === "granted";

  return (
    <>
      {analyticsOn && (
        <>
          <Script id="clarity" strategy="afterInteractive">{`
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityId}");
          `}</Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      <AnimatePresence>
        {!decided && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed bottom-4 left-4 right-4 z-[120] mx-auto max-w-md rounded-2xl border border-white/10 bg-[#0c0b0a]/95 p-5 backdrop-blur-xl"
            role="dialog"
            aria-label="Cookie consent"
          >
            <p className="text-white/70 text-sm font-light leading-relaxed">
              This site uses cookies to understand how visitors find Christina&apos;s work. You decide.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => decide("granted")}
                className="rounded-full bg-[#c9a86c] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#0b0a08] transition-colors hover:bg-[#d8bd8a]"
              >
                Accept
              </button>
              <button
                onClick={() => decide("denied")}
                className="rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white/80"
              >
                Decline
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
