"use client";

import { useRef } from "react";

const features = [
  {
    title: "Intake management",
    description:
      "Capture purchase and vendor data right at the request stage, with employees guided step by step through a smart intake form.",
    image: "/images/hero/procurement.png",
  },
  {
    title: "Purchasing",
    description:
      "Keep buying easy and compliant with pre-approved vendors, items, and workflows built into the procurement software.",
    image: "/images/hero/person.png",
  },
  {
    title: "AI-powered AP automation",
    description:
      "Automate data extraction with AI-powered OCR and pay only fully approved, matched, and validated invoices.",
    image: "/images/hero/sync2.png",
  },
];

export default function FeatureScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-4 pb-4 scrollbar-hide scroll-smooth"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="min-w-[320px] md:min-w-[400px] md:max-w-lg flex-shrink-0 rounded-xl overflow-hidden border border-border cursor-pointer"
          >
            <div
              className="h-70 bg-gray-100/50 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${feature.image})` }}
            >
            </div>

            <div className="p-5">
              <h3 className="font-medium">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
