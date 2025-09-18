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
import { MagicCard } from "@/components/magicui/magic-card";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import { Badge } from "@/components/ui/badge";

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <Section id="pricing" className="border-x border-divide pb-16">
      <div className="max-w-2xl mx-auto mb-8 text-center">
        <Badge variant="outline" className="text-xs text-primary border-none">Pricings</Badge>
        <SectionTitle title="Simple and Feasible Pricing" className="mt-4" />
        <div className="my-6 inline-flex border border-border rounded-lg p-1 bg-card">
          <Button
            variant={billingCycle === "monthly" ? "default" : "ghost"}
            onClick={() => setBillingCycle("monthly")}
            className="px-4 py-2 cursor-pointer"
          >
            Monthly
          </Button>
          <Button
            variant={billingCycle === "yearly" ? "default" : "ghost"}
            onClick={() => setBillingCycle("yearly")}
            className="px-4 py-2 cursor-pointer"
          >
            Yearly
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <MagicCard
            key={index}
            className="relative p-4 rounded-lg"
          >
            {plan.popular && (
              <div className="absolute -top-7 left-0 right-0 mx-auto w-fit px-3 py-1 bg-[#44BCFF] text-white text-xs font-medium rounded-full">
                MOST POPULAR
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl my-4 font-medium">{plan.name}</CardTitle>
              <CardDescription className="text-foreground/80">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-end my-6">
                <span className="text-xl font-medium">
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
                  <div key={i} className="flex justify-start items-center">
                      <div className="h-5 w-5 rounded-full border border-black flex items-center justify-center">
                        <ArrowRight className="h-3 w-3 text-black" />
                      </div>
                    <p className="ml-3 text-foreground/80">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full cursor-pointer py-2 my-6 ${plan.popular
                    ? "bg-primary hover:bg-white hover:text-black border border-primary"
                    : "bg-card hover:bg-card/50 border border-border text-black"
                  }`}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </MagicCard>
        ))}
      </div>
    </Section>
  );
};

export default PricingPlans;
