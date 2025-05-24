"use client";
import React from "react";
import { featureData } from "./featureData";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      id="features"
      className="relative z-10 overflow-hidden py-16 md:py-24 lg:py-32 bg-gray-950 text-white"
    >
      <div className="absolute -top-20 -right-20 w-90 h-90 bg-white/30 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-90 h-90 bg-white/30 rounded-full blur-[100px]"></div>

      <div className="flex flex-col container max-w-5xl mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="max-w-2xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-4 capitalize"
            >
              Your analytics in one place
            </motion.h2>
            <p className="text-center text-lg">
              Still juggling tools? EP365 unifies your procurement in one
              platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {featureData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  className="flex flex-col justify-center items-start gap-6"
                  key={index}
                >
                  <div className="bg-white rounded-lg p-2.5 shadow-2xl">
                    <Icon className="w-5 h-5 text-[#44BCFF]" />
                  </div>

                  <h1 className="text-xl sm:text-2xl font-semibold">
                    {feature.title}
                  </h1>
                  <p className="max-w-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
