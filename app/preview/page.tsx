import Image from "next/image";

const GOLD = "#c9a86c";
const DARK = "#060606";
const CREAM = "#FAF5ED";
const CREAM_TEXT = "#1c160e";

export default function Preview() {
  return (
    <div style={{ fontFamily: "Georgia, serif" }}>

      {/* NAV */}
      <div style={{ background: DARK, padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span style={{ color: GOLD, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>Christina Steinhoff</span>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["About","Method","Services","Testimonials","Contact"].map(l => (
            <span key={l} style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase" }}>{l}</span>
          ))}
          <span style={{ background: GOLD, color: DARK, fontSize: 10, padding: "8px 20px", borderRadius: 999, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: 500 }}>Book a Call</span>
        </div>
      </div>

      {/* HERO */}
      <div style={{ background: DARK, minHeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center", padding: "80px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,108,0.07), transparent)", pointerEvents: "none" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div style={{ height: 1, width: 40, background: `${GOLD}44` }} />
          <span style={{ color: `${GOLD}99`, fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Private Life Mentorship · Dubai</span>
          <div style={{ height: 1, width: 40, background: `${GOLD}44` }} />
        </div>
        <h1 style={{ color: "white", fontSize: 88, fontWeight: 300, lineHeight: 1.02, margin: "0 0 24px", letterSpacing: "-1px" }}>
          Peace. <em style={{ color: GOLD, fontStyle: "italic" }}>Purpose.</em><br />Presence.
        </h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 18, fontWeight: 300, maxWidth: 460, lineHeight: 1.7, margin: "0 0 48px", fontFamily: "sans-serif" }}>
          For executives and entrepreneurs ready to lead from alignment — not adrenaline.
        </p>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <span style={{ background: GOLD, color: DARK, padding: "14px 36px", borderRadius: 999, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: 500 }}>Book a Discovery Call</span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Discover the method ↓</span>
        </div>
        <div style={{ display: "flex", gap: 0, alignItems: "center", marginTop: 64 }}>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "sans-serif", marginRight: 24 }}>As seen in</span>
          {["UAE Times", "Khaleej Times", "Impactpreneur"].map(p => (
            <span key={p} style={{ color: "rgba(255,255,255,0.22)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "sans-serif", padding: "0 20px", borderRight: "1px solid rgba(255,255,255,0.1)" }}>{p}</span>
          ))}
        </div>
      </div>

      {/* BANNER */}
      <div style={{ background: `${GOLD}10`, borderTop: `1px solid ${GOLD}18`, borderBottom: `1px solid ${GOLD}18`, padding: "14px 40px", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 60, whiteSpace: "nowrap" }}>
          {["Science + Soul Fusion™","Neuroscience-Based Coaching","Executive Mentorship","Dubai's Elite Life Mentor","NLP & Hypnotherapy","Somatic Release","Conscious Leadership"].map((item, i) => (
            <span key={i} style={{ color: `${GOLD}99`, fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "sans-serif" }}>
              {item} <span style={{ color: `${GOLD}44`, marginLeft: 30 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div style={{ background: CREAM, padding: "100px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>
          {/* Photo */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: 16, overflow: "hidden", background: "#e8dfd3" }}>
              <Image src="https://christinasteinhoff.com/wp-content/uploads/2025/10/about-me.png" alt="Christina" fill style={{ objectFit: "cover", objectPosition: "top" }} unoptimized />
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, transparent, ${GOLD}80, transparent)` }} />
            </div>
            <div style={{ position: "absolute", bottom: -24, left: 16, right: 16, background: DARK, borderRadius: 16, padding: "20px 24px", display: "flex", justifyContent: "space-around" }}>
              {[["500+","Lives Transformed"],["10+","Years Experience"],["3","Continents"]].map(([n,l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ color: GOLD, fontSize: 28, fontWeight: 300 }}>{n}</div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ height: 1, width: 28, background: `${GOLD}44` }} />
              <span style={{ color: `${GOLD}bb`, fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", fontFamily: "sans-serif" }}>About Christina</span>
            </div>
            <h2 style={{ color: CREAM_TEXT, fontSize: 48, fontWeight: 300, lineHeight: 1.15, margin: "0 0 32px" }}>
              Success without peace<br />
              <em style={{ color: GOLD }}>is just expensive chaos.</em>
            </h2>
            <p style={{ color: `${CREAM_TEXT}88`, fontSize: 15, lineHeight: 1.75, margin: "0 0 20px", fontFamily: "sans-serif", fontWeight: 300 }}>
              I work with the world's most driven executives and entrepreneurs — people who have built remarkable outer success, yet still feel the quiet ache of misalignment between achievement and fulfilment.
            </p>
            <p style={{ color: `${CREAM_TEXT}88`, fontSize: 15, lineHeight: 1.75, margin: "0 0 36px", fontFamily: "sans-serif", fontWeight: 300 }}>
              My Science + Soul Fusion™ method combines the precision of neuroscience and NLP with somatic healing and spiritual alignment — not incremental improvement, but a complete transformation.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {["Certified NLP Practitioner","Clinical Hypnotherapist","Neuroscience-Based Coaching","Spiritual Integration"].map(c => (
                <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: GOLD, marginTop: 7, flexShrink: 0 }} />
                  <span style={{ color: `${CREAM_TEXT}66`, fontSize: 13, fontFamily: "sans-serif" }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* METHOD */}
      <div style={{ background: DARK, padding: "100px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,108,0.05), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end", marginBottom: 64 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ height: 1, width: 28, background: `${GOLD}44` }} />
                <span style={{ color: `${GOLD}88`, fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", fontFamily: "sans-serif" }}>The Method</span>
              </div>
              <h2 style={{ color: "white", fontSize: 60, fontWeight: 300, lineHeight: 1.1, margin: 0 }}>
                Science + Soul<br /><em style={{ color: GOLD }}>Fusion™</em>
              </h2>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 15, lineHeight: 1.75, fontFamily: "sans-serif", fontWeight: 300, margin: 0 }}>
              Four integrated pillars that dissolve the gap between your highest ambitions and your deepest sense of peace. No surface-level tactics — only permanent transformation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              ["01","Neuroscience","Rewire the neural patterns driving reactive behaviour, decision fatigue, and chronic stress. We work at the biology level — changing how your brain actually fires."],
              ["02","NLP & Hypnotherapy","Access the subconscious programs running your identity and performance. Reprogram limiting beliefs before they cost you another decade of results."],
              ["03","Somatic Release","Trauma and tension live in the body, not just the mind. Emotional release work clears the physiological charge keeping you stuck in old cycles."],
              ["04","Soul Alignment","Reconnect with your authentic vision and values. When strategy aligns with essence, you stop grinding and start flowing."],
            ].map(([n, title, body]) => (
              <div key={n} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 32, display: "flex", gap: 24 }}>
                <span style={{ color: `${GOLD}25`, fontSize: 44, fontWeight: 300, lineHeight: 1, flexShrink: 0, marginTop: 4 }}>{n}</span>
                <div>
                  <div style={{ color: "white", fontSize: 18, fontWeight: 300, marginBottom: 12 }}>{title}</div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 14, lineHeight: 1.7, fontFamily: "sans-serif", fontWeight: 300 }}>{body}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 80, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 56, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, fontWeight: 300, fontStyle: "italic", maxWidth: 600, margin: "0 auto", lineHeight: 1.5 }}>
              "Luxury is alignment. Power is presence. <span style={{ color: GOLD, fontStyle: "normal" }}>Success is both."</span>
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ background: CREAM, padding: "100px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ height: 1, width: 28, background: `${GOLD}44` }} />
              <span style={{ color: `${GOLD}bb`, fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Services</span>
            </div>
            <h2 style={{ color: CREAM_TEXT, fontSize: 60, fontWeight: 300, margin: 0 }}>
              Choose your <em style={{ color: GOLD }}>path</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                ["1:1 Private","Personal Life Mentorship",true],
                ["Executive","High Performance Coaching",false],
                ["Couples & Individuals","Conscious Relationships",false],
                ["Immersive","Bespoke Retreat",false],
              ].map(([tag,title,active]) => (
                <div key={title as string} style={{ padding: "16px 20px", borderRadius: 12, border: `1px solid ${active ? `${GOLD}40` : `${CREAM_TEXT}12`}`, background: active ? `${GOLD}10` : "rgba(255,255,255,0.5)` "}}>
                  <div style={{ color: `${GOLD}88`, fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: 4 }}>{tag}</div>
                  <div style={{ color: active ? CREAM_TEXT : `${CREAM_TEXT}66`, fontSize: 14, fontWeight: 300, fontFamily: "sans-serif" }}>{title}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "white", borderRadius: 16, border: `1px solid ${CREAM_TEXT}12`, padding: 48 }}>
              <div style={{ color: `${GOLD}88`, fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: "sans-serif", marginBottom: 12 }}>1:1 Private</div>
              <h3 style={{ color: CREAM_TEXT, fontSize: 32, fontWeight: 300, margin: "0 0 24px" }}>Personal Life Mentorship</h3>
              <p style={{ color: `${CREAM_TEXT}77`, fontSize: 15, lineHeight: 1.75, fontFamily: "sans-serif", fontWeight: 300, margin: "0 0 32px" }}>
                Deeply personal and completely bespoke. We work on the core patterns holding you back — identity, purpose, relationships, and the subconscious contracts you've made with struggle. For those ready to transform from the inside out.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {["Core values & vision clarity","Subconscious reprogramming","Emotional mastery","Life redesign"].map(o => (
                  <div key={o} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />
                    <span style={{ color: `${CREAM_TEXT}66`, fontSize: 13, fontFamily: "sans-serif" }}>{o}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 40 }}>
                <span style={{ color: GOLD, fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Book a discovery call →</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ background: DARK, padding: "100px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(201,168,108,0.05), transparent)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ height: 1, width: 28, background: `${GOLD}44` }} />
            <span style={{ color: `${GOLD}88`, fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Transformations</span>
            <div style={{ height: 1, width: 28, background: `${GOLD}44` }} />
          </div>
          <h2 style={{ color: "white", fontSize: 52, fontWeight: 300, margin: "0 0 60px" }}>
            Real people. <em style={{ color: GOLD }}>Real results.</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 22, fontWeight: 300, fontStyle: "italic", lineHeight: 1.65, margin: "0 0 36px" }}>
            "Christina's mentorship redefined success for me. I no longer chase results — I create from alignment. My business doubled, but more importantly, I came home to myself."
          </p>
          <div style={{ marginBottom: 48 }}>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, fontFamily: "sans-serif", fontWeight: 300, marginBottom: 4 }}>Ahmed R.</div>
            <div style={{ color: "rgba(255,255,255,0.28)", fontSize: 12, fontFamily: "sans-serif" }}>CEO, Dubai</div>
            <div style={{ display: "inline-block", marginTop: 12, padding: "3px 12px", borderRadius: 999, border: `1px solid ${GOLD}30`, color: `${GOLD}77`, fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Burnout → Balance</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
            <div style={{ width: 24, height: 3, borderRadius: 2, background: GOLD }} />
            {[0,1,2,3].map(i => <div key={i} style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />)}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: DARK, padding: "120px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,108,0.06), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`, backgroundSize: "72px 72px", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 32 }}>
            <div style={{ height: 1, width: 28, background: `${GOLD}44` }} />
            <span style={{ color: `${GOLD}77`, fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Begin Here</span>
            <div style={{ height: 1, width: 28, background: `${GOLD}44` }} />
          </div>
          <h2 style={{ color: "white", fontSize: 72, fontWeight: 300, lineHeight: 1.05, margin: "0 0 32px" }}>
            Ready to stop <em style={{ color: GOLD }}>surviving</em><br />your success?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 16, lineHeight: 1.7, fontFamily: "sans-serif", fontWeight: 300, margin: "0 0 48px", maxWidth: 420, marginLeft: "auto", marginRight: "auto" }}>
            Book a complimentary discovery session. Limited availability — only accepting clients who are truly ready.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24 }}>
            <span style={{ background: GOLD, color: DARK, padding: "16px 40px", borderRadius: 999, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", fontWeight: 500 }}>Book a Discovery Call</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif" }}>mail@christinasteinhoff.com</span>
          </div>
        </div>
      </div>

    </div>
  );
}
