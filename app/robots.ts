import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/mockup", "/preview", "/v2"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
