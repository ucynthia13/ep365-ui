"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people } from "./heroData";
import Brands from "../Brands";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Star } from "lucide-react";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  const words = [
    {
      text: "The",
    },
    {
      text: "Smarter",
    },
    {
      text: "Way",
    },
    {
      text: "To",
    },
    {
      text: "Manage",
    },
    {
      text: "Procurement.",
      className: "text-[#44BCFF] dark:text-blue-500",
    },
  ];
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div
        className="absolute inset-0 z-0 flex [mask-image:radial-gradient(circle_at_center,white_0%,white_10%,transparent_70%)] overflow-hidden"
        style={{ opacity: 1 }}
      >
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
        <div className="h-full min-w-20 max-w-20 bg-gradient-to-r from-neutral-100 to-white shadow-[2px_0px_0px_0px_var(--color-neutral-300)] dark:from-neutral-900 dark:to-neutral-950 dark:shadow-[2px_0px_0px_0px_var(--color-neutral-800)]"></div>
      </div>
      <section className="relative sm:pt-16 overflow-hidden pt-[130px] md:pt-[120px] xl:pt-[140px] 2xl:pt-[160px]">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mt-16">
            <div className="flex flex-col mb-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                <div className="flex flex-row items-center justify-center">
                  <AnimatedTooltip items={people} />
                </div>
                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#FDB241] fill-[#FDB241]"
                      />
                    ))}
                </div>
              </div>
              <p className="text-gray-600 mt-4 md:mt-2 text-sm">
                200+ procurement managers trust EP365 daily
              </p>
            </div>
            <TypewriterEffectSmooth words={words} />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="mt-5 text-lg max-w-4xl mx-auto font-normal text-gray-600 dark:text-gray-400"
            >
              EP365 simplifies your procurement process with powerful
              automation, real-time insights, and AI-driven supplier management,
              all in one user-friendly platform.
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
          <Brands />
          <motion.div
            className="relative md:h-[500px] max-w-5xl mx-auto overflow-hidden border-x border-t rounded-xl md:rounded-t-xl p-2 bg-gray-100"
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
