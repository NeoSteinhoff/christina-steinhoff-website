"use client";
import { CALENDLY } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";



const links = [
  { label: "About", href: "/#about" },
  { label: "Method", href: "/#method" },
  { label: "Services", href: "/#services" },
  { label: "Executive", href: "/executive-coaching-dubai" },
  { label: "Workshops", href: "/group-workshop" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const mobileOnlyLinks = [{ label: "FAQ", href: "/faq" }];

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  useEffect(() => {
    const sectionIds = ["about", "method", "services", "testimonials", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-[#060606]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-[#c9a86c] font-light tracking-[0.2em] text-xs uppercase"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Christina Steinhoff
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const sectionId = link.href.startsWith("/#") ? link.href.slice(2) : link.href;
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[10px] tracking-[0.3em] uppercase transition-colors relative",
                  isActive ? "text-[#c9a86c]" : "text-white/65 hover:text-white/75"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c9a86c]" />
                )}
              </a>
            );
          })}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-[#c9a86c] text-[#060606] text-[10px] tracking-[0.2em] uppercase rounded-full hover:bg-[#d4b880] transition-colors font-medium"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/50 hover:text-white p-1"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-[5px] w-5">
            <span className={cn("h-px bg-current transition-all origin-center", open && "rotate-45 translate-y-[7px]")} />
            <span className={cn("h-px bg-current transition-all", open && "opacity-0 scale-x-0")} />
            <span className={cn("h-px bg-current transition-all origin-center", open && "-rotate-45 -translate-y-[7px]")} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#060606]/96 backdrop-blur border-t border-white/5 px-6 py-6 flex flex-col gap-4"
        >
          {[...links, ...mobileOnlyLinks].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/50 hover:text-white text-[11px] tracking-[0.3em] uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center px-5 py-3 bg-[#c9a86c] text-[#060606] text-[10px] tracking-[0.2em] uppercase rounded-full font-medium"
          >
            Book a Discovery Call
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
