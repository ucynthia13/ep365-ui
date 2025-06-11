import { Button } from "@/components/ui/button";
import { Headset, Wallet, Zap } from "lucide-react";

const reasons = [
  {
    icon: <Zap className="text-2xl" />,
    title: "Ease of use",
    description:
      "Get started easily—set up your account, add users, and upload data. Go live with EP365 on your schedule, at your own pace.",
  },
  {
    icon: <Wallet className="text-2xl" />,
    title: "Value for money",
    description:
      "Gain spending visibility and boost efficiency—see ROI within the first quarter of using EP365.",
  },
  {
    icon: <Headset className="text-2xl" />,
    title: "Customer support",
    description:
      "Reliable support built to last. EP365 is designed to be the final stop in your search for a trusted procurement solution.",
  },
];

const WhyUs = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28 text-center">
      <h5 className="text-sm font-medium uppercase text-gray-500">
        It&apos;s not just about features
      </h5>
      <h2 className="text-2xl md:text-3xl font-bold mt-2 capitalize max-w-md mx-auto">
        3 reasons why 1000+ companies choose EP365
      </h2>
      <Button className="mt-6 inline-flex items-center justify-center w-full px-7 py-5 text-lg font-semibold text-white transition-all duration-2 border-2 border-transparent sm:w-auto rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black hover:text-black hover:bg-gray-50 hover:border-black">
        Book a Demo
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 px-4">
        {reasons.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full p-4 bg-gray-200">{item.icon}</div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
