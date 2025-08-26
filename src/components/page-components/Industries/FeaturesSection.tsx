import React from "react";

import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6 rounded-lg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`${item.className} ${item.bgColor} text-white rounded-2xl overflow-hidden min-h-[300px]`}
          >
            {item.header}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

const items = [
  {
    className: "md:col-span-2 lg:col-span-3",
    bgColor: "bg-slate-800",
    title: "Procurement built with your business in mind",
    description: "EP360 delivers a seamless, end-to-end procurement experience with powerful automation and enterprise reliability.",
    header: (
      <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-center">
        <div className="mb-6 sm:mb-0">
          <h2 className="text-2xl font-medium text-white mb-2">Procurement built with your business in mind</h2>
          <p className="text-slate-300 text-sm">EP360 delivers a seamless, end-to-end procurement experience with powerful automation and enterprise reliability.</p>
        </div>
        <div className="flex justify-center sm:col-span-2">
          <Image
            src="/images/hero/procurement.png"
            width={500}
            height={400}
            alt="Procurement"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    className: "md:col-span-2 lg:col-span-2",
    bgColor: "bg-slate-800",
    header: (
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center gap-4">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-white mb-2">Procurement from anywhere</h3>
            <p className="text-slate-300 text-sm max-w-xs">Empower your team to create, track, and approve procurement workflows securely from any device.</p>
          </div>
          <Image
            src="/images/hero/person.png"
            width={300}
            height={200}
            alt="Procurement"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    className: "md:col-span-1",
    bgColor: "bg-slate-800",
    header: (
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-white mb-2">Smooth sync with your core systems</h3>
          <p className="text-slate-300 text-sm">Integrate seamlessly with ERPs, finance, and collaboration tools for complete process harmony.</p>
        </div>
        <div className="flex justify-between items-center">
          <Image
            src="/images/hero/sync2.png"
            width={500}
            height={400}
            alt="Procurement"
            className="w-full max-w-md h-auto object-contain"
            priority
          />
        </div>
      </div>
    ),
  },
  {
    className: "md:col-span-1",
    bgColor: "bg-slate-800",
    header: (
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-white mb-2">Leading with innovation</h3>
          <p className="text-slate-300 text-sm">State-of-the-art advice, advanced workflows, analytics, and automation to keep you ahead.</p>
        </div>
        <div className="flex justify-between items-center">
          <Image
            src="/images/hero/img.png"
            width={700}
            height={600}
            alt="Procurement"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    className: "md:col-span-1",
    bgColor: "bg-slate-800",
    header: (
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-white mb-2">Customization for your business</h3>
          <p className="text-slate-300 text-sm">Tailor approval chains, budgets, and reports to fit your exact procurement needs.</p>
        </div>
        <div className="rounded-lg overflow-clip">
          <Image
            src="/images/hero/img.png"
            width={700}
            height={600}
            alt="Procurement"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    className: "md:col-span-1",
    bgColor: "bg-slate-800",
    header: (
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-white mb-2">Enterprise-grade security & compliance</h3>
          <p className="text-slate-300 text-sm">Built with strict security standards and compliance frameworks like GDPR, SOC2, and ISO.</p>
        </div>
        <div className="rounded-lg overflow-clip">
          <Image
            src="/images/hero/customization.png"
            width={700}
            height={600}
            alt="Procurement"
            className="w-full max-w-md h-auto object-contain"
          />
        </div>
      </div>
    ),
  },
];