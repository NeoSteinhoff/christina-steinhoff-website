import { sendMetaCapiEvent, readMetaCookies, clientIpFrom } from "@/lib/meta-capi";

export const runtime = "nodejs";

// Click-only conversions (WhatsApp, email, Schedule, share links) have no
// backend round trip of their own — this relays them to Meta server-side so
// they survive ad blockers and stay deduped against the matching browser
// Pixel event (same eventId). Allowlisted event names only: this is a public
// endpoint and must not become an arbitrary event-injection relay.
const ALLOWED_EVENTS = new Set(["Contact", "Schedule", "Lead", "ViewContent", "QuizStarted"]);

export async function POST(request: Request) {
  let body: { eventName?: string; eventId?: string; url?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  if (!body.eventName || !ALLOWED_EVENTS.has(body.eventName) || !body.eventId || !body.url) {
    return Response.json({ ok: false }, { status: 422 });
  }

  const { fbp, fbc } = readMetaCookies(request.headers.get("cookie"));

  await sendMetaCapiEvent({
    eventName: body.eventName,
    eventId: body.eventId,
    eventSourceUrl: body.url,
    fbp,
    fbc,
    clientIp: clientIpFrom(request.headers),
    userAgent: request.headers.get("user-agent"),
  });

  return Response.json({ ok: true });
}
