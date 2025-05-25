"use client";

import { Particles } from "@/components/magicui/particles";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="rounded-full bg-gradient-to-r from-[#44BCFF]/10 via-[#44BCFF]/10 to-[#44BCFF]/5 border border-[#44BCFF]/30 px-4 py-1.5 text-[#44BCFF]/60">
              Get started with demo
              <Sparkles />
            </Badge>
            <p className="mt-5 text-3xl font-bold leading-tight text-black capitalize sm:leading-tight sm:text-4xl lg:text-6xl lg:leading-tight font-pj">
              The smarter way to manage
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#44BCFF]/60 to-[#44BCFF]/70 blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> Procurement </span>
              </span>
            </p>

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
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-semibold text-white transition-all duration-2 border-2 border-transparent sm:w-auto rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black hover:bg-gray-900"
              >
                Book a demo
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="relative h-[400px] overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative z-10 mx-auto lg:max-w-7xl rounded-xl overflow-clip">
              <Image
                className="w-full h-auto"
                src="/images/hero/Picture → Precoro dashboard screen (1).svg"
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
