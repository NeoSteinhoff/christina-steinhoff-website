import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LegalShell } from "@/components/sections/LegalShell";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of Christina Steinhoff's website and coaching services.",
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f7f1e7]">
      <Navbar />
      <LegalShell title="Terms of Service" updated="June 2026">
        <p>
          These terms govern your use of {SITE.url} and any coaching or mentorship services provided
          by Christina Steinhoff. By using the site or booking a call, you agree to them.
        </p>

        <h2>Nature of the work</h2>
        <p>
          Christina provides coaching and mentorship. This is not medical care, psychotherapy, or a
          substitute for treatment from a licensed healthcare professional. Nothing on this site is
          medical, psychological, legal, or financial advice. If you are in crisis or need clinical
          support, please contact a qualified professional or emergency services.
        </p>

        <h2>No guaranteed outcomes</h2>
        <p>
          Results depend on many factors, most of all your own engagement. Client stories and examples
          on this site describe individual experiences and are not promises of any particular result.
        </p>

        <h2>Bookings &amp; payments</h2>
        <p>
          Discovery calls are complimentary. Paid programmes are agreed in writing before they begin,
          including scope, fees, and any rescheduling or cancellation terms. Those agreement terms take
          precedence over this page where they differ.
        </p>

        <h2>Intellectual property</h2>
        <p>
          All content on this site — including the Science + Soul Fusion™ method, text, and design — is
          owned by Christina Steinhoff and may not be copied or reused without permission.
        </p>

        <h2>Confidentiality</h2>
        <p>
          What you share in sessions is treated as confidential and used only to support your work
          together, except where disclosure is required by law.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </LegalShell>
      <Footer />
    </div>
  );
}
