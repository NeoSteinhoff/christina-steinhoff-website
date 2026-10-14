import type { Metadata } from "next";
import { CalmUnderPressureClient } from "./CalmUnderPressureClient";
import type { FAQItem } from "@/components/ui/FAQAccordion";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Calm Under Pressure | Corporate Workshop | Christina Steinhoff",
  description:
    "Calm Under Pressure is a 90-day corporate programme by Christina Steinhoff, built on Science + Soul Fusion™. Nervous-system regulation and emotional mastery for teams across Dubai and the UAE.",
  alternates: { canonical: `${SITE.url}/corporate-workshops/calm-under-pressure` },
  openGraph: {
    title: "Calm Under Pressure | Corporate Workshop | Christina Steinhoff",
    description:
      "A 90-day corporate programme bringing Science + Soul Fusion™ — NLP, nervous-system regulation, and pattern-level change — to teams in Dubai and the UAE.",
    url: `${SITE.url}/corporate-workshops/calm-under-pressure`,
    type: "website",
  },
};

const faqs: FAQItem[] = [
  {
    q: "Can the programme be delivered at our workplace?",
    a: "Yes — on-site anywhere in Dubai or the UAE, or fully online, depending on what works for your team.",
  },
  {
    q: "How many participants can join?",
    a: "The core cohort covers up to 30 employees. Larger teams can be scoped as a separate proposal — multiple cohorts run the same 90-day arc in parallel.",
  },
  {
    q: "Does the business owner receive individual employee results?",
    a: "No. Leadership sees aggregated indicators and themes only — never an individual employee's results or survey responses.",
  },
  {
    q: "Is the programme suitable for every employee?",
    a: "It's built for working adults navigating ordinary workplace pressure. It isn't a substitute for clinical mental health support — where that's needed, we'll say so and point toward the right professional.",
  },
  {
    q: "Does the programme treat workplace stress or burnout?",
    a: "No. This is coaching, not therapy or medical treatment. We teach practical nervous-system and communication tools — we don't diagnose or treat clinical conditions.",
  },
  {
    q: "Can the content be customised?",
    a: "Yes. Every cohort is adapted to your industry, working environment, and the specific pressure points your team is actually facing.",
  },
  {
    q: "Are results guaranteed?",
    a: "No coaching programme can guarantee a specific outcome, and we won't tell you otherwise. What we can guarantee is a structured, measured 90 days — with real indicators tracked from day one to day ninety.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Calm Under Pressure",
      serviceType: "Corporate Wellbeing Workshop",
      provider: {
        "@type": "Person",
        name: "Christina Steinhoff",
        jobTitle: "Executive & Emotional Mastery Coach",
        url: SITE.url,
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Place", name: "United Arab Emirates" },
      ],
      description:
        "A 90-day corporate programme built on Science + Soul Fusion™, combining NLP and nervous-system regulation to help organisations and their people work with pressure instead of against it.",
      url: `${SITE.url}/corporate-workshops/calm-under-pressure`,
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

export default function CalmUnderPressurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CalmUnderPressureClient faqs={faqs} />
    </>
  );
}
