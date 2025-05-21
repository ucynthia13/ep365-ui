
import Brands from "@/components/page-components/Brands";
import Features from "@/components/page-components/Features";
import Header from "@/components/page-components/Header";
import Hero from "@/components/page-components/Hero/Hero";
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
    </>
  );
}
