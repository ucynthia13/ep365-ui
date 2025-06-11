'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/images/featuresPage/lottie-player.svg', 
    text: 'Tell us about yourself and fill out this contact form.',
  },
  {
    image: '/images/featuresPage/lottie-player.svg',
    text: 'Choose the services you’re interested in.',
  },
  {
    image: '/images/featuresPage/lottie-player.svg',
    text: 'Review your information and submit.',
  },
];

const delay = 5000; // 5 seconds

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="w-full max-w-sm px-4 py-8 bg-blue-950/80 text-white rounded-lg text-center relative">
      <div className="flex justify-center">
        <Image
          src={slides[index].image}
          alt="Slide image"
          width={200}
          height={200}
          className="mb-4"
        />
      </div>
      <p className="text-sm">{slides[index].text}</p>
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
