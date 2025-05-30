import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { Globe } from "@/components/magicui/globe";

const FeaturesSection = () => {
  return (
    <BentoGrid className="max-w-6xl mx-auto">

      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          header={
            i === 0 || i===3 ? (
              item.header
            ) : (
              <div className="flex flex-col h-ful justify-between">
                <div>
                  <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
                    {item.title}
                  </div>
                  <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                    {item.description}
                  </div>
                </div>
                {item.header}
              </div>
            )
          }
          title={i === 0 || i===3 ? item.title : undefined}
          description={i === 0 || i===3 ? item.description : undefined}
        />
      ))}
    </BentoGrid>
  );
};

export default FeaturesSection;

const DualImageSkeleton = () => (
  <div className="flex flex-col gap-4 w-full h-full">
    <div className="flex gap-4 w-full h-full">
      <div className="flex-1 relative min-h-30">
        <Image
          src="/images/industries/onboarding-1.svg"
          fill
          alt="Onboarding Part 1"
          className="rounded-md object-contain"
        />
      </div>
      <div className="flex-1 relative min-h-30">
        <Image
          src="/images/industries/onboarding-2.svg"
          fill
          alt="Onboarding Part 2"
          className="rounded-md object-contain"
        />
      </div>
    </div>
  </div>
);

const BorderedImage = ({ imageUrl }: { imageUrl: string }) => (
  <div className="w-full p-2 overflow-hidden relative">
    <div className="flex-1 relative min-h-60">
      <Image
        src={imageUrl}
        fill
        alt="Onboarding Part 1"
        className="rounded-md object-contain"
      />
    </div>
  </div>
);

const SimpleImage = ({ imageUrl }: { imageUrl: string }) => (
  <div className="w-full h-full relative rounded-md overflow-hidden">
    <Image src={imageUrl} alt="Industry Image" fill className="object-cover" />
  </div>
);

const items = [
  {
    title: "Effortless Onboarding",
    description: "Get fully compliant and operational in just a few steps.",
    header: <DualImageSkeleton />,
  },
  {
    title: "Real-Time Procurement Tracking",
    description:
      "Get live insights into requisitions, approvals, and order statuses.",
    header: <BorderedImage imageUrl="/images/industries/Dashboard.svg" />,
  },
  {
    title: "Built for Global Trade",
    description:
      "We streamline procurement operations for companies worldwide.",
    header: (
      <div className="w-full h-55 relative rounded-md overflow-hidden">
        <Globe />
      </div>
    ),
  },
  {
    title: "Role Assignment",
    description: "Manage user access through flexible role assignments.",
    header: <SimpleImage imageUrl="/images/industries/roleassignment.svg" />,
  },
];
