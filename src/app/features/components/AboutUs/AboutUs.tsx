import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        <div className="w-full max-w-md">
          <Image
            src="/images/featuresPage/Built to keep your data secure.svg"
            alt="AI Robot with boxes"
            width={400}
            height={400}
          />
        </div>

        <div className="max-w-xl text-center md:text-left">
          <h4 className="text-sm text-gray-500 font-medium uppercase">
            As safe as it gets
          </h4>
          <h2 className="text-2xl md:text-3xl max-w-sm font-bold text-gray-900 mt-2">
            AI-Powered Procurement
            That Delivers What Really Matters
          </h2>
          <p className="max-w-md mt-4 text-gray-700">
            While many AI procurement tools overpromise and underdeliver, EP365
            changes the game. In partnership with Google, our AI-powered
            solution accurately pre-fills and matches invoices—saving your team
            time and eliminating manual errors.
          </p>
          <button className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition">
            More about security
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
