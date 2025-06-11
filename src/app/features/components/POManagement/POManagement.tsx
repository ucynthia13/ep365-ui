import { cn } from "@/lib/utils";
import { features } from "./POManagementData";
import Image from "next/image";
const POManagement = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase">
            Purchasing Process Made Simple
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Streamlined Purchase Order Management <br /> Made Easy
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience a more efficient way to manage purchase orders—automate
            workflows, eliminate errors, and focus on what matters.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 space-y-6 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-xl ${item.bg} flex flex-col gap-4`}
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{item.description}</p>
              <Image
                src={item.imageSrc ?? ""}
                alt="PO Image"
                width={400}
                height={400}
                className={cn(
                  "rounded-md object-cover w-full mt-4",
                  [0, 3, 7].includes(idx) && "w-20 ml-auto"
                )}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full shadow font-medium">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default POManagement;
