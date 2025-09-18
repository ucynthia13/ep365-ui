"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
  image: string
}

interface FeaturesProps {
  items: Feature[]
  autoPlay?: boolean
  interval?: number // ms
}

export default function Features({ items, autoPlay = true, interval = 5000 }: FeaturesProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // autoplay with sequential progression
  useEffect(() => {
    if (!autoPlay) return

    setProgress(0)
    const step = interval / 100 // progress increments every (interval/100) ms
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          setActiveIndex((prevIndex) => (prevIndex + 1) % items.length)
          return 0
        }
        return prev + 1
      })
    }, step)

    return () => clearInterval(progressTimer)
  }, [activeIndex, autoPlay, interval, items.length])

  const handleClick = (idx: number) => {
    setActiveIndex(idx)
    setProgress(0) // reset loader when manually switching
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 border-x border-divide">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm text-primary uppercase tracking-wide">How it works</p>
        <h2 className="text-3xl md:text-4xl font-semibold">Integrates easily</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side */}
        <div className="flex flex-col divide-y border-r border-divide">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 cursor-pointer relative transition-colors ${
                activeIndex === idx ? "bg-gray-50 dark:bg-neutral-800" : "hover:bg-gray-100 dark:hover:bg-neutral-700"
              }`}
              onClick={() => handleClick(idx)}
            >
              <div className="flex items-start gap-3">
                {item.icon && <span>{item.icon}</span>}
                <div>
                  <h3 className="font-medium text-lg">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>

              {/* loader for active */}
              {activeIndex === idx && (
                <div
                  className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-500 h-90 ${
                activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="w-full rounded-lg shadow"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
