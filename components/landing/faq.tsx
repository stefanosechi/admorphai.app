"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI generate video ads?",
    answer: "Our AI analyzes your product photos, brand assets, and marketing goals to generate high-converting video ads. It uses advanced machine learning trained on millions of successful ad campaigns to understand what works best for your target audience and platform.",
  },
  {
    question: "What platforms are supported?",
    answer: "AdMorph supports all major advertising platforms including TikTok, Instagram Reels, Facebook, YouTube Shorts, Snapchat, Pinterest, and LinkedIn. We auto-optimize dimensions and formats for each platform.",
  },
  {
    question: "What is the pricing structure?",
    answer: "We offer three plans: Basic ($30/month) for startups, Pro ($129/month) for growing brands, and Enterprise ($309/month) for agencies and high-volume advertisers. All plans include a 7-day free trial.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 7-day free trial. No credit card required to start. You can generate up to 10 video ads during the trial to test our platform.",
  },
  {
    question: "Do you offer support?",
    answer: "Absolutely. Basic plans include email support, Pro plans get priority support with 24-hour response times, and Enterprise plans include a dedicated account manager and custom onboarding.",
  },
  {
    question: "Can I use my own brand guidelines?",
    answer: "Yes! You can upload your brand kit including logos, color palettes, fonts, and style guides. Our AI learns your brand identity and ensures every generated ad stays on-brand.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative bg-background py-24 sm:py-32 overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[300px] w-[300px] rounded-full bg-[#39FF14]/8 blur-[80px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 h-[300px] w-[300px] rounded-full bg-[#39FF14]/8 blur-[80px]" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about AdMorph
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-[#39FF14]/20 bg-card px-6 data-[state=open]:border-[#39FF14]/60 data-[state=open]:shadow-[0_0_20px_rgba(57,255,20,0.1)]"
              >
                <AccordionTrigger className="py-4 text-left text-foreground hover:no-underline [&[data-state=open]>svg]:text-[#39FF14] [&[data-state=open]]:text-[#39FF14]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
