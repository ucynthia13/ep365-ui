"use client";
import React from "react";
import { featureData } from "./featureData";
import Image from "next/image";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section id="features" className="relative z-10 overflow-hidden pt-16 md:pt-20 lg:pt-24">
      <div className="flex flex-col container max-w-6xl mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="font-semibold text-2xl sm:text-3xl max-w-sm sm:max-w-md text-center mx-auto"
          >
            Everything you need to know, In one place.
          </motion.h2>
          <p className="max-w-md sm:max-w-xl mx-auto text-center">
            Still juggling emails, Excel files, and scattered tools? EP365
            unites your entire procurement workflow into one streamlined
            platform. From requests and approvals to supplier data and analytics
            — it’s all here, simplified.
          </p>
          <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-tr from-white via-white to-primary/30 p-12 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {featureData.map((feature, index) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center text-center gap-4"
                    key={index}
                  >
                    <div className="text-center">
                      <Image
                        src={feature.image}
                        alt="Feature Image"
                        className="w-8 h-8"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="max-w-sm mx-auto">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
