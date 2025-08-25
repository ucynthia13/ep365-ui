import React from "react";
import { features } from "./featureData";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Features = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28 text-center">
      <div className="max-w-5xl px-6 mx-auto">
        <p className="text-xs uppercase font-semibold tracking-wider text-gray-500">
          End-to-End Automation
        </p>
        <h2 className="text-2xl max-w-xl mx-auto sm:text-3xl font-medium text-gray-800 mt-2 mb-6 capitalize">
          Make Procurement Effortless with Our Smart AI Software
        </h2>
        <p className="text-sm max-w-2xl mx-auto text-gray-500 mb-10">
          Let our AI/ML procurement system handle everything — from uploading
          supplier invoices to drafting documents with precision and speed.
        </p>
        {features.map((feature, index) => (
          <div
            className={cn(
              "flex flex-col md:flex-row justify-between p-2",
              index % 2 !== 0 && "md:flex-row-reverse"
            )}
            key={index}
          >
            <div className="flex flex-col justify-center p-6 space-y-4 text-start">
              <div className="rounded-full bg-gray-100 text-[#44BCFF] font-bold h-10 w-10 flex items-center justify-center">
                <p>{index + 1}</p>
              </div>

              <h1 className="text-gray-800 font-semibold">{feature.title}</h1>
              <p className="text-gray-600 text-sm max-w-sm mx-auto">
                {feature.description}
              </p>
            </div>
              <Image
                src={feature.imageSrc}
                alt="Feature Image"
                width={100}
                height={100}
                className="w-100 rounded-lg"
              />
          </div>
        ))}
      </div>
      <Button className="mt-6 inline-flex items-center justify-center w-full px-7 py-5 font-semibold text-white transition-all duration-2 border-2 border-transparent sm:w-auto rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black hover:text-black hover:bg-gray-50 hover:border-black">
        Book a Demo
      </Button>
    </section>
  );
};

export default Features;
