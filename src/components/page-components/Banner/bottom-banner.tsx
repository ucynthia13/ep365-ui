"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section id="banner" className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="relative overflow-hidden max-w-6xl my-12 mx-auto rounded-2xl bg-gray-950 p-12 md:p-14 lg:p-16 flex justify-between"
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
        <div className="flex flex-col justify-center items-center w-full">
          <div className="text-white text-center flex flex-col gap-3 md:max-w-[60%]">
            <h1 className="text-4xl font-semibold mb-2">
              See what EP365 has for you!
            </h1>
            <p className="text-lg">We are here to help you with your business. Get in touch with us and we will get back to you as soon as possible.</p>
          </div>
          <div className="mt-6">
            <Button className="bg-gray-800 hover:bg-gray-900 px-12 py-6 text-md rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
