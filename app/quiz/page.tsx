import type { Metadata } from "next";
import { QuizClient } from "./QuizClient";
import { SITE } from "@/lib/constants";
import { QUIZ_TITLE, QUIZ_SUBTITLE } from "@/lib/quiz-content";

export const metadata: Metadata = {
  title: `${QUIZ_TITLE} — Christina Steinhoff`,
  description: QUIZ_SUBTITLE,
  alternates: { canonical: `${SITE.url}/quiz` },
  openGraph: {
    title: `${QUIZ_TITLE} — Christina Steinhoff`,
    description: QUIZ_SUBTITLE,
    url: `${SITE.url}/quiz`,
    type: "website",
  },
};

export default function QuizPage() {
  return <QuizClient />;
}
