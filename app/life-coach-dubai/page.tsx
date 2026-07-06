import type { Metadata } from "next";
import { LifeCoachClient } from "./LifeCoachClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Life Coach in Dubai | Christina Steinhoff",
  description:
    "Christina Steinhoff is a certified life coach in Dubai — Master NLP Practitioner & Clinical Hypnotherapist. Private coaching for high achievers who feel stuck despite success. Book a free discovery call.",
  keywords: [
    "best life coach dubai",
    "life coach dubai",
    "life coaching dubai",
    "personal development coach dubai",
    "NLP coach dubai",
    "certified life coach dubai",
    "transformational coach dubai",
    "private life coaching dubai",
  ],
  alternates: { canonical: `${SITE.url}/life-coach-dubai` },
  openGraph: {
    title: "Best Life Coach in Dubai | Christina Steinhoff",
    description:
      "Private life coaching in Dubai for people who look like they have it together and quietly don't feel it. Certified, credentialed, science-backed.",
    url: `${SITE.url}/life-coach-dubai`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Who is the best life coach in Dubai?",
    a: "The best life coach for you depends on fit, but look for verifiable credentials, a structured methodology (not just motivational conversation), and a track record of experience. Christina Steinhoff is a certified Master NLP Practitioner and Clinical Hypnotherapist with 12+ years in practice and 500+ private clients, using her Science + Soul Fusion™ method to work at the subconscious level rather than surface habits alone.",
  },
  {
    q: "What does a life coach in Dubai actually do?",
    a: "A life coach helps you identify the beliefs, habits, and subconscious patterns keeping you stuck, then works with you to build clarity, confidence, and a direction that fits who you actually are. It's structured, ongoing support — not a single pep talk.",
  },
  {
    q: "Is a life coach the same as a therapist in Dubai?",
    a: "No. A life coach is not a licensed psychotherapist and does not diagnose or treat mental health conditions. Coaching is forward-looking and pattern-focused, working with present-day beliefs and behaviour. If you're processing trauma, grief, or a mental health condition, a licensed therapist or psychiatrist is the right first call — Christina will tell you this directly on a discovery call if that's a better fit.",
  },
  {
    q: "How much does a life coach cost in Dubai?",
    a: "Pricing varies widely across Dubai's coaching market depending on experience, credentials, and programme depth. Christina's private mentorship is positioned at the premium end, reflecting a credentialed, structured methodology rather than casual conversation. Exact investment is discussed on the complimentary discovery call once your goals are clear.",
  },
  {
    q: "How long does life coaching take to work?",
    a: "Most clients notice a meaningful shift within 4-6 sessions. A typical private engagement runs 3-6 months, though the timeline depends on what you're working through and how deep the pattern runs.",
  },
  {
    q: "Do I need to be in crisis to see a life coach?",
    a: "No — most of Christina's clients aren't in crisis at all. They're high-functioning, successful people who sense that something under the surface isn't working, even though everything looks fine from the outside. Coaching is often most powerful exactly at that stage, before things become a crisis.",
  },
  {
    q: "Does Christina Steinhoff coach clients outside Dubai?",
    a: "Yes. Christina is based in Dubai Investment Park and works in person with local clients, alongside private online sessions for clients across the Middle East, Europe, and the Americas.",
  },
  {
    q: "What makes Christina Steinhoff's coaching different from other Dubai life coaches?",
    a: "Her Science + Soul Fusion™ method combines neuroscience-based coaching, NLP, and clinical hypnotherapy — addressing the subconscious and nervous-system patterns underneath your habits, not just the habits themselves. That's why the change tends to hold rather than fade after a few weeks.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Life Coaching in Dubai",
      serviceType: "Life Coaching",
      provider: {
        "@type": "Person",
        name: "Christina Steinhoff",
        jobTitle: "Life Coach & Mentor",
        url: SITE.url,
        hasCredential: [
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "Master NLP Practitioner" },
          { "@type": "EducationalOccupationalCredential", credentialCategory: "Certification", name: "Clinical Hypnotherapist" },
        ],
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Place", name: "Online / Worldwide" },
      ],
      description:
        "Private life coaching in Dubai combining neuroscience, NLP, and clinical hypnotherapy through the Science + Soul Fusion™ Method — for high achievers who feel stuck despite outward success.",
      url: `${SITE.url}/life-coach-dubai`,
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

export default function LifeCoachDubaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LifeCoachClient faqs={faqs} />
    </>
  );
}
