"use client"

import { useEffect, useState } from "react"
import { Download, Github } from "lucide-react"

const PHRASE = "Hello, world! Call me"

export function Hero() {
  const [typed, setTyped] = useState("")

  useEffect(() => {
    let i = 0
    let isDeleting = false
    let pauseCounter = 0
    const PAUSE_END = 30 // Pause after typing everything
    const PAUSE_START = 10 // Pause when empty

    const tick = () => {
      if (pauseCounter > 0) {
        pauseCounter--
        return
      }

      if (!isDeleting) {
        if (i < PHRASE.length) {
          i++
          setTyped(PHRASE.slice(0, i))
        } else {
          isDeleting = true
          pauseCounter = PAUSE_END
        }
      } else {
        if (i > 0) {
          i--
          setTyped(PHRASE.slice(0, i))
        } else {
          isDeleting = false
          pauseCounter = PAUSE_START
        }
      }
    }

    const id = window.setInterval(tick, 60)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative isolate overflow-hidden h-[85vh] flex items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-8 pb-0 text-center">
        <p className="relative top-6 font-mono text-[13px] text-primary">
          <span className="text-primary/70">&gt;</span> {typed}
          <span className="ml-0.5 inline-block w-2 -translate-y-0.5 align-middle text-primary animate-caret">|</span>
        </p>

        <h1 className="mt-8 relative top-4 text-balance font-display text-[46px] font-bold leading-[1.05] tracking-tight sm:text-[58px] md:text-[82px] lg:text-[114px]">
          <span className="text-foreground">Charles </span>
          <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-violet-300 bg-clip-text text-transparent">Platon</span>
        </h1>

        {/* hand-drawn squiggle */}
        <svg
          viewBox="0 0 360 18"
          className="mt-1 h-5 w-[22rem] text-violet-500/80 sm:w-[28rem]"
          fill="none"
          aria-hidden
        >
          <path
            d="M 0 10 Q 45 0, 90 10 T 180 10 T 270 10 T 360 10"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#F1F5F9] px-6 py-2 text-sm border border-[#E2E8F0] text-[#58586F] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
          <span>Designer</span>
          <span className="text-[#A0A0B8]">•</span>
          <span>Developer</span>
          <span className="text-[#A0A0B8]">•</span>
          <span>Creator</span>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href="/img/CV/PlatonCV.pptx.pdf"
            download="PlatonCV.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download CV
          </a>

          <a
            href="https://github.com/Charles-CS"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" aria-hidden />
            github.com/Charles-CS
          </a>
        </div>
      </div>
    </section>
  )
}
