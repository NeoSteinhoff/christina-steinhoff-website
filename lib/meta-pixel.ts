"use client";

// Thin Meta Pixel dispatch, mirroring lib/track.ts: no-ops until the Pixel
// script has loaded (same consent gate GA uses — see components/ui/CookieConsent.tsx).
// Never throws, never blocks the caller.
//
// Server-side delivery (Conversions API, lib/meta-capi.ts) happens separately
// and is keyed by the same eventId, so the browser pixel event and the server
// event dedupe in Meta Events Manager instead of double-counting.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function newMetaEventId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Fires the browser Pixel event only. Use when a server-side CAPI call for
 * the same eventId is already being sent elsewhere (e.g. from an API route
 * that just confirmed a form submission) — avoids sending CAPI twice. */
export function metaPixel(eventName: string, eventId: string, customData?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", eventName, customData, { eventID: eventId });
}

/** For conversions with no backend round trip of their own (clicks, shares,
 * booking widgets) — fires the Pixel event and relays the same event
 * server-side via /api/meta-capi so it survives ad blockers and iOS tracking
 * restrictions. */
export function metaPixelAndRelay(eventName: string, customData?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  const eventId = newMetaEventId();
  metaPixel(eventName, eventId, customData);
  fetch("/api/meta-capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ eventName, eventId, url: window.location.href }),
    keepalive: true,
  }).catch(() => {});
}
