'use client';

import React, { useState, useEffect } from 'react'
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { Button } from '@/components/ui/button';

const testimonials = [
    {
        quote: "DocsID has completely transformed how we handle contracts. Signing documents is now fast, secure, and paperless. Sharing with clients has never been easier, it’s truly a smarter way to work!",
        author: "Amanda Lee",
        title: "Corporate Lawyer"
    },
    {
        quote: "Onboarding new employees used to be a tedious process. With DocsID, we can sign and send all documents digitally in minutes. The platform is reliable, secure, and saves our team countless hours.",
        author: "Michael Thompson",
        title: "HR Director"
    },
    {
        quote: "I love how effortless DocsID makes digital signatures. I can sign agreements and send them instantly from anywhere. It’s secure, user-friendly, and has significantly sped up my business operations.",
        author: "Priya Sharma",
        title: "Small Business Owner"
    }
];

export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Section
            id="cta"
            className="mt-24 py-8 md:py-10 lg:py-12
    rounded-lg dark:rounded-xs
    bg-gradient-to-bl from-primary/20 via-primary/5 to-primary/50
  ">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center">
                <div className="lg:pl-6">
                    <SectionTitle
                        title="Sign Smarter. Share Faster." className="pb-6" />
                    <p className="mb-6 text-lg">DocsID makes it effortless to sign and send documents securely anytime, anywhere.</p>
                    <Button className="mt-6 inline-flex items-center justify-center px-7 py-5 font-semibold text-white transition-all duration-2 border-2 border-transparent sm:w-auto rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black hover:text-black hover:bg-gray-50 hover:border-black w-fit">
                        Book a Demo
                    </Button>                </div>
                <div className="relative">
                    <div className="p-10 min-h-[280px] relative">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`absolute inset-10 flex flex-col justify-center transition-all duration-500 ${index === currentIndex
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-5'
                                    }`}
                            >
                                <blockquote className="leading-relaxed mb-8 italic">
                                    &quot;{testimonial.quote}&quot;
                                </blockquote>
                                <div>
                                    <div className="font-semibold text-lg mb-1">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm">
                                        {testimonial.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}