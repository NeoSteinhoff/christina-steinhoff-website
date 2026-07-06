// Contextual internal links from each blog post to the relevant service pillar
// page(s), using descriptive keyword-bearing anchor text. Kept separate from
// blog-content.ts so the generated article content stays untouched.

export type RelatedLink = { href: string; label: string };

export const RELATED_PILLARS: Record<string, RelatedLink[]> = {
  "what-is-mindset-coaching-and-how-does-it-transform-personal-growth": [
    { href: "/life-coach-dubai", label: "Work with a life coach in Dubai" },
    { href: "/emotional-healing-dubai", label: "Explore emotional healing coaching" },
  ],
  "how-to-develop-self-awareness-for-better-decision-making": [
    { href: "/executive-coaching-dubai", label: "Explore executive coaching in Dubai" },
    { href: "/life-coach-dubai", label: "Work with a life coach in Dubai" },
  ],
  "how-to-rewire-your-subconscious-mind-for-long-term-success": [
    { href: "/life-coach-dubai", label: "Work with a life coach in Dubai" },
    { href: "/emotional-healing-dubai", label: "Explore emotional healing coaching" },
  ],
  "what-is-the-role-of-mindset-in-achieving-business-success": [
    { href: "/executive-coaching-dubai", label: "Explore executive coaching in Dubai" },
  ],
  "what-are-the-key-principles-of-neuroplasticity-in-personal-development": [
    { href: "/life-coach-dubai", label: "Work with a life coach in Dubai" },
    { href: "/executive-coaching-dubai", label: "Explore executive coaching in Dubai" },
  ],
  "how-to-break-free-from-overthinking-and-take-action": [
    { href: "/emotional-healing-dubai", label: "Explore emotional healing coaching" },
    { href: "/life-coach-dubai", label: "Work with a life coach in Dubai" },
  ],
};
