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
      // Retired page-name variants that still get inbound links / Google indexing.
      // NOTE: /conscious-coaching-dubai is deliberately NOT redirected here — it's
      // a real rebuilt page now (see app/conscious-coaching-dubai/), not a stopgap.
      {
        source: "/bespoke-coach-dubai",
        destination: "/executive-coaching-dubai",
        permanent: true,
      },
      {
        source: "/executive-coach-dubai",
        destination: "/executive-coaching-dubai",
        permanent: true,
      },
      {
        source: "/decision-fatigue-in-senior-executives-how-executive-coaching-services-help",
        destination: "/executive-coaching-dubai",
        permanent: true,
      },
      {
        source: "/conscious-coaching-dubai-transform-your-mindset-leadership-and-life-through-self-awareness",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/self-love-and-confidence-hacks-every-entrepreneur-should-know",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-traits-of-the-best-online-life-coaches-to-inspire-your-growth",
        destination: "/life-coach-dubai",
        permanent: true,
      },
      {
        source: "/life-coach-in-dubai",
        destination: "/life-coach-dubai",
        permanent: true,
      },
      {
        source: "/nlp-coach-dubai",
        destination: "/life-coach-dubai",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/category/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
