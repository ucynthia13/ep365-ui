import { cn } from "@/lib/utils";
import React from "react";

const stats = [
  { label: "Year founded", value: "2015" },
  { label: "Countries served", value: "80+" },
  { label: "Clients onboarded", value: "1000+" },
];

const highlights = [
  { title: "+50% growth", subtitle: "of revenue year over year" },
  { title: "$40 Billion+", subtitle: "worth of POs yearly" },
];

const EPOverview = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28 text-center">
      <h3 className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
        Raw Numbers
      </h3>
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 capitalize">
        EP365 at a glance
      </h2>

      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {stats.map((item, idx) => (
          <div key={idx} className="min-w-[120px]">
            <p className="text-3xl font-semibold">{item.value}</p>
            <p className="text-sm font-medium text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 rounded-lg px-6 py-8 max-w-3xl mx-auto">
        {highlights.map((item, idx) => (
          <div key={idx} className={cn("text-center p-4", idx === 0 && "border-r border-border")}>
            <p className="text-3xl font-semibold text-gray-800">
              {item.title}
            </p>
            <p className="text-sm font-medium text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EPOverview;
