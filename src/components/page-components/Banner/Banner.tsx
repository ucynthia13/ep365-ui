import React from 'react'
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import { Button } from '@/components/ui/button';

export default function Banner() {
    return (
        <Section
            id="cta"
            className="mt-24 py-8 md:py-10 lg:py-12
    rounded-lg dark:rounded-xs
    bg-gradient-to-bl from-primary/20 via-primary/5 to-primary/40
  ">
            <div className="max-w-6xl mx-auto gap-16 justify-center items-center text-center">
                <div>
                    <SectionTitle
                        title="Procure Smarter. Save Faster." className="pb-6" />
                    <p className="max-w-2xl mx-auto text-base">
                        Streamline your procurement process with ease. Automate approvals, track spending, and manage suppliers, all from a single, secure platform.
                    </p>
                    <Button className="mt-8 inline-flex items-center justify-center px-7 py-5 font-semibold text-white transition-all duration-200 border-2 border-transparent sm:w-auto rounded-full font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 bg-black hover:text-black hover:bg-gray-50 hover:border-black w-fit">
                        Request a Demo
                    </Button>
                </div>
            </div>
        </Section>
    )
}
