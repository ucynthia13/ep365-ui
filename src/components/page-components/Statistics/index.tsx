"use client";

import React from "react";
import Image from "next/image";
import { stats } from "./statisticsData";
import { motion } from "framer-motion";

const Statistics = () => {
  return (
    <section id="statistics" className="relative z-10 overflow-hidden pt-24">
      <div className="flex flex-col gap-4 md:gap-0  max-w-6xl mx-auto container px-6">
        <div className="flex flex-col justify-center items-center gap-6 container max-w-4xl mx-auto bg-gradient-to-tr from-white via-white to-primary/30 p-12 rounded-4xl lg:-translate-x-1/8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="font-semibold text-2xl md:text-3xl lg:text-4xl max-w-sm md:max-w-md lg:max-w-xl text-center mx-auto"
          >
            Procurement that pays off
          </motion.h2>
          <p className="text-center max-w-xl">
            No matter your ind ustry’s procurement challenges, learn how EP365
            partners with customers to streamline workflows from procure to pay
            to achieve measurable ROI.
          </p>
        </div>
        <div className="max-w-4xl container grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto bg-gradient-to-l from-white via-white to-primary/30 p-12 rounded-4xl lg:translate-x-1/8 lg:-translate-y-1/8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border-l-3 pl-4 flex flex-col items-start gap-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
                {item.value}
              </h1>
              <p className="text-sm mb-2">{item.label}</p>
              <Image
                src={item.image}
                alt={item.label}
                width={40}
                height={40}
                className="w-auto h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
