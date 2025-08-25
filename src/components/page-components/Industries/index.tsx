'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FeaturesSection from './FeaturesSection';
import IndustriesSection from './IndustriesSection';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';

const Industries = () => {
  const [activeSection, setActiveSection] = useState<'features' | 'industries'>('features');

  return (
    <Section id="industries"
    >
      <div className="flex flex-col px-6" id="solutions">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle title="All-in-One Procurement Platform" className="mb-2" />
            <p className="text-center text-base mb-4">
              One platform to streamline your entire procurement lifecycle, globally and efficiently.
            </p>
          </div>
          <div className="flex gap-4">
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
              className={`px-6 py-5 rounded-full cursor-pointer ${
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
    </Section>
  );
};

export default Industries;
