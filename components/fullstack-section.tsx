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
      "/img/fullstack/kumpirmaImage-1.png",
      "/img/fullstack/kumpirmaImage-2.png",
      "/img/fullstack/kumpirmaImage-3.png",
      "/img/fullstack/kumpirmaImage-4.png",
    ],
  },
  {
    id: "RedQuest",
    title: "RedQuest",
    subtitle: "Real-Time Blood Rescue Platform",
    description:
      "RedQuest is a mobile platform that connects blood requesters with nearby compatible donors, dispatching a motorcycle rider to transport the donor to the hospital — all within minutes.",
    tech: ["React Native + Expo Go", "Tailwind", "Railway", "PostgreSQL"],
    images: [
      "/img/fullstack/redquestImage-1.png",
      "/img/fullstack/redquestImage-2.png",
      "/img/fullstack/redquestImage-3.png",
    ],
  },
  {
    id: "Lunas",
    title: "Lunas",
    subtitle: "medical information platform",
    description:
      "Lunas is a secure, web-based emergency medical information platform that gives licensed medical professionals instant access to a patient's critical health data via a QR code — even when the patient is unconscious or unable to speak.",
    tech: ["Next.Js", "React", "PostgreSQL", "Password Hashing", "RBAC", "TailwindCSS"],
    images: [
      "/img/fullstack/LunasImage1.png",
      "/img/fullstack/LunasImage2.png",
      "/img/fullstack/LunasImage3.png",
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
      <div className="mx-auto max-w-7xl">
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
              className="relative h-[550px] overflow-hidden rounded-2xl"
            >
              <div className="flex flex-col gap-6 animate-scroll-up [animation-play-state:running] hover:[animation-play-state:paused]">
                {loopImages.map((src, i) => (
                  <div
                    key={`${src}-${i}`}
                    className={cn(
                      "group relative w-full overflow-hidden rounded-xl border border-black/5 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-all hover:scale-[1.01] hover:shadow-xl",
                      src.includes("redquestImage-3") 
                        ? "bg-gradient-to-r from-[#D8E7F8] to-[#E1EDF9]" 
                        : src.includes("LunasImage")
                        ? "bg-[#F8F2EA]"
                        : "bg-white",
                    )}
                  >
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`${project.title} preview ${(i % project.images.length) + 1}`}
                      className="w-full aspect-[16/8] object-contain transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="absolute left-3 bottom-3 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[8px] font-normal uppercase tracking-wider text-black/80 shadow-lg backdrop-blur-sm">
                      Preview
                    </span>
                  </div>
                ))}
              </div>

              {/* Top / bottom fade masks */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

