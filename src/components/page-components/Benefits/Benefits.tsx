"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "../common/SectionTitle";
import { benefitsData } from "./benefitsData";

const Benefits = () => {
  return (
    <section className="max-w-7xl mx-auto border-divide relative overflow-hidden border-x px-4 py-20 md:px-8">
      <div className="relative flex flex-col justify-center items-center text-center gap-4">
        <Badge variant="outline" className="text-xs text-primary border-none">
          Benefits
        </Badge>
        <SectionTitle title="Making Engineers 10x faster" />
        <p className="text-muted-foreground mx-auto max-w-lg">
          We empower developers and technical teams to create, simulate, and
          manage AI-driven workflows visually
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {benefitsData.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className="relative z-10 rounded-lg bg-gray-100/40 h-50 p-4 transition duration-200 hover:bg-gray-50/70 md:p-5 dark:bg-neutral-800"
            >
              <div className="flex items-center gap-2">
                <Icon className="text-primary size-5" />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-medium">{benefit.title}</h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
