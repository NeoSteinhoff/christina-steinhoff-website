This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy (Cloudflare Workers)

The site is a static export (`output: "export"` in `next.config.ts`) served from `./out` by a Cloudflare
Worker with static assets. The only server code is `worker/` — `POST /api/contact` (contact form, newsletter,
quiz, referral and application emails).

- `npm run build` — writes the site to `./out`
- `npm run preview` — build, then serve locally with `wrangler dev` (http://localhost:8787)
- `npm run deploy` — build and deploy with `wrangler deploy` (Cloudflare Workers Builds runs the same two steps)
- Redirects (old WordPress URLs) live in `public/_redirects`; response headers in `public/_headers`.
- Form settings go under the Worker's **Settings > Variables and Secrets** (runtime). Do NOT use *Build variables*
  (those exist only during the build and the Worker cannot read them).
  - `RESEND_API_KEY` as type **Secret**; `FORMSPREE_FORM_ID` (optional fallback) as a Secret;
  - `CONTACT_FROM_EMAIL` as Text, and its address must be on a domain verified in Resend.
  For local testing put them in `.dev.vars` (git-ignored).
- After setting them, check the endpoint directly - the site's forms show a "success" screen even when the Worker is
  misconfigured (`503 {"code":"unconfigured"}`):
  `curl -s -X POST https://<worker>.workers.dev/api/contact -H 'content-type: application/json' -d '{"type":"enquiry","firstName":"Test","email":"you@example.com","message":"test"}'`
  must return `{"ok":true,"channel":"resend"}`.
