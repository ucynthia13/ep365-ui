"use client";
import { motion } from "framer-motion";
import Counter from "./Counter";

const Statistics = () => {
  const stats = [
    { value: "96%", label: "Reduction in requisition time" },
    { value: "40%", label: "decrease in unapproved vendors" },
    { value: "$30K", label: "saved in a few weeks" },
    { value: "90%", label: "approval process efficiency increase" },
  ];

  return (
    <section className="relative z-10 py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-50 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF]/70 via-transparent to-[#44BCFF]/70 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-4 capitalize"
          >
            Our Statistics
          </motion.h2>
          <p className="text-center text-lg">
            200+ clients have put trust in us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-12 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: false }}
            >
              <h3 className="font-bold text-5xl">
                <Counter target={stat.value} />
              </h3>
              <p className="text-center text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
