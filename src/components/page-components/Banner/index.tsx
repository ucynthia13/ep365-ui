"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="max-w-5xl mx-auto rounded-2xl bg-neutral-800 p-12 flex justify-between"
    >
      <div className="text-white flex flex-col gap-1">
        <h1 className="text-3xl font-semibold">See what EP365 has for you!</h1>
        <p>Start your spend visibilty now</p>
      </div>
      <div>
        <Button className="bg-primary/50 p-4">Get my demo</Button>
      </div>
    </motion.div>
  );
};

export default Banner;
