import { MetadataRoute } from "next";
import { SITE, BLOG_POSTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE.url, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/executive-coaching-dubai`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/group-workshop`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/blog`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${SITE.url}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE.url}/faq`, priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const blogPages = BLOG_POSTS.map((post) => ({
    url: post.url,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: new Date() })),
    ...blogPages,
  ];
}
