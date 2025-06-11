"use client";

import { useState } from "react";
import Image from "next/image";
import { prFlowSteps } from "./PRFlowData";
import { ChevronLeft } from "lucide-react";

const PRFlow = () => {
  const [activeStep, setActiveStep] = useState(prFlowSteps[0].label);
  const currentStep = prFlowSteps.find((step) => step.label === activeStep);

  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28">
      <div className="bg-[#f4f4fd]/50 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase text-gray-500 tracking-wide">
              Automate and Centralize
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Process Purchase Requisitions 90% Faster with Leading PR Software
            </h2>
            <p className="mt-4 text-gray-600">
              With EP365&apos;s purchase requisition software, streamline your
              PR process, reduce manual effort, and free up your team for
              high-value tasks. Eliminate repetitive spreadsheet work and
              accelerate request cycles with automation. Discover how our PR
              software transforms procurement efficiency and boosts productivity
              across your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-xs border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {currentStep?.title}
              </h3>
              <p className="text-gray-700 mb-6 text-sm h-40">
                {currentStep?.description}
              </p>

              <Image
                src={currentStep?.imageSrc ?? ""}
                alt="User"
                width={100}
                height={100}
                className="w-100"
              />
            </div>

            <div className="bg-[#44BCFF]/5 p-6 rounded-xl">
              <ul className="space-y-3">
                {prFlowSteps.map((step) => (
                  <li key={step.label}>
                    <button
                      onClick={() => setActiveStep(step.label)}
                      className={`w-full flex justify-start gap-3 items-start text-left px-4 py-3 rounded-md border transition-all font-medium text-sm ${
                        activeStep === step.label
                          ? "bg-white text-[#44BCFF] border-[#44BCFF] shadow"
                          : "bg-white text-gray-800 border-transparent hover:bg-white"
                      }`}
                    >
                      <ChevronLeft className="w-5 h-5" />

                      {step.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PRFlow;
