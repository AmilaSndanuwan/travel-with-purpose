"use client"

import CountUp from "../../components/CountUp"
import Reveal from "../../components/Reveal"
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Clock3,
  GraduationCap,
  Hammer,
  HeartHandshake,
  Leaf,
  MapPin,
  School,
  ShieldCheck,
  Sparkles,
  TreePine,
  Trophy,
  Users,
} from "lucide-react"

const COLORS = {
  gold: "#D89A3D",
  bronze: "#A66A2C",
  dark: "#2A1E16",
  cream: "#F7F1E8",
  softCream: "#FFFDF8",
  olive: "#5E6F52",
  text: "#3A2D24",
  muted: "#7B6B5F",
  border: "rgba(58,45,36,0.12)",
}

const stats = [
  {
    end: 12450,
    label: "Trees Planted",
    icon: TreePine,
    suffix: "+",
  },
  {
    end: 8320,
    label: "Students Supported",
    icon: GraduationCap,
    suffix: "+",
  },
  {
    end: 68,
    label: "Villages Supported",
    icon: School,
    suffix: "",
  },
  {
    end: 45600,
    label: "Volunteer Hours",
    icon: Clock3,
    suffix: "+",
  },
  {
    end: 32,
    label: "Projects Completed",
    icon: Trophy,
    suffix: "",
  },
]

const projects = [
  {
    title: "Temple Development Support",
    location: "Kandy Region",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    desc: "Supporting temple-based community spaces, meditation centers and cultural learning environments.",
    tags: ["Spiritual", "Community", "Culture"],
    icon: Sparkles,
  },
  {
    title: "Village Education Projects",
    location: "Central Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900",
    desc: "Helping students through English practice, youth activities, learning materials and volunteer support.",
    tags: ["Education", "Youth", "Volunteer"],
    icon: GraduationCap,
  },
  {
    title: "Eco Village Planting Program",
    location: "Haputale",
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=900",
    desc: "Creating greener villages through tree planting, organic farming and sustainable living practices.",
    tags: ["Eco", "Agriculture", "Sustainability"],
    icon: Leaf,
  },
]

const values = [
  {
    title: "Community First",
    desc: "Every experience is designed to support local people and create real value.",
    icon: HeartHandshake,
  },
  {
    title: "Transparent Impact",
    desc: "We focus on visible, measurable outcomes through each project and program.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainable Tourism",
    desc: "Travel should protect culture, nature and future generations.",
    icon: Leaf,
  },
  {
    title: "Cultural Respect",
    desc: "Our journeys are built with respect for Sri Lankan communities and traditions.",
    icon: BookOpen,
  },
]

export default function ImpactPage() {
  return (
    <main style={{ background: COLORS.cream, color: COLORS.text }}>
      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden px-6 pt-28 pb-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(42,30,22,0.88) 0%, rgba(42,30,22,0.66) 45%, rgba(42,30,22,0.28) 100%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 25%, rgba(216,154,61,0.45), transparent 28%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full">
          <Reveal>
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(216,154,61,0.28)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: COLORS.gold }}
                />
                <p
                  className="text-xs font-black tracking-[0.22em] uppercase"
                  style={{ color: COLORS.gold }}
                >
                  Every journey creates change
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Impact Projects
              </p>

              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                TRAVEL THAT GIVES BACK
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                Every traveler contributes directly to community development,
                education, sustainability and cultural preservation projects
                across Sri Lanka.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#impact-stats"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  View Our Impact
                </a>

                <a
                  href="/volunteer"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.32)",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  Volunteer With Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact Stats */}
      <section
        id="impact-stats"
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
                Our Impact
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                IN NUMBERS
              </h2>

              <p
                className="mt-5 max-w-2xl mx-auto leading-relaxed"
                style={{ color: COLORS.muted }}
              >
                These numbers represent meaningful travel experiences connected
                to people, villages, education and sustainability.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {stats.map((item, i) => {
              const Icon = item.icon

              return (
                <Reveal key={item.label} delay={i * 80}>
                  <div
                    className="rounded-[2rem] p-7 text-center transition hover:-translate-y-2"
                    style={{
                      background: COLORS.softCream,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5"
                      style={{
                        background: "rgba(216,154,61,0.14)",
                        color: COLORS.gold,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <p
                      className="text-4xl font-black"
                      style={{ color: COLORS.text }}
                    >
                      <CountUp end={item.end} />
                      {item.suffix}
                    </p>

                    <p
                      className="text-sm mt-3 font-bold"
                      style={{ color: COLORS.muted }}
                    >
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,30,22,0.90), rgba(42,30,22,0.68))",
          }}
        />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
          <Reveal>
            <div>
              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Why It Matters
              </p>

              <h2 className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2 text-white">
                EVERY TRIP HAS PURPOSE
              </h2>

              <p
                className="mt-6 leading-relaxed max-w-xl"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Our mission is to connect travelers with authentic Sri Lankan
                communities while supporting education, sustainability, temple
                development, village livelihoods and cultural preservation.
              </p>

              <a
                href="/about"
                className="mt-8 inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm font-black tracking-widest uppercase text-white transition hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                }}
              >
                Learn Our Story
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((item, i) => {
              const Icon = item.icon

              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div
                    className="rounded-[2rem] p-6 transition hover:-translate-y-2"
                    style={{
                      background: "rgba(255,255,255,0.10)",
                      border: "1px solid rgba(255,255,255,0.16)",
                      backdropFilter: "blur(18px)",
                      boxShadow: "0 20px 55px rgba(0,0,0,0.18)",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                      style={{
                        background: "rgba(216,154,61,0.15)",
                        border: "1px solid rgba(216,154,61,0.28)",
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: COLORS.gold }} />
                    </div>

                    <h3 className="font-black text-lg mb-2 text-white">
                      {item.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.68)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, #F7F1E8 0%, #FFFDF8 50%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
              <div>
                <p
                  className="script-font text-5xl"
                  style={{ color: COLORS.bronze }}
                >
                  Impact Stories
                </p>

                <h2
                  className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                  style={{ color: COLORS.text }}
                >
                  PROJECTS WE SUPPORT
                </h2>
              </div>

              <p className="max-w-md leading-relaxed" style={{ color: COLORS.muted }}>
                Each project connects travelers with meaningful contribution,
                community learning and sustainable development.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {projects.map((project, i) => {
              const Icon = project.icon

              return (
                <Reveal key={project.title} delay={i * 100}>
                  <article
                    className="group rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2"
                    style={{
                      background: COLORS.softCream,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
                    }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                      <div className="absolute top-5 left-5">
                        <span
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
                          style={{
                            background: "rgba(42,30,22,0.62)",
                            backdropFilter: "blur(12px)",
                          }}
                        >
                          <Icon className="w-4 h-4" />
                          Impact Project
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="text-2xl font-black text-white">
                          {project.title}
                        </h3>
                        <p className="text-white/70 text-sm flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </p>
                      </div>
                    </div>

                    <div className="p-6">
                      <p
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: COLORS.muted }}
                      >
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-2 rounded-full text-xs font-black"
                            style={{
                              background: "rgba(216,154,61,0.10)",
                              color: COLORS.bronze,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href="/volunteer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase transition group-hover:translate-x-1"
                        style={{
                          background: COLORS.text,
                        }}
                      >
                        Support Project
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-24 px-6 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(216,154,61,0.25), transparent 30%), linear-gradient(135deg, #2A1E16 0%, #1C140F 100%)",
        }}
      >
        <div className="relative max-w-4xl mx-auto">
          <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
            Join The Change
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white mt-2">
            MAKE YOUR JOURNEY MATTER
          </h2>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Travel with purpose and become part of a movement that supports
            communities, nature and culture.
          </p>

          <a
            href="/booking"
            className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
            }}
          >
            Start Your Journey
            <BadgeCheck className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  )
}