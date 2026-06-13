import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LegalShell } from "@/components/sections/LegalShell";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Christina Steinhoff collects, uses, and protects your personal information.",
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f7f1e7]">
      <Navbar />
      <LegalShell title="Privacy Policy" updated="June 2026">
        <p>
          This policy explains how Christina Steinhoff (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
          information collected through {SITE.url}. We keep data collection to the minimum needed to
          respond to you and improve the site.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Enquiries.</strong> When you use the contact form, we collect your name, email,
            chosen area of interest, and message so we can reply.
          </li>
          <li>
            <strong>Bookings.</strong> Discovery calls are scheduled through Calendly, which collects
            your name, email, and any details you provide under its own privacy policy.
          </li>
          <li>
            <strong>Analytics.</strong> With your consent, we use Google Analytics and Microsoft
            Clarity to understand how the site is used. These set cookies. You can decline them in the
            cookie banner, and no analytics will load.
          </li>
        </ul>

        <h2>How we use it</h2>
        <p>
          To respond to enquiries, schedule and deliver coaching, and improve the website. We do not
          sell your personal information, and we do not send marketing email unless you have asked us to.
        </p>

        <h2>Service providers</h2>
        <p>
          We rely on trusted third parties to operate the site: Vercel (hosting), Calendly
          (scheduling), and an email provider for contact-form delivery. Each processes data under its
          own terms and only as needed to provide the service.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>Decline analytics cookies at any time via the cookie banner.</li>
          <li>Request a copy of, correction to, or deletion of your data by emailing us.</li>
          <li>Unsubscribe from any list you have joined using the link in the email.</li>
        </ul>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Studio: {SITE.location}.
        </p>
      </LegalShell>
      <Footer />
    </div>
  );
}
