import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Method } from "@/components/sections/Method";
import { Outcomes } from "@/components/sections/Outcomes";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { InfiniteScrollBanner } from "@/components/ui/InfiniteScroll";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

const bannerItems = [
  "Science + Soul Fusion™",
  "Emotional Mastery",
  "NLP & Master Hypnosis",
  "Nervous System Regulation",
  "Conscious Leadership",
  "Executive Mentorship",
];

export default function Home() {
  return (
    <main id="main" className="bg-[#060606]">
      <Navbar />
      <Hero />
      <InfiniteScrollBanner items={bannerItems} />
      <About />
      <Method />
      <Outcomes />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
