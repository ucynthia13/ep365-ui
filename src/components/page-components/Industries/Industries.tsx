'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FeaturesSection from './FeaturesSection';
import IndustriesSection from './IndustriesSection';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { Badge } from '@/components/ui/badge';

const Industries = () => {
  const [activeSection, setActiveSection] = useState<'features' | 'industries'>('features');

  return (
    <Section id="industries" className="border-divide border-x pb-20 md:pb-24"
    >
      <div className="flex flex-col" id="solutions">
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="max-w-3xl mx-auto flex flex-col justify-center items-center gap-4 text-center">
            <Badge variant="outline" className="text-xs text-primary border-none font-medium">Solutions & Industries</Badge>
            <SectionTitle title="All-in-One Procurement Platform" />
            <p className="text-base mb-4 text-muted-foreground">
              One platform to streamline your entire procurement lifecycle, globally and efficiently.
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              className={`px-6 py-5 cursor-pointer ${
                activeSection === 'features'
                  ? 'bg-black text-white hover:bg-gray-900'
                  : 'bg-white text-black border border-gray-400'
              }`}
              onClick={() => setActiveSection('features')}
            >
              Solutions
            </Button>
            <Button
              className={`px-6 py-5 cursor-pointer ${
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
