import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ARTICLES } from "@/lib/blog-content";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Journal — Mindset, Emotional Mastery & Leadership",
  description:
    "Essays on mindset, emotional mastery, subconscious change, and conscious leadership by Christina Steinhoff — executive and emotional mastery coach in Dubai.",
  alternates: { canonical: `${SITE.url}/blog` },
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function BlogPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <div className="min-h-screen bg-[#f7f1e7]">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden bg-[#060606] px-6 pb-20 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.06] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/75">The Journal</span>
          <h1
            className="mt-5 text-[clamp(2.6rem,6vw,4.75rem)] font-light leading-[1.0] text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Ideas worth <em className="font-medium text-[#c9a86c]">living by</em>
          </h1>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/60">
            On mindset, emotional mastery, the subconscious, and the inner work behind outer success.
          </p>
        </div>
      </div>

      {/* Featured */}
      <div className="mx-auto -mt-10 max-w-6xl px-6">
        <Link href={`/blog/${featured.slug}`} className="group block">
          <div className="grid overflow-hidden rounded-3xl border border-[#1c160e]/8 bg-white md:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#e8dfd3] md:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-9 md:p-12">
              <div className="mb-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em]">
                <span className="rounded-full bg-[#c9a86c]/12 px-3 py-1 text-[#a8884e]">{featured.category}</span>
                <span className="text-[#1c160e]/40">{featured.readingTime}</span>
              </div>
              <h2
                className="text-3xl font-light leading-tight text-[#1c160e] md:text-4xl"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {featured.title}
              </h2>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-[#1c160e]/65">{featured.dek}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#a8884e] transition-all group-hover:gap-3.5">
                Read the essay
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-x-7 gap-y-12 md:grid-cols-3">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="relative mb-5 aspect-[16/11] overflow-hidden rounded-2xl bg-[#e8dfd3]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mb-2.5 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em]">
                <span className="text-[#a8884e]">{post.category}</span>
                <span className="text-[#1c160e]/35">{fmtDate(post.date)}</span>
              </div>
              <h3
                className="text-xl font-light leading-snug text-[#1c160e] transition-colors group-hover:text-[#a8884e]"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {post.title}
              </h3>
              <p className="mt-2.5 text-sm font-light leading-relaxed text-[#1c160e]/60">{post.dek}</p>
            </Link>
          ))}
        </div>
      </div>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
