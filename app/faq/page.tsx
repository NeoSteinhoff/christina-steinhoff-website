import type { Metadata } from "next";
import { FAQClient } from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About Life Coaching & Mentorship",
  description: "Answers to the most common questions about Christina Steinhoff's coaching approach, programmes, pricing, and what to expect from a discovery call.",
  alternates: { canonical: "https://christinasteinhoff.com/faq" },
};

export default function FAQPage() {
  return <FAQClient />;
}
