"use client";
import { motion } from "framer-motion";

const Statistics = () => {
  return (
    <section className="relative z-10 py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-50 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF]/70 via-transparent to-[#44BCFF]/70 blur-3xl" />
      </div>
      
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
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
          <div>
            <h3 className="font-bold text-5xl">96%</h3>
            <p className="text-center text-lg">Reduction in requisition time</p>
          </div>
          <div>
            <h3 className="font-bold text-5xl">40%</h3>
            <p className="text-center text-lg">
              decrease in unapproved vendors
            </p>
          </div>
          <div>
            <h3 className="font-bold text-5xl">$30K</h3>
            <p className="text-center text-lg">saved in a few weeks</p>
          </div>

          <div>
            <h3 className="font-bold text-5xl">90%</h3>
            <p className="text-center text-lg">
              approval process efficiency increase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
