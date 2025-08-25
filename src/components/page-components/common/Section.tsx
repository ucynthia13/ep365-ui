import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section className={cn("relative z-10 pt-24 md:pt-28 max-w-7xl mx-auto px-4 md:px-6 overflow-hidden", className)} id={id}>
      {children}
    </section>
  );
}
