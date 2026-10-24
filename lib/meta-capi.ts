import crypto from "crypto";

// Server-side relay to Meta's Conversions API — the backend half of Meta Pixel
// tracking, used to confirm conversions even when the browser pixel is blocked
// and to carry hashed PII for better match quality. No-ops until
// META_PIXEL_ID + META_CAPI_ACCESS_TOKEN are configured (same pattern as
// RESEND_API_KEY in app/api/contact/route.ts).
//
// Get both from Meta Events Manager → Data Sources → your pixel → Settings →
// Conversions API → "Generate access token". META_CAPI_TEST_EVENT_CODE is
// optional, from the same screen's "Test events" tab — set it temporarily to
// see events land live in Events Manager while verifying the integration.

const GRAPH_VERSION = "v21.0";

export type MetaCapiEvent = {
  eventName: string;
  eventId: string;
  eventSourceUrl: string;
  email?: string;
  phone?: string;
  fbp?: string | null;
  fbc?: string | null;
  clientIp?: string | null;
  userAgent?: string | null;
  customData?: Record<string, unknown>;
};

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

/** Reads Meta's first-party _fbp/_fbc cookies from an incoming request's Cookie header. */
export function readMetaCookies(cookieHeader: string | null): { fbp: string | null; fbc: string | null } {
  if (!cookieHeader) return { fbp: null, fbc: null };
  const fbp = cookieHeader.match(/(?:^|;\s*)_fbp=([^;]+)/)?.[1] ?? null;
  const fbc = cookieHeader.match(/(?:^|;\s*)_fbc=([^;]+)/)?.[1] ?? null;
  return { fbp, fbc };
}

export function clientIpFrom(headers: Headers): string | null {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() || headers.get("x-real-ip") || null;
}

export async function sendMetaCapiEvent(evt: MetaCapiEvent): Promise<void> {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !accessToken) return; // not configured — same no-op pattern as email delivery

  const userData: Record<string, unknown> = {};
  if (evt.email) userData.em = [sha256(evt.email)];
  if (evt.phone) userData.ph = [sha256(evt.phone.replace(/[^\d]/g, ""))];
  if (evt.fbp) userData.fbp = evt.fbp;
  if (evt.fbc) userData.fbc = evt.fbc;
  if (evt.clientIp) userData.client_ip_address = evt.clientIp;
  if (evt.userAgent) userData.client_user_agent = evt.userAgent;

  const body = {
    data: [
      {
        event_name: evt.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: evt.eventId,
        action_source: "website",
        event_source_url: evt.eventSourceUrl,
        user_data: userData,
        ...(evt.customData ? { custom_data: evt.customData } : {}),
      },
    ],
    ...(process.env.META_CAPI_TEST_EVENT_CODE
      ? { test_event_code: process.env.META_CAPI_TEST_EVENT_CODE }
      : {}),
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${accessToken}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
    );
    if (!res.ok) console.error("Meta CAPI error", res.status, await res.text());
  } catch (err) {
    console.error("Meta CAPI exception", err);
  }
}
