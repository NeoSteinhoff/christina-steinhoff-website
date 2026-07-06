import type { Metadata } from "next";
import { ExecutiveClient } from "./ExecutiveClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Executive Coach in Dubai | Christina Steinhoff",
  description:
    "Certified executive coach in Dubai for CEOs, founders & senior leaders. Christina Steinhoff's Science + Soul Fusion™ method combines NLP, master hypnosis & conscious leadership for high performance without burnout.",
  keywords: [
    "best executive coach dubai",
    "executive coaching dubai",
    "executive coach dubai",
    "executive coach UAE",
    "CEO coaching dubai",
    "leadership coaching dubai",
    "leadership coaching for CEOs",
    "executive coach for founders",
    "executive coaching for women",
    "executive coach for women in dubai",
    "leadership coach for female executives",
    "executive burnout coach dubai",
    "how to recover from executive burnout",
    "burnout recovery for executives",
    "emotional intelligence coaching for leaders",
    "executive presence coaching",
    "executive confidence coaching",
    "leadership coaching uae",
    "executive coaching online",
    "conscious leadership coaching",
  ],
  alternates: { canonical: `${SITE.url}/executive-coaching-dubai` },
  openGraph: {
    title: "Best Executive Coach in Dubai | Christina Steinhoff",
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
    a: "Yes. Christina Steinhoff is a certified executive coach in Dubai who works with executives, entrepreneurs, CEOs, and professionals through a holistic methodology combining NLP, subconscious transformation, and conscious leadership principles.",
  },
  {
    q: "What makes Christina Steinhoff's executive coaching different?",
    a: "Christina uses her proprietary Science + Soul Fusion™ Method, integrating NLP, master hypnosis, Time Line Therapy®, and emotional mastery coaching. It addresses both external leadership performance and the internal patterns driving it — which is why the change lasts.",
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
  {
    q: "Do you offer executive coaching for women in Dubai?",
    a: "Yes. Christina works with women executives, founders, and senior leaders as a core part of her practice — including a dedicated leadership coach perspective for female executives navigating visibility, boundaries, and confidence at the top. Her UnleashHER Potential™ group programme sits alongside 1:1 executive coaching for women who want a more private setting.",
  },
  {
    q: "How do I recover from executive burnout?",
    a: "Recovery starts with identifying the nervous-system and subconscious patterns keeping you in a stress response — not just resting until you feel better. Christina's executive burnout coaching in Dubai combines nervous system regulation, NLP, and master hypnosis to rebuild sustainable capacity, not just temporary relief.",
  },
  {
    q: "Is executive coaching available online?",
    a: "Yes. Alongside in-person sessions in Dubai, Christina offers executive coaching online for clients across the Middle East, Europe, and the Americas, with the same structured Science + Soul Fusion™ methodology delivered over private video sessions.",
  },
  {
    q: "What is emotional mastery coaching for executives?",
    a: "Emotional mastery coaching helps leaders regulate their emotional and nervous-system responses under pressure, so decisions come from clarity rather than reactivity. It's a core pillar of Christina's Science + Soul Fusion™ method, alongside NLP and master hypnosis.",
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
        jobTitle: "Executive & Emotional Mastery Coach",
        url: SITE.url,
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "Licensed Master Practitioner of NLP" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "Certified Master Hypnotist" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "Time Line Therapy® Practitioner" },
        ],
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Place", name: "Online / Worldwide" },
      ],
      description:
        "Executive coaching for CEOs, founders, and senior leaders in Dubai, combining NLP (Neuro-Linguistic Programming), master hypnosis, and Time Line Therapy® through the Science + Soul Fusion™ Method.",
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
