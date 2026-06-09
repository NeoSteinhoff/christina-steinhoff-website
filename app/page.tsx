import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Method } from "@/components/sections/Method";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { InfiniteScrollBanner } from "@/components/ui/InfiniteScroll";

const bannerItems = [
  "Science + Soul Fusion™",
  "Neuroscience-Based Coaching",
  "Executive Mentorship",
  "Dubai's Elite Life Coach",
  "NLP & Hypnotherapy",
  "Somatic Release",
  "Conscious Leadership",
];

export default function Home() {
  return (
    <main className="bg-[#060606]">
      <Navbar />
      <Hero />
      <InfiniteScrollBanner items={bannerItems} />
      <About />
      <Method />
      <Services />
      <Testimonials />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
