import type { Metadata } from "next";
import { CorporateLeadershipClient } from "./CorporateLeadershipClient";
import type { FAQItem } from "@/components/ui/FAQAccordion";
import { SITE } from "@/lib/constants";

const PAGE_URL = `${SITE.url}/corporate-leadership-workshops-dubai`;

export const metadata: Metadata = {
  title: "Corporate Leadership Workshops Dubai | Christina Steinhoff",
  description:
    "Customised leadership, team-building and stress-management workshops for Dubai organisations, built on communication, connection and confidence.",
  keywords: [
    "corporate leadership workshops dubai",
    "corporate team building workshop dubai",
    "stress management workshop dubai",
    "burnout workshop uae",
    "communication skills workshop dubai",
    "corporate wellness workshop dubai",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Corporate Leadership Workshops Dubai | Christina Steinhoff",
    description:
      "Corporate events, leadership workshops and team-building days, customised to your organisation and built around communication, connection, confidence and limiting beliefs.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs: FAQItem[] = [
  {
    q: "Can the workshop be customised to our organisation's goals, team size, industry and seniority mix?",
    a: "Yes — customisation is built into the process. We start with a discovery call and a few short, anonymous questions for participants. You then receive a written proposal covering the themes (from communication, connection, confidence and limiting beliefs), the format, length, group size, venue and language. Nothing is off the shelf.",
  },
  {
    q: "What formats are available, and how long do they run?",
    a: "There are three: a corporate event (a talk with an interactive session), a leadership workshop, and a team-building event. Each can run on-site, offsite or online, agreed in the brief. Length ranges from a short event slot to a multi-day series, and group size and duration are confirmed in your proposal.",
  },
  {
    q: "How is this different from a standard team-building day or a skills course?",
    a: "A standard team-building day focuses on activity and fun, and a skills course focuses on technique. These workshops are conversation-based and reflective: participants practise tools for communication and connection, examine the beliefs behind habitual reactions, and take part in a debrief and follow-up. They can also sit alongside an activity day if you want both.",
  },
  {
    q: "Is this therapy or counselling, and how is confidentiality handled?",
    a: "No. These are coaching and professional-development workshops, not therapy, counselling or medical treatment. The stress and burnout sessions focus on practical stress-management skills and early signs of overload; the WHO describes burn-out as an occupational phenomenon resulting from chronic workplace stress that has not been successfully managed. Participation and sharing are voluntary, feedback is anonymous and reported only in aggregate, and anyone who needs clinical support is signposted to an appropriately licensed professional.",
  },
  {
    q: "Does it work for multicultural teams, and in which languages can it run?",
    a: "Teams in Dubai are often multicultural, so the sessions invite different communication styles into the room rather than assuming one norm. Workshops run in English. If you need another language, mention it in the brief and we will confirm what is possible.",
  },
  {
    q: "What does the process look like, and how will we know whether it helped?",
    a: "Four stages: brief, design, deliver and embed. Participants answer a few short questions beforehand, and afterwards you receive anonymised feedback and a leadership debrief. We agree the indicators with you. They reflect participants' experience and leaders' observations, and they cannot guarantee a specific business result.",
  },
  {
    q: "How much does a corporate workshop cost?",
    a: "Workshops are quoted per programme after a discovery call. The main factors are length, group size, the level of customisation, location, and whether a stress and burnout module with a co-facilitator is included.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Corporate Leadership Workshops",
      serviceType: "Corporate Leadership and Team Workshops",
      provider: {
        "@type": "Person",
        name: "Christina Steinhoff",
        jobTitle: "Executive & Emotional Mastery Coach",
        url: SITE.url,
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Country", name: "United Arab Emirates" },
      ],
      description:
        "Customised corporate events, leadership workshops and team-building days for organisations in Dubai and the UAE, built around communication, connection, confidence and limiting beliefs, with stress-management and burnout-awareness sessions.",
      url: PAGE_URL,
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

export default function CorporateLeadershipWorkshopsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CorporateLeadershipClient faqs={faqs} />
    </>
  );
}
