import type { Metadata } from "next";
import { WorkshopClient } from "./WorkshopClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Women's Coach in Dubai | UnleashHER Potential™ Group Coaching",
  description:
    "UnleashHER Potential™ — Christina Steinhoff's monthly group coaching workshop for women in Dubai. Confidence, emotional resilience, business clarity & transformation in a supportive community of ambitious women.",
  keywords: [
    "women's coach dubai",
    "group coaching for women dubai",
    "women's group coaching dubai",
    "life coaching workshop for women dubai",
    "women's mindset coach dubai",
    "women's business coach dubai",
    "women entrepreneur workshop dubai",
    "UnleashHER Potential",
  ],
  alternates: { canonical: `${SITE.url}/group-workshop` },
  openGraph: {
    title: "UnleashHER Potential™ — Group Coaching for Women in Dubai",
    description:
      "Empower. Evolve. Excel — together. A monthly transformational group coaching workshop for ambitious women in Dubai.",
    url: `${SITE.url}/group-workshop`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What is group coaching for women in Dubai?",
    a: "Group coaching for women in Dubai is a collaborative personal and professional development experience where women work on mindset, confidence, emotional wellbeing, leadership, and business growth together — in a supportive environment led by a professional coach.",
  },
  {
    q: "Who should join a women's group coaching workshop?",
    a: "Female entrepreneurs, business owners, professionals, leaders, creatives, and any woman seeking personal growth, emotional healing, confidence building, or career clarity. No previous coaching experience is needed.",
  },
  {
    q: "What does the workshop focus on?",
    a: "Mindset transformation, emotional resilience, subconscious reprogramming, leadership development, confidence building, anxiety management, and conscious business growth — all tailored to the women in the room.",
  },
  {
    q: "Is this suitable for beginners in personal development?",
    a: "Yes. UnleashHER Potential™ is designed both for women who are completely new to personal development and for women already on a growth journey who want deeper emotional and mindset transformation.",
  },
  {
    q: "How can a women's mindset coach in Dubai help me?",
    a: "A mindset coach helps you identify and transform the limiting beliefs, self-doubt, fear of failure, and subconscious patterns quietly holding back your personal and professional growth — using structured, science-based techniques rather than generic motivation.",
  },
  {
    q: "What are the benefits of joining group coaching for women?",
    a: "Confidence, emotional resilience, leadership skills, business clarity, self-awareness, stronger communication — plus the accountability and belonging that come from growing alongside like-minded women.",
  },
  {
    q: "Does Christina Steinhoff offer business coaching for women in Dubai?",
    a: "Yes. Christina's women's business coaching in Dubai combines business growth strategy with mindset coaching, emotional intelligence, and conscious leadership development — so success feels aligned, not exhausting.",
  },
  {
    q: "What makes UnleashHER Potential™ different from other workshops?",
    a: "Most workshops stop at strategy or motivation. UnleashHER Potential™ combines NLP, emotional intelligence, and subconscious transformation through Christina's Science + Soul Fusion™ Method — addressing the patterns underneath the behaviour, which is why the change lasts.",
  },
  {
    q: "Can group coaching help with confidence and anxiety?",
    a: "Yes. Participants regularly report improved self-confidence, reduced anxiety and emotional overwhelm, stronger self-worth, and healthier emotional patterns through guided coaching and mindset work.",
  },
  {
    q: "How often are the workshops held in Dubai?",
    a: "UnleashHER Potential™ runs monthly in Dubai — providing ongoing growth, accountability, support, and a consistent community of women on the same journey.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "UnleashHER Potential™ — Group Coaching for Women in Dubai",
      serviceType: "Group Coaching Workshop",
      provider: {
        "@type": "Person",
        name: "Christina Steinhoff",
        jobTitle: "Executive & Emotional Mastery Coach",
        url: SITE.url,
      },
      areaServed: { "@type": "City", name: "Dubai" },
      description:
        "A monthly transformational group coaching workshop for women in Dubai combining mindset coaching, emotional intelligence, NLP, and conscious leadership.",
      url: `${SITE.url}/group-workshop`,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function GroupWorkshopPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WorkshopClient faqs={faqs} />
    </>
  );
}
