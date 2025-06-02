'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import FeaturesSection from './FeaturesSection';
import IndustriesSection from './IndustriesSection';

const Industries = () => {
  const [activeSection, setActiveSection] = useState<'features' | 'industries'>('features');

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="relative z-10 py-12 sm:py-16 lg:py-20"
    >
      <div className="flex flex-col max-w-5xl mx-auto px-6" id="solutions">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="font-semibold text-4xl sm:text-4xl lg:text-5xl text-center mb-4 capitalize"
            >
              All-in-One Procurement Platform
            </motion.h2>
            <p className="text-center text-lg">
              One platform to streamline your entire procurement lifecycle, globally and efficiently.
            </p>
          </div>

          <div className="flex gap-4 mt-12">
            <Button
              className={`px-6 py-5 rounded-full cursor-pointer ${
                activeSection === 'features'
                  ? 'bg-black text-white hover:bg-gray-900'
                  : 'bg-white text-black border border-gray-400'
              }`}
              onClick={() => setActiveSection('features')}
            >
              Solutions
            </Button>
            <Button
              className={`px-6 py-5 rounded-full ${
                activeSection === 'industries'
                  ? 'bg-black text-white hover:bg-gray-900'
                  : 'bg-white text-black border border-gray-400'
              }`}
              onClick={() => setActiveSection('industries')}
            >
              Industries
            </Button>
          </div>
        </div>

        <div className="mt-8">
          {activeSection === 'features' ? <FeaturesSection /> : <IndustriesSection />}
        </div>
      </div>
    </motion.div>
  );
};

export default Industries;
