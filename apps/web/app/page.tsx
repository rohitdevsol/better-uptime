import CTA from "@/components/sections/cta";
import FAQs from "@/components/sections/faqs";
import Feature2 from "@/components/sections/feature2";
import Feature3 from "@/components/sections/feature3";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Pricing from "@/components/sections/pricing";

export default function Page() {
  return <section className="font-poppins">
    <Hero />
    <Features />
    <Feature2 />
    <Feature3 />
    <Pricing />
    <FAQs />
    <CTA />
    <Footer />
  </section>
}