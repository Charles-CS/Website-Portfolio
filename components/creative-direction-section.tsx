"use client"

import { useState } from "react"
import { Palette, Globe, Award, X, type LucideIcon } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type Card = {
  count: number
  category: string
  icon: LucideIcon
  title: string
  description: string
  type: string
  images: string[]
  // Kinetic-type words that scroll in the preview area
  words: string[]
}

const CARDS: Card[] = [
  {
    count: 8,
    category: "PORTFOLIO",
    icon: Palette,
    title: "Projects",
    description:
      "A collection of my recent development work, ranging from full-stack applications to experimental interactive web experiences.",
    type: "PROJECTS",
    images: [
      "/img/creative/projects/project-1.png",
      "/img/creative/projects/project-2.png",
      "/img/creative/projects/project-3.png",
      "/img/creative/projects/project-4.png",
      "/img/creative/projects/project-5.png",
      "/img/creative/projects/project-6.png",
      "/img/creative/projects/project-7.png",
      "/img/creative/projects/project-8.png",
    ],
    words: ["code", "design", "build", "ship"],
  },
  {
    count: 2,
    category: "EXPERIENCE",
    icon: Globe,
    title: "Hackathons",
    description:
      "Intense 48-hour sprints of innovation and collaboration, building functional prototypes to solve real-world challenges.",
    type: "COMPETITIONS",
    images: ["/img/creative/hackathons/hackathon-1.png", "/img/creative/hackathons/hackathon-2.png"],
    words: ["sprint", "innovate", "teamwork", "build"],
  },
  {
    count: 2,
    category: "AWARD",
    icon: Award,
    title: "Computer Science QuizBee Champion",
    description:
      "Consistently recognized for technical knowledge and problem-solving speed in regional computer science competitions.",
    type: "AWARD",
    images: ["/img/creative/competition/competition-1.png", "/img/creative/competition/competition-2.png"],
    words: ["champion", "speed", "logic", "victory"],
  },
  {
    count: 6,
    category: "RECOGNITION",
    icon: Award,
    title: "Certificates",
    description:
      "A testament to continuous learning and mastery of various technologies, from cloud platforms to specialized development frameworks.",
    type: "CERTIFICATION",
    images: [
      "/img/creative/cert/cert-1.png",
      "/img/creative/cert/cert-2.png",
      "/img/creative/cert/cert-3.png",
      "/img/creative/cert/cert-4.png",
      "/img/creative/cert/cert-5.png",
      "/img/creative/cert/cert-6.png",
    ],
    words: ["learn", "master", "grow", "verify"],
  },
]

// Identical kinetic text behind every card so the giant letters scroll in unison
// across the row, just like the reference site.
const KINETIC_LINE_TOP = "the app will live · movable to be · remembered · forever ·"
const KINETIC_LINE_BOTTOM = "movable to be · remembered · forever · the app will live ·"

function KineticPreview() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-muted/40 to-muted/70">
      {/* Two stacked rows of giant text scrolling in opposite directions */}
      <div className="absolute inset-x-0 top-0 flex h-1/2 items-center overflow-hidden">
        <div className="flex shrink-0 animate-marquee-left whitespace-nowrap text-[110px] font-extrabold tracking-tight text-foreground/95 leading-none">
          <span className="px-8">{KINETIC_LINE_TOP}</span>
          <span className="px-8" aria-hidden>
            {KINETIC_LINE_TOP}
          </span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-center overflow-hidden">
        <div className="flex shrink-0 animate-marquee-right whitespace-nowrap text-[110px] font-extrabold tracking-tight text-foreground/95 leading-none">
          <span className="px-8">{KINETIC_LINE_BOTTOM}</span>
          <span className="px-8" aria-hidden>
            {KINETIC_LINE_BOTTOM}
          </span>
        </div>
      </div>
      {/* Subtle highlight in the middle */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-foreground/5" />
    </div>
  )
}

export function CreativeDirectionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [page, setPage] = useState(1)

  const active = openIndex !== null ? CARDS[openIndex] : null

  return (
    <section id="creative" className="relative bg-card px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          <p className="font-mono text-xs tracking-widest text-primary">03 / PROJECTS & ACHIEVEMENTS</p>
        </div>
        <h2 className="mt-3 font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="text-foreground">Design &</span>
          <span className="bg-gradient-to-br from-violet-500 to-violet-700 bg-clip-text text-transparent">
            Creative
          </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <button
                key={card.title}
                type="button"
                onClick={() => {
                  setOpenIndex(i)
                  setPage(1)
                }}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                {/* Kinetic typography preview */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={card.images[0]}
                    alt={card.title}
                    className={cn(
                      "h-full w-full transition-transform duration-500 group-hover:scale-110",
                      card.title === "Hackathons" ? "object-fill" : "object-cover"
                    )}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                  {/* Count badge (visible on hover) */}
                  <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-mono text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/80" aria-hidden />
                    {card.count}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="font-mono text-[11px] tracking-widest">{card.category}</span>
                  </div>

                  <h3 className="mt-3 line-clamp-1 text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {card.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-foreground/70">{card.description}</p>

                  <p className="mt-4 font-mono text-[11px] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {"Click to view →"}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        <p className="mt-10 text-center font-mono text-xs text-muted-foreground">
          Each project includes a full gallery — click on any card to explore
        </p>
      </div>

      {/* Lightbox / detail modal */}
      <Dialog
        open={openIndex !== null}
        onOpenChange={(o) => {
          if (!o) setOpenIndex(null)
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="max-h-[90vh] w-[95vw] sm:max-w-5xl md:max-w-[1000px] overflow-hidden p-0 rounded-[24px] sm:rounded-[24px] border-none shadow-2xl"
        >
          {active && (
            <div className="grid h-full max-h-[90vh] grid-cols-1 md:grid-cols-[380px_1fr]">
              {/* Left: details */}
              <div className="flex h-full flex-col justify-between bg-white dark:bg-zinc-950 p-8 md:p-10 border-r border-border/50 overflow-y-auto">
                <div>
                  <span className="inline-block rounded-full bg-violet-500/10 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-widest text-violet-600 uppercase">
                    {active.category}
                  </span>
                  <DialogTitle className="mt-5 text-[26px] font-bold leading-tight text-foreground tracking-tight">
                    {active.title}
                  </DialogTitle>
                  <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">{active.description}</p>
                </div>

                <div className="mt-12 border-t border-border/50 pt-6">
                  <p className="font-mono text-[11px] font-semibold tracking-widest text-muted-foreground uppercase mb-5">
                    PROJECT DETAILS
                  </p>
                  <dl className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <dt className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">TYPE</dt>
                      <dd className="font-medium text-foreground text-[13px]">{active.type}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase">MEDIA</dt>
                      <dd className="font-medium text-foreground text-[13px]">{active.count} images</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Right: gallery */}
              <div className="relative h-full max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-950 p-4 sm:p-6 min-w-0
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-thumb]:bg-zinc-200
                [&::-webkit-scrollbar-thumb]:rounded-full
                dark:[&::-webkit-scrollbar-thumb]:bg-zinc-800">
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="fixed sm:absolute right-6 top-6 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60 shadow-sm"
                  aria-label="Close gallery"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex flex-col gap-4 w-full">
                  {active.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative flex aspect-[16/11] w-full items-center justify-center overflow-hidden rounded-[32px] border border-black/5 dark:border-white/5 bg-muted shadow-sm"
                    >
                      <img
                        src={img}
                        alt={`${active.title} - ${i + 1}`}
                        className={cn(
                          "h-full w-full",
                          active.title === "Hackathons" ? "object-fill" : "object-cover"
                        )}
                      />
                      <span className="absolute right-6 bottom-6 z-10 inline-flex items-center justify-center rounded-full bg-black/80 px-3 py-1 font-mono text-[10px] font-medium tracking-widest text-white backdrop-blur-md shadow-sm">
                        {i + 1} / {active.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
