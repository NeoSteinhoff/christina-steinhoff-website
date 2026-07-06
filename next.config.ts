import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root to silence the multi-lockfile workspace-root warning.
  turbopack: {
    root: __dirname,
  },
  images: {
    // All imagery is now local. We render our own trusted SVG cover art via next/image.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // The old WordPress site published blog posts at the root, not under /blog/.
      // Google still has these indexed — redirect (not 404) so any link equity carries over.
      {
        source: "/:slug(what-is-mindset-coaching-and-how-does-it-transform-personal-growth|how-to-develop-self-awareness-for-better-decision-making|how-to-rewire-your-subconscious-mind-for-long-term-success|what-is-the-role-of-mindset-in-achieving-business-success|what-are-the-key-principles-of-neuroplasticity-in-personal-development|how-to-break-free-from-overthinking-and-take-action)",
        destination: "/blog/:slug",
        permanent: true,
      },
      // Old WordPress service page — content now lives under /executive-coaching-dubai.
      {
        source: "/high-performance-coach-dubai",
        destination: "/executive-coaching-dubai",
        permanent: true,
      },
      // Old WordPress legal page slugs.
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/legal-terms",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
