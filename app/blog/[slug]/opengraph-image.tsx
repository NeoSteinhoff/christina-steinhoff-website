import { ImageResponse } from "next/og";
import { getArticle } from "@/lib/blog-content";

export const alt = "Christina Steinhoff — Journal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);

  const category = a?.category ?? "Journal";
  const title = a?.title ?? "Christina Steinhoff — Journal";
  const readingTime = a?.readingTime ?? "";

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
              {category}
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
            Journal
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f2ede4",
              fontSize: title.length > 60 ? 56 : 72,
              lineHeight: 1.08,
              letterSpacing: -1,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 28,
              color: "rgba(255,255,255,0.55)",
              fontSize: 26,
              maxWidth: 760,
            }}
          >
            {`Christina Steinhoff${readingTime ? ` · ${readingTime}` : ""}`}
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
