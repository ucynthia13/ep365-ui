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
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-20">
      <div className="px-4 sm:px-6 lg:px-8" id="pricing">
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

          <div className="mt-12 inline-flex border border-border rounded-full p-1 bg-card">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto sm:px-6 lg:px-8">
          {pricingPlans.map((plan, index) => (
            <MagicCard
              className="relative border border-border rounded-xl px-2 py-6 hover:-translate-y-4 transition duration-200"
              key={index}
            >
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="text-foreground/80 my-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 mt-4">
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
                  className={`w-full cursor-pointer py-2 mt-10 ${
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
