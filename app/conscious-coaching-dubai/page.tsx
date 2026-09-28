import type { Metadata } from "next";
import { ConsciousClient } from "./ConsciousClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conscious Relationship Coaching in Dubai | Christina Steinhoff",
  description:
    "Executive & Emotional Mastery Coach Christina Steinhoff helps high-achieving women in Dubai and worldwide close the gap between success at work and connection at home, through the Science + Soul Fusion™ method.",
  keywords: [
    "conscious relationship coaching dubai",
    "conscious coaching dubai",
    "relationship coach for executives",
    "emotional distance in relationships",
    "coaching for high achieving women dubai",
  ],
  alternates: { canonical: `${SITE.url}/conscious-coaching-dubai` },
  openGraph: {
    title: "Conscious Relationship Coaching in Dubai | Christina Steinhoff",
    description:
      "For the woman who can hold a boardroom and still feel unreachable at her own dinner table.",
    url: `${SITE.url}/conscious-coaching-dubai`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Is this couples therapy?",
    a: "No. This is coaching, not couples therapy or a clinical treatment. Christina works one-on-one with the high-achieving partner — usually the woman — on the subconscious patterns she brings into her relationships. If you and your partner need joint clinical support, this isn't a substitute for that. It's a different kind of work, done individually, that changes what you bring into the relationship.",
  },
  {
    q: "Why work with just me, and not my partner or family?",
    a: "Because the pattern creating the distance lives in one nervous system: yours. Your responses — the vigilance, the control, the composure that never quite switches off — are half of what shapes every interaction. Change that half, and the relationship changes, without your partner or children ever needing to sit in a session.",
  },
  {
    q: "How is this different from typical relationship advice?",
    a: "Most relationship advice targets behaviour: communicate more, schedule time together, listen better. That advice is usually correct and rarely sticks, because it's competing with a subconscious pattern that formed years earlier for good reason. Christina's Science + Soul Fusion™ method — combining NLP, master hypnosis, and Time Line Therapy® — works with that pattern directly, rather than asking you to override it through willpower.",
  },
  {
    q: "Who is this for?",
    a: "High-achieving women — executives and founders — whose external success runs alongside real distance in their marriage, their relationship with their children, or their closest friendships. It's built for someone whose drive, control, and composure at work are functioning exactly as designed, and are now the same traits creating distance at home.",
  },
  {
    q: "Do you work with men, or only women?",
    a: "Christina's broader executive and emotional mastery coaching practice works with male executives and founders one-on-one as well. Conscious relationship coaching, specifically, is currently offered for high-achieving women whose relationships are being shaped by the same patterns that built their careers.",
  },
  {
    q: "How soon will I notice a difference?",
    a: "Because Time Line Therapy® and NLP work directly with the pattern rather than around it, many clients notice a shift in how they respond inside a specific relationship during the work itself, not months afterward. How long it takes depends on how long the pattern has been running and how much is at stake in the relationship — Christina will tell you honestly on a discovery call what's realistic for your situation.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Conscious Relationship Coaching",
      serviceType: "Relationship Coaching",
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
        "Conscious relationship coaching in Dubai for high-achieving women, using the Science + Soul Fusion™ method (NLP, master hypnosis, Time Line Therapy®) to close the gap between professional success and connection at home.",
      url: `${SITE.url}/conscious-coaching-dubai`,
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

export default function ConsciousCoachingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ConsciousClient faqs={faqs} />
    </>
  );
}
