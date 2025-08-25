import { Metadata } from "next";
import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features/Feature";
export const metadata: Metadata = {
  title: "Solutions | EP 365",
  description:
    "Discover the range of solutions offered by EP 365, including digital transformation, cloud integration, data analytics, and custom software development. Explore how our expert team delivers innovative, scalable, and secure solutions tailored to your business needs.",
};

const SolutionsPage = () => {
  return (
    <>
      <Hero />
      <Features />      
    </>
  );
};

export default SolutionsPage;
