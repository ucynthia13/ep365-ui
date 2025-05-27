
import Banner from "@/components/page-components/Banner/bottom-banner";
import Features from "@/components/page-components/Features";
import Footer from "@/components/page-components/Footer";
import Header from "@/components/page-components/Header";
import Hero from "@/components/page-components/Hero/Hero";
import Industries from "@/components/page-components/Industries";
import PricingPlans from "@/components/page-components/Pricings";
import Statistics from "@/components/page-components/Statistics";
import Testimonials from "@/components/page-components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EP365 Procurement",
  description: "The Smarter Way to Manage Procurement",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Industries />
      <Features />
      <Statistics />
      <Testimonials />
      <PricingPlans />
      <Banner />
      <Footer />
    </>
  );
}
