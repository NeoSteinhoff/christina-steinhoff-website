"use client";

const schemes = [
  {
    label: "A — Black + Warm Cream",
    desc: "Warm & luxurious. Gold reads beautifully on both.",
    dark: "#060606",
    light: "#FAF5ED",
    gold: "#d4b483",
    text_light: "#1a1410",
  },
  {
    label: "B — Black + Champagne",
    desc: "Richest warmth. Deepest contrast. Most distinctive.",
    dark: "#060606",
    light: "#EDE0CC",
    gold: "#c9a96e",
    text_light: "#1a1410",
  },
  {
    label: "C — Black + Soft White",
    desc: "Clean & editorial. More modern/minimal feel.",
    dark: "#060606",
    light: "#F7F5F2",
    gold: "#d4b483",
    text_light: "#111",
  },
];

function SchemePreview({
  s,
}: {
  s: (typeof schemes)[0];
}) {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden mb-8">
      {/* Label bar */}
      <div
        style={{ background: s.dark }}
        className="px-6 py-3 flex items-center justify-between"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: s.gold }}>
          {s.label}
        </span>
        <span className="text-white/40 text-xs">{s.desc}</span>
      </div>

      {/* Dark section mock */}
      <div style={{ background: s.dark }} className="px-10 py-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-6" style={{ background: s.gold + "66" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: s.gold + "aa" }}>
            Dubai's Premier Life Mentor
          </span>
        </div>
        <h2 className="text-5xl font-light text-white mb-3" style={{ fontFamily: "Georgia, serif" }}>
          Peace. <em style={{ color: s.gold }}>Purpose.</em>
          <br />Presence.
        </h2>
        <p className="text-white/40 text-sm mt-4 max-w-sm">
          Private mentorship for executives and entrepreneurs ready to lead from alignment — not exhaustion.
        </p>
        <button
          className="mt-8 px-7 py-3 text-xs tracking-widest uppercase rounded-full border"
          style={{ borderColor: s.gold + "55", color: s.gold }}
        >
          Apply for Private Mentorship
        </button>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: s.gold + "20" }} />

      {/* Light section mock */}
      <div style={{ background: s.light }} className="px-10 py-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-6" style={{ background: s.gold + "88" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: s.gold + "cc" }}>
            About Christina
          </span>
        </div>
        <h2
          className="text-4xl font-light mb-4"
          style={{ fontFamily: "Georgia, serif", color: s.text_light }}
        >
          Success without peace is{" "}
          <em style={{ color: s.gold }}>just expensive chaos.</em>
        </h2>
        <p className="text-sm leading-relaxed max-w-sm" style={{ color: s.text_light + "99" }}>
          I work with the world's most driven executives and entrepreneurs — people who have built remarkable success, yet still feel the quiet ache of misalignment.
        </p>
        {/* Credential pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["NLP Practitioner", "Clinical Hypnotherapist", "Neuroscience Coaching"].map((c) => (
            <span
              key={c}
              className="px-3 py-1 rounded-full text-xs border"
              style={{ borderColor: s.gold + "44", color: s.text_light + "88" }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: s.gold + "20" }} />

      {/* Dark section 2 — method */}
      <div style={{ background: s.dark }} className="px-10 py-10">
        <h3
          className="text-2xl font-light text-white mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Science + Soul <em style={{ color: s.gold }}>Fusion™</em>
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {["Neuroscience", "NLP & Hypnotherapy", "Somatic Release", "Soul Alignment"].map((p) => (
            <div
              key={p}
              className="rounded-xl border px-4 py-3 text-sm text-white/60"
              style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Mockup() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-10">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-2">Color Scheme Preview</p>
          <h1 className="text-3xl font-light text-white" style={{ fontFamily: "Georgia, serif" }}>
            3 Options to Review
          </h1>
          <p className="text-white/30 text-sm mt-2">
            Each shows alternating dark → light → dark sections as the site would look
          </p>
        </div>
        {schemes.map((s) => (
          <SchemePreview key={s.label} s={s} />
        ))}
      </div>
    </div>
  );
}
