import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

// Deliberate choice, not a default: this is a personal-brand marketing site with
// no proprietary/paywalled content, and the explicit goal is to be found and
// recommended by AI assistants (ChatGPT, Perplexity, Gemini, Google AI Overviews).
// So every major AI crawler — live-answer bots and training bots alike — is
// allowed. Revisit if that tradeoff (max visibility vs. content reuse) ever changes.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // OpenAI live ChatGPT search citations
  "ChatGPT-User", // ChatGPT browsing on a user's behalf
  "PerplexityBot", // Perplexity live answers
  "Google-Extended", // Gemini / AI Overviews training + grounding
  "ClaudeBot", // Anthropic training
  "Claude-User", // Claude browsing on a user's behalf
  "CCBot", // Common Crawl (feeds many downstream AI models)
  "Applebot-Extended", // Apple Intelligence
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/mockup", "/preview", "/v2"],
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
