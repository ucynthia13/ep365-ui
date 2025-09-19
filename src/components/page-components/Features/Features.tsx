"use client";

import React from "react";
import { featureData } from "./featureData";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  return (
    <>
      <Section className="border-x border-divide py-12">
        <div className="max-w-2xl mx-auto flex flex-col justify-center items-center text-center gap-4">
          <Badge variant="outline" className="text-xs text-primary border-none font-medium">Analytics</Badge>
          <SectionTitle title="Your analytics in one place"  />
          <p className="text-base text-muted-foreground">
            Still juggling tools? EP365 unifies your procurement in one
            platform.
          </p>
        </div>
      </Section>
      <div className="bg-muted-foreground/25 h-[1px] w-full"></div>
      <Section id="features" className="md:px-0 pt-0 md:pt-0"
      >
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {featureData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "relative group flex flex-col justify-center items-start gap-4 border-l p-8 hover:from-transparent hover:to-neutral-100 duration-300 transition cursor-pointer",
                    index < 3 ? "border-b bg-gradient-to-b" : "bg-gradient-to-t", (index === 2 || index === 5) && "border-r"
                  )}
                >
                  <div className="absolute left-0 top-1/2 w-1 hover:w-1.5 h-6 hover:h-7 bg-neutral-200 group-hover:bg-primary transition-all duration-300 rounded-full" />

                  <div className="bg-white rounded-lg p-2.5 shadow-2xl">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h1 className="text-xl font-semibold">
                    {feature.title}
                  </h1>
                  <p className="max-w-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default Features;
