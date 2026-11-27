import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes the whole site to ./out, which Cloudflare serves as
  // static assets (free + unlimited). The only server code is worker/index.ts (POST /api/contact).
  // Redirects therefore live in public/_redirects, not here (next.config redirects need a server).
  output: "export",
  // Pin the project root to silence the multi-lockfile workspace-root warning.
  turbopack: {
    root: __dirname,
  },
  images: {
    // No image optimizer in a static export. All imagery is local and already web-sized.
    unoptimized: true,
  },
};

export default nextConfig;
