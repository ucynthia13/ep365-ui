import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Globe } from "@/components/magicui/globe";
import {
  Check,
  File,
  Handshake,
  MessageCircle,
  Shield,
  TriangleAlert,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FeaturesSection = () => {
  return (
  <BentoGrid className="max-w-6xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          header={
            i === 0 || i === 3 ? (
              item.header
            ) : (
              <div className="flex flex-col h-full justify-between">
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
          title={i === 0 || i === 3 ? item.title : undefined}
          description={i === 0 || i === 3 ? item.description : undefined}
        />
      ))}
    </BentoGrid>
  );
};

export default FeaturesSection;

const items = [
  {
    header: (
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex text-center gap-2">
          <div className="p-2.5 bg-amber-100 rounded-lg w-fit">
            <Handshake className="h-5 w-5 text-amber-500" />
          </div>
          <span className="font-bold mt-1.5">Unified Vendor Collaboration</span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="w-full bg-neutral-50 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-neutral-800 dark:text-neutral-200 ">
                Vendor Portal
              </span>
              <div className="flex">
                <div className="bg-green-500 rounded-full p-1 w-1 h-1 mt-2"></div>
                <span className="text-[16px] ml-1">3 online</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-lg bg-white shadow-xs p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-2.5 rounded-full">
                    <File className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">
                      Contract Renewal
                    </span>
                    <p className="text-muted-foreground text-xs">
                      Acme Supplies Inc.
                    </p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-500">Signed</Badge>
              </div>
              <div className="rounded-lg bg-white shadow-xs p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-amber-100 p-2.5 rounded-full">
                    <File className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">Invoice #2345</span>
                    <p className="text-muted-foreground text-xs">
                      TechPro Solutions
                    </p>
                  </div>
                </div>
                <Badge className="bg-amber-100 text-amber-500">Pending</Badge>
              </div>
              <div className="rounded-lg bg-white shadow-xs p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-2.5 rounded-full">
                    <MessageCircle className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">New Message</span>
                    <p className="text-muted-foreground text-xs">
                      Global Logistics Ltd.
                    </p>
                  </div>
                </div>
                <Badge className="bg-red-100 text-red-500">2 New</Badge>
              </div>
            </div>
          </div>
          <div className="w-1/2 text-muted-foreground text-md">
            Vendors submit documents, view RFPs, and track payment status - all
            in one secure place.
          </div>
        </div>
      </div>
    ),
  },
  {
    header: (
      <div className="flex flex-col gap-3">
        <div className="flex text-center gap-2">
          <div className="p-2.5 bg-green-100 rounded-lg w-fit">
            <File className="h-5 w-5 text-green-500" />
          </div>
          <span className="font-bold mt-1.5">Auto-Match POs & Invoices</span>
        </div>
        <div className="flex justify-between text-sm font-semibold text-neutral-700 dark:text-neutral-200">
          Invoice #INV-2023-0456
          <span className="ml-2 px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full">
            AI Draft
          </span>
        </div>
        <div className="flex flex-col gap-2 text-sm bg-neutral-50 p-4 rounded-lg">
          {[
            { label: "PO Match", value: "PO-2023-0789" },
            { label: "Receipt Match", value: "REC-2023-0456" },
            { label: "Amount Match", value: "$12,450.00" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex justify-between items-center p-2 rounded-md bg-white shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2.5 rounded-full">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <div className="text-neutral-700 dark:text-neutral-100 font-semibold">
                    {item.label}
                  </div>
                  <div className="text-xs text-neutral-500">{item.value}</div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-500">Pending</Badge>
            </div>
          ))}
        </div>
        <div className="text-muted-foreground text-sm">
          Vendors submit documents, view RFPs, and track payment status - all in
          one secure place.
        </div>
      </div>
    ),
  },
  {
    title: "Built for Global Trade",
    description:
      "We streamline procurement operations for companies worldwide, no matter the size or location.",
    header: (
      <div className="mt-4 w-full h-100 relative rounded-md overflow-hidden">
        <Globe />
      </div>
    ),
  },
  {
    header: (
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex text-center gap-2">
          <div className="p-2.5 bg-red-100 rounded-lg w-fit">
            <Shield className="h-5 w-5 text-red-500" />
          </div>
          <span className="font-bold mt-1.5">Stay Audit-Ready</span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div className="w-full bg-neutral-50 p-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-neutral-800 dark:text-neutral-200 ">
                Compliance Status
              </span>
              <Badge className="bg-blue-100 text-blue-500">12 Tracked</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-lg bg-white shadow-xs p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-amber-100 p-2.5 rounded-full">
                    <TriangleAlert className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">
                      Insurance Certificate
                    </span>
                    <p className="text-muted-foreground text-xs">
                      Expires in 30 days
                    </p>
                  </div>
                </div>
                <Badge className="bg-amber-100 text-amber-500">Warning</Badge>
              </div>
              <div className="rounded-lg bg-white shadow-xs p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-red-100 p-2.5 rounded-full">
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">Tax Form W-9</span>
                    <p className="text-muted-foreground text-xs">
                      Expired 5 days ago
                    </p>
                  </div>
                </div>
                <Badge className="bg-red-100 text-red-500">Expired</Badge>
              </div>
              <div className="rounded-lg bg-white shadow-xs p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2.5 rounded-full">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">
                      Business License
                    </span>
                    <p className="text-muted-foreground text-xs">
                      Valid until Dec 2024
                    </p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-500">Valid</Badge>
              </div>
            </div>
          </div>
          <div className="w-1/2 text-muted-foreground text-md">
            Automated reminders and visual indicators help track document expiry
            and policy alignment.
          </div>
        </div>
      </div>
    ),
  },
];
