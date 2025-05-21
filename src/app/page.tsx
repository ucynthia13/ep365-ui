
import Brands from "@/components/page-components/Brands";
import Hero from "@/components/page-components/Hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EP365 Procurement",
  description: "The Smarter Way to Manage Procurement",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
    </>
  );
}
