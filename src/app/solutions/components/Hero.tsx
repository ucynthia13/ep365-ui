"use client";

import { BrandsScrollable } from "@/components/page-components/Brands";
import { motion } from "framer-motion";
import brandsData from "../../about-us/components/Partners/partnersData";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="relative sm:pt-16 overflow-hidden pt-[130px] md:pt-[120px] xl:pt-[140px] 2xl:pt-[160px]">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mt-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-12 capitalize max-w-2xl mx-auto"
            >
              Procurement software: control purchases, conserve funds
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="mt-5 text-lg max-w-xl mx-auto font-normal text-gray-600 dark:text-gray-400"
            >
              Transform procurement and financial habits from reactive to
              proactive. Identify cost-saving opportunities with full visibility
              into spending. Plus, customize approval workflows and oversee
              suppliers – all in one tool.
            </motion.p>
            <motion.div
              className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex my-9"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full px-8 py-2 text-lg font-semibold text-white transition-all duration-2 border-2 border-transparent sm:w-auto rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black hover:text-black hover:bg-gray-50 hover:border-black"
              >
                Book a demo
              </motion.a>
            </motion.div>
            <BrandsScrollable data={brandsData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
