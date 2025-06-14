"use client"

import Image from "next/image";
import brandsData from "./brandsData";
import { motion } from "framer-motion";
import { Marquee } from "@/components/magicui/marquee";
import { Brand } from "@/types";

const Brands = () => {
  return (
    <section id="brands" className="relative z-10 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="container px-6"
      >
          <div className="max-w-2xl mx-auto mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="text-gray-600 text-center capitalize"
            >
              Trusted by leading businesses
            </motion.h2>
          </div>
        <BrandsScrollable data={brandsData} />
      </motion.div>
    </section>
  );
};

export default Brands;

const BrandCard = ({ brand }: { brand: Brand }) => {
  const image = brand.image;

  return (
    <figure className="hover:animate-zoomIn relative h-full cursor-pointer overflow-hidden rounded-xl">
      <a
        href="#"
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-full opacity-70 transition hover:scale-[1.05] hover:opacity-100"
      >
        <Image
          src={image}
          alt="Brand"
          className="block"
          width={120}
          height={120}
        />
      </a>
    </figure>
  );
};

export const BrandsScrollable = ({ data }: { data: Brand[] }) => {
  return (
    <div className="relative container max-w-5xl mx-auto flex w-full flex-col items-center justify-center overflow-hidden px-8">
      <Marquee pauseOnHover className="[--duration:27s]">
        {data.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-bg-gray-50"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-bg-gray-50"></div>
    </div>
  );
};
