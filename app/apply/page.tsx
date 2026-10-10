import type { Metadata } from "next";
import { ApplyClient } from "./ApplyClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Apply for a Discovery Call — Christina Steinhoff",
  description:
    "A short application before booking a discovery call with Christina Steinhoff. Three questions, reviewed personally, so the conversation is right for both of you.",
  alternates: { canonical: `${SITE.url}/apply` },
  robots: { index: false, follow: true },
};

export default function ApplyPage() {
  return <ApplyClient />;
}
