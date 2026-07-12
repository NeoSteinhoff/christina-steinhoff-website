"use client";
import { motion, useReducedMotion } from "framer-motion";
import { PRESS } from "@/lib/constants";

const dateFmt = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" });

export function Press() {
  const reduce = useReducedMotion();
  return (
    <section id="press" className="relative overflow-hidden bg-[#060606] py-24 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.05] blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70"
        >
          As Featured In
        </motion.span>

        <div className="mt-10 flex flex-col items-center gap-8">
          {PRESS.map((p, i) => (
            <motion.a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group block"
            >
              <span
                className="text-3xl font-medium text-white transition-colors group-hover:text-[#c9a86c] md:text-4xl"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {p.outlet}
              </span>
              <span className="mt-3 block max-w-xl text-base font-light leading-relaxed text-white/65">
                &ldquo;{p.title}&rdquo;
              </span>
              <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/40">
                By {p.author} · {dateFmt.format(new Date(p.date))}
                <span className="text-[#c9a86c]/70 transition-transform group-hover:translate-x-1">→</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
