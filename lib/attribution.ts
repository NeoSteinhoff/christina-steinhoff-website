// Lightweight, first-party lead-source capture — read once at submit time.
// No cookies, no localStorage, no script: just what's already in the URL/referrer
// for this page view. Used to label leads (which channel/page produced them)
// without adding any new tracking surface.

export function getEntrySource(): string {
  if (typeof window === "undefined") return "direct";

  const params = new URLSearchParams(window.location.search);
  const utm = params.get("utm_source") || params.get("ref");
  if (utm) return utm;

  if (document.referrer) {
    try {
      const referrerHost = new URL(document.referrer).hostname.replace(/^www\./, "");
      if (referrerHost && referrerHost !== window.location.hostname) return referrerHost;
    } catch {
      // malformed referrer — fall through to "direct"
    }
  }

  return "direct";
}
