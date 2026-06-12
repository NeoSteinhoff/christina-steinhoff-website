import type { Metadata } from "next";
import { ExecutiveClient } from "./ExecutiveClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Executive Coaching in Dubai — Lead with Clarity & Sustainable Success",
  description:
    "Certified executive coach in Dubai for CEOs, founders & senior leaders. Christina Steinhoff's Science + Soul Fusion™ method combines neuroscience, NLP & conscious leadership for high performance without burnout.",
  keywords: [
    "executive coaching dubai",
    "executive coach dubai",
    "CEO coaching dubai",
    "leadership coaching dubai",
    "high performance coaching dubai",
    "burnout coaching dubai",
    "conscious leadership coaching",
    "executive coach UAE",
  ],
  alternates: { canonical: `${SITE.url}/executive-coaching-dubai` },
  openGraph: {
    title: "Executive Coaching in Dubai — Christina Steinhoff",
    description:
      "Lead with clarity, purpose & sustainable success. Executive coaching for CEOs, founders and senior leaders in Dubai & the UAE.",
    url: `${SITE.url}/executive-coaching-dubai`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What does an executive coach in Dubai do?",
    a: "An executive coach helps professionals, business leaders, CEOs, and entrepreneurs improve leadership skills, emotional intelligence, decision-making, communication, and overall performance. Executive coaching also supports stress management, burnout recovery, confidence building, and sustainable leadership growth.",
  },
  {
    q: "How can executive coaching help business leaders in Dubai?",
    a: "Executive coaching helps business leaders develop clarity, resilience, leadership presence, and emotional balance while managing high-pressure environments. It supports better decision-making, stronger team leadership, improved communication, and long-term professional success.",
  },
  {
    q: "Is Christina Steinhoff a certified executive coach in Dubai?",
    a: "Yes. Christina Steinhoff is a certified executive coach in Dubai who works with executives, entrepreneurs, CEOs, and professionals through a holistic methodology combining neuroscience, subconscious transformation, and conscious leadership principles.",
  },
  {
    q: "What makes Christina Steinhoff's executive coaching different?",
    a: "Christina uses her proprietary Science + Soul Fusion™ Method, integrating neuroscience, NLP, hypnotherapy, emotional intelligence coaching, subconscious reprogramming, and energetic alignment. It addresses both external leadership performance and the internal patterns driving it — which is why the change lasts.",
  },
  {
    q: "Who should work with an executive coach in the UAE?",
    a: "Executive coaching is ideal for CEOs, founders, entrepreneurs, corporate leaders, senior managers, professionals transitioning into leadership roles, and anyone experiencing stress, burnout, or leadership challenges.",
  },
  {
    q: "What is the difference between executive coaching and leadership coaching?",
    a: "Executive coaching focuses on overall leadership performance, mindset, emotional intelligence, and strategic growth. Leadership coaching specifically develops abilities such as communication, influence, team management, and executive presence. Christina's programmes integrate both.",
  },
  {
    q: "Can executive coaching help with burnout and stress management?",
    a: "Yes. Coaching helps leaders identify stress patterns, build emotional resilience, recover from burnout, and create a sustainable work-life balance — while maintaining high performance. Burnout recovery is one of the most common reasons leaders come to Christina.",
  },
  {
    q: "Does Christina Steinhoff offer CEO coaching in Dubai?",
    a: "Yes. Christina provides personalised CEO coaching in Dubai for founders, entrepreneurs, and senior executives seeking aligned leadership, business growth, emotional clarity, and sustainable success.",
  },
  {
    q: "What happens during an executive coaching session?",
    a: "Sessions may include leadership assessment, mindset work, emotional intelligence development, subconscious pattern exploration, strategic guidance, stress regulation techniques, and personalised growth planning — always built around your specific goals.",
  },
  {
    q: "How do I choose the best executive coach in Dubai?",
    a: "Look at certifications, experience, methodology, and specialisation — and whether the coach addresses root causes or just surface strategy. The best test is a discovery call: you should leave with more clarity than you arrived with, regardless of whether you proceed.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Executive Coaching in Dubai",
      serviceType: "Executive Coaching",
      provider: {
        "@type": "Person",
        name: "Christina Steinhoff",
        jobTitle: "Executive Coach & Life Mentor",
        url: SITE.url,
      },
      areaServed: { "@type": "City", name: "Dubai" },
      description:
        "Executive coaching for CEOs, founders and senior leaders in Dubai, combining neuroscience, NLP, hypnotherapy and conscious leadership through the Science + Soul Fusion™ Method.",
      url: `${SITE.url}/executive-coaching-dubai`,
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

export default function ExecutiveCoachingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExecutiveClient faqs={faqs} />
    </>
  );
}
