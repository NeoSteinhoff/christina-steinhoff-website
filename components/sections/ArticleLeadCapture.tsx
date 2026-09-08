"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import type { BlogLeadMagnet } from "@/lib/blog-content";
import { SITE } from "@/lib/constants";
import { track } from "@/lib/track";
import { getEntrySource } from "@/lib/attribution";

type Status = "idle" | "loading" | "success" | "error";

export function ArticleLeadCapture({
  leadMagnet,
  slug,
  keyTakeaways,
}: {
  leadMagnet: BlogLeadMagnet;
  slug: string;
  keyTakeaways: string[];
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email, source: slug, autoSource: getEntrySource() }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        track("content_upgrade_signup", { slug });
      } else if (json.code === "unconfigured") {
        setStatus("success");
        track("content_upgrade_signup", { slug });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mb-14 rounded-2xl border border-[#c9a86c]/25 bg-[#0b0a08] p-8">
      {status === "success" ? (
        <div>
          <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#c9a86c]">{leadMagnet.resourceLabel}</p>
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {keyTakeaways.map((k) => (
              <li key={k} className="flex gap-3 text-[15px] font-light leading-relaxed text-white/80">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c9a86c]" />
                {k}
              </li>
            ))}
          </motion.ul>
          <p className="mt-5 text-sm font-light text-white/45">Saved — feel free to screenshot or bookmark this.</p>
        </div>
      ) : (
        <>
          <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-[#c9a86c]">{leadMagnet.resourceLabel}</p>
          <p className="mb-5 font-light leading-relaxed text-white/75">{leadMagnet.hook}</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-light text-white placeholder:text-white/30 focus:border-[#c9a86c]/50 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="whitespace-nowrap rounded-full bg-[#c9a86c] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#0b0a08] transition-colors hover:bg-[#d8bd8a] disabled:opacity-50"
            >
              {status === "loading" ? "Sending…" : "Get the checklist"}
            </button>
          </form>
          {status === "error" && (
            <p className="mt-3 text-xs text-red-400" role="alert">
              Something went wrong. Please email {SITE.email} directly.
            </p>
          )}
        </>
      )}
    </div>
  );
}
