import Image from "next/image"
import brandsData from "./brandsData"

export default function Brands() {
  return (
    <div className="max-w-7xl mx-auto border-divide border-x">
      <h2 className="py-8 text-center font-mono text-sm tracking-tight text-muted-foreground uppercase">
        Trusted by Fast Growing Startups
      </h2>

      <div className="border-divide grid grid-cols-2 border-t md:grid-cols-4">
        {brandsData.map((logo, idx) => (
          <div
            key={idx}
            className="border-divide group relative overflow-hidden border-r border-b md:border-b md:border-r"
          >
            <div className="animate-move-left-to-right bg-brand/5 absolute inset-x-0 bottom-0 h-full translate-y-full transition-all duration-200 group-hover:translate-y-0" />

            <div className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale">
              <Image
                src={logo.image}
                alt="Brand Logo"
                width={160}
                height={40}
                className="object-contain transition-all duration-500 dark:invert dark:filter"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
