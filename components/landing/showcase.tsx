"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"

const showcaseItems = [
  {
    id: 1,
    title: "Funnel Ads USA",
    category: "Med",
    src: "/video%20slideshow/funnel-ads-usa-med.mp4",
  },
  {
    id: 2,
    title: "Funnel Ads ES",
    category: "ES",
    src: "/video%20slideshow/funnel-es.mp4",
  },
  {
    id: 3,
    title: "Landing Funnel Top",
    category: "Top",
    src: "/video%20slideshow/landing-funnel-ads-top.mp4",
  },
  {
    id: 4,
    title: "Landing Funnel Top+",
    category: "Top+",
    src: "/video%20slideshow/landing-funnel-ads-top-top.mp4",
  },
  {
    id: 5,
    title: "UGC SetaBeauty",
    category: "UGC",
    src: "/video%20slideshow/ugc-setabeauty.mp4",
  },
]

export function Showcase() {
  const duplicatedItems = [...showcaseItems, ...showcaseItems, ...showcaseItems, ...showcaseItems]
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [mutedState, setMutedState] = useState<boolean[]>(() =>
    Array(showcaseItems.length * 4).fill(true),
  )

  const handleToggleMute = (index: number) => {
    const video = videoRefs.current[index]
    if (!video) return
    const nextMuted = !video.muted
    video.muted = nextMuted
    setMutedState((prev) => {
      const copy = [...prev]
      copy[index] = nextMuted
      return copy
    })
  }

  return (
    <section className="relative overflow-hidden border-y border-[#39FF14]/20 bg-card py-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#39FF14]/5 to-transparent" />
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          AI-Generated Video Ads
        </p>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
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
              className="group relative h-80 w-40 flex-shrink-0 overflow-hidden rounded-xl border border-[#39FF14]/30 bg-secondary transition-all hover:-translate-y-1 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.35)] sm:h-[460px] sm:w-56"
            >
              <div className="relative h-full w-full">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el
                  }}
                  src={item.src}
                  className="h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />
                <button
                  type="button"
                  onClick={() => handleToggleMute(index)}
                  aria-label={mutedState[index] ? "Attiva audio" : "Muta audio"}
                  className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/80 text-[11px] text-white shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                >
                  <span>{mutedState[index] ? "🔇" : "🔊"}</span>
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-card to-transparent" />
      </div>
    </section>
  )
}
