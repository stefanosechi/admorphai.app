"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#39FF14]/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-12 w-40 transition-transform group-hover:scale-105">
            <Image
              src="/Logo e favicon/logoadmorphai-removebg-preview.png"
              alt="AdMorph AI"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#39FF14]">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#39FF14]">
            How it Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#39FF14]">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#39FF14]">
            FAQ
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button asChild className="bg-[#39FF14] text-black font-bold hover:bg-[#32d613] shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] transition-all transform hover:-translate-y-0.5">
            <Link href="https://admorph.lovable.app/auth">Log in</Link>
          </Button>
          <Button asChild className="bg-[#39FF14] text-black font-bold hover:bg-[#32d613] shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.6)] transition-all transform hover:-translate-y-0.5">
            <Link href="https://admorphai.setmore.com" target="_blank">Book Demo</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 border-b border-[#39FF14]/20 bg-background/95 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-8 animate-in slide-in-from-top-5 fade-in duration-200">
            <Link 
              href="#features" 
              className="text-lg font-medium text-foreground/80 hover:text-[#39FF14] transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-lg font-medium text-foreground/80 hover:text-[#39FF14] transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              href="#pricing" 
              className="text-lg font-medium text-foreground/80 hover:text-[#39FF14] transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#faq" 
              className="text-lg font-medium text-foreground/80 hover:text-[#39FF14] transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-3 pt-6 border-t border-[#39FF14]/10">
              <Button asChild className="w-full bg-[#39FF14] text-black font-bold shadow-[0_0_20px_rgba(57,255,20,0.3)]" onClick={() => setIsOpen(false)}>
                <Link href="https://admorph.lovable.app/auth">Log in</Link>
              </Button>
              <Button asChild className="w-full bg-[#39FF14] text-black font-bold shadow-[0_0_20px_rgba(57,255,20,0.3)]" onClick={() => setIsOpen(false)}>
                <Link href="https://admorphai.setmore.com" target="_blank">Book Demo</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
