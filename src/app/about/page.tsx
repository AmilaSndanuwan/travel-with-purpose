"use client"

import CountUp from "../../components/CountUp"
import Reveal from "../../components/Reveal"
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Compass,
  Globe2,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  Leaf,
  MapPin,
  Mountain,
  ShieldCheck,
  Sparkles,
  Star,
  TreePine,
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

const values = [
  { title: "Sustainability", desc: "We design journeys that protect nature, respect local culture and support future generations.", icon: Leaf },
  { title: "Community", desc: "Local families, guides, villages and social projects are at the heart of every experience.", icon: Handshake },
  { title: "Authenticity", desc: "We focus on real Sri Lankan culture, village life, spiritual heritage and meaningful human connection.", icon: Heart },
  { title: "Respect", desc: "Every journey is built with respect for temples, traditions, communities and the natural environment.", icon: ShieldCheck },
  { title: "Transparency", desc: "Travelers can clearly understand how their journey supports people, places and impact projects.", icon: Star },
]

const storyCards = [
  { title: "Sri Lankan Roots", desc: "Our journeys are shaped by local culture, spiritual traditions, village life and island hospitality.", icon: MapPin },
  { title: "Monastery Connections", desc: "We connect travelers with peaceful temple and monastery-based experiences for mindful learning.", icon: Landmark },
  { title: "Sri Lanka - Vietnam Link", desc: "We support cultural exchange programs that connect youth, travelers and communities across Asia.", icon: Globe2 },
  { title: "Social Impact Projects", desc: "Every program contributes to education, sustainability, community support or cultural preservation.", icon: Sparkles },
]

const stats = [
  { end: 12450, label: "Trees Planted", icon: TreePine, suffix: "+" },
  { end: 8320, label: "Students Supported", icon: GraduationCap, suffix: "+" },
  { end: 68, label: "Villages Supported", icon: Users, suffix: "" },
  { end: 45600, label: "Volunteer Hours", icon: Compass, suffix: "+" },
]

const partners = ["Village Hosts", "Local Guides", "Eco Projects", "Temple Networks", "Youth Programs"]

export default function About() {
  return (
    <main style={{ background: COLORS.cream, color: COLORS.text }}>
      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden px-6 pt-28 pb-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(42,30,22,0.86) 0%, rgba(42,30,22,0.62) 45%, rgba(42,30,22,0.28) 100%)",
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
                <span className="w-2 h-2 rounded-full" style={{ background: COLORS.gold }} />
                <p className="text-xs font-black tracking-[0.22em] uppercase" style={{ color: COLORS.gold }}>
                  Our story, mission and values
                </p>
              </div>
              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>About Us</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                TRAVEL WITH PURPOSE
              </h1>
              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                We create meaningful travel experiences in Sri Lanka that connect travelers with culture, nature, wellness, spirituality and real community impact.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#our-story"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{ background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})` }}
                >
                  Read Our Story
                </a>
                <a
                  href="/impact"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{ border: "1px solid rgba(255,255,255,0.32)", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(14px)" }}
                >
                  See Impact
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #EFE2D3 100%)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <Reveal>
            <div className="relative rounded-[2rem] overflow-hidden min-h-[560px]">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200" alt="Sri Lanka travel with purpose" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="script-font text-4xl" style={{ color: COLORS.gold }}>Meaningful Journeys</p>
                <h3 className="text-4xl font-black leading-none mt-2">Beyond ordinary tourism</h3>
                <p className="text-white/72 mt-4 leading-relaxed">We believe travel becomes powerful when it creates memories for travelers and value for communities.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>Our Story</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2" style={{ color: COLORS.text }}>
                WHY WE EXIST
              </h2>
              <p className="mt-6 leading-relaxed text-lg" style={{ color: COLORS.muted }}>
                Travel With Purpose was created to make tourism more meaningful. Instead of simply visiting places, we help travelers connect with Sri Lankan communities, spiritual traditions, village life, wellness experiences and sustainability projects.
              </p>
              <p className="mt-5 leading-relaxed text-lg" style={{ color: COLORS.muted }}>
                Every journey we design is connected to a purpose: supporting local people, protecting nature, preserving culture and creating unforgettable experiences that feel personal and authentic.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {storyCards.map((card) => {
                  const Icon = card.icon
                  return (
                    <div key={card.title} className="rounded-[1.5rem] p-5" style={{ background: COLORS.softCream, border: `1px solid ${COLORS.border}`, boxShadow: "0 14px 35px rgba(58,45,36,0.06)" }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(216,154,61,0.14)", color: COLORS.gold }}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-black text-lg mb-2" style={{ color: COLORS.text }}>{card.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>{card.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: "radial-gradient(circle at top left, rgba(216,154,61,0.18), transparent 35%), linear-gradient(135deg, #2A1E16 0%, #33251C 55%, #1C140F 100%)" }}>
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal>
            <div className="rounded-[2rem] p-8 h-full" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(18px)" }}>
              <Mountain className="w-10 h-10 mb-6" style={{ color: COLORS.gold }} />
              <h3 className="text-2xl font-black text-white mb-4">Vision</h3>
              <p className="text-white/68 leading-relaxed">To become a trusted platform for meaningful travel experiences that inspire personal growth and positive community change.</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-[2rem] p-8 h-full" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(18px)" }}>
              <Heart className="w-10 h-10 mb-6" style={{ color: COLORS.gold }} />
              <h3 className="text-2xl font-black text-white mb-4">Mission</h3>
              <p className="text-white/68 leading-relaxed">To create responsible journeys that support local communities, protect nature and preserve Sri Lankan culture.</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-[2rem] p-8 h-full" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(18px)" }}>
              <BadgeCheck className="w-10 h-10 mb-6" style={{ color: COLORS.gold }} />
              <h3 className="text-2xl font-black text-white mb-4">Promise</h3>
              <p className="text-white/68 leading-relaxed">To offer high-quality, authentic and transparent travel programs that give back to people and places.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, #F7F1E8 0%, #FFFDF8 50%, #EFE2D3 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>Our Values</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2" style={{ color: COLORS.text }}>WHAT WE BELIEVE</h2>
              <p className="mt-5 max-w-2xl mx-auto leading-relaxed" style={{ color: COLORS.muted }}>Our values guide every destination, program, partnership and traveler experience we create.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Reveal key={value.title} delay={i * 80}>
                  <div className="rounded-[2rem] p-6 text-center h-full transition hover:-translate-y-2" style={{ background: COLORS.softCream, border: `1px solid ${COLORS.border}`, boxShadow: "0 18px 45px rgba(58,45,36,0.07)" }}>
                    <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5" style={{ background: "rgba(216,154,61,0.14)", color: COLORS.gold }}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-black text-lg mb-3" style={{ color: COLORS.text }}>{value.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>{value.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 px-6" style={{ background: "radial-gradient(circle at top right, rgba(216,154,61,0.18), transparent 35%), linear-gradient(135deg, #2A1E16 0%, #1C140F 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>Our Impact</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2 text-white">PROOF OF PURPOSE</h2>
              <p className="mt-5 max-w-2xl mx-auto leading-relaxed text-white/68">Our work is measured through real contribution to communities, education, villages and sustainability projects.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <Reveal key={stat.label} delay={i * 80}>
                  <div className="rounded-[2rem] p-7 text-center transition hover:-translate-y-2" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(18px)" }}>
                    <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5" style={{ background: "rgba(216,154,61,0.15)", color: COLORS.gold }}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <p className="text-4xl font-black text-white"><CountUp end={stat.end} />{stat.suffix}</p>
                    <p className="text-sm mt-3 font-bold text-white/65">{stat.label}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-6" style={{ background: COLORS.softCream }}>
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>Our Network</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2" style={{ color: COLORS.text }}>COMMUNITY PARTNERS</h2>
            <p className="mt-5 max-w-2xl mx-auto leading-relaxed" style={{ color: COLORS.muted }}>We work with local guides, village hosts, eco projects, temple networks and youth programs to create authentic experiences.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            {partners.map((partner, i) => (
              <Reveal key={partner} delay={i * 70}>
                <div className="h-28 rounded-[1.5rem] flex items-center justify-center px-4 text-center font-black" style={{ background: COLORS.cream, border: `1px solid ${COLORS.border}`, color: COLORS.text, boxShadow: "0 14px 35px rgba(58,45,36,0.06)" }}>
                  {partner}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center overflow-hidden" style={{ background: "radial-gradient(circle at 50% 0%, rgba(216,154,61,0.25), transparent 30%), linear-gradient(135deg, #2A1E16 0%, #1C140F 100%)" }}>
        <div className="relative max-w-4xl mx-auto">
          <p className="script-font text-5xl" style={{ color: COLORS.gold }}>Travel With Meaning</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white mt-2">BE PART OF OUR STORY</h2>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">Join a journey that gives you unforgettable memories and helps create positive impact in Sri Lanka.</p>
          <a href="/booking" className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1" style={{ background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})` }}>
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
