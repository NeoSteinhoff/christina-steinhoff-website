import Image from "next/image";
import { CALENDLY, SOCIAL, SITE } from "@/lib/constants";

export default function V2() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#ffffff", color: "#0d0d0d" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: 60, background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: "0.02em", color: "#0d0d0d" }}>Christina Steinhoff</span>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {["About","Method","Services","Contact"].map(l => (
            <span key={l} style={{ fontSize: 13, color: "#666", cursor: "pointer" }}>{l}</span>
          ))}
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ background: "#0d0d0d", color: "white", fontSize: 13, padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 500 }}>Book a call</a>
        </div>
      </nav>

      {/* HERO — full bleed cinematic */}
      <div style={{ position: "relative", height: "100vh", minHeight: 700, overflow: "hidden" }}>
        {/* Background image */}
        <Image
          src="https://christinasteinhoff.com/wp-content/uploads/2025/10/about-me.png"
          alt="Christina Steinhoff"
          fill
          style={{ objectFit: "cover", objectPosition: "center top", filter: "brightness(0.45)" }}
          unoptimized
          priority
        />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)" }} />

        {/* Text content */}
        <div style={{ position: "absolute", bottom: 80, left: 0, right: 0, padding: "0 80px", maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20, fontWeight: 400 }}>
            Private Mentorship · Dubai
          </p>
          <h1 style={{ color: "white", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 300, lineHeight: 1.0, margin: "0 0 32px", letterSpacing: "-2px", fontFamily: "Georgia, serif", maxWidth: 700 }}>
            Lead from<br />
            <em style={{ fontStyle: "italic", color: "#d4b880" }}>alignment,</em><br />
            not exhaustion.
          </h1>
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ background: "white", color: "#0d0d0d", padding: "14px 32px", borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em" }}>
              Book a discovery call
            </a>
            <a href="#about" style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2 }}>
              Learn about the method ↓
            </a>
          </div>
        </div>

        {/* Press strip */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)", padding: "14px 80px", display: "flex", alignItems: "center", gap: 32 }}>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>As seen in</span>
          <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }} />
          {["UAE Times", "Khaleej Times", "Impactpreneur Magazine"].map(p => (
            <span key={p} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, fontWeight: 400, whiteSpace: "nowrap" }}>{p}</span>
          ))}
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{ background: "#0d0d0d", padding: "48px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 0 }}>
          {[
            ["500+", "Lives transformed"],
            ["10+", "Years of expertise"],
            ["3", "Continents served"],
            ["∞", "Potential unlocked"],
          ].map(([n, l], i) => (
            <div key={n} style={{ padding: "0 40px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none", textAlign: "center" }}>
              <div style={{ color: "#d4b880", fontSize: 52, fontWeight: 200, fontFamily: "Georgia, serif", lineHeight: 1, marginBottom: 8 }}>{n}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT — split layout */}
      <div id="about" style={{ padding: "120px 80px", maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <p style={{ color: "#999", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24, fontWeight: 500 }}>About</p>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 300, lineHeight: 1.2, fontFamily: "Georgia, serif", margin: "0 0 32px", letterSpacing: "-1px" }}>
            Success without alignment is just <em style={{ fontStyle: "italic", color: "#c9a86c" }}>expensive chaos.</em>
          </h2>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, margin: "0 0 20px", fontWeight: 300 }}>
            I work with the world's most driven executives and entrepreneurs — people who have built remarkable outer success, yet still feel the quiet ache of misalignment.
          </p>
          <p style={{ color: "#555", fontSize: 16, lineHeight: 1.8, margin: "0 0 40px", fontWeight: 300 }}>
            My Science + Soul Fusion™ method combines neuroscience, NLP, somatic release, and spiritual alignment into one bespoke programme — built entirely around you.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["NLP Practitioner", "Clinical Hypnotherapist", "Neuroscience Coaching", "Spiritual Integration"].map(c => (
              <span key={c} style={{ padding: "6px 14px", border: "1px solid #e0e0e0", borderRadius: 6, fontSize: 12, color: "#555", fontWeight: 400 }}>{c}</span>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/5", background: "#f5f0e8" }}>
          <Image
            src="https://christinasteinhoff.com/wp-content/uploads/2025/10/about-me.png"
            alt="Christina Steinhoff"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            unoptimized
          />
          {/* Subtle colour wash */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(201,168,108,0.08) 0%, transparent 60%)" }} />
        </div>
      </div>

      {/* METHOD — dark editorial */}
      <div id="method" style={{ background: "#0a0a0a", padding: "100px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, marginBottom: 64, alignItems: "end" }}>
            <div>
              <p style={{ color: "#666", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>The Method</p>
              <h2 style={{ color: "white", fontSize: 48, fontWeight: 300, fontFamily: "Georgia, serif", margin: 0, lineHeight: 1.1, letterSpacing: "-1px" }}>
                Science +<br /><em style={{ color: "#c9a86c" }}>Soul Fusion™</em>
              </h2>
            </div>
            <p style={{ color: "#666", fontSize: 17, lineHeight: 1.75, fontWeight: 300, margin: 0, alignSelf: "end" }}>
              Four integrated pillars that dissolve the gap between your highest ambitions and your deepest sense of peace. This isn't coaching — it's complete transformation.
            </p>
          </div>

          {/* Feature cards — horizontal */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {[
              ["01", "Neuroscience", "Rewire the neural patterns driving burnout, reactivity, and decision fatigue at the biological level."],
              ["02", "NLP & Hypnotherapy", "Access and reprogram the subconscious beliefs limiting your identity, performance, and relationships."],
              ["03", "Somatic Release", "Clear the physiological charge of trauma and tension that keeps you locked in old cycles."],
              ["04", "Soul Alignment", "Reconnect with your authentic vision. When essence meets strategy, effort transforms into flow."],
            ].map(([n, title, body]) => (
              <div key={n} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ color: "rgba(201,168,108,0.3)", fontSize: 12, fontWeight: 500, letterSpacing: "0.05em" }}>{n}</span>
                <h3 style={{ color: "white", fontSize: 16, fontWeight: 400, margin: 0, fontFamily: "Georgia, serif" }}>{title}</h3>
                <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7, margin: 0, fontWeight: 300 }}>{body}</p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div style={{ marginTop: 80, padding: "60px 0", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 28, fontWeight: 300, fontStyle: "italic", fontFamily: "Georgia, serif", maxWidth: 700, margin: "0 auto", lineHeight: 1.5, letterSpacing: "-0.5px" }}>
              "Luxury is alignment. Power is presence. Success is{" "}
              <span style={{ color: "#c9a86c", fontStyle: "normal" }}>both.</span>"
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES — clean cards */}
      <div id="services" style={{ padding: "100px 80px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 60 }}>
            <p style={{ color: "#999", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16, fontWeight: 500 }}>Services</p>
            <h2 style={{ fontSize: 48, fontWeight: 300, fontFamily: "Georgia, serif", margin: 0, letterSpacing: "-1px" }}>
              Choose your <em style={{ color: "#c9a86c" }}>path forward</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {[
              ["Personal Life Mentorship", "1:1 Private", "The deepest, most transformational work. Bespoke to your unique patterns, identity, and vision. For those who are truly ready to change everything.", ["Core values & vision", "Subconscious work", "Emotional mastery", "Life redesign"]],
              ["High Performance Coaching", "Executive", "For leaders operating at the edge of capacity. We redefine peak performance — from adrenaline-based hustle to sustainable, alignment-driven excellence.", ["Burnout dissolution", "Decision clarity", "Leadership presence", "Sustainable peak state"]],
              ["Conscious Relationship Coaching", "Couples & Individuals", "The most overlooked driver of performance. Heal attachment wounds, deepen communication, and build the intimacy that fuels everything else.", ["Attachment healing", "Deep intimacy", "Communication", "Partnership alignment"]],
              ["Bespoke Retreat", "Immersive · Dubai", "Multi-day private experience for those who want transformational results in compressed time. The deepest single experience we offer.", ["Full immersion", "Rapid transformation", "Luxury setting", "Complete life audit"]],
            ].map(([title, tag, body, outcomes]) => (
              <div key={title as string} style={{ background: "white", border: "1px solid #e8e8e8", borderRadius: 16, padding: 40, display: "flex", flexDirection: "column", gap: 0 }}>
                <span style={{ color: "#999", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12, display: "block" }}>{tag}</span>
                <h3 style={{ fontSize: 22, fontWeight: 400, fontFamily: "Georgia, serif", margin: "0 0 16px", letterSpacing: "-0.3px" }}>{title}</h3>
                <p style={{ color: "#777", fontSize: 14, lineHeight: 1.75, fontWeight: 300, margin: "0 0 24px", flex: 1 }}>{body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
                  {(outcomes as string[]).map(o => (
                    <span key={o} style={{ fontSize: 11, color: "#999", background: "#f5f5f5", padding: "4px 10px", borderRadius: 4 }}>{o}</span>
                  ))}
                </div>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ color: "#c9a86c", fontSize: 13, fontWeight: 500, textDecoration: "none", letterSpacing: "0.02em" }}>
                  Book a discovery call →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ background: "#0d0d0d", padding: "100px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#666", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Transformations</p>
          <h2 style={{ color: "white", fontSize: 48, fontWeight: 300, fontFamily: "Georgia, serif", margin: "0 0 60px", letterSpacing: "-1px" }}>
            Real people. <em style={{ color: "#c9a86c" }}>Real results.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              ["Ahmed R.", "CEO, Dubai", "Burnout → Balance", "Christina's mentorship redefined success for me. I no longer chase results — I create from alignment. My business doubled and I found myself again."],
              ["Layla M.", "Creative Founder", "Overthinking → Clarity", "I was trapped in my own head. After working with Christina, I lead from intuition. The creative clarity I have now is unlike anything I've experienced."],
              ["James T.", "Finance Executive", "Self-Doubt → Mastery", "Fifteen years in finance and I was running on empty. Christina helped dissolve the self-doubt that silently limited my career. Promoted within six months."],
            ].map(([name, role, arc, quote]) => (
              <div key={name as string} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: 32 }}>
                <span style={{ display: "inline-block", padding: "3px 10px", background: "rgba(201,168,108,0.1)", borderRadius: 4, fontSize: 10, color: "#c9a86c", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>{arc}</span>
                <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.75, fontWeight: 300, fontStyle: "italic", margin: "0 0 28px", fontFamily: "Georgia, serif" }}>"{quote}"</p>
                <div>
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500 }}>{name}</div>
                  <div style={{ color: "#555", fontSize: 12, marginTop: 2 }}>{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div id="contact" style={{ background: "white", padding: "120px 80px", textAlign: "center", borderTop: "1px solid #f0f0f0" }}>
        <p style={{ color: "#999", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>Ready to begin?</p>
        <h2 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300, fontFamily: "Georgia, serif", margin: "0 0 24px", letterSpacing: "-1.5px", lineHeight: 1.05 }}>
          Stop surviving your success.<br />
          <em style={{ color: "#c9a86c" }}>Start living it.</em>
        </h2>
        <p style={{ color: "#777", fontSize: 17, lineHeight: 1.75, maxWidth: 480, margin: "0 auto 48px", fontWeight: 300 }}>
          Book a complimentary 30-minute discovery session. Limited availability — only accepting clients who are truly ready.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ background: "#0d0d0d", color: "white", padding: "16px 40px", borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em" }}>
            Book a discovery call
          </a>
          <a href="mailto:mail@christinasteinhoff.com" style={{ color: "#999", fontSize: 14, textDecoration: "none", borderBottom: "1px solid #ddd", paddingBottom: 2 }}>
            mail@christinasteinhoff.com
          </a>
        </div>
        <p style={{ color: "#bbb", fontSize: 12, marginTop: 32 }}>Dubai, UAE · Working globally</p>
      </div>

      {/* FOOTER */}
      <div style={{ background: "#0a0a0a", padding: "60px 80px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <p style={{ color: "white", fontSize: 14, fontWeight: 500, marginBottom: 12 }}>Christina Steinhoff</p>
            <p style={{ color: "#555", fontSize: 13, lineHeight: 1.7, maxWidth: 260, marginBottom: 16 }}>Private mentorship for executives and entrepreneurs. Science + Soul Fusion™.</p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ color: "#c9a86c", fontSize: 13, textDecoration: "none" }}>Book a call →</a>
          </div>
          {[["Services",["Personal Mentorship","High Performance","Relationships","Bespoke Retreat"]],["Explore",["About","Method","Blog","FAQ"]],["Connect",["Instagram","LinkedIn","WhatsApp","Email"]]].map(([h, items]) => (
            <div key={h as string}>
              <p style={{ color: "#444", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>{h}</p>
              {(items as string[]).map(item => (
                <div key={item} style={{ marginBottom: 10 }}>
                  <span style={{ color: "#555", fontSize: 13, cursor: "pointer" }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "#444", fontSize: 12 }}>© 2026 Christina Steinhoff. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy","Terms"].map(i => <span key={i} style={{ color: "#444", fontSize: 12, cursor: "pointer" }}>{i}</span>)}
          </div>
        </div>
      </div>

    </div>
  );
}
