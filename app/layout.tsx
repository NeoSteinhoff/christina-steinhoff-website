import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { PageLoader } from "@/components/ui/PageLoader";
import { SITE } from "@/lib/constants";

const GA_ID = "G-W88WM4W49F";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Christina Steinhoff — Life Mentor & Executive Coach Dubai",
    template: "%s | Christina Steinhoff",
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
    "Christina Steinhoff",
    "Science Soul Fusion",
    "spiritual coaching Dubai",
    "hypnotherapy Dubai",
    "conscious relationship coaching",
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
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Christina Steinhoff — Life Mentor Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christina Steinhoff — Life Mentor & Executive Coach Dubai",
    description: SITE.description,
    images: ["/og-image.svg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christina Steinhoff",
    jobTitle: "Life Mentor & Executive Coach",
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: [
      "https://www.instagram.com/christinasteinhof/",
      "https://www.linkedin.com/in/christina-steinhoff-thecoscoaching",
      "https://www.facebook.com/share/1FbRkQY78X/",
    ],
    knowsAbout: ["Life Coaching", "NLP", "Neuroscience", "Hypnotherapy", "Executive Coaching", "Mindset Coaching"],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#060606]">
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <PageLoader />
        {children}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
