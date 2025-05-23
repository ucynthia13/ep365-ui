"use client";

import Image from "next/image";
import { useState } from "react";
import { whyUsData } from "./whyUsData";
import { motion, AnimatePresence } from "framer-motion";

type Category = keyof typeof whyUsData;

const WhyUs = () => {
  const [category, setCategory] = useState<Category>(
    Object.keys(whyUsData)[0] as Category
  );
  const current = whyUsData[category];

  return (
    <section id="why-us" className="relative z-10 pt-16 md:pt-20 lg:pt-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="container mx-auto max-w-6xl px-6 flex flex-col justify-center items-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="mb-12 text-center text-2xl font-semibold sm:text-3xl max-w-sm sm:max-w-md"
        >
          Why Choose EP365 Procurement Cloud
        </motion.h2>
        <motion.div className="mb-6 flex flex-wrap justify-center items-center gap-4">
          {Object.keys(whyUsData).map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item as Category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                item === category
                  ? "bg-primary/50 text-white border border-black/40"
                  : "border-primary/70 text-black/70"
              }`}
            >
              {item}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 items-center gap-4 pt-12 md:grid-cols-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <Image
                src={current.image}
                alt={`${category} Image`}
                width={400}
                height={500}
                className="h-70 rounded-4xl object-cover shadow-xl transition duration-300 hover:scale-[1.03]"
              />
            </motion.div>
            <div className="mt-6 md:mt-0">
              <motion.h5
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-2 text-md font-semibold"
              >
                {category}
              </motion.h5>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 text-2xl font-semibold"
              >
                {category}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm leading-relaxed text-black"
              >
                {current.description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-8 rounded-full text-white bg-primary/50 border border-black/40 px-6 py-2 text-sm font-medium transition duration-200 hover:scale-[1.05] hover:bg-primary/70"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default WhyUs;
