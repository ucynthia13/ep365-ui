import AIFeatures from "@/components/page-components/AIFeatures";
import Banner from "@/components/page-components/Banner/Banner";
import ContactUS from "@/components/page-components/Contact";
import { CTAPopup } from "@/components/page-components/CTAPopup.tsx";
import Features from "@/components/page-components/Features";
import Hero from "@/components/page-components/Hero/Hero";
import Industries from "@/components/page-components/Industries";
import PricingPlans from "@/components/page-components/Pricings";
import Statistics from "@/components/page-components/Statistics";
import Testimonials from "@/components/page-components/Testimonials";
import WhyUs from "@/components/page-components/WhyUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EP365 Procurement",
  description: "The Smarter Way to Manage Procurement",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Industries />
      <AIFeatures />
      <WhyUs />
      <Statistics />
      <Testimonials />
      <PricingPlans />
      <Banner />
      <ContactUS />
      <CTAPopup videoLink="https://drive.google.com/file/d/1Ou6DT9lEHTH1AtD_4z4ybcggjICrR8tI/view?usp=sharing" />
    </>
  );
}
