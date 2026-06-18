import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { BackToTop } from "@/components/ui/BackToTop";

import { SITE } from "@/lib/constants";

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
    default: "Christina Steinhoff — Life Mentor & Executive Coach Dubai",
    template: "%s | Christina Steinhoff — Life Coach Dubai",
  },
  description: SITE.description,
  keywords: [
    "life coach Dubai",
    "executive coach Dubai",
    "life mentor Dubai",
    "NLP coach Dubai",
    "burnout coach Dubai",
    "high performance coaching Dubai",
    "mindset coaching Dubai",
    "personal development coach Dubai",
    "Christina Steinhoff",
    "Science Soul Fusion coaching",
    "spiritual life coach Dubai",
    "clinical hypnotherapy Dubai",
    "conscious relationship coaching Dubai",
    "executive burnout coach UAE",
    "neuroscience coach Dubai",
    "life coach UAE",
    "transformational coach Dubai",
    "somatic coach Dubai",
    "subconscious reprogramming Dubai",
    "entrepreneur coach Dubai",
    "women's coach Dubai",
    "leadership coach Dubai",
    "private coaching Dubai",
    "bespoke retreat Dubai",
  ],
  authors: [{ name: "Christina Steinhoff", url: SITE.url }],
  creator: "Christina Steinhoff",
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE.url,
    siteName: SITE.name,
    title: "Christina Steinhoff — Life Mentor & Executive Coach Dubai",
    description: SITE.description,
    // og:image is generated automatically by app/opengraph-image.tsx (PNG)
  },
  twitter: {
    card: "summary_large_image",
    title: "Christina Steinhoff — Life Mentor & Executive Coach Dubai",
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
      jobTitle: "Life Mentor & Executive Coach",
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
      sameAs: [
        "https://www.instagram.com/christinasteinhof/",
        "https://www.linkedin.com/in/christina-steinhoff-thecoscoaching",
        "https://www.facebook.com/share/1FbRkQY78X/",
      ],
      knowsAbout: [
        "Life Coaching", "NLP", "Neuroscience", "Clinical Hypnotherapy",
        "Executive Coaching", "Mindset Coaching", "Somatic Release",
        "Subconscious Reprogramming", "Burnout Recovery", "Leadership Coaching",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": SITE.url,
      name: "Christina Steinhoff — Life Mentor & Executive Coach",
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
      areaServed: ["Dubai", "Abu Dhabi", "UAE", "Middle East", "Europe", "Global"],
      serviceType: [
        "Life Coaching", "Executive Coaching", "NLP Coaching",
        "Hypnotherapy", "Relationship Coaching", "Burnout Coaching",
        "Mindset Coaching", "Retreat Experience",
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
