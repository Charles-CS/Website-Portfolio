"use client"

import { Mail, Linkedin, Github, ArrowUp } from "lucide-react"

export function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="relative isolate h-[80vh] overflow-hidden flex flex-col items-center justify-center">
      {/* Grid Background from Hero */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />

      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] w-8 bg-primary/30" />
        <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
          Get in touch
        </span>
        <div className="h-[1px] w-8 bg-primary/30" />
      </div>

      <h2 className="text-center font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-10">
        Let&apos;s build something <br />
        <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-violet-300 bg-clip-text text-transparent">
          extraordinary.
        </span>
      </h2>

      <a
        href="mailto:Charlesplaton263@gmail.com"
        className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <Mail className="h-4 w-4" />
        <span className="font-mono">Charlesplaton263@gmail.com</span>
      </a>

      <div className="flex items-center gap-4 mb-16">
        <a
          href="https://www.linkedin.com/in/charles-platon-7b51a9403"
          target="_blank"
          rel="noreferrer noopener"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-border shadow-sm text-primary hover:scale-105 transition-transform"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://github.com/Charles-CS"
          target="_blank"
          rel="noreferrer noopener"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border border-border shadow-sm text-primary hover:scale-105 transition-transform"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>

      <button
        onClick={scrollToTop}
        className="group flex items-center gap-2 rounded-full bg-white dark:bg-zinc-900 border border-border shadow-sm px-4 py-2 text-xs font-mono text-muted-foreground transition-all hover:text-foreground hover:border-primary/50"
      >
        <ArrowUp className="h-3 w-3 text-primary group-hover:-translate-y-0.5 transition-transform" />
        Back to top
      </button>
    </section>
  )
}
