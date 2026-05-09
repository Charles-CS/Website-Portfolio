"use client"

import { useState } from "react"
import { Code2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  images: string[]
}

const PROJECTS: Project[] = [
  {
    id: "Kumpirma",
    title: "Kumpirma",
    subtitle: "Digital Signature Verification System",
    description:
      "Full-stack AI + Blockchain system for signature verification. Integrates YOLOv8, Pix2Pix GAN, and Siamese CapsNet with Ethereum smart contracts and IPFS for tamper-proof document authentication.",
    tech: ["Next.js", "TypeScript", "Python", "OpenCV & TensorFlow", "PostgreSQL", "IPFS (InterPlanetary File System)"],
    images: [
      "/img/fullstack/cyl-1.png",
      "/img/fullstack/cyl-2.png",
      "/img/fullstack/cyl-3.png",
      "/img/fullstack/cyl-4.png",
      "/img/fullstack/cyl-5.png",
    ],
  },
  {
    id: "Orpheus",
    title: "Orpheus",
    subtitle: "Music Discovery Platform",
    description:
      "Orpheus is a music exploration platform that connects listeners with independent artists. It features playlist curation, artist profiles, and real-time listening rooms.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    images: [
      "/img/fullstack/orpheus-1.jpg",
      "/img/fullstack/orpheus-2.jpg",
      "/img/fullstack/orpheus-3.jpg",
    ],
  },
  {
    id: "TixSigurado",
    title: "TixSigurado",
    subtitle: "Event Ticketing System",
    description:
      "TixSigurado is a secure ticketing system designed for local events, with QR validation, attendee tracking, and a self-service organizer dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    images: [
      "/img/fullstack/tix-1.jpg",
      "/img/fullstack/tix-2.jpg",
      "/img/fullstack/tix-3.jpg",
    ],
  },
]

export function FullStackSection() {
  const [activeId, setActiveId] = useState<string>(PROJECTS[0].id)
  const project = PROJECTS.find((p) => p.id === activeId) ?? PROJECTS[0]

  // Duplicate the images so the vertical translate(-50%) loop is seamless
  const loopImages = [...project.images, ...project.images]

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-primary">02 / TECHNICAL EXECUTION</p>
        <h2 className="mt-3 font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="block text-foreground">Full-Stack</span>
          <span className="block bg-gradient-to-br from-violet-500 to-violet-700 bg-clip-text text-transparent">
            Development
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left: project details */}
          <div className="flex flex-col">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Code2 className="h-5 w-5" aria-hidden />
            </span>

            <h3 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl">{project.title}</h3>
            <p className="mt-1 font-mono text-sm text-primary">{project.subtitle}</p>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">{project.description}</p>

            <div className="mt-8">
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">TECH STACK</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/5 px-3 py-1 font-mono text-xs text-primary ring-1 ring-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">OTHER PROJECTS</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PROJECTS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveId(p.id)}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm transition-all",
                      activeId === p.id
                        ? "bg-gradient-to-r from-violet-500 to-violet-700 text-white shadow-md shadow-violet-500/25"
                        : "bg-card text-foreground/80 ring-1 ring-border hover:ring-primary/40",
                    )}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
              <div className="mt-6 h-px w-24 bg-foreground/30" />
            </div>
          </div>

          {/* Right: vertically scrolling preview */}
          <div className="relative">
            <div
              key={project.id}
              className="group relative h-[500px] overflow-hidden rounded-2xl border border-border bg-card shadow-md"
            >
              <div className="flex flex-col gap-4 px-1 py-1 animate-scroll-up [animation-play-state:running] group-hover:[animation-play-state:paused]">
                {loopImages.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className="relative w-full overflow-hidden rounded-xl border border-border bg-white shadow-sm"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`${project.title} preview ${(i % project.images.length) + 1}`}
                      className="w-full h-auto transition duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider text-black shadow-lg backdrop-blur-sm uppercase">
                      Preview
                    </span>
                  </div>
                ))}
              </div>

              {/* Top / bottom fade masks */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-card to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
