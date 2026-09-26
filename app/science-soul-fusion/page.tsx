import type { Metadata } from "next";
import { OfferClient } from "./OfferClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "90-Day Private Mentorship | Christina Steinhoff",
  description:
    "A private 90-day mentorship for high-achieving women ready to rewire the subconscious pattern running their success. 3 places open this quarter.",
  alternates: { canonical: `${SITE.url}/science-soul-fusion` },
  openGraph: {
    title: "Science + Soul Fusion™ 90-Day Private Mentorship | Christina Steinhoff",
    description:
      "A private 90-day mentorship for high-achieving women ready to rewire the subconscious pattern running their success.",
    url: `${SITE.url}/science-soul-fusion`,
    type: "website",
  },
};

const faqs = [
  {
    q: "What does the 90-Day Private Mentorship cost?",
    a: "It isn't listed publicly, because the scope of the work varies by what you're bringing to it. You'll get a clear number on the application call, once Christina understands your situation — along with an honest read on whether this is the right fit at all.",
  },
  {
    q: "Is this therapy or a form of psychotherapy?",
    a: "No. This is executive and emotional mastery coaching, built on NLP, master hypnosis, and Time Line Therapy®. It isn't psychotherapy, and it isn't a medical or clinical treatment. If you're managing a clinical condition, please work with a licensed clinician first — this program isn't the right entry point for that.",
  },
  {
    q: "What happens during the application, and is there an assessment?",
    a: "You'll complete a short reflection questionnaire, then have a conversation with Christina. The questionnaire is a reflection tool to prepare for that conversation — it's not a diagnostic or clinical assessment, and it doesn't produce a verdict on its own.",
  },
  {
    q: "How is this different from Christina's other coaching work?",
    a: "This is her flagship format: fully private, 90 days, one client's pattern at a time, built specifically for high-achieving women carrying the internal cost of their success. Her broader practice includes other formats and also works with male executives and founders one-on-one — this mentorship is the deepest version of the work, reserved for a small number of people each quarter.",
  },
  {
    q: "What does a typical week actually involve?",
    a: "Private sessions with Christina, plus the between-session work that makes the change hold — not homework for its own sake, but application to whatever your actual week throws at you. The cadence shifts across the three phases; you'll know what to expect for each one before you start.",
  },
  {
    q: "I've already done years of therapy or coaching and nothing fully changed. Why would this be different?",
    a: "Because most of that work happens at the level of insight — you understand the pattern. This works underneath insight, at the level where the pattern actually runs, which is what Time Line Therapy® and hypnosis are built to reach. Understanding it and changing it are two different jobs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Science + Soul Fusion™ 90-Day Private Mentorship",
      serviceType: "Executive & Emotional Mastery Coaching",
      provider: {
        "@type": "Person",
        name: "Christina Steinhoff",
        jobTitle: "Executive & Emotional Mastery Coach",
        url: SITE.url,
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Place", name: "Online / Worldwide" },
      ],
      description:
        "A private 90-day mentorship for high-achieving women, using the Science + Soul Fusion™ method (NLP, master hypnosis, Time Line Therapy®) to rewire the subconscious pattern running their success.",
      url: `${SITE.url}/science-soul-fusion`,
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

export default function OfferPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OfferClient faqs={faqs} />
    </>
  );
}
