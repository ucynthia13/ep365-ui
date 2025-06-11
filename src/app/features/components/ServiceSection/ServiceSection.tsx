"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ServiceContent, ServiceTabs } from "@/types";
import { CheckCircle } from "lucide-react";

type ServiceProps = {
  badge: string;
  title: string;
  description: string;
  tabs: ServiceTabs[];
  content: ServiceContent[];
};

const Service = ({
  badge,
  title,
  description,
  tabs,
  content,
}: ServiceProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.label);

  const currentContent = content.find((c) => c.label === activeTab);

  return (
    <section className="relative z-10 overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 text-black">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="mb-10">
          <p className="text-xs uppercase font-semibold tracking-wider text-gray-500">
            {badge}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mt-2">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">{description}</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab.label)}
              className={`px-5 py-2 rounded-full border transition-all text-sm font-medium ${
                activeTab === tab.label
                  ? "bg-black text-white"
                  : "border-border text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-xl overflow-hidden bg-gray-50 p-4">
            <Image
              src={currentContent?.imageSrc ?? "/images/featuresPage/Request for proposal.svg"}
              alt="Service Image"
              width={600}
              height={400}
              className="rounded-md object-cover w-full"
            />
          </div>

          <motion.ul
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center space-y-4 mt-4 lg:mt-6"
          >
            <h1 className="font-semibold text-xl">{activeTab}</h1>
            {currentContent?.data.map((point, index) => (
              <li
                key={index}
                className="flex justify-start items-center space-x-3"
              >
                <CheckCircle className="w-4.5 h-4.5" />
                <p className="text-sm">{point}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
