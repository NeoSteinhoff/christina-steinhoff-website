import { handleContact, type ContactEnv } from "./contact";

type Env = ContactEnv & {
  ASSETS: { fetch(request: Request): Promise<Response> };
};

// Only /api/* reaches this Worker (see "run_worker_first" in wrangler.jsonc); every other
// request is answered straight from the static assets in ./out, which is free and unmetered.
const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/contact") {
      if (request.method !== "POST") {
        return new Response(null, { status: 405, headers: { Allow: "POST" } });
      }
      return handleContact(request, env);
    }

    if (pathname.startsWith("/api/")) {
      return Response.json({ ok: false, code: "not_found" }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
};

export default worker;
