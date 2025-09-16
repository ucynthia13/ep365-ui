"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Brands from "../Brands";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  const words = [
    { text: "The" },
    { text: "Smarter" },
    { text: "Way" },
    { text: "To" },
    { text: "Manage" },
    {
      text: "Procurement.",
      className: "text-[#44BCFF] dark:text-blue-500",
    },
  ];

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <section className="relative sm:pt-16 overflow-hidden pt-[130px] md:pt-[120px] xl:pt-[140px] 2xl:pt-[160px]">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mt-16">
            {/* New Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 flex justify-center"
            >
              <Badge className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                <Sparkles className="size-6" />Trusted by 500+ Procurement Teams
              </Badge>
            </motion.div>

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
                className="inline-flex items-center justify-center w-full px-8 py-2 text-lg font-semibold text-white transition-all duration-200 border-2 border-transparent sm:w-auto rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black hover:text-black hover:bg-gray-50 hover:border-black"
              >
                Book a demo
              </motion.a>
            </motion.div>
          </div>

          <Brands />

          <motion.div
            className="relative md:h-[500px] overflow-hidden border-x border-t rounded-xl md:rounded-t-xl p-2 bg-gray-100"
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
