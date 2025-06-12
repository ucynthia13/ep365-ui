import React from "react";
import StatsCircle from "./StatsCircle";

const stats = [
  { percentage: 78, label: 'Faster purchasing cycle' },
  { percentage: 5, label: 'Annual budget savings' },
  { percentage: 65, label: 'Lower invoice processing costs' },
  { percentage: 98, label: 'Spend under management' },
];

const Statistics = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28">
      <div className="max-w-5xl px-6 mx-auto">
        <h2 className="text-center text-2xl md:text-3xl text-gray-800 font-semibold mb-10 capitalize">
          ROI EP365 users see in a year
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((item, index) => (
            <StatsCircle key={index} percentage={item.percentage} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics