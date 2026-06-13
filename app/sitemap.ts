import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { ARTICLES } from "@/lib/blog-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    { url: SITE.url, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/executive-coaching-dubai`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/group-workshop`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/faq`, priority: 0.6, changeFrequency: "monthly" as const },
  ].map((p) => ({ ...p, lastModified: now }));

  const blogPages = ARTICLES.map((a) => ({
    url: `${SITE.url}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
