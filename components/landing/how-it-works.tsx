"use client"

import { motion } from "framer-motion"
import { Upload, Wand2, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Upload Assets",
    description: "Upload your product photos, logos, and brand assets. Our AI analyzes your visual content to understand your brand.",
    step: "01",
  },
  {
    icon: Wand2,
    title: "AI Generates Ads",
    description: "Our AI creates multiple video ad variations optimized for different platforms and audiences in seconds.",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Publish & Scale",
    description: "Export your ads in any format and publish directly to your ad platforms. Watch your ROAS improve.",
    step: "03",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-background py-24 sm:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#39FF14]/12 blur-[100px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#39FF14]/12 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            How AdMorph Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Transform your product photos into high-converting video ads in three simple steps
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 relative">
           {/* Connecting line for desktop */}
           <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent hidden lg:block -translate-y-1/2 z-0" />
           
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative z-10"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#39FF14]/20 bg-card p-8 transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] hover:-translate-y-2">
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-[#39FF14]/5 transition-colors group-hover:text-[#39FF14]/10">
                  {step.step}
                </div>
                <div className="relative">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#39FF14]/10 text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.2)] group-hover:bg-[#39FF14] group-hover:text-black transition-colors duration-300">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-[#39FF14] transition-colors">{step.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-20 hidden -translate-y-1/2 text-[#39FF14] lg:block animate-pulse">
                  <ArrowRight className="h-8 w-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
