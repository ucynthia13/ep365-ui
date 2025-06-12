import { BrandsScrollable } from "@/components/page-components/Brands";
import React from "react";
import brandsData from "./partnersData";

const Partners = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <h3 className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
          Our customers
        </h3>
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 capitalize">
          Trusted by Leading Global Brands
        </h2>
        <BrandsScrollable data={brandsData} />
      </div>
    </section>
  );
};

export default Partners;
