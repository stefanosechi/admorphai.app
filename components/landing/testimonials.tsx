"use client"

import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Growth Lead",
    company: "TechStartup Inc.",
    avatar: "A",
    rating: 5,
    content: "AdMorph reduced our ad creation time by 90%. We went from spending 2 weeks on creatives to generating hundreds of variations in a single afternoon. Our CPA dropped 40%.",
  },
  {
    name: "Maria Santos",
    role: "Marketing Director",
    company: "StyleBrand Co.",
    avatar: "M",
    rating: 5,
    content: "The AI understands our brand better than some agencies we've worked with. Every ad feels on-brand, and the performance analytics help us iterate faster than ever.",
  },
  {
    name: "David Kim",
    role: "Performance Manager",
    company: "E-comm Global",
    avatar: "D",
    rating: 5,
    content: "We scaled from 10 to 500 video ads per month without hiring. The ROI on AdMorph paid for itself in the first week. Absolutely essential for any serious advertiser.",
  },
  {
    name: "Sarah Jenkins",
    role: "E-commerce Founder",
    company: "GlowUp Cosmetics",
    avatar: "S",
    rating: 5,
    content: "The quality of video ads is insane. I thought I needed a production team, but AdMorph does it better and faster.",
  },
  {
    name: "Michael Chang",
    role: "Head of UA",
    company: "MobileGaming Ltd",
    avatar: "M",
    rating: 5,
    content: "We tested 50 variations in one day. The winning creative dropped our CPI by 60%. Game changer.",
  },
  {
    name: "Emma Wilson",
    role: "Digital Strategist",
    company: "GrowthHackerz",
    avatar: "E",
    rating: 5,
    content: "Finally, a tool that understands performance marketing. The hooks are perfect, the pacing is spot on.",
  },
  {
    name: "Luca Rossi",
    role: "CMO",
    company: "FashionForward",
    avatar: "L",
    rating: 5,
    content: "Italian design meets AI efficiency. Our engagement rates on Instagram have tripled since using AdMorph.",
  },
  {
    name: "Jessica Lee",
    role: "Social Media Manager",
    company: "FitLife App",
    avatar: "J",
    rating: 5,
    content: "I used to spend hours editing. Now I just upload and let AdMorph do the magic. The results speak for themselves.",
  },
  {
    name: "Tom Baker",
    role: "Dropshipper",
    company: "GadgetStore",
    avatar: "T",
    rating: 5,
    content: "Best investment for my dropshipping business. The ads look professional and high-budget.",
  },
  {
    name: "Anna Petrov",
    role: "Marketing Lead",
    company: "SaaSify",
    avatar: "A",
    rating: 5,
    content: "B2B video ads are hard. AdMorph made it easy to explain our complex product in seconds.",
  },
  {
    name: "Carlos Mendez",
    role: "Agency Owner",
    company: "AdScale Agency",
    avatar: "C",
    rating: 5,
    content: "We use AdMorph for all our clients now. It's our secret weapon for scaling ad spend profitably.",
  },
  {
    name: "Sophie Dubois",
    role: "Brand Manager",
    company: "LuxeDecor",
    avatar: "S",
    rating: 5,
    content: "The aesthetic quality is top-notch. Perfectly captures our brand vibe while driving sales.",
  },
  {
    name: "Ryan O'Connor",
    role: "PPC Specialist",
    company: "TechGear",
    avatar: "R",
    rating: 5,
    content: "CTR went up, CPC went down. AdMorph is the efficiency hack we've been looking for.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative border-y border-[#39FF14]/20 bg-card py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14]/5 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Loved by Marketers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See what performance marketers are saying about AdMorph
          </p>
        </motion.div>

        <div className="relative mt-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prevTestimonial}
              className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#39FF14]/30 bg-background text-muted-foreground transition-all hover:bg-[#39FF14]/10 hover:text-[#39FF14] hover:border-[#39FF14] sm:h-12 sm:w-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="overflow-hidden w-full px-0 sm:px-4">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-0 sm:px-4">
                    <div className="rounded-2xl border border-[#39FF14]/20 bg-card p-6 md:p-8 hover:border-[#39FF14]/40 transition-colors h-full">
                      <div className="mb-4 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#39FF14] text-lg font-bold text-black shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#39FF14] text-[#39FF14]" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-base text-foreground/80 italic">&quot;{testimonial.content}&quot;</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              type="button"
              onClick={nextTestimonial}
              className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#39FF14]/30 bg-background text-muted-foreground transition-all hover:bg-[#39FF14]/10 hover:text-[#39FF14] hover:border-[#39FF14] sm:h-12 sm:w-12"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.5)]" : "bg-[#39FF14]/30"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
