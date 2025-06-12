import Image from "next/image";
import React from "react";
import { whyUsData } from "./whyUsData";
import { cn } from "@/lib/utils";

const WhyUs = () => {
  const length = whyUsData.length;
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-center text-xs uppercase font-semibold tracking-wider text-gray-500">
          Mission
        </p>
        <h2 className="max-w-xl mx-auto text-center text-2xl sm:text-3xl font-medium text-gray-800 mt-2 mb-6 capitalize">
          Why 1,000+ Leading Businesses Trust EP365 for Smarter Procurement
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 ">
          {whyUsData.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "bg-[#f1f3f8] p-6 rounded-lg flex flex-col gap-4 hover:shadow-sm transition",
                index === length - 1 && "md:col-span-2 flex flex-row"
              )}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
              <div className="mt-auto">
                <Image
                  src={feature.imageSrc}
                  alt={feature.alt}
                  width={400}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
