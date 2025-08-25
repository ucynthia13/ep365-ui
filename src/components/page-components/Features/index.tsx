"use client";
import React from "react";
import { featureData } from "./featureData";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const Features = () => {
  return (
    <Section id="features"
    >
      <div className="absolute -top-20 -right-20 w-90 h-90 bg-white/30 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-20 -left-20 w-90 h-90 bg-white/30 rounded-full blur-[100px]"></div>

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="max-w-2xl mx-auto mb-12">
            <SectionTitle title="Your analytics in one place" className="text-center mb-4" />
            <p className="text-center text-base">
              Still juggling tools? EP365 unifies your procurement in one
              platform.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {featureData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className={cn(
                    "relative group flex flex-col justify-center items-start gap-4 border-l p-8 hover:from-transparent hover:to-neutral-100 duration-300 transition cursor-pointer",
                    index < 3 ? "border-b bg-gradient-to-b" : "bg-gradient-to-t"
                  )}
                >
                  <div className="absolute left-0 top-1/2 w-1 hover:w-1.5 h-6 hover:h-7 bg-neutral-200 group-hover:bg-[#44BCFF] transition-all duration-300 rounded-full" />

                  <div className="bg-white rounded-lg p-2.5 shadow-2xl">
                    <Icon className="w-5 h-5 text-[#44BCFF]" />
                  </div>
                  <h1 className="text-xl font-semibold">
                    {feature.title}
                  </h1>
                  <p className="max-w-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
      </div>
    </Section>
  );
};

export default Features;
