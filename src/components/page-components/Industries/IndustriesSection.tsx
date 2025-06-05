"use client";
import React from "react";
import { motion } from "framer-motion";
import { industries } from "./industriesData";

const IndustriesSection = () => {
  return (
    <div className="grid gap-10 md:grid-cols-2 p-12 rounded-2xl border border-border shadow-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col space-y-4 justify-center"
      >
        <h3 className="max-w-md text-xl md:text-2xl leading-snug font-semibold">
          Industry-specific use cases{" "}
        </h3>
        <p className="max-w-sm text-[15px]">
          Explore how easily EP365 adapts to the workflows of different
          industries. No matter what you are ordering or how many departments
          you manage, EP365 is here to assist you.
        </p>
        <div className="flex flex-col gap-4 border-l-2 border-black/70 p-3 mt-16">
          <p className="max-w-sm">
            EP365 gave us visibility and control over the multi-branch spending
            of our organization.
          </p>
          <p className="max-w-sm text-sm">
            Barend Liebenberg, Procurement Manager Bolloré
          </p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {industries.map(({ name, image }, index) => (
          <motion.div
            key={name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-lg shadow-xs flex justify-center items-center text-start font-semibold text-white transition duration-200 hover:scale-[1.05] p-6 bg-cover bg-center h-18 bg-gradient-to-b cursor-pointer"
            style={{ backgroundImage: `url(${image})` }}
          >

            <div className="w-full h-full flex items-center justify-center rounded-lg">
              <p className="text-sm text-center hover:text-lg transition duration-300">{name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesSection;
