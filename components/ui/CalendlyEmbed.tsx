"use client";
import { useEffect } from "react";
import { track } from "@/lib/track";

export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Calendly's documented embed postMessage API — fires once a visitor
    // actually books a slot (not just opens the widget). This is the real
    // bottom-of-funnel conversion event: https://developer.calendly.com/api-docs
    function onMessage(event: MessageEvent) {
      if (event.data?.event === "calendly.event_scheduled") {
        track("schedule_call");
      }
    }
    window.addEventListener("message", onMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url="https://calendly.com/consultwithc/consultingwithchris?hide_gdpr_banner=1&background_color=060606&text_color=ffffff&primary_color=c9a86c"
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
