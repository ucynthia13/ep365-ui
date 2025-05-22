"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Industries = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="relative z-10 pt-16 md:pt-20 lg:pt-24 max-w-5xl mx-auto rounded-2xl"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-md bg-gradient-to-r from-[#FFFFFF] to-[#7612C2] bg-clip-text text-transparent">
          WORKS FOR EVERY INDUSTRY
        </h1>
        <h1 className="text-3xl font-semibold">Designed for Your Business</h1>
        <p className="max-w-sm mx-auto text-center">
          No matter your sector, EP365 adapts to your needs. We serve industries
          with complex purchasing requirements and fast-moving supply chains.
        </p>
        <div className="flex gap-4 mt-12 mb-6">
          <Button className="bg-primary/50 border px-6 border-black/70 text-white rounded-full">
            Industry
          </Button>
          <Button
            variant="outline"
            className="rounded-full border px-6 border-black/70"
          >
            Company Size
          </Button>
        </div>
      </div>
      <div className="container mx-auto grid max-w-5xl gap-10 md:grid-cols-2 bg-gradient-to-r from-white to-primary/20 px-8 py-12 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6"
        >
          <h3 className="max-w-md text-xl leading-snug font-semibold">
            Industry-specific use cases{" "}
          </h3>
          <p className="max-w-sm text-sm">
            Explore how easily EP365 adapts to the workflows of different
            industries. No matter what you are ordering or how many departments
            you manage, EP365 is here to assist you.
          </p>
          <div className="flex flex-col gap-4 border-l-3 border-black/70 p-3 mt-24">
            <p className="max-w-sm">
              EP365 gave us visibility and control over the multi-branch
              spending of our organization.
            </p>
            <p className="max-w-sm text-sm">
              Barend Liebenberg, Procurement Manager Bolloré
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {[
            ["Biotechnology"],
            ["Healthcare"],
            ["Technology"],
            ["Hospitality"],
            ["Defense"],
            ["Non-profit"],
            ["Education"],
            ["Renewables"],
          ].map(([value], index) => (
            <motion.div
              key={value}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg bg-white flex justify-center items-center text-start font-semibold text-black transition duration-200 hover:scale-[1.05]"
            >
              <p className="text-sm text-center">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Industries;
