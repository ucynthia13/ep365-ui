import { Button } from "@/components/ui/button";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Section from "../common/Section";

export default function Banner() {
  return (
    <Section className="border-x border-divide grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-100 pb-20 md:pb-24">
      <div className="flex flex-col items-start justify-center gap-6">
        <SectionTitle title="Experience the Future of Procurement with AI" className="text-left max-w-sm" />
        <p className="text-sm text-muted-foreground md:text-sm lg:text-base text-left max-w-xl">
          Our AI assistant is designed with enterprise-grade security practices
          and compliant with global data protection standards.
        </p>
        <Button className="bg-black cursor-pointer">Start for free</Button>
      </div>
      <div className="flex items-center justify-center gap-10">
        <Image
          alt="Lyber"
          src="/images/brands/lyber.svg"
          width={56}
          height={56}
          className="h-auto w-72"
        />
        <Image
          alt="Taxi"
          src="/images/brands/taxi.svg"
          width={56}
          height={56}
          className="h-auto w-72"
        />
        <Image
          alt="Way"
          src="/images/brands/way.svg"
          width={56}
          height={56}
          className="h-auto w-72"
        />
      </div>
    </Section>
  );
}
