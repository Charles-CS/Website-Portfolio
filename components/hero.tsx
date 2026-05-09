"use client"

import { useEffect, useState } from "react"
import { Download, Github } from "lucide-react"

const PHRASE = "Hello, world! Call me"

export function Hero() {
  const [typed, setTyped] = useState("")

  useEffect(() => {
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setTyped(PHRASE.slice(0, i))
      if (i >= PHRASE.length) window.clearInterval(id)
    }, 55)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section id="home" className="relative isolate overflow-hidden h-[85vh] flex items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-20 pb-0 text-center">
        <p className="font-mono text-base text-primary sm:text-lg">
          <span className="text-primary/70">&gt;</span> {typed}
          <span className="ml-0.5 inline-block w-2 -translate-y-0.5 align-middle text-primary animate-caret">|</span>
        </p>

        <h1 className="mt-6 text-balance font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="text-foreground">Charles </span>
          <span className="text-primary">Platon</span>
        </h1>

        {/* hand-drawn squiggle */}
        <svg
          viewBox="0 0 360 18"
          className="mt-2 h-4 w-[18rem] text-primary/80 sm:w-[22rem]"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 9 Q 12 0, 22 9 T 42 9 T 62 9 T 82 9 T 102 9 T 122 9 T 142 9 T 162 9 T 182 9 T 202 9 T 222 9 T 242 9 T 262 9 T 282 9 T 302 9 T 322 9 T 342 9 T 358 9"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-card px-6 py-2.5 text-sm shadow-sm ring-1 ring-border">
          <span>Student</span>
          <span className="text-primary">•</span>
          <span>Developer</span>
          <span className="text-primary">•</span>
          <span>Creator</span>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02]"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download CV
          </a>

          <a
            href="https://github.com/charlesplaton"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" aria-hidden />
            github.com/charlesplaton
          </a>
        </div>
      </div>
    </section>
  )
}
