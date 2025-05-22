import { Badge } from "@/components/ui/badge";
import React from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-b from-[#27665D] to-[#3A3A3A] pt-[130px] pb-24 md:pt-[120px] md:pb-[32px] xl:pt-[140px] xl:pb-[60px] 2xl:pt-[160px] 2xl:pb-[80px]"
    >
      <div className="flex flex-col container max-w-7xl mx-auto gap-8">
        <div className="flex flex-col justify-center items-center container max-w-6xl mx-auto gap-7">
          <Badge className="bg-blue-50 text-black flex gap-1 rounded-full px-4 py-1.5">
            <ShieldCheck className="w-6 h-6 text-blue-400" />
            SOC 2 Compliant
          </Badge>
          <h1 className="font-bold text-5xl text-primary-foreground max-w-xl text-center mx-auto leading-snug">
            The Smarter Way to Manage Procurement
          </h1>
          <p className="text-primary-foreground max-w-3xl mx-auto text-center text-lg">
            EP365 simplifies your procurement process with powerful automation,
            real-time insights, and AI-driven supplier management — all in one
            user-friendly platform.
          </p>
          <Button className="bg-[#52a699] rounded-full px-8 py-6 font-medium text-sm">
            Book a Demo
          </Button>
        </div>
        <div className="flex justify-center items-center mt-6">
          <Image
            src="/images/hero/Picture → Precoro dashboard screen (3).svg"
            alt="Hero Image 1"
            width={400}
            height={400}
            className="translate-x-1/2 -translate-y-1/8"
          />

          <Image
            src="/images/hero/Picture → Precoro dashboard screen (1).svg"
            alt="Hero Image 1"
            width={700}
            height={700}
          />
          <Image
            src="/images/hero/Picture → Precoro dashboard screen (2).svg"
            alt="Hero Image 1"
            width={400}
            height={400}
            className="-translate-x-1/2 translate-y-1/10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
