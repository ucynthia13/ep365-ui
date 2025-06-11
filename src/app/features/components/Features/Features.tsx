import { features } from "./featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-16 md:pt-28 lg:pt-32 text-center">
      <div className="bg-[#f4f4fd]/50 py-16 md:py-24">
        <h3 className="text-sm font-medium text-gray-500 uppercase">
          outstanding perks
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          Curious why companies choose EP365
          <br />
          as their Procurement software?
        </h2>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          Book a Demo
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center p-4 bg-white rounded-lg shadow-xs gap-3"
            >
              <Image
                src={feature.icon}
                alt="Feature"
                width={24}
                height={24}
              />
              <span className="text-gray-800 text-base font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
