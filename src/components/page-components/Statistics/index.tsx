import React from "react";
import Image from "next/image";
import { stats } from "./statisticsData";

const Statistics = () => {
  return (
    <section id="statistics" className="relative z-10 overflow-hidden pt-24">
      <div className="flex flex-col max-w-6xl mx-auto container">
        <div className="flex flex-col justify-center items-center gap-6 container max-w-4xl mx-auto bg-gradient-to-tr from-white via-white to-primary/30 p-12 rounded-4xl -translate-x-1/8">
          <h1 className="text-4xl font-semibold">Procurement That Pays Off</h1>
          <p className="text-center max-w-xl">
            No matter your ind ustry’s procurement challenges, learn how EP365
            partners with customers to streamline workflows from procure to pay
            to achieve measurable ROI.
          </p>
        </div>
        <div className="max-w-4xl container flex mx-auto bg-gradient-to-l from-white via-white to-primary/30 p-12 rounded-4xl translate-x-1/8 -translate-y-1/8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="border-l pl-4 flex flex-col items-start gap-4"
            >
              <h1 className="text-6xl font-semibold">{item.value}</h1>
              <p className="text-sm mb-2">{item.label}</p>
              <Image
                src={item.image}
                alt={item.label}
                width={40}
                height={40}
                className="w-auto h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
