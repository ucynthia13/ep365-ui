import { Badge } from "@/components/ui/badge";
import React from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-primary"
    >
      <div className="flex flex-col container max-w-5xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          <Badge className="bg-white/80 flex gap-2 rounded-full p-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            SOC 2 Compliant
          </Badge>
          <h1 className="font-bold text-6xl text-primary-foreground max-w-xl text-center mx-auto">
            The Smarter Way to Manage Procurement
          </h1>
          <p className="font-medium text-primary-foreground max-w-xl mx-auto text-center">
            EP365 simplifies your procurement process with powerful automation,
            real-time insights, and AI-driven supplier management — all in one
            user-friendly platform.
          </p>
          <Button className="bg-white/80 rounded-full p-4 font-medium text-sm">
            Book a Demo
          </Button>
        </div>
        <div className="flex">
          <Image
            src="/images/hero/Picture → Precoro dashboard screen (3).svg"
            alt="Hero Image 1"
            width={800}
            height={800}
          />

          <Image
            src="/images/hero/Picture → Precoro dashboard screen (1).svg"
            alt="Hero Image 1"
            width={1000}
            height={1000}
          />
          <Image
            src="/images/hero/Picture → Precoro dashboard screen (2).svg"
            alt="Hero Image 1"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
