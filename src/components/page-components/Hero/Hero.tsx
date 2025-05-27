"use client";

import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { people } from "./heroData";
import Brands from "../Brands";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

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
    <div className="bg-gray-50">
      <section className="relative sm:pt-16 overflow-hidden pt-[130px] md:pt-[120px] xl:pt-[140px] 2xl:pt-[160px]">
        <Particles
          className="absolute inset-0 z-0"
          quantity={110}
          ease={80}
          color={color}
          refresh
        />

        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mt-16">
            <div className="flex flex-row items-center justify-center mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>{" "}
            {/* <p className="mt-5 text-3xl font-bold leading-tight text-black capitalize sm:leading-tight sm:text-4xl lg:text-6xl lg:leading-tight font-pj">
              The smarter way to manage
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#44BCFF]/60 to-[#44BCFF]/70 blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> Procurement </span>
              </span>
            </p> */}
            <TypewriterEffectSmooth words={words} />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="mt-5 text-lg max-w-4xl mx-auto font-normal text-gray-600 dark:text-gray-400"
            >
              EP365 simplifies your procurement process with powerful
              automation, real-time insights, and AI-driven supplier management
              — all in one user-friendly platform.
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
            className="relative h-[500px] max-w-5xl mx-auto overflow-hidden border rounded-t-xl p-2 bg-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative z-10 rounded-xl overflow-clip border">
              <Image
                className="w-full h-auto "
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
