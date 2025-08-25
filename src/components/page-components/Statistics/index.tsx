"use client";
import { motion } from "framer-motion";
import Counter from "./Counter";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const Statistics = () => {
  const stats = [
    { value: "96%", label: "Reduction in requisition time" },
    { value: "40%", label: "decrease in unapproved vendors" },
    { value: "$30K", label: "saved in a few weeks" },
    { value: "90%", label: "approval process efficiency increase" },
  ];

  return (
    <Section id="statistics">
      <div className="absolute inset-50 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF]/70 via-transparent to-[#44BCFF]/70 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <SectionTitle title="Our Statistics" className="mb-4 text-center" />
          <p className="text-center text-base">
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
              <h3 className="font-bold text-5xl mb-1">
                <Counter target={stat.value} />
              </h3>
              <p className="text-center text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Statistics;
