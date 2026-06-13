import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ARTICLES, getArticle } from "@/lib/blog-content";
import { SITE, CALENDLY } from "@/lib/constants";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${SITE.url}/blog/${a.slug}`;
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: a.metaTitle,
      description: a.metaDescription,
      url,
      publishedTime: a.date,
      authors: ["Christina Steinhoff"],
      // og:image inherits the site's generated PNG card (SVGs don't render on most platforms)
    },
    twitter: { card: "summary_large_image", title: a.metaTitle, description: a.metaDescription },
  };
}

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const url = `${SITE.url}/blog/${a.slug}`;
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: a.title,
        description: a.metaDescription,
        image: a.image,
        datePublished: a.date,
        dateModified: a.date,
        articleSection: a.category,
        keywords: a.keyword,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: {
          "@type": "Person",
          name: "Christina Steinhoff",
          jobTitle: "Life Mentor & Executive Coach",
          url: SITE.url,
        },
        publisher: {
          "@type": "Organization",
          name: "Christina Steinhoff",
          url: SITE.url,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: a.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
          { "@type": "ListItem", position: 3, name: a.title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f7f1e7]">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="relative overflow-hidden bg-[#060606] px-6 pb-16 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.06] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#c9a86c]/75">
            <Link href="/blog" className="hover:text-[#c9a86c]">Journal</Link>
            <span className="text-white/25">/</span>
            <span className="text-white/45">{a.category}</span>
          </div>
          <h1
            className="text-[clamp(2.1rem,5vw,3.6rem)] font-light leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            {a.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-white/65">{a.dek}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/45">
            <span className="text-white/70">Christina Steinhoff</span>
            <span className="h-3 w-px bg-white/20" />
            <time dateTime={a.date}>{fmtDate(a.date)}</time>
            <span className="h-3 w-px bg-white/20" />
            <span>{a.readingTime}</span>
          </div>
        </div>
      </header>

      {/* Cover image */}
      <div className="mx-auto -mt-8 max-w-4xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#e8dfd3] shadow-xl shadow-black/10">
          <Image src={a.image} alt={a.title} fill sizes="(max-width: 1024px) 92vw, 900px" className="object-cover" priority />
        </div>
      </div>

      {/* Body */}
      <article className="mx-auto max-w-2xl px-6 py-16">
        {/* Key takeaways */}
        <aside className="mb-12 rounded-2xl border border-[#1c160e]/10 bg-white p-7">
          <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#a8884e]">Key takeaways</p>
          <ul className="space-y-3">
            {a.keyTakeaways.map((k) => (
              <li key={k} className="flex gap-3 text-[15px] font-light leading-relaxed text-[#1c160e]/80">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#c9a86c]" />
                {k}
              </li>
            ))}
          </ul>
        </aside>

        {a.sections.map((s) => (
          <section key={s.heading} className="mb-10">
            <h2
              className="mb-4 text-2xl font-medium text-[#1c160e] md:text-[1.7rem]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              {s.heading}
            </h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="mb-4 text-[1.05rem] font-light leading-[1.75] text-[#1c160e]/80">
                {p}
              </p>
            ))}
            {s.bullets && (
              <ul className="mb-4 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[1.05rem] font-light leading-[1.7] text-[#1c160e]/80">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#c9a86c]" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* FAQ */}
        <section className="mt-14 border-t border-[#1c160e]/10 pt-12">
          <h2 className="mb-6 text-2xl font-medium text-[#1c160e]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
            Frequently asked
          </h2>
          <div className="space-y-6">
            {a.faq.map((f) => (
              <div key={f.q}>
                <h3 className="mb-1.5 text-base font-medium text-[#1c160e]">{f.q}</h3>
                <p className="text-[15px] font-light leading-relaxed text-[#1c160e]/75">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Author + CTA */}
        <section className="mt-14 rounded-2xl bg-[#0b0a08] p-8">
          <div className="flex items-start gap-5">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#c9a86c]/30 bg-[#1a1410] text-xl text-[#c9a86c]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              aria-hidden
            >
              CS
            </div>
            <div>
              <p className="text-sm font-medium text-white">Christina Steinhoff</p>
              <p className="mt-1 text-sm font-light leading-relaxed text-white/55">
                Life mentor and executive coach in Dubai. Creator of the Science + Soul Fusion™
                method. She works privately with founders and executives worldwide.
              </p>
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-[#c9a86c] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#0b0a08] transition-colors hover:bg-[#d8bd8a]"
              >
                Book a discovery call
              </a>
            </div>
          </div>
        </section>
      </article>

      {/* Related */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="mb-8 text-xl font-light text-[#1c160e]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
          Keep reading
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl bg-[#e8dfd3]">
                <Image src={r.image} alt={r.title} fill sizes="320px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#a8884e]">{r.category}</span>
              <h3 className="mt-1.5 text-lg font-light leading-snug text-[#1c160e] group-hover:text-[#a8884e]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                {r.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
