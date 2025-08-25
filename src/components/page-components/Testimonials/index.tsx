"use client";
import Image from "next/image";
import { testimonials } from "./testimonialsData";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Testimonials = () => {
  return (
    <Section id="testimonials">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl mx-auto">
            <SectionTitle title="Our clients speak of us" className="text-center mb-4" />
            <p className="text-center text-base">
              200+ clients have put trust in us
            </p>
          </div>

          <div className="mt-8 text-center md:mt-16 md:order-3">
            <Link
              href="/reviews"
              className="flex gap-2 items-center"
            >
              Check all 200 reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
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
    </Section>
  );
};

export default Testimonials;
