"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { featureData } from "./featureData";

const Features = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28 text-black">
      <div className="max-w-5xl px-6 mx-auto">
        <p className="text-xs uppercase font-semibold tracking-wider text-gray-500">
          What makes us tick
        </p>
        <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 mt-2 mb-6 capitalize">
          Core Values that drive us
        </h2>
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
            return (
              <motion.div
                key={index}
                className={cn(
                  "relative group flex flex-col justify-center items-start gap-4 border-l p-8 hover:from-transparent hover:to-neutral-100 duration-300 transition cursor-pointer",
                  index < 3 ? "border-b bg-gradient-to-b" : "bg-gradient-to-t"
                )}
              >
                <div className="absolute left-0 top-1/2 w-1 hover:w-1.5 h-6 hover:h-7 bg-neutral-200 group-hover:bg-[#44BCFF] transition-all duration-300 rounded-full" />
                <p className="text-3xl text-[#44BCFF] font-bold">
                  0{index + 1}
                </p>
                <h1 className="text-xl font-semibold">{feature.title}</h1>
                <p className="max-w-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
