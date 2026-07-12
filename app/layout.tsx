import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { BackToTop } from "@/components/ui/BackToTop";

import { SITE, CREDENTIALS, PRESS } from "@/lib/constants";

const GA_ID = "G-W88WM4W49F";
const CLARITY_ID = "x4cstiql2r";

// Display serif — high contrast, full weight range (light → black) for editorial impact.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

// Body grotesk — clean, premium, variable.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Christina Steinhoff — Executive & Emotional Mastery Coach Dubai",
    template: "%s | Christina Steinhoff — Executive Coach Dubai",
  },
  description: SITE.description,
  keywords: [
    // Layer 1 — primary
    "executive coach Dubai",
    "executive coaching Dubai",
    "executive coach UAE",
    "leadership coach Dubai",
    "executive leadership coach",
    "leadership coaching",
    "executive coaching for women",
    "emotional intelligence coach",
    "burnout coach",
    "stress management coach",
    // Layer 2 — supporting
    "burnout recovery for executives",
    "high performance coaching",
    "executive presence coaching",
    "women's leadership coaching",
    "emotional intelligence training",
    "emotional resilience coaching",
    "leadership development coach",
    "performance coaching",
    "career coaching for executives",
    // Long-tail, high-intent
    "executive coach for women in Dubai",
    "leadership coach for female executives",
    "executive burnout coach Dubai",
    "how to recover from executive burnout",
    "emotional intelligence coaching for leaders",
    "leadership coaching for CEOs",
    "executive coach for founders",
    "coaching for high-achieving women",
    "improve executive presence",
    "executive confidence coaching",
    "leadership coaching UAE",
    "executive coaching online",
    "best executive coach Dubai",
    // Niche / owned positioning
    "emotional mastery coaching",
    "nervous system coaching",
    "nervous system regulation for leaders",
    "success without burnout",
    "calm leadership coaching",
    "subconscious mind coaching",
    "NLP coach Dubai",
    // Supporting SEO value (kept, not primary positioning)
    "life coach Dubai",
    "personal development coach Dubai",
    "women's coach Dubai",
    "Christina Steinhoff",
    "Science Soul Fusion coaching",
  ],
  authors: [{ name: "Christina Steinhoff", url: SITE.url }],
  creator: "Christina Steinhoff",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE.url,
    siteName: SITE.name,
    title: "Christina Steinhoff — Executive & Emotional Mastery Coach Dubai",
    description: SITE.description,
    // og:image is generated automatically by app/opengraph-image.tsx (PNG)
  },
  twitter: {
    card: "summary_large_image",
    title: "Christina Steinhoff — Executive & Emotional Mastery Coach Dubai",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Christina Steinhoff",
      jobTitle: "Executive & Emotional Mastery Coach",
      description: SITE.description,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      image: `${SITE.url}/images/christina.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Green Community West, Dubai Investment Park 1",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      // Not a licensed psychotherapist — credentials are named explicitly so this
      // claim is never ambiguous to Google (YMYL/E-E-A-T) or to readers.
      hasCredential: CREDENTIALS.map((name) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: /Accredited/i.test(name) ? "Accreditation" : "Certification",
        name,
      })),
      sameAs: [
        "https://www.instagram.com/christinasteinhof/",
        "https://www.linkedin.com/in/christina-steinhoff-thecoscoaching",
        "https://www.facebook.com/share/1FbRkQY78X/",
      ],
      knowsAbout: [
        "Executive Coaching", "NLP", "Emotional Mastery", "Master Hypnosis",
        "Time Line Therapy", "Mindset Coaching", "Nervous System Regulation",
        "Subconscious Reprogramming", "Burnout Recovery", "Leadership Coaching",
        "Emotional Resilience Coaching",
      ],
      subjectOf: PRESS.map((p) => ({
        "@type": "NewsArticle",
        headline: p.title,
        url: p.url,
        datePublished: p.date,
        author: { "@type": "Person", name: p.author },
        publisher: { "@type": "Organization", name: p.outlet },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": SITE.url,
      name: "Christina Steinhoff — Executive & Emotional Mastery Coach",
      description: SITE.description,
      url: SITE.url,
      telephone: SITE.phone,
      email: SITE.email,
      image: `${SITE.url}/images/christina.jpg`,
      priceRange: "$$$",
      currenciesAccepted: "AED, USD, EUR, GBP",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Green Community West, Dubai Investment Park 1",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 24.9964,
        longitude: 55.1681,
      },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "City", name: "Abu Dhabi" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Place", name: "Online / Worldwide" },
      ],
      serviceType: [
        "Life Coaching", "Executive Coaching", "NLP Coaching",
        "Master Hypnosis", "Relationship Coaching", "Burnout Coaching",
        "Mindset Coaching", "Emotional Healing Coaching", "Retreat Experience",
      ],
      sameAs: [
        "https://www.instagram.com/christinasteinhof/",
        "https://www.linkedin.com/in/christina-steinhoff-thecoscoaching",
        "https://www.facebook.com/share/1FbRkQY78X/",
      ],
    },
  ];

  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://christinasteinhoff.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#060606]">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-[#c9a86c] focus:text-[#060606] focus:text-sm focus:rounded-full">
          Skip to content
        </a>
        <SmoothScroll />
        <GrainOverlay />
        {children}
        <WhatsAppButton />
        <BackToTop />
        {/* GA + Clarity load only after the visitor accepts cookies (handled inside) */}
        <CookieConsent gaId={GA_ID} clarityId={CLARITY_ID} />
        {/* Vercel Web Analytics — cookieless, privacy-friendly, always on */}
        <Analytics />
      </body>
    </html>
  );
}
