"use client";
import { SITE, SOCIAL, CALENDLY } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-14">
          {/* Brand */}
          <div>
            <p className="text-[#c9a86c] text-sm tracking-[0.2em] uppercase mb-4 font-light"
               style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
              Christina Steinhoff
            </p>
            <p className="text-white/45 text-sm font-light leading-relaxed max-w-xs mb-5">
              Private mentorship for executives and entrepreneurs. Science + Soul Fusion™. Based in Dubai, working globally.
            </p>
            {/* Contact */}
            <div className="space-y-2.5 mb-5">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-white/45 hover:text-[#c9a86c] text-xs transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-white/45 hover:text-[#c9a86c] text-xs transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden><path d="M3 5a2 2 0 0 1 2-2h2.5a1 1 0 0 1 1 .76l1 4a1 1 0 0 1-.29.95l-1.8 1.6a14 14 0 0 0 6 6l1.6-1.8a1 1 0 0 1 .95-.29l4 1a1 1 0 0 1 .76 1V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5Z"/></svg>
                {SITE.phone}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white/45 hover:text-[#c9a86c] text-xs transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.461 1.062 2.96.85 3.494.798.534-.052 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"/></svg>
                WhatsApp
              </a>
            </div>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1.5 text-[#c9a86c]/60 text-xs tracking-widest uppercase hover:text-[#c9a86c] transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a86c]/50 animate-pulse" />
              Book a call
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                ["Life Coach in Dubai", "/life-coach-dubai"],
                ["Executive Coach in Dubai", "/executive-coaching-dubai"],
                ["Emotional Healing Coaching", "/emotional-healing-dubai"],
                ["Women's Coach in Dubai", "/group-workshop"],
                ["Conscious Relationships", "/#services"],
                ["Bespoke Retreat", "/#services"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/60 hover:text-[#c9a86c] text-sm font-light transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                ["About", "/#about"],
                ["The Method", "/#method"],
                ["Press", "/#press"],
                ["Blog", "/blog"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/60 hover:text-[#c9a86c] text-sm font-light transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white/40 text-[9px] tracking-[0.4em] uppercase mb-5">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer"
                   className="text-white/60 hover:text-[#c9a86c] text-sm font-light transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  Instagram
                </a>
              </li>
              <li>
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-white/60 hover:text-[#c9a86c] text-sm font-light transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer"
                   className="text-white/60 hover:text-[#c9a86c] text-sm font-light transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                   className="text-white/60 hover:text-[#c9a86c] text-sm font-light transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}
                   className="text-white/60 hover:text-[#c9a86c] text-sm font-light transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-white/45 text-xs">© 2026 Christina Steinhoff · {SITE.location}</span>
          <div className="flex gap-6">
            {[["Privacy", "/privacy"], ["Terms", "/terms"]].map(([label, href]) => (
              <a key={label} href={href} className="text-white/45 hover:text-[#c9a86c] text-xs transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
