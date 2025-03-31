import CTA from "@/components/CTASection";
import FAQ from "@/components/FAQSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <WhyChooseUs />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
