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
};

export default nextConfig;
