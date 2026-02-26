import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

const _inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AdMorph AI - Transform Photos into Viral Video Ads',
  description: 'Generate high-converting AI video ads from your photos in seconds. Trusted by performance marketers worldwide.',
  generator: 'v0.app',
  icons: {
    icon: '/Logo e favicon/favicon_admorphai-removebg-preview.png',
    apple: '/Logo e favicon/favicon_admorphai-removebg-preview.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
