import React from 'react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { stages } from './whyUsData';
import { CheckCircle, PlayCircle, Calendar } from 'lucide-react';

const WhyUs = () => {
  return (
    <Section id="why-us">
      <div className="mb-16">
        <SectionTitle title="Effortless Implementation, Lasting Procurement Value" className="text-center mb-4" />
        <p className="max-w-3xl mx-auto text-center">
          EP365 makes procurement automation simple. Go live fast, empower your teams, and achieve
          measurable ROI without the headaches of complex IT rollouts.
        </p>
      </div>
      <div className="relative">
        <div className="hidden lg:block absolute top-2/3 left-0 right-0 h-0.5 bg-blue-200"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {stages.map((stage) => (
            <div key={stage.id} className="relative flex flex-col items-center">
              <div className="w-12 h-12 absolute -top-5 bg-primary text-white rounded-full flex items-center justify-center text-lg font-semibold z-10 ">
                {stage.id}
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col justify-between items-center h-full">
                <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mt-8 mb-6">
                  {stage.icon}
                </div>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                  {stage.timeline}
                </span>
                <h3 className="text-lg font-semibold mb-4 text-start">
                  {stage.title}
                </h3>

                <div className="flex-1 w-full">
                  {stage.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start mb-3 last:mb-0">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
        <button className="bg-primary cursor-pointer hover:bg-primary text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200">
          <PlayCircle className="w-5 h-5" />
          See How EP365 Works
        </button>
        <button className="border-2 border-primary text-primary hover:bg-blue-50 px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200 cursor-pointer">
          <Calendar className="w-5 h-5" />
          Book a Demo
        </button>
      </div>
    </Section>
  );
};

export default WhyUs;