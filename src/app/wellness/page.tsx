"use client"

import Reveal from "../../components/Reveal"
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  CalendarDays,
  CheckCircle2,
  Clock,
  HeartPulse,
  Leaf,
  MapPin,
  Moon,
  Mountain,
  ShieldCheck,
  Sparkles,
  Sun,
  Waves,
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

const wellnessPrograms = [
  {
    title: "Yoga Retreats",
    category: "Movement & Balance",
    location: "Bentota, Sri Lanka",
    duration: "3 - 7 Days",
    price: "$280",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900",
    desc: "Rejuvenate your body and mind with daily yoga sessions surrounded by tropical nature.",
    benefits: ["Daily yoga", "Breathwork", "Nature views"],
  },
  {
    title: "Ayurveda Healing",
    category: "Traditional Healing",
    location: "Kandy, Sri Lanka",
    duration: "5 - 10 Days",
    price: "$420",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900",
    desc: "Ancient healing for modern life through Sri Lankan Ayurveda treatments and herbal care.",
    benefits: ["Herbal therapy", "Body treatments", "Healing meals"],
  },
  {
    title: "Detox Programs",
    category: "Cleanse & Reset",
    location: "Ella, Sri Lanka",
    duration: "4 - 8 Days",
    price: "$360",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900",
    desc: "Cleanse, heal and energize your body with gentle detox routines and mindful nutrition.",
    benefits: ["Healthy meals", "Gentle routines", "Body reset"],
  },
  {
    title: "Mindfulness & Meditation",
    category: "Inner Peace",
    location: "Kandy, Sri Lanka",
    duration: "3 - 7 Days",
    price: "$300",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900",
    desc: "Find clarity through guided mindfulness, silent practice and peaceful meditation sessions.",
    benefits: ["Meditation", "Silence", "Mental clarity"],
  },
  {
    title: "Nature Healing",
    category: "Forest & Waterfall",
    location: "Haputale, Sri Lanka",
    duration: "2 - 5 Days",
    price: "$240",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900",
    desc: "Reconnect with nature through forest walks, waterfalls, mountain air and slow living.",
    benefits: ["Forest walks", "Waterfalls", "Slow travel"],
  },
]

const healingSteps = [
  {
    title: "Arrive & Slow Down",
    desc: "Begin with a calm arrival, welcome drink and peaceful orientation.",
    icon: Moon,
  },
  {
    title: "Daily Practice",
    desc: "Experience yoga, meditation, Ayurveda or nature healing each day.",
    icon: Sparkles,
  },
  {
    title: "Healthy Living",
    desc: "Enjoy local meals, rest time, mindful routines and gentle movement.",
    icon: Leaf,
  },
  {
    title: "Return Renewed",
    desc: "Leave with balance, clarity and practical wellness habits.",
    icon: BadgeCheck,
  },
]

const features = [
  "Personal wellness guidance",
  "Peaceful natural locations",
  "Authentic Sri Lankan healing",
  "Flexible retreat duration",
]


export default function Wellness() {
  return (
    <main style={{ background: COLORS.cream, color: COLORS.text }}>
      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden px-6 pt-28 pb-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(42,30,22,0.86) 0%, rgba(42,30,22,0.58) 45%, rgba(42,30,22,0.20) 100%)",
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
                  Reconnect with nature and inner peace
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Wellness Programs
              </p>

              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                HEAL. BREATHE. RESET.
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                Discover yoga, Ayurveda, detox, meditation and nature healing
                programs designed to help you slow down, restore balance and
                reconnect with yourself.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#wellness-programs"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  Explore Programs
                </a>

                <a
                  href="/booking"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.32)",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  Book Retreat
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
                Wellness Journey
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                RESTORE YOUR BALANCE
              </h2>

              <p
                className="mt-6 text-lg leading-relaxed"
                style={{ color: COLORS.muted }}
              >
                Our wellness experiences combine Sri Lankan nature, traditional
                healing, mindful movement and peaceful accommodation. Each
                program is created to help you feel lighter, calmer and more
                connected.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl p-4"
                    style={{
                      background: COLORS.softCream,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <CheckCircle2
                      className="w-5 h-5 shrink-0"
                      style={{ color: COLORS.gold }}
                    />
                    <p className="text-sm font-bold" style={{ color: COLORS.text }}>
                      {feature}
                    </p>
                  </div>
                ))}
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
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200"
                alt="Ayurveda and wellness"
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
                  <HeartPulse className="w-4 h-4" />
                  Wellness Retreat
                </div>

                <h3 className="text-3xl font-black leading-tight">
                  A calm escape for body, mind and spirit
                </h3>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Wellness Programs */}
      <section
        id="wellness-programs"
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
                  Choose Your Retreat
                </p>

                <h2
                  className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                  style={{ color: COLORS.text }}
                >
                  WELLNESS EXPERIENCES
                </h2>
              </div>

              <p className="max-w-md leading-relaxed" style={{ color: COLORS.muted }}>
                Select a wellness journey that matches your body, mind and
                purpose.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
            {wellnessPrograms.map((program, i) => {
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
                    <div className="relative h-64 overflow-hidden shrink-0">
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

                      <div className="grid grid-cols-1 gap-3 mb-6">
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
                          <CalendarDays
                            className="w-4 h-4"
                            style={{ color: COLORS.gold }}
                          />
                          Flexible schedule
                        </p>

                        <p
                          className="flex items-center gap-3 text-sm"
                          style={{ color: COLORS.muted }}
                        >
                          <Waves
                            className="w-4 h-4"
                            style={{ color: COLORS.gold }}
                          />
                          From: {program.price}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6 min-h-[72px] content-start">
                        {program.benefits.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-2 rounded-full text-xs font-black h-fit"
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
                        href="/booking"
                        className="mt-auto inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase transition group-hover:translate-x-1"
                        style={{
                          background: COLORS.text,
                        }}
                      >
                        View Details
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

      {/* Healing Steps */}
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
                Retreat Flow
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                HOW HEALING BEGINS
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {healingSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <Reveal key={step.title} delay={index * 80}>
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

                    <p
                      className="text-xs font-black tracking-widest uppercase mb-2"
                      style={{ color: COLORS.bronze }}
                    >
                      Step {index + 1}
                    </p>

                    <h3 className="font-black text-lg mb-2" style={{ color: COLORS.text }}>
                      {step.title}
                    </h3>

                    <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                      {step.desc}
                    </p>
                  </div>
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
            Ready To Reset?
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white mt-2">
            BEGIN YOUR WELLNESS JOURNEY
          </h2>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Choose a peaceful retreat and reconnect with your body, mind and
            nature through a meaningful Sri Lankan wellness experience.
          </p>

          <a
            href="/booking"
            className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
            }}
          >
            Book Wellness Retreat
            <ShieldCheck className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  )
}

