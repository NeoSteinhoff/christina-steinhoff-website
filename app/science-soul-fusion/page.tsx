import type { Metadata } from "next";
import { OfferClient } from "./OfferClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Science + Soul Fusion™ Private Coaching | Christina Steinhoff",
  description:
    "Science + Soul Fusion™ — Christina Steinhoff's private coaching methodology for ambitious individuals. Three levels, transparent pricing, built on NLP, master hypnosis, and Time Line Therapy®.",
  alternates: { canonical: `${SITE.url}/science-soul-fusion` },
  openGraph: {
    title: "Science + Soul Fusion™ Private Coaching | Christina Steinhoff",
    description:
      "Your next level of success begins within. Explore the three levels of Science + Soul Fusion™ private coaching.",
    url: `${SITE.url}/science-soul-fusion`,
    type: "website",
  },
};

export default function OfferPage() {
  return <OfferClient />;
}
