"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleWatchDemo = () => {
    if (videoContainerRef.current) {
      videoContainerRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
      // Avvia il video dopo un piccolo delay per permettere lo scroll
      setTimeout(() => {
        handlePlay()
      }, 500)
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-16">
      {/* Main green glow at top */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-full max-w-[1000px] -translate-x-1/2 rounded-full bg-[#39FF14]/25 blur-[120px] opacity-60 sm:opacity-100" />

      {/* Side glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-[#39FF14]/15 blur-[100px] opacity-50 sm:h-[500px] sm:w-[500px] sm:opacity-100" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-[#39FF14]/15 blur-[100px] opacity-50 sm:h-[500px] sm:w-[500px] sm:opacity-100" />

      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#39FF14]/20 via-background to-background" />

      {/* Grid pattern with green tint */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#39FF14/5_1px,transparent_1px),linear-gradient(to_bottom,#39FF14/5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#39FF14]/50 bg-[#39FF14]/10 px-4 py-1.5 text-sm text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.3)]"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Video Ad Generation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Photos, Now{" "}
            <span className="bg-gradient-to-r from-[#39FF14] via-[#7FFF00] to-[#39FF14] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(57,255,20,0.5)]">
              Viral AI Video Ads
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl"
          >
            Generate high-converting video ads from your product photos in under 60 seconds.
            No editing skills required. Scale your ROAS today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="gap-2 bg-[#39FF14] px-8 text-black font-semibold hover:bg-[#39FF14]/90 shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] transition-all">
              <Link href="https://admorph.lovable.app/auth">
                Start Creating Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleWatchDemo}
              className="gap-2 border-[#39FF14]/50 text-[#39FF14] hover:bg-[#39FF14]/10 hover:border-[#39FF14] bg-transparent transition-all"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 w-full max-w-5xl"
            ref={videoContainerRef}
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#39FF14]/30 bg-card shadow-[0_0_60px_rgba(57,255,20,0.15)]">
              <div className="aspect-video relative">
                <video
                   ref={videoRef}
                   src="/video%20tutorial/video-tutorial-admorphai-test1.mp4#t=0.001"
                   className="h-full w-full object-cover"
                  playsInline
                  controls={isPlaying}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px] cursor-pointer group"
                    onClick={handlePlay}
                  >
                    <div className="relative">
                      <div className="absolute -inset-4 animate-pulse rounded-full bg-[#39FF14]/30 blur-xl" />
                      <div className="absolute -inset-8 animate-pulse rounded-full bg-[#39FF14]/10 blur-2xl" />
                      <button
                        type="button"
                        className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#39FF14] text-black transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(57,255,20,0.5)]"
                        aria-label="Play demo video"
                      >
                        <Play className="h-8 w-8 fill-current" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">
                Watch how AdMorph transforms product photos into scroll-stopping video ads
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
