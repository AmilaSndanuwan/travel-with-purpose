"use client"

import { useState } from "react"
import Reveal from "../../components/Reveal"
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Coffee,
  DollarSign,
  GraduationCap,
  HeartHandshake,
  Home,
  Leaf,
  MapPin,
  School,
  Send,
  Sparkles,
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

const programs = [
  {
    title: "English Teaching Program",
    category: "Education",
    location: "Kandy, Sri Lanka",
    duration: "2 - 12 Weeks",
    accommodation: "Shared Rooms",
    meals: "3 meals per day",
    fee: "$200 / Week",
    certificate: "Included",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900",
    desc: "Support local students through English practice, classroom activities and cultural exchange.",
    highlights: ["English practice", "Youth support", "School activities"],
  },
  {
    title: "Organic Farming Program",
    category: "Sustainability",
    location: "Haputale, Sri Lanka",
    duration: "2 - 12 Weeks",
    accommodation: "Village Stay",
    meals: "3 meals per day",
    fee: "$150 / Week",
    certificate: "Included",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=900",
    desc: "Work with local farmers, learn organic agriculture and support sustainable village living.",
    highlights: ["Organic farming", "Tea lifestyle", "Village support"],
  },
  {
    title: "Temple Support Program",
    category: "Spiritual Impact",
    location: "Kandy, Sri Lanka",
    duration: "2 - 12 Weeks",
    accommodation: "Shared Rooms",
    meals: "3 meals per day",
    fee: "$180 / Week",
    certificate: "Included",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900",
    desc: "Support temple-based community work, cultural programs and peaceful spiritual environments.",
    highlights: ["Temple support", "Meditation space", "Cultural learning"],
  },
  {
    title: "Environmental Conservation",
    category: "Eco Impact",
    location: "Ella, Sri Lanka",
    duration: "2 - 12 Weeks",
    accommodation: "Eco Stay",
    meals: "3 meals per day",
    fee: "$160 / Week",
    certificate: "Included",
    icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900",
    desc: "Join tree planting, clean-up projects, eco education and nature protection activities.",
    highlights: ["Tree planting", "Eco awareness", "Nature care"],
  },
  {
    title: "Youth Education Program",
    category: "Youth Impact",
    location: "Galle, Sri Lanka",
    duration: "2 - 8 Weeks",
    accommodation: "Host Family",
    meals: "3 meals per day",
    fee: "$190 / Week",
    certificate: "Included",
    icon: School,
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900",
    desc: "Help young learners build confidence through creative workshops, mentoring and skills sessions.",
    highlights: ["Youth mentoring", "Creative learning", "Community work"],
  },
]

const includedItems = [
  {
    title: "Accommodation",
    desc: "Shared rooms, eco stays or host family options depending on the program.",
    icon: Home,
  },
  {
    title: "Daily Meals",
    desc: "Three simple local meals per day with Sri Lankan hospitality.",
    icon: Coffee,
  },
  {
    title: "Local Support",
    desc: "Guidance from local coordinators and community partners.",
    icon: Users,
  },
  {
    title: "Certificate",
    desc: "Certificate of participation after completing your program.",
    icon: ClipboardCheck,
  },
]

const steps = [
  {
    title: "Choose Program",
    desc: "Select a volunteer experience that matches your skills and purpose.",
  },
  {
    title: "Submit Application",
    desc: "Send your details, preferred duration and reason for volunteering.",
  },
  {
    title: "Get Confirmation",
    desc: "Our team will contact you with availability and next steps.",
  },
  {
    title: "Start Your Impact",
    desc: "Arrive in Sri Lanka and begin your meaningful volunteer journey.",
  },
]

export default function Volunteer() {
  const [applied, setApplied] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState(programs[0].title)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setApplied(true)
  }

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
              "linear-gradient(90deg, rgba(42,30,22,0.88) 0%, rgba(42,30,22,0.64) 45%, rgba(42,30,22,0.26) 100%)",
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
                  Make a difference while exploring Sri Lanka
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Volunteer Programs
              </p>

              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                TRAVEL WITH IMPACT
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                Join community-focused volunteer programs in Sri Lanka through
                education, temple support, farming, youth development and
                environmental conservation.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#volunteer-programs"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  View Programs
                </a>

                <a
                  href="#apply"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.32)",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  Apply Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <Reveal>
            <div>
              <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
                Why Volunteer?
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                GIVE TIME. GAIN PURPOSE.
              </h2>

              <p
                className="mt-6 text-lg leading-relaxed"
                style={{ color: COLORS.muted }}
              >
                Our volunteer experiences are designed for travelers who want to
                do more than visit beautiful places. You will learn from local
                communities, support meaningful projects and create memories
                that continue beyond your trip.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div
                  className="rounded-[1.5rem] p-5"
                  style={{
                    background: COLORS.softCream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <p
                    className="text-3xl font-black"
                    style={{ color: COLORS.bronze }}
                  >
                    5+
                  </p>
                  <p className="text-sm mt-1" style={{ color: COLORS.muted }}>
                    Volunteer Programs
                  </p>
                </div>

                <div
                  className="rounded-[1.5rem] p-5"
                  style={{
                    background: COLORS.softCream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <p
                    className="text-3xl font-black"
                    style={{ color: COLORS.bronze }}
                  >
                    2-12
                  </p>
                  <p className="text-sm mt-1" style={{ color: COLORS.muted }}>
                    Weeks Duration
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="relative rounded-[2rem] overflow-hidden min-h-[430px]"
              style={{
                boxShadow: "0 25px 70px rgba(58,45,36,0.12)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200"
                alt="Volunteer education program"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 text-white">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4"
                  style={{
                    background: "rgba(255,255,255,0.14)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <HeartHandshake className="w-4 h-4" />
                  Community Impact
                </div>

                <h3 className="text-3xl font-black leading-tight">
                  Real contribution through responsible travel
                </h3>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section
        id="volunteer-programs"
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
                  Choose Program
                </p>

                <h2
                  className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                  style={{ color: COLORS.text }}
                >
                  VOLUNTEER EXPERIENCES
                </h2>
              </div>

              <p className="max-w-md leading-relaxed" style={{ color: COLORS.muted }}>
                Select a program that matches your purpose, skills and travel
                duration.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {programs.map((program, i) => {
              const Icon = program.icon

              return (
                <Reveal key={program.title} delay={i * 80} className="h-full">
                 <article
  className="group h-full rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col"
                    style={{
                      background: COLORS.softCream,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
                    }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                      <div className="absolute top-5 left-5">
                        <span
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
                          style={{
                            background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                          }}
                        >
                          <Icon className="w-4 h-4" />
                          {program.category}
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="text-2xl font-black text-white leading-tight">
                          {program.title}
                        </h3>

                        <p className="text-white/70 text-sm flex items-center gap-2 mt-2">
                          <MapPin className="w-4 h-4" />
                          {program.location}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <p
                        className="text-sm leading-relaxed mb-5 min-h-[66px]"
                        style={{ color: COLORS.muted }}
                      >
                        {program.desc}
                      </p>

                     <div className="grid grid-cols-1 gap-3 mb-6 min-h-[150px]">
                        <p
                          className="flex items-center gap-3 text-sm"
                          style={{ color: COLORS.muted }}
                        >
                          <Clock
                            className="w-4 h-4"
                            style={{ color: COLORS.gold }}
                          />
                          Duration: {program.duration}
                        </p>

                        <p
                          className="flex items-center gap-3 text-sm"
                          style={{ color: COLORS.muted }}
                        >
                          <Home
                            className="w-4 h-4"
                            style={{ color: COLORS.gold }}
                          />
                          Accommodation: {program.accommodation}
                        </p>

                        <p
                          className="flex items-center gap-3 text-sm"
                          style={{ color: COLORS.muted }}
                        >
                          <Coffee
                            className="w-4 h-4"
                            style={{ color: COLORS.gold }}
                          />
                          Meals: {program.meals}
                        </p>

                        <p
                          className="flex items-center gap-3 text-sm"
                          style={{ color: COLORS.muted }}
                        >
                          <DollarSign
                            className="w-4 h-4"
                            style={{ color: COLORS.gold }}
                          />
                          Fee: {program.fee}
                        </p>

                        <p
                          className="flex items-center gap-3 text-sm"
                          style={{ color: COLORS.muted }}
                        >
                          <ClipboardCheck
                            className="w-4 h-4"
                            style={{ color: COLORS.gold }}
                          />
                          Certificate: {program.certificate}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {program.highlights.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-2 rounded-full text-xs font-black"
                            style={{
                              background: "rgba(216,154,61,0.10)",
                              color: COLORS.bronze,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#apply"
                        onClick={() => setSelectedProgram(program.title)}
                        className="mt-auto inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase transition group-hover:translate-x-1"
                        style={{
                          background: COLORS.text,
                        }}
                      >
                        Apply For This Program
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

      {/* Included */}
      <section
        className="py-24 px-6"
        style={{
          background: COLORS.softCream,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
                What You Get
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                INCLUDED SUPPORT
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {includedItems.map((item, i) => {
              const Icon = item.icon

              return (
                <Reveal key={item.title} delay={i * 80}>
                  <div
                    className="rounded-[2rem] p-6 text-center h-full transition hover:-translate-y-2"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: "0 18px 45px rgba(58,45,36,0.07)",
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

                    <h3 className="font-black text-lg mb-2" style={{ color: COLORS.text }}>
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      
    </main>
  )
}