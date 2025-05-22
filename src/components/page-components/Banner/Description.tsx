"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Description = () => {
  return (
    <section id="description" className="relative z-10 pt-16 md:pt-20 lg:pt-24 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="max-w-5xl mx-auto rounded-2xl grid md:grid-cols-2 bg-gradient-to-tr from-white via-white to-primary/30"
      >
        <div className="flex flex-col gap-6 p-12 md:p-16">
          <h2 className="font-medium text-md uppercase">
            Ai designed for procurement
          </h2>
          
          <h1 className="font-semibold text-3xl max-w-sm">
            Your AI Assistant for Purchasing
          </h1>
          <p className="max-w-sm text-sm">
            Let EP365 handle the heavy lifting. Our AI-powered system
            automatically collects supplier quotes, compares pricing, and
            identifies the best deals — so you can move faster and save more.
          </p>
        </div>
        <div className="py-4">
          <Image src="/images/banner/Procurify-AI-designed-for-procurement.webp.svg" className="h-full w-full" width={400} height={400} alt="Banner Image"/>
        </div>
      </motion.div>
    </section>
  );
};

export default Description;
