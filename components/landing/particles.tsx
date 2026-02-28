"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

export function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([])
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch
    const particleCount = 15 // Keep it light
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 8 + 4, // 4-12px radius (8-24px diameter)
      duration: Math.random() * 20 + 20, // 20-40s
      delay: Math.random() * 10,
    }))
    setParticles(newParticles)
  }, [])

  if (shouldReduceMotion) {
    return null
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#39FF14]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size * 2,
            height: particle.size * 2,
            opacity: 0.1,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}
