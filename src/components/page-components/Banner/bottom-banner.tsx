"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="relative overflow-hidden max-w-5xl my-12 mx-auto rounded-2xl bg-[#333333] p-16 flex justify-between"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/banner/black-green.svg.svg"
          alt=""
          width={100}
          height={100}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-10 w-auto opacity-80"
        />
        <Image
          src="/images/banner/Image.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 right-0 h-20 w-auto opacity-80"
        />
        <Image
          src="/images/banner/black-pink.svg fill.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 h-14 w-auto opacity-80"
        />
        <Image
          src="/images/banner/black-orange.svg.svg"
          alt=""
          width={100}
          height={100}
          className="absolute bottom-0 left-0 h-14 w-auto opacity-80"
        />
      </div>
      <div className="text-white flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">See what EP365 has for you!</h1>
        <p>Start your spend visibilty now</p>
      </div>
      <div>
        <Button className="bg-primary p-6 text-md">Get my demo</Button>
      </div>
    </motion.div>
  );
};

export default Banner;
