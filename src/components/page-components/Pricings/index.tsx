"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { pricingPlans } from "./pricingsData";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-20" id="pricing">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="font-semibold text-4xl sm:text-4xl lg:text-5xl mb-4 capitalize"
          >
            Our Pricing Plans
          </motion.h2>
          <p className="text-lg">
            Choose the plan best for your business growth.
          </p>

          {/* Toggle Switcher */}
          <div className="my-6 inline-flex border border-border rounded-full p-1 bg-card">
            <Button
              variant={billingCycle === "monthly" ? "default" : "ghost"}
              onClick={() => setBillingCycle("monthly")}
              className="rounded-full px-4 py-2 cursor-pointer"
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === "yearly" ? "default" : "ghost"}
              onClick={() => setBillingCycle("yearly")}
              className="rounded-full px-4 py-2 cursor-pointer"
            >
              Yearly
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <MagicCard
              key={index}
              className="relative border border-border p-4 rounded-xl hover:-translate-y-4 transition duration-200 shadow-xs"
            >
              {plan.popular && (
                <div className="absolute -top-7 left-0 right-0 mx-auto w-fit px-3 py-1 bg-[#44BCFF] text-white text-xs font-medium rounded-full">
                  MOST POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl my-4">{plan.name}</CardTitle>
                <CardDescription className="text-foreground/80">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-end my-6">
                  <span className="text-4xl font-bold">
                    {billingCycle === "monthly"
                      ? plan.pricemonthly
                      : plan.priceyearly}
                  </span>
                  {plan.period && (
                    <span className="text-foreground/70 ml-1">
                      {billingCycle === "monthly" ? "/month" : "/year"}
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
                  className={`w-full cursor-pointer py-2 my-6 ${
                    plan.popular
                      ? "bg-gray-950 hover:bg-black"
                      : "bg-card hover:bg-card/50 border border-border text-black"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
