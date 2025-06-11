"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";

const Hero = () => {
  return (
    <div className="relative bg-[#f4f4fd] overflow-hidden">
      <section className="relative sm:pt-16 overflow-hidden pt-[130px] md:pt-[120px] xl:pt-[140px] 2xl:pt-[160px]">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mt-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-4 capitalize"
            >
              Smarter Procurement
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-12 capitalize"
            >
              Unified. Automated. Cost-Saving.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="mt-5 text-lg max-w-2xl mx-auto font-normal text-gray-600 dark:text-gray-400"
            >
              EP365 unifies all your procurement processes in one smart,
              AI-powered platform. Automate intake, purchasing, and
              budgeting—eliminating scattered tools, cluttered spreadsheets, and
              email overload. Keep every team aligned with your procurement
              policy, effortlessly and efficiently.
            </motion.p>
            <motion.div
              className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9"
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
          </div>
          {/* The Floating UI Elements */}
          <div className="absolute left-36 bottom-2/3 space-y-6 z-20">
            <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-md">
              <Image
                src="/images/hero/customer-3.webp"
                alt="Excel"
                width={24}
                height={24}
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Joe Summers</p>
                <p className="text-xs text-gray-600">
                  Hey, can you approve this...
                </p>
              </div>
            </div>
          </div>
          <div className="absolute left-64 bottom-3/6 space-y-6 z-20">
            <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-md">
              <Image
                src="/images/hero/customer-2.webp"
                alt="Calendar"
                width={24}
                height={24}
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Joe Summers</p>
                <p className="text-xs text-gray-600">
                  Hey, can you approve this...
                </p>
              </div>
            </div>
          </div>

          <div className="absolute right-36 z-20 bottom-3/5">
            <div className="flex items-center space-x-3 bg-white px-3 py-2 rounded-lg shadow-md">
              <Image
                src="/images/hero/customer-1.webp"
                alt="Joe Summers"
                width={32}
                height={32}
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Joe Summers</p>
                <p className="text-xs text-gray-600">
                  Hey, can you approve this...
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className=" mt-16 relative md:h-[500px] max-w-5xl mx-auto overflow-hidden border-x border-t rounded-xl md:rounded-t-xl p-2 bg-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <BorderBeam
              duration={4}
              size={300}
              reverse
              className="from-transparent via-[#44BCFF] to-transparent"
            />
            <div className="relative z-10 rounded-xl overflow-clip border">
              <Image
                className="w-full h-auto"
                src="/images/hero/Dashboard.svg"
                alt="Dashboard Screenshot"
                width={1200}
                height={800}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
