"use client";
import React from "react";
import { motion } from "framer-motion";
import { industries } from "./industriesData";

const IndustriesSection = () => {
  return (
    <div className="p-10 md:p-12 rounded-2xl border border-border shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="mb-10 lg:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
            Industry-specific use cases
          </h2>
          <p className="text-[15px] text-neutral-600 mt-2 max-w-2xl">
            Explore how easily EP365 adapts to the workflows of different
            industries. No matter what you are ordering or how many departments
            you manage, EP365 is here to assist you.
          </p>
        </div>
        {industries.map((industry) => {
          return (
            <motion.div
              key={industry.title}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border border-neutral-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                {industry.icon}
                <h3 className="text-md font-semibold text-neutral-800">
                  {industry.title}
                </h3>
              </div>
              <p className="text-sm text-neutral-600">{industry.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustriesSection;
