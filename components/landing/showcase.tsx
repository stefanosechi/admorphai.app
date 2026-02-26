"use client"

import { motion, useAnimation } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Maximize2 } from "lucide-react"

const showcaseItems = [
  {
    id: 1,
    title: "AdMorph Media 1",
    category: "Media",
    src: "/video%20slideshow/admorph-media-1.mp4",
  },
  {
    id: 2,
    title: "AdMorph Media 2",
    category: "Media",
    src: "/video%20slideshow/admorph-media-2.mp4",
  },
  {
    id: 3,
    title: "AdMorph Media 3",
    category: "Media",
    src: "/video%20slideshow/admorph-media-3.mp4",
  },
  {
    id: 4,
    title: "AdMorph Media 4",
    category: "Media",
    src: "/video%20slideshow/admorph-media-4.mp4",
  },
  {
    id: 5,
    title: "AdMorph Media 5",
    category: "Media",
    src: "/video%20slideshow/admorph-media-5.mp4",
  },
]

export function Showcase() {
  const duplicatedItems = [...showcaseItems, ...showcaseItems, ...showcaseItems, ...showcaseItems]
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [mutedState, setMutedState] = useState<boolean[]>(() =>
    Array(showcaseItems.length * 4).fill(true),
  )
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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

  const handleFullscreen = (index: number) => {
    const video = videoRefs.current[index]
    if (!video) return
    if (video.requestFullscreen) {
      video.requestFullscreen()
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen()
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen()
    }
  }

  return (
    <section className="relative overflow-hidden border-y border-[#39FF14]/20 bg-card py-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#39FF14]/5 to-transparent" />
      {/* Enhanced Green Glow Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14]/10 blur-[100px]" />
      
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          AI-Generated Video Ads
        </p>
      </div>

      <div 
        className="relative overflow-x-auto md:overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-6 px-4 md:px-0"
          animate={!isMobile && !isHovered ? { x: [0, -1000] } : {}}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }
          }}
          style={{ x: !isMobile && !isHovered ? 0 : undefined }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative h-96 w-64 flex-shrink-0 overflow-hidden rounded-xl border border-[#39FF14]/30 bg-secondary transition-all hover:-translate-y-1 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.35)] sm:h-[460px] sm:w-56"
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-[#39FF14]/5 to-black/40" />
                <button
                  type="button"
                  onClick={() => handleToggleMute(index)}
                  aria-label={mutedState[index] ? "Attiva audio" : "Muta audio"}
                  className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/80 text-[11px] text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 hover:bg-black hover:scale-110 transition-all"
                >
                  <span>{mutedState[index] ? "🔇" : "🔊"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleFullscreen(index)}
                  aria-label="Schermo intero"
                  className="absolute right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/80 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 hover:bg-black hover:scale-110 transition-all"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
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
