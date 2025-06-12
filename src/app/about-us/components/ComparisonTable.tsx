import Image from "next/image";
const ep365Features = [
  {
    icon: "/images/aboutPage/fast.svg",
    text: "No delays, no tiers, just responsive support. 95% of issues are solved in under 2 hours.",
  },
  {
    icon: "/images/aboutPage/SVG (9).svg",
    text: "All core features included with EP365’s basic plan — no extra fees.",
  },
  {
    icon: "/images/aboutPage/SVG (10).svg",
    text: "Transparent pricing — choose a plan tailored to your business.",
  },
  {
    icon: "/images/aboutPage/SVG (11).svg",
    text: "Customer-driven updates — EP365 evolves with your needs.",
  },
  {
    icon: "/images/aboutPage/SVG (12).svg",
    text: "Premium support for all — no add-ons required.",
  },
];

const otherSolutions = [
  {
    icon: "/images/aboutPage/SVG (13).svg",
    text: "Selective support prioritization leads to delays.",
  },
  {
    icon: "/images/aboutPage/user-warning.svg",
    text: "Basic tools cost extra — expect hidden fees.",
  },
  {
    icon: "/images/aboutPage/sticker-dollar.svg",
    text: "All-inclusive pricing often hides unnecessary features.",
  },
  {
    icon: "/images/aboutPage/money-search.svg",
    text: "Investor priorities often override customer needs.",
  },
  {
    icon: "/images/aboutPage/SVG (14).svg",
    text: "Support is paywalled behind top-tier plans.",
  },
];
const ComparisonTable = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          What makes EP365 different?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden">
          <div className="bg-[#e5e9f5] p-6 space-y-6">
            <h3 className="text-xl font-semibold mb-4">EP365</h3>
            {ep365Features.map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-left">
                <Image
                  src={item.icon}
                  alt="Service Image"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#f4f5fa] p-6 space-y-6">
            <h3 className="text-xl font-semibold mb-4">Other solutions</h3>
            {otherSolutions.map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-left">
                <Image
                  src={item.icon}
                  alt="Service Image"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
