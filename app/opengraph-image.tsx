import { ImageResponse } from "next/og";

export const alt = "Christina Steinhoff — Executive & Emotional Mastery Coach, Dubai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(900px circle at 50% 18%, rgba(201,168,108,0.18), transparent 60%), #060606",
          padding: 64,
          fontFamily: "Georgia, serif",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 8, height: 8, borderRadius: 8, background: "#c9a86c" }} />
            <div style={{ color: "#c9a86c", fontSize: 22, letterSpacing: 6, textTransform: "uppercase" }}>
              Executive &amp; Emotional Mastery Coach
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
            Dubai
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#f2ede4", fontSize: 116, lineHeight: 1, letterSpacing: -2 }}>
            Christina
          </div>
          <div style={{ color: "#c9a86c", fontSize: 116, lineHeight: 1.02, letterSpacing: -2, fontStyle: "italic" }}>
            Steinhoff
          </div>
          <div
            style={{
              marginTop: 28,
              color: "rgba(255,255,255,0.62)",
              fontSize: 30,
              maxWidth: 760,
              lineHeight: 1.35,
            }}
          >
            Executive coaching for high-achieving women and leaders who want emotional mastery, resilient leadership, and success without burnout.
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#c9a86c", fontSize: 24, letterSpacing: 1 }}>Science + Soul Fusion™</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 24 }}>christinasteinhoff.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
