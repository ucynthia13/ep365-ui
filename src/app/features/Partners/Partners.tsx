"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { partners } from "./partnersData";

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28 text-center">
      <h2 className="text-xl md:text-2xl lg:text-3xl max-w-xl font-bold text-gray-800 mx-auto">
        Trusted by procurement leaders to manage over $40B in spend
      </h2>
      <div className="flex justify-center items-center gap-24 overflow-x-auto scrollbar-hide">
        <button onClick={handlePrev} aria-label="Previous">
          <div className="p-3 rounded-full bg-gray-200">
            <ChevronLeft className="w-4.5 h-4.5" />
          </div>
        </button>
        <div>
          <p className="text-gray-600 mt-6 max-w-xl mx-auto">
            “We began with one department and smoothly scaled to five. EP365
            streamlines our budget management and automates invoice-to-PO
            matching, allowing us to shift focus to more strategic priorities.”
          </p>
          <p className="mt-4 text-sm text-gray-500">David G., CFO at Cheerz</p>
        </div>
        <button onClick={handleNext} aria-label="Next">
          <div className="p-3 rounded-full bg-gray-200">
            <ChevronRight className="w-4.5 h-4.5" />
          </div>
        </button>
      </div>
      <div className="mt-10 flex justify-center items-center gap-6">
        <div className="flex overflow-x-auto scrollbar-hide">
          {partners.map((partner, idx) => (
            <div
              key={partner.name}
              className={`transition-opacity duration-300 ${
                idx === activeIndex ? "opacity-100" : "opacity-40"
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={100}
                height={50}
                className={cn("w-45", idx === 0 && "w-15")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
