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
    question: "How does the credit system work?",
    answer: "AdMorph operates on a flexible credit system. Each plan comes with a monthly allowance of credits (e.g., 800 for Skeptic, 60,000 for Agency). You spend credits to generate videos. If you need more, you can buy top-up packs starting at €5 for 400 credits. 1 Euro = 100 Credits.",
  },
  {
    question: "Do my credits expire?",
    answer: "Monthly subscription credits reset each billing cycle. However, any additional credits you purchase as 'Top-ups' never expire and roll over indefinitely as long as you have an active subscription.",
  },
  {
    question: "What is the difference between Low Res and HD videos?",
    answer: "Low Res videos are perfect for testing concepts and drafts. HD videos (1080p) are production-ready and optimized for social media platforms like TikTok, Reels, and YouTube Shorts. The credit cost varies based on resolution and duration.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. You will retain access to your plan features and remaining credits until the end of your current billing period.",
  },
  {
    question: "What platforms are supported?",
    answer: "We support all major vertical video platforms including TikTok, Instagram Reels, YouTube Shorts, Snapchat, and more. Our AI automatically optimizes the aspect ratio and safe zones for each platform.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 7-day money-back guarantee for the 'Skeptic' plan if you haven't used more than 50% of your credits. For other plans, please contact our support team for assistance.",
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
