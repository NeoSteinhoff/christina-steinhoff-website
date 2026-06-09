import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BLOG_POSTS, CALENDLY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Insights on Mindset, Leadership & Transformation",
  description:
    "Articles on mindset coaching, neuroscience, executive performance, and conscious living by Christina Steinhoff — Dubai's leading life mentor.",
  alternates: { canonical: "https://christinasteinhoff.com/blog" },
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="bg-[#FAF5ED] min-h-screen">
      <Navbar />

      {/* Hero */}
      <div className="bg-[#060606] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-7 bg-[#c9a86c]/30" />
            <span className="text-[#c9a86c]/60 text-[10px] tracking-[0.45em] uppercase">Insights</span>
            <span className="h-px w-7 bg-[#c9a86c]/30" />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
            Ideas worth <em className="text-[#c9a86c]">living by</em>
          </h1>
          <p className="text-white/40 font-light max-w-lg mx-auto">
            Insights on mindset, neuroscience, conscious leadership, and the science of lasting transformation.
          </p>
        </div>
      </div>

      {/* Featured post */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 mb-16">
        <a href={featured.url} target="_blank" rel="noopener noreferrer"
           className="group block rounded-2xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto bg-[#e8dfd3]">
              <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase border border-[#c9a86c]/30 text-[#c9a86c]">
                {featured.category} · Featured
              </span>
              <h2 className="text-2xl md:text-3xl font-light text-[#1c160e] leading-tight mb-4"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                {featured.title}
              </h2>
              <p className="text-[#1c160e]/50 font-light leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#1c160e]/35 text-xs">{featured.date}</span>
                <span className="text-[#c9a86c] text-xs tracking-widest uppercase group-hover:gap-4 transition-all">
                  Read article →
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <a key={post.slug} href={post.url} target="_blank" rel="noopener noreferrer"
               className="group bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/10] bg-[#e8dfd3] overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-7">
                <span className="inline-block mb-3 px-2.5 py-0.5 rounded-full text-[9px] tracking-widest uppercase border border-[#c9a86c]/25 text-[#c9a86c]/70">
                  {post.category}
                </span>
                <h3 className="text-[#1c160e] font-light leading-snug mb-3 text-lg"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
                  {post.title}
                </h3>
                <p className="text-[#1c160e]/45 text-sm font-light leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#1c160e]/30 text-xs">{post.date}</span>
                  <span className="text-[#c9a86c]/70 text-xs tracking-widest uppercase">Read →</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load more — links to original blog */}
        <div className="text-center mt-14">
          <a href="https://christinasteinhoff.com/blog/" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#1c160e]/15 text-[#1c160e]/60 text-[11px] tracking-widest uppercase rounded-full hover:border-[#c9a86c]/40 hover:text-[#c9a86c] transition-all">
            View all articles →
          </a>
        </div>
      </div>

      {/* CTA strip */}
      <div className="bg-[#060606] py-20 px-6 text-center">
        <p className="text-white/40 text-sm font-light mb-4">Ready to go deeper than articles?</p>
        <h2 className="text-3xl font-light text-white mb-8"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}>
          Book a complimentary <em className="text-[#c9a86c]">discovery session</em>
        </h2>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
           className="inline-flex px-9 py-4 bg-[#c9a86c] text-[#060606] text-[11px] tracking-[0.2em] uppercase font-medium rounded-full hover:bg-[#d4b880] transition-colors">
          Book a Discovery Call
        </a>
      </div>

      <Footer />
    </div>
  );
}
