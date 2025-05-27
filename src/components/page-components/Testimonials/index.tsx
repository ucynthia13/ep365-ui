"use client";
import Image from "next/image";
import { testimonials } from "./testimonialsData";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="relative z-10 py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-4 capitalize"
            >
              Our clients speak of us
            </motion.h2>
            <p className="text-center text-lg">
              200+ clients have put trust in us
            </p>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href="#"
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
            >
              Check all 200 reviews
            </a>
          </div>

          <div className="relative mt-10 md:mt-16 md:order-2">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-6">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid rounded-xl shadow-sm bg-white overflow-hidden max-w-xs"
                >
                  <div className="p-6 lg:py-8 lg:px-7 flex flex-col h-full">
                    <div>
                      <div className="flex items-center">
                        <FaQuoteLeft className="w-4 h-4 text-[#44BCFF]/30" />
                      </div>
                      <blockquote className="mt-6">
                        <p className="leading-relaxed text-gray-900 font-pj">
                          “{testimonial.quote}”
                        </p>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <Image
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={44}
                        height={44}
                      />
                      <div className="ml-4">
                        <p className="font-bold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm text-gray-600">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
