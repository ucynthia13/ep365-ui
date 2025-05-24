"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight} from "lucide-react";
import { pricingPlans } from "./pricingsData";
import { motion } from "framer-motion";

const PricingPlans = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-20" id="pricing">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-4 capitalize"
          >
            Our Pricing Plans
          </motion.h2>
          <p className="text-center text-lg">
            Choose the plan best for your business growth.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border ${
                plan.popular
                  ? "border-[#44BCFF]/30 shadow-[#44BCFF]/20 -translate-y-4"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-[#44BCFF] text-white text-xs font-medium rounded-full">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-foreground/80">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-foreground/70 ml-1">
                      {plan.period}
                    </span>
                  )}
                </div>

                <div className="space-y-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="h-5 w-5 rounded-full bg-gray-950 flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <p className="ml-3 text-sm text-foreground/80">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full cursor-pointer py-2 ${
                    plan.popular
                      ? "bg-gray-950 hover:bg-black"
                      : "bg-card hover:bg-card/50 border border-border text-black"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
