"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "/images/testimonials/Stacks image.svg",
    quote:
      "Working with the EP365 Procurement Cloud has been an absolute pleasure. Their team is responsive, highly skilled, and truly invested in solving our unique procurement challenges. Every request we made was met with enthusiasm and quick execution.",
    name: "Jamie Walker",
    title: "VP of Supply Chain, BrightSpan Industries",
  },
  {
    image: "/images/industries/entertainment.svg",
    quote:
      "EP365 transformed how we handle procurement. The support and customization exceeded our expectations.",
    name: "Alex Morgan",
    title: "Director of Operations, BuildTech Co.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <div className="relative pt-16 z-10 px-8">
      <div className="flex justify-center items-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="font-semibold text-2xl sm:text-3xl max-w-sm sm:max-w-md text-center mx-auto capitalize"
        >
          What Customers love about EP365 procurement cloud
        </motion.h2>
      </div>
      <div className="mx-auto max-w-5xl px-4 flex items-center justify-center relative overflow-visible">
        <Button
          onClick={prev}
          className="absolute -left-6 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-full z-10"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>

        <div className="relative w-full flex justify-center">
          <div className="absolute top-0 mt-8 h-30 opacity-50 scale-95 transition-all duration-300 pointer-events-none z-0">
            <TestimonialCard
              testimonial={testimonials[(index + 1) % testimonials.length]}
              className="h-70"
              imageHeight="h-60"
            />
          </div>

          <div className="relative z-10 w-full max-w-[85%]">
            <TestimonialCard
              testimonial={testimonials[index]}
              className="h-90"
              imageHeight="h-80"
            />
          </div>
        </div>

        <Button
          onClick={next}
          className="absolute -right-6 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-full z-10"
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;

type Testimonial = {
  image: string;
  quote: string;
  name: string;
  title: string;
};

function TestimonialCard({
  testimonial,
  className,
  imageHeight
}: {
  testimonial: Testimonial;
  className?: string;
  imageHeight: string
}) {
  return (
    <div className={cn("bg-white rounded-xl border border-gray overflow-hidden grid grid-cols-1 md:grid-cols-2", className)}>
      <div className="p-5 hidden md:block">
        <Image
          src={testimonial.image}
          alt="testimonial"
          className={cn("w-100 object-cover rounded-xl", imageHeight)}
          width={100}
          height={100}
        />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <p className="line-clamp-6">“{testimonial.quote}”</p>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm">{testimonial.title}</p>
        </div>
        <Button className="bg-primary/50 rounded-md text-white p-6 hover:bg-primary/70 transition w-1/2">
          Read Case Study
        </Button>
      </div>
    </div>
  );
}
