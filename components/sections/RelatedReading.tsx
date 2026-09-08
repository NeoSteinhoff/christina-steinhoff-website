import Link from "next/link";
import { RELATED_POSTS } from "@/lib/pillar-related-posts";

/**
 * Compact cross-link from a landing page into the relevant long-form blog
 * posts — gives search visitors who aren't ready to book a lower-commitment
 * path deeper into the site, and mirrors the existing blog -> landing link
 * pattern in app/blog/[slug]/page.tsx in the other direction.
 */
export function RelatedReading({ pillarSlug }: { pillarSlug: string }) {
  const posts = RELATED_POSTS[pillarSlug];
  if (!posts || posts.length === 0) return null;

  return (
    <section className="bg-[#f7f1e7] px-6 pb-20">
      <div className="mx-auto max-w-4xl border-t border-[#1c160e]/10 pt-10">
        <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#a8884e]">Related reading</p>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="text-sm font-medium text-[#1c160e]/70 underline underline-offset-4 decoration-[#c9a86c]/40 transition-colors hover:text-[#a8884e]"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
