
import Banner from "@/components/page-components/Banner/bottom-banner";
import Brands from "@/components/page-components/Brands";
import Features from "@/components/page-components/Features";
import Footer from "@/components/page-components/Footer";
import Header from "@/components/page-components/Header";
import Hero from "@/components/page-components/Hero/Hero";
import Industries from "@/components/page-components/Industries";
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
      <Header />
      <Hero />
      <Brands />
      <Features />
      <WhyUs />
      <Industries />
      <Statistics />
      <Testimonials />
      <Banner />
      <Footer />
    </>
  );
}
