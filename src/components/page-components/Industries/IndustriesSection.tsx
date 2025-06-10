"use client";
import React from "react";
import { motion } from "framer-motion";
import { industries } from "./industriesData";
import { ArrowRight } from "lucide-react"; // optional, or use an SVG/icon

const IndustriesSection = () => {
  return (
    <>
      <div className="mb-10 flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
          Industry-specific use cases
        </h2>
        <p className="text-[15px] text-neutral-600 mt-2 max-w-2xl text-center">
          Explore how easily EP365 adapts to the workflows of different
          industries. No matter what you are ordering or how many departments
          you manage, EP365 is here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => {
          return (
            <motion.div
              key={industry.title}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative border border-neutral-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-all"
            >
              <div className="transition-all duration-300 mb-3 group-hover:mb-6">
                <div className="flex items-center gap-3 mb-3">
                  {industry.icon}
                  <h3 className="text-md font-semibold text-neutral-800">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600">{industry.description}</p>
              </div>

              <div className="absolute bottom-5 left-5 opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  className="text-sm font-medium inline-flex items-center gap-1 hover:underline"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default IndustriesSection;
