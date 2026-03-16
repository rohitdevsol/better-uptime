import CTA from "@/components/sections/cta";
import FAQs from "@/components/sections/faqs";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar";
import Pricing from "@/components/sections/pricing";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  );
}