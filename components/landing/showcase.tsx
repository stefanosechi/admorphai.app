"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const showcaseItems = [
  { id: 1, title: "Fashion Brand", category: "E-commerce" },
  { id: 2, title: "Tech Gadget", category: "Electronics" },
  { id: 3, title: "Beauty Product", category: "Cosmetics" },
  { id: 4, title: "Food Delivery", category: "Restaurant" },
  { id: 5, title: "Fitness App", category: "Health" },
  { id: 6, title: "Travel Package", category: "Tourism" },
  { id: 7, title: "Home Decor", category: "Lifestyle" },
  { id: 8, title: "Pet Supplies", category: "Animals" },
]

export function Showcase() {
  const duplicatedItems = [...showcaseItems, ...showcaseItems, ...showcaseItems, ...showcaseItems]

  return (
    <section className="relative overflow-hidden border-y border-[#39FF14]/20 bg-card py-12">
      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#39FF14]/5 to-transparent" />
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          AI-Generated Video Ads
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-4"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative h-48 w-36 flex-shrink-0 overflow-hidden rounded-xl border border-[#39FF14]/30 bg-secondary transition-all hover:border-[#39FF14] hover:shadow-[0_0_25px_rgba(57,255,20,0.3)] sm:h-64 sm:w-48"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/20 via-transparent to-[#39FF14]/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="mb-2 h-12 w-12 rounded-lg bg-[#39FF14]/20 border border-[#39FF14]/30 sm:h-16 sm:w-16" />
                <p className="text-center text-xs font-medium text-foreground sm:text-sm">{item.title}</p>
                <p className="text-center text-xs text-muted-foreground">{item.category}</p>
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-[#39FF14] px-3 py-1 text-xs font-semibold text-black shadow-[0_0_15px_rgba(57,255,20,0.5)]">
                  View
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent" />
      </div>
    </section>
  )
}
