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
  imageDetails: { title: string; description: string }[]
  // Kinetic-type words that scroll in the preview area
  words: string[]
}

const CARDS: Card[] = [
  {
    count: 9,
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
      "/img/creative/projects/project-9.png",
    ],
    imageDetails: [
      { title: "RedQuest — Blood Rescue Platform", description: "A gamified mobile app by Team Anti-Titis that connects blood requesters with nearby compatible donors, dispatching motorcycle riders to transport donors to hospitals within minutes. Features verified donor profiles, quest tracking, XP rewards, and donation certificates." },
      { title: "Kumpirma — Signature Verification System", description: "A full-stack AI + Blockchain system integrating Pix2Pix GAN denoising and a Siamese Capsule Network into a forensic-grade pipeline, anchoring every verification outcome immutably on Ethereum." },
      { title: "BrainstormAI — Academic Engineering Platform", description: "An AI-driven platform for academic engineering that provides topic synthesis, dynamic engineering roadmaps, and tailored architectural guidance. Features project roadmap generation with recommended tech stacks." },
      { title: "Pixie — Website Builder", description: "A dark-themed website builder platform with the tagline 'Websites that breathe.' Enables users to build top-tier website pages in seconds with an intuitive visual editor and template system." },
      { title: "The Lost Hospital — Horror Game", description: "A first-person horror exploration game built in Unreal Engine 5. Features atmospheric lighting, immersive sound design, and a haunting abandoned hospital environment." },
      { title: "SonicPath — A Ride to Read", description: "An educational endless-runner game designed to help children with phonics learning. Combines fun gameplay mechanics with reading exercises to make learning engaging and interactive." },
      { title: "Tech Treasure — E-Commerce Store", description: "A sleek e-commerce platform for cutting-edge tech products like drones and cameras. Features product categories, a gallery section, and promotional deals with a premium dark UI." },
      { title: "Toka — Chore Rewards App", description: "A behavioral economics platform that turns daily chores into magical rewards for kids. Bridges household responsibilities and financial literacy, piloted with 100+ families through the Wadhwani Foundation in CALABARZON." },
      { title: "Recent Project Showcase", description: "A showcase of my recent design and development work, featuring modern user interfaces and seamless user experiences." },
    ],
    words: ["code", "design", "build", "ship"],
  },
  {
    count: 3,
    category: "EXPERIENCE",
    icon: Globe,
    title: "Hackathons",
    description:
      "Intense 48-hour sprints of innovation and collaboration, building functional prototypes to solve real-world challenges.",
    type: "COMPETITIONS",
    images: ["/img/creative/hackathons/hackathon-1.png", "/img/creative/hackathons/hackathon-2.png", "/img/creative/hackathons/hackaton-3.png"],
    imageDetails: [
      { title: "DevKada CodeKada — Anti-Titis", description: "Competed in CodeKada, The Online Hackathon by DevKada. Our team Anti-Titis finalized the core matching logic and status tracking features, delivering high-fidelity mobile screens with real-time push notifications for the project presentation." },
      { title: "DevKada CodeKada — Build Station", description: "Late-night coding session during the DevKada CodeKada hackathon. 'Build from Anywhere, Build Anything' — working across multiple screens to develop and ship our solution under intense time pressure." },
      { title: "Hackathon Event", description: "Participating in an intense coding hackathon event, collaborating with team members to build an innovative solution." },
    ],
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
    imageDetails: [
      { title: "ACSS The Great Flavor Byte — Winners", description: "Receiving certificates of recognition at The Great Flavor Byte event organized by the Association of Computer Science Students (ACSS) at Pamantasan ng Cabuyao. Recognized for excellence in the CS QuizBee competition." },
      { title: "The Great Flavor Byte — Grand Stage", description: "Full group photo of all winners and participants at The Great Flavor Byte: A Taste of Unity, A Byte of Innovation, held at the University of Cabuyao. Sponsored by CodeChum, LuckyMe, and other partners." },
    ],
    words: ["champion", "speed", "logic", "victory"],
  },
  {
    count: 7,
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
      "/img/creative/cert/cert-7.png",
    ],
    imageDetails: [
      { title: "IoT & LoRaWAN Workshop — Fundamentals", description: "Certificate of Participation from the IoT & LoRaWAN Workshop Series by Packetworx and KadaKareer. Covers Internet of Things Basics, how IoT devices communicate, and an overview of IoT communication protocols. Presented April 11, 2026." },
      { title: "IoT & LoRaWAN Workshop — Foundations", description: "Certificate of Participation covering LoRa/LoRaWAN foundations and deployment frameworks, including practical assessment of real-world IoT applications and localized solution design. Presented April 18, 2026." },
      { title: "IoT & LoRaWAN Workshop — Practical Applications", description: "Certificate of Participation covering Practical Applications of IoT and LoRaWAN, including a mini-case study on LoRaWAN's utility in the Philippines. Presented April 25, 2026." },
      { title: "LagunaТech: CS Grand Summit", description: "Certificate of Appreciation from the University of Cabuyao for participating in the LagunaТech: Computer Science Grand Summit organized by the Association of Computer Science Students (ACSS). Recognized for fostering knowledge exchange and collaboration. May 2024." },
      { title: "Thesis & Capstone Ready Seminar", description: "Certificate of Participation from the University of Cabuyao for actively participating in 'Thesis & Capstone Ready — Preparing 3rd Year Students' of the College of Computing Studies. January 10, 2026." },
      { title: "ACSS The Great Flavor Byte", description: "Certificate of Participation from the University of Cabuyao for active participation in 'ACSS The Great Flavor Byte: A Taste of Unity, A Byte of Innovation,' celebrating discovery and collective growth. February 23, 2026." },
      { title: "New Certification", description: "Recognition for continuing professional development, highlighting new technical skills and active participation in advanced learning initiatives." },
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
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

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
                  setActiveImageIndex(0)
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
                    {active.imageDetails[activeImageIndex].title}
                  </DialogTitle>
                  <p className="mt-4 text-[15px] leading-relaxed text-foreground/75">{active.imageDetails[activeImageIndex].description}</p>
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
                      onClick={() => setActiveImageIndex(i)}
                      className={cn(
                        "relative flex aspect-[16/11] w-full items-center justify-center overflow-hidden rounded-[32px] border border-black/5 dark:border-white/5 bg-muted shadow-sm cursor-pointer transition-all duration-300",
                        activeImageIndex === i ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-zinc-950 scale-[1.02]" : "hover:scale-[1.01]"
                      )}
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
