"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return ( 
    <div className="bg-gray-50">
      <section className="relative bg-gray-50 sm:pt-16 overflow-hidden pt-[130px] md:pt-[120px] xl:pt-[140px] 2xl:pt-[160px]">
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

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-semibold text-white transition-all duration-2 border-2 border-transparent sm:w-auto rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black hover:bg-gray-900"
              >
                Book a demo
              </a>
            </div>
          </div>
          <div className="relative h-[400px] overflow-hidden">
            <div className="absolute inset-0 h-2/3 bg-gray-50 z-0"></div>
            <div className="relative z-10 mx-auto lg:max-w-7xl rounded-xl overflow-clip">
              <Image
                className="w-full h-auto"
                src="/images/hero/Picture → Precoro dashboard screen (1).svg"
                alt=""
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
