import type { Metadata } from "next";
import { CorporateWorkshopsClient } from "./CorporateWorkshopsClient";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Corporate Workshops | Christina Steinhoff",
  description:
    "Corporate workshops by Christina Steinhoff, built on Science + Soul Fusion™ — bringing emotional mastery and nervous-system regulation to teams and organisations in Dubai and the UAE.",
  alternates: { canonical: `${SITE.url}/corporate-workshops` },
  openGraph: {
    title: "Corporate Workshops | Christina Steinhoff",
    description:
      "Organisational programmes built on Science + Soul Fusion™, for teams across Dubai and the UAE.",
    url: `${SITE.url}/corporate-workshops`,
    type: "website",
  },
};

export default function CorporateWorkshopsPage() {
  return <CorporateWorkshopsClient />;
}
