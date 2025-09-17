import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Hero() {
  return (

    <section className="max-w-7xl mx-auto border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:pt-32 md:pb-20">
      <Badge variant="outline" className="text-xs text-primary border-none">AI-Powered Procurement Platform for Centralization and Automation</Badge>
      <h1 className="text-center text-3xl font-medium tracking-tight text-black md:text-4xl lg:text-6xl dark:text-white mt-4">
        The smarter way to <br /> manage {" "}
        <span className="text-primary">procurement</span>
      </h1>
      <h2 className="text-center text-sm tracking-tight text-muted-foreground md:text-sm mx-auto mt-6 max-w-lg">
        Budgets, compliance, and timelines demand clarity. EP365 delivers
        centralized, AI-powered procurement that gives every team the visibility and control they
        need to scale with ease            
      </h2>
      <div className="flex items-center gap-4 mt-6">
        <Button className="bg-black text-white dark:bg-white dark:text-black cursor-pointer">Book a demo</Button>
        <Button variant="outline" className="cursor-pointer">Watch Video</Button>
      </div>
      <div className="mt-6 flex items-center gap-2">
        <div className="-gap-5 flex items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ opacity: 1 }}>
              <Star className="size-4 fill-black text-black" />
            </div>
          ))}
        </div>

        <span className="border-l border-gray-500 pl-4 text-[10px] text-muted-foreground sm:text-sm">
          Innovative AI solution 2025 by <span className="font-semibold">Gartner</span>
        </span>
      </div>
    </section>
  )
}
