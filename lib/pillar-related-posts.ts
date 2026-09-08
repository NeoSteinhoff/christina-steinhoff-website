// Mirror of lib/blog-related-pillars.ts, in the other direction: each landing
// page links out to 2-3 relevant long-form articles, giving a visitor who
// isn't ready to book a lower-commitment path deeper into the site.

export type RelatedPost = { slug: string; title: string; category: string };

export const RELATED_POSTS: Record<string, RelatedPost[]> = {
  "executive-coaching-dubai": [
    {
      slug: "what-is-the-role-of-mindset-in-achieving-business-success",
      title: "What Is the Role of Mindset in Achieving Business Success?",
      category: "Business",
    },
    {
      slug: "how-to-develop-self-awareness-for-better-decision-making",
      title: "How to Develop Self-Awareness for Better Decision-Making",
      category: "Leadership",
    },
    {
      slug: "how-to-break-free-from-overthinking-and-take-action",
      title: "How to Break Free from Overthinking and Take Action",
      category: "Mindset",
    },
  ],
  "emotional-healing-dubai": [
    {
      slug: "what-is-mindset-coaching-and-how-does-it-transform-personal-growth",
      title: "What Is Mindset Coaching and How Does It Transform Personal Growth?",
      category: "Mindset",
    },
    {
      slug: "how-to-rewire-your-subconscious-mind-for-long-term-success",
      title: "How to Rewire Your Subconscious Mind for Long-Term Success",
      category: "Neuroscience",
    },
  ],
  "life-coach-dubai": [
    {
      slug: "what-are-the-key-principles-of-neuroplasticity-in-personal-development",
      title: "What Are the Key Principles of Neuroplasticity in Personal Development?",
      category: "Neuroscience",
    },
    {
      slug: "how-to-rewire-your-subconscious-mind-for-long-term-success",
      title: "How to Rewire Your Subconscious Mind for Long-Term Success",
      category: "Neuroscience",
    },
    {
      slug: "how-to-break-free-from-overthinking-and-take-action",
      title: "How to Break Free from Overthinking and Take Action",
      category: "Mindset",
    },
  ],
  "group-workshop": [
    {
      slug: "how-to-develop-self-awareness-for-better-decision-making",
      title: "How to Develop Self-Awareness for Better Decision-Making",
      category: "Leadership",
    },
    {
      slug: "what-is-the-role-of-mindset-in-achieving-business-success",
      title: "What Is the Role of Mindset in Achieving Business Success?",
      category: "Business",
    },
  ],
};
