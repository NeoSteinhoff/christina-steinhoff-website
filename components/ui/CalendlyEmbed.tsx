"use client";
import { useEffect } from "react";

export function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
      data-url="https://calendly.com/consultwithc/consultingwithchris?hide_gdpr_banner=1&background_color=060606&text_color=ffffff&primary_color=c9a86c"
      style={{ minWidth: 320, height: 700 }}
    />
  );
}
