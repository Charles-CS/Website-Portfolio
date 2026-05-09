"use client"

import { Code2, Heart, Palette, Quote, Sparkles, Users, Zap, Globe, Smartphone, Gamepad2, Terminal } from "lucide-react"
import { useState, useEffect } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const FRONTEND_TECHS = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Framer", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
]

const BACKEND_TECHS = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg" },
  { name: "Prisma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg" },
]

const TOOLS_TECHS = [
  { name: "Google Cloud", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" },
  { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
]

const GAME_TECHS = [
  { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
  { name: "Unreal", icon: "https://www.vectorlogo.zone/logos/unrealengine/unrealengine-icon.svg" },
  { name: "Godot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
]

const TECH_STACKS = [
  { label: "Full-Stack Web", Icon: Code2 },
  { label: "Mobile Dev", Icon: Smartphone },
  { label: "Game Development", Icon: Gamepad2 },
  { label: "Tools & Deployment", Icon: Terminal },
]

export function AboutSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest text-primary">GET TO KNOW ME</p>
        <h2 className="mt-3 font-display text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
          About <span className="bg-gradient-to-br from-violet-500 to-violet-700 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Passionate developer & creator who loves building meaningful digital experiences.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left: image card */}
          <div className="relative flex lg:h-[100vh] min-h-[460px] flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-md lg:sticky lg:top-12">
            <img
              src="/img/profile/AI profile.png"
              alt="Charles Platon"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-black shadow-lg backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              Available for opportunities
            </span>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="relative rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border">
              <span className="absolute -left-1.5 top-12 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
              <Quote className="h-6 w-6 text-primary" aria-hidden />
              <div className="mt-4 space-y-4 text-foreground/85 text-lg leading-relaxed">
                <p>
                  I&apos;m Charles Platon, a passionate{" "}
                  <span className="font-medium text-primary">developer and creator</span> bridging the gap between code
                  and craft. With a background in Computer Science and a heart for building, I make digital experiences
                  that are functional and meaningful.
                </p>
                <p>
                  Currently exploring the intersection of{" "}
                  <span className="font-medium text-primary">full-stack web, game development, and 3D art</span>. When
                  I&apos;m not shipping code, you&apos;ll find me modeling assets in Blender or competing in hackathons
                  with my team.
                </p>
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <Code2 className="h-4 w-4 text-primary" aria-hidden />
                Technology Stacks
              </h3>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TECH_STACKS.map(({ label, Icon }) => {
                  const isFullStack = label === "Full-Stack Web"
                  const isTools = label === "Tools & Deployment"
                  const isGameDev = label === "Game Development"
                  const hasPopover = isFullStack || isTools || isGameDev

                  const card = (
                    <div key={label} className={hasPopover ? "w-full cursor-pointer" : "w-full"}>
                      <div className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 ring-1 ring-border transition-all hover:shadow-sm hover:ring-primary/40 group">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    </div>
                  )

                  if (hasPopover && mounted) {
                    return (
                      <Popover key={label}>
                        <PopoverTrigger asChild>{card}</PopoverTrigger>
                        <PopoverContent
                          side="top"
                          className="w-[95vw] max-w-[500px] border-black/10 bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] backdrop-blur-md"
                          align="center"
                          sideOffset={15}
                        >
                          {isFullStack && (
                            <div className="space-y-6">
                              <div className="space-y-3 text-center">
                                <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase">
                                  Frontend & Core Scripting
                                </p>
                                <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                                  {FRONTEND_TECHS.map((tech) => (
                                    <div
                                      key={tech.name}
                                      className="group relative flex h-9 w-9 shrink items-center justify-center rounded-lg bg-black/[0.03] ring-1 ring-black/10 transition-all hover:bg-black/5 hover:ring-black/20 sm:h-10 sm:w-10"
                                    >
                                      <img src={tech.icon} alt={tech.name} className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
                                      <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 rounded bg-black px-2 py-1 text-[10px] font-bold text-white transition-transform group-hover:scale-100">
                                        {tech.name}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-3 text-center">
                                <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase">
                                  Backend & Data Architecture
                                </p>
                                <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                                  {BACKEND_TECHS.map((tech) => (
                                    <div
                                      key={tech.name}
                                      className="group relative flex h-9 w-9 shrink items-center justify-center rounded-lg bg-black/[0.03] ring-1 ring-black/10 transition-all hover:bg-black/5 hover:ring-black/20 sm:h-10 sm:w-10"
                                    >
                                      <img src={tech.icon} alt={tech.name} className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
                                      <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 rounded bg-black px-2 py-1 text-[10px] font-bold text-white transition-transform group-hover:scale-100">
                                        {tech.name}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {isTools && (
                            <div className="space-y-3 text-center">
                              <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase">
                                Cloud, Tools & Deployment
                              </p>
                              <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                                {TOOLS_TECHS.map((tech) => (
                                  <div
                                    key={tech.name}
                                    className="group relative flex h-9 w-9 shrink items-center justify-center rounded-lg bg-black/[0.03] ring-1 ring-black/10 transition-all hover:bg-black/5 hover:ring-black/20 sm:h-10 sm:w-10"
                                  >
                                    <img src={tech.icon} alt={tech.name} className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
                                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 rounded bg-black px-2 py-1 text-[10px] font-bold text-white transition-transform group-hover:scale-100">
                                      {tech.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {isGameDev && (
                            <div className="space-y-3 text-center">
                              <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase">
                                Game Development & Management
                              </p>
                              <div className="flex items-center justify-between gap-1.5 sm:gap-2">
                                {GAME_TECHS.map((tech) => (
                                  <div
                                    key={tech.name}
                                    className="group relative flex h-9 w-9 shrink items-center justify-center rounded-lg bg-black/[0.03] ring-1 ring-black/10 transition-all hover:bg-black/5 hover:ring-black/20 sm:h-10 sm:w-10"
                                  >
                                    <img src={tech.icon} alt={tech.name} className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
                                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 scale-0 rounded bg-black px-2 py-1 text-[10px] font-bold text-white transition-transform group-hover:scale-100">
                                      {tech.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </PopoverContent>
                      </Popover>
                    )
                  }

                  return card
                })}
              </div>
            </div>

            {/* Fun fact */}
            <div className="relative overflow-hidden rounded-2xl bg-card p-6 border border-border shadow-md">
              <Zap className="absolute right-5 top-5 h-6 w-6 text-primary/40" aria-hidden />
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                <Zap className="h-3.5 w-3.5" aria-hidden />
                Fun Fact
              </p>
              <p className="mt-3 text-lg leading-relaxed text-pretty text-foreground/90">
                &quot;I once developed an endless-runner game to help with phonics learning. It turns out, making
                education fun is significantly harder than making a player jump over a spike pit.&quot;
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-3 w-3 text-primary" aria-hidden />
                </span>
                Charles · Midnight Coder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
