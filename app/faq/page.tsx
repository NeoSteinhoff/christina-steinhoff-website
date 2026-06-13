import type { Metadata } from "next";
import { FAQClient } from "./FAQClient";
import { faqs } from "./faqs";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About Life Coaching & Mentorship",
  description:
    "Answers to common questions about Christina Steinhoff's coaching approach, programmes, pricing, and what to expect from a discovery call in Dubai.",
  alternates: { canonical: `${SITE.url}/faq` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FAQClient />
    </>
  );
}
