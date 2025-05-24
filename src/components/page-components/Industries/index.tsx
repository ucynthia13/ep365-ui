"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import IndustrySections from "./IndustriesSections";

const Industries = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="relative z-10 py-12 sm:py-16 lg:py-20 max-w-5xl mx-auto rounded-2xl px-6"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-4 capitalize"
          >
            EP365 adapts to any industry.
          </motion.h2>
          <p className="text-center text-lg">
            Choose the plan best for your business growth.
          </p>
        </div>
        <div className="flex gap-4 mt-16 mb-6">
          <Button className="bg-black hover:bg-gray-900 border px-6 text-white rounded-full">
            Industry
          </Button>
          <Button
            variant="outline"
            className="rounded-full border px-6 border-gray-400"
          >
            Company Size
          </Button>
        </div>
      </div>
      <IndustrySections />
    </motion.div>
  );
};

export default Industries;
