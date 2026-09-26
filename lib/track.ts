// Thin GA4 event dispatch. No-ops when analytics hasn't loaded (consent declined
// or the gtag script hasn't run yet) — never throws, never blocks the caller.
// See components/ui/CookieConsent.tsx for when window.gtag becomes available.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type TrackEvent =
  | "schedule_call"
  | "generate_lead"
  | "newsletter_signup"
  | "content_upgrade_signup"
  | "referral_submitted"
  | "contact_whatsapp"
  | "contact_email_click"
  | "quiz_started"
  | "quiz_completed";

export function track(name: TrackEvent, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
