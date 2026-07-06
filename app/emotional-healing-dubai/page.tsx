import type { Metadata } from "next";
import { EmotionalHealingClient } from "./EmotionalHealingClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emotional Healing Coaching in Dubai | Christina Steinhoff",
  description:
    "Emotional healing coaching in Dubai using somatic release, NLP & clinical hypnotherapy. Coaching, not clinical treatment — Christina Steinhoff helps you process patterns that talk alone hasn't shifted.",
  keywords: [
    "emotional healing dubai",
    "emotional healing coach dubai",
    "somatic coach dubai",
    "trauma-informed coaching dubai",
    "subconscious healing dubai",
    "nervous system coaching dubai",
    "clinical hypnotherapy dubai",
    "NLP coaching dubai",
  ],
  alternates: { canonical: `${SITE.url}/emotional-healing-dubai` },
  openGraph: {
    title: "Emotional Healing Coaching in Dubai | Christina Steinhoff",
    description:
      "Somatic, NLP, and clinical hypnotherapy-based coaching for emotional patterns you've outgrown but can't quite shake. Coaching, not clinical treatment.",
    url: `${SITE.url}/emotional-healing-dubai`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Is emotional healing coaching the same as therapy?",
    a: "No. Emotional healing coaching is not psychotherapy, and Christina is not a licensed psychotherapist — she is a certified Master NLP Practitioner and Clinical Hypnotherapist. Coaching works with present-day emotional patterns and nervous-system responses; therapy diagnoses and treats mental health conditions. If you need clinical treatment, Christina will tell you directly and help you find the right licensed professional.",
  },
  {
    q: "What is emotional healing coaching, exactly?",
    a: "It's coaching that uses somatic release, NLP, and clinical hypnotherapy to help you process and release stored stress, emotional reactivity, and subconscious patterns — the ones that keep resurfacing in your relationships and work even though you've 'thought it through' many times.",
  },
  {
    q: "Can coaching help with trauma?",
    a: "Coaching can support nervous-system regulation and pattern-level change for people who are stable and functioning. Acute or unprocessed trauma, PTSD, and clinical mental health conditions need a licensed therapist or trauma specialist — Christina will help you identify which situation you're in on a discovery call, and refer you onward if that's the right next step.",
  },
  {
    q: "What if I'm in crisis right now?",
    a: "Please contact a licensed mental health professional or your local emergency services immediately. Coaching is not equipped for crisis intervention, and Christina will always direct you to appropriate clinical support first.",
  },
  {
    q: "What does a typical emotional healing session involve?",
    a: "Sessions may include somatic awareness work, NLP techniques to interrupt automatic emotional reactions, clinical hypnotherapy to work with subconscious patterns, and practical nervous-system regulation tools — tailored to what you're working through.",
  },
  {
    q: "How is this different from meditation or breathwork apps?",
    a: "Apps offer general tools; this is a credentialed, one-to-one process tailored to your specific patterns, combining several modalities (NLP, hypnotherapy, somatic release) rather than a single generic technique.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Emotional Healing Coaching in Dubai",
      serviceType: "Emotional Wellness Coaching",
      provider: {
        "@type": "Person",
        name: "Christina Steinhoff",
        jobTitle: "Life Coach & Clinical Hypnotherapist",
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
        "Emotional healing coaching in Dubai combining somatic release, NLP, and clinical hypnotherapy. Coaching and mentorship, not psychotherapy or clinical treatment.",
      disambiguatingDescription:
        "This is coaching, not psychotherapy, medical treatment, or a substitute for licensed mental health care.",
      url: `${SITE.url}/emotional-healing-dubai`,
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

export default function EmotionalHealingDubaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EmotionalHealingClient faqs={faqs} />
    </>
  );
}
