import React from "react";
import { featureData } from "./featureData";

const Features = () => {
  return (
    <section id="home" className="relative z-10 overflow-hidden pt-24">
      <div className="flex flex-col container max-w-5xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-12">
          <h1 className="font-semibold text-3xl max-w-md text-center mx-auto">
            Everything you need to know, In one place.
          </h1>
          <p className="max-w-xl mx-auto text-center">
            Still juggling emails, Excel files, and scattered tools? EP365
            unites your entire procurement workflow into one streamlined
            platform. From requests and approvals to supplier data and analytics
            — it’s all here, simplified.
          </p>
          <div className="max-w-4xl mx-auto bg-gradient-to-tr from-white via-white to-primary/50 p-12 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {featureData.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    className="flex flex-col justify-center items-center text-center gap-4"
                    key={index}
                  >
                    <div className="text-center">
                      <Icon className="w-7 h-7" />
                    </div>
                    <p className="max-w-sm mx-auto">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
