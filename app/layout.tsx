import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { PageLoader } from "@/components/ui/PageLoader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { ExitIntent } from "@/components/ui/ExitIntent";
import { NewsletterPopup } from "@/components/ui/NewsletterPopup";

const CLARITY_ID = "XXXXXXXXXX"; // Replace with real Clarity ID
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://christinasteinhoff.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#060606]">
        {/* Microsoft Clarity heatmaps */}
        <Script id="clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");
        `}</Script>
        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:px-4 focus:py-2 focus:bg-[#c9a86c] focus:text-[#060606] focus:text-sm focus:rounded-full">
          Skip to content
        </a>
        <ScrollProgress />
        <PageLoader />
        {children}
        <WhatsAppButton />
        <BackToTop />
        <ExitIntent />
        <NewsletterPopup />
        <CookieBanner />
      </body>
    </html>
  );
}
