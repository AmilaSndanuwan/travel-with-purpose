"use client"

import CountUp from "../components/CountUp"
import Reveal from "../components/Reveal"
import * as LucideIcons from "lucide-react"
import { useState } from "react"

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
  { icon: "Moon", title: "Meditation", desc: "Silent retreats", href: "/programs" },
  { icon: "Heart", title: "Yoga & Wellness", desc: "Ayurveda & healing", href: "/wellness" },
  { icon: "Compass", title: "Adventure", desc: "Hiking & camping", href: "/programs" },
  { icon: "Globe", title: "Cultural Tours", desc: "Village life", href: "/programs" },
  { icon: "Users", title: "Volunteer", desc: "Community impact", href: "/volunteer" },
  { icon: "Leaf", title: "Eco Tourism", desc: "Sustainable travel", href: "/programs" },
  { icon: "Camera", title: "Wildlife Safari", desc: "Nature watching", href: "/programs" },
  { icon: "BookOpen", title: "Agriculture", desc: "Tea & farming", href: "/programs" },
  { icon: "Tent", title: "Youth Camps", desc: "Leadership camps", href: "/programs" },
  { icon: "MapPin", title: "Monastery Stay", desc: "Spiritual living", href: "/programs" },
]

const experiences = [
  {
    title: "7-Day Silent Retreat",
    location: "Kandy",
    days: "7 Days",
    price: "$450",
    tag: "Spiritual",
    img: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900",
  },
  {
    title: "Knuckles Hiking",
    location: "Kandy",
    days: "2 Days",
    price: "$380",
    tag: "Adventure",
    img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=900",
  },
  {
    title: "Village Homestay",
    location: "Udawalawe",
    days: "3 Days",
    price: "$250",
    tag: "Culture",
    img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900",
  },
  {
    title: "Elephant Safari",
    location: "Udawalawe",
    days: "1 Day",
    price: "$120",
    tag: "Wildlife",
    img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900",
  },
]

const destinations = [
  { name: "Kandy", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900" },
  { name: "Ella", img: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=900" },
  { name: "Sigiriya", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900" },
  { name: "Galle", img: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=900" },
  { name: "Nuwara Eliya", img: "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=900" },
]

const blogPosts = [
  {
    title: "10 Hidden Places You Must Visit in Sri Lanka",
    date: "May 10, 2024",
    cat: "Travel Stories",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
  },
  {
    title: "How Meditation Retreats Can Transform Your Mind",
    date: "May 5, 2024",
    cat: "Meditation",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
  },
  {
    title: "Volunteer Abroad: Stories That Inspire",
    date: "Apr 28, 2024",
    cat: "Volunteer",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
  },
]

export default function Home()
 {
  const testimonials = [
  {
    name: "Sarah Johnson",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    review:
      "This journey completely changed my perspective on travel. I connected with local communities and experienced Sri Lanka in a meaningful way.",
  },
  {
    name: "Michael Brown",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    review:
      "The volunteer projects were inspiring. I met amazing people and felt like I truly made a positive impact during my trip.",
  },
  {
    name: "Emma Wilson",
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    review:
      "The meditation retreat and cultural experiences were unforgettable. Everything was beautifully organized.",
  },
]

const [activeTestimonial, setActiveTestimonial] = useState(0)
  return (
    <main className="min-h-screen" style={{ background: COLORS.cream }}>
      {/* Hero Section - Premium */}
<section className="relative min-h-screen overflow-hidden">
  <div
    className="absolute inset-0 w-full h-full"
    style={{
      backgroundImage: "url('/hero3.png')",
      backgroundSize: "cover",
      backgroundPosition: "right center",
    }}
  />

  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(90deg, rgba(42,30,22,0.94) 0%, rgba(42,30,22,0.78) 38%, rgba(42,30,22,0.35) 72%, rgba(42,30,22,0.08) 100%)",
    }}
  />

  <div
    className="absolute inset-0 opacity-25"
    style={{
      backgroundImage:
        "radial-gradient(circle at 20% 25%, rgba(216,154,61,0.45), transparent 28%)",
    }}
  />

  <div className="relative z-10 min-h-screen flex items-center pt-24">
    <div className="container-custom grid grid-cols-1 lg:grid-cols-[1.05fr_0.75fr] gap-10 items-center">
      <div className="text-center lg:text-left">
        <Reveal>
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(216,154,61,0.22)",
              backdropFilter: "blur(14px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: COLORS.gold }}
            />
            <p
              className="font-black text-xs tracking-[0.22em] uppercase"
              style={{ color: COLORS.gold }}
            >
              Transform your journey through impact tourism
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="leading-none mb-6">
            <span className="block font-black text-white tracking-[0.12em] text-[clamp(3.5rem,8vw,6.3rem)]">
              TRAVEL WITH
            </span>

            <span
              className="block script-font"
              style={{
                color: COLORS.gold,
                fontSize: "clamp(3rem,7vw,6.5rem)",
                lineHeight: "0.9",
              }}
            >
              Purpose
            </span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Giving you the opportunity to give back, learn and grow as you
            experience the most amazing places in Sri Lanka.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
            <a
              href="/programs"
              className="w-full sm:w-auto text-center px-7 py-4 rounded-full font-black text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #5E6F52, #46523D)",
                boxShadow: "0 18px 35px rgba(94,111,82,0.25)",
              }}
            >
              Explore Experiences
            </a>

            <a
              href="/booking"
              className="w-full sm:w-auto text-center px-7 py-4 rounded-full font-black text-white transition-all duration-300 hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                boxShadow: "0 18px 35px rgba(216,154,61,0.24)",
              }}
            >
              Start Your Journey
            </a>

            <a
              href="/volunteer"
              className="w-full sm:w-auto text-center border px-7 py-4 rounded-full font-black transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: "rgba(216,154,61,0.7)",
                color: COLORS.gold,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              Volunteer With Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
            {[
              ["12K+", "Travelers"],
              ["68", "Communities"],
              ["32", "Projects"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl p-4 text-center"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <p className="text-2xl font-black text-white">{number}</p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

     
    </div>
  </div>

  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center">
    <p className="text-xs tracking-[0.25em] mb-2">SCROLL TO EXPLORE</p>
    <div
      className="w-6 h-10 rounded-full mx-auto flex justify-center pt-2"
      style={{ border: "1px solid rgba(255,255,255,0.55)" }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
    </div>
  </div>
</section>

      {/* Programs - Light premium style */}
<section
  className="relative py-24 px-6 overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #F1E4D5 100%)",
  }}
>
  <div
    className="absolute inset-0 opacity-60"
    style={{
      backgroundImage:
        "radial-gradient(circle at 12% 12%, rgba(216,154,61,0.16), transparent 28%), radial-gradient(circle at 88% 18%, rgba(94,111,82,0.12), transparent 30%)",
    }}
  />

  <div className="relative max-w-6xl mx-auto">
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center mb-14">
        {/* Left title */}
        <div>
          <p
            className="script-font text-5xl"
            style={{ color: COLORS.bronze }}
          >
            Explore Our
          </p>

          <h2
            className="text-5xl md:text-6xl font-black tracking-widest leading-none mt-2"
            style={{ color: COLORS.text }}
          >
            PROGRAMS
          </h2>
        </div>

        {/* Right description */}
        <div className="flex items-center gap-6">
          <div
            className="hidden lg:block w-px h-28"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(216,154,61,0.8), transparent)",
            }}
          />

          <p
            className="text-base md:text-lg leading-relaxed max-w-xl"
            style={{ color: COLORS.muted }}
          >
            Choose from wellness, adventure, culture, volunteering and nature
            based experiences designed for purposeful travel.
          </p>
        </div>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
      {programs.map((item, i) => {
        const Icon =
          (LucideIcons as any)[item.icon] || (LucideIcons as any).Circle

        return (
          <Reveal key={i} delay={i * 45}>
            <a
              href={item.href}
              className="group min-h-[170px] rounded-3xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(247,241,232,0.9))",
                border: "1px solid rgba(216,154,61,0.20)",
                boxShadow: "0 18px 42px rgba(58,45,36,0.08)",
              }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(216,154,61,0.16), rgba(216,154,61,0.08))",
                  color: COLORS.gold,
                  border: "1px solid rgba(216,154,61,0.28)",
                }}
              >
                <Icon size={36} strokeWidth={1.8} />
              </div>

              <p
                className="font-black text-sm uppercase tracking-widest leading-snug"
                style={{ color: "#111111" }}
              >
                {item.title}
              </p>

              <p
                className="text-sm mt-2 leading-relaxed px-3"
                style={{ color: COLORS.muted }}
              >
                {item.desc}
              </p>
            </a>
          </Reveal>
        )
      })}
    </div>

    <Reveal delay={200}>
      <a
        href="/programs"
        className="mt-6 rounded-3xl p-7 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left transition-all duration-300 hover:-translate-y-2"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(247,241,232,0.86))",
          border: "1px solid rgba(216,154,61,0.24)",
          boxShadow: "0 18px 42px rgba(58,45,36,0.08)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(216,154,61,0.14)",
            color: COLORS.gold,
            border: "1px solid rgba(216,154,61,0.28)",
          }}
        >
          <LucideIcons.Globe className="h-8 w-8" />
        </div>

        <div>
          <p
            className="font-black text-base uppercase tracking-widest"
            style={{ color: "#111111" }}
          >
            Sri Lanka - Vietnam
          </p>
          <p className="text-sm mt-1" style={{ color: COLORS.muted }}>
            Cultural exchange programs
          </p>
        </div>
      </a>
    </Reveal>
  </div>
</section>

     {/* Featured Experiences - Premium Split Layout */}
<section
  className="py-24 px-6"
  style={{
    background:
      "linear-gradient(180deg, #F7F1E8 0%, #FFFDF8 45%, #F4E8DA 100%)",
  }}
>
  <div className="max-w-6xl mx-auto">
    <Reveal>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
        <div>
          <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
            Featured Experiences
          </p>

          <h2
            className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
            style={{ color: COLORS.text }}
          >
            SIGNATURE JOURNEYS
          </h2>

          <p
            className="mt-5 max-w-xl leading-relaxed"
            style={{ color: COLORS.muted }}
          >
            Discover our most meaningful retreats, adventure escapes and
            community-based journeys across Sri Lanka.
          </p>
        </div>

        <a href="/programs" className="btn-primary w-fit">
          View All Experiences
        </a>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-6">
      {/* Big featured card */}
      <Reveal>
        <a
          href="/programs"
          className="group relative min-h-[560px] rounded-[2rem] overflow-hidden block"
          style={{
            boxShadow: "0 30px 80px rgba(58,45,36,0.16)",
          }}
        >
          <img
            src={experiences[0].img}
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            alt={experiences[0].title}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          <div className="absolute top-6 left-6 flex gap-3">
            <span
              className="px-5 py-3 rounded-full text-xs font-black tracking-widest uppercase text-white"
              style={{
                background: COLORS.gold,
              }}
            >
              Bestseller
            </span>

            <span
              className="px-5 py-3 rounded-full text-xs font-black tracking-widest uppercase text-white"
              style={{
                background: "rgba(42,30,22,0.58)",
                backdropFilter: "blur(14px)",
              }}
            >
              {experiences[0].tag}
            </span>
          </div>

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span style={{ color: COLORS.gold }}>★★★★★</span>
              <span className="text-sm text-white/75">4.9 traveler rating</span>
            </div>

            <p
              className="script-font text-4xl mb-2"
              style={{ color: COLORS.gold }}
            >
              Signature Journey
            </p>

            <h3 className="text-4xl md:text-5xl font-black leading-none mb-5">
              {experiences[0].title}
            </h3>

            <div className="flex flex-wrap gap-4 text-sm text-white/80 mb-7">
              <span>📍 {experiences[0].location}</span>
              <span>⏱ {experiences[0].days}</span>
              <span>♡ Medium Impact</span>
            </div>

            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">
                  From
                </p>
                <p
                  className="text-3xl font-black"
                  style={{ color: COLORS.gold }}
                >
                  {experiences[0].price}
                </p>
              </div>

              <span
                className="w-14 h-14 rounded-full flex items-center justify-center text-white transition group-hover:translate-x-1"
                style={{ background: COLORS.olive }}
              >
                →
              </span>
            </div>
          </div>
        </a>
      </Reveal>

      {/* Small cards */}
      <div className="grid grid-cols-1 gap-6">
        {experiences.slice(1).map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <a
              href="/programs"
              className="group grid grid-cols-1 sm:grid-cols-[0.9fr_1fr] rounded-[2rem] overflow-hidden min-h-[267px] transition-all duration-300 hover:-translate-y-2"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 18px 50px rgba(58,45,36,0.09)",
              }}
            >
              <div className="relative min-h-[220px] sm:min-h-full overflow-hidden">
                <img
                  src={p.img}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  alt={p.title}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>

              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span style={{ color: COLORS.gold }}>★★★★★</span>
                </div>

                <p
                  className="text-xs font-black tracking-widest uppercase mb-3"
                  style={{ color: COLORS.gold }}
                >
                  {p.tag}
                </p>

                <h3
                  className="text-xl font-black leading-tight mb-3"
                  style={{ color: COLORS.text }}
                >
                  {p.title}
                </h3>

                <p className="text-sm mb-5" style={{ color: COLORS.muted }}>
                  {p.location} · {p.days}
                </p>

                <div className="flex items-center justify-between">
                  <p className="font-black text-lg" style={{ color: COLORS.bronze }}>
                    {p.price}
                  </p>

                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white transition group-hover:translate-x-1"
                    style={{ background: COLORS.text }}
                  >
                    →
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
</section>

     {/* Impact Numbers - Premium dark impact section */}
<section
  className="relative py-24 px-6 overflow-hidden"
  style={{
    background:
      "radial-gradient(circle at top left, rgba(216,154,61,0.18), transparent 35%), linear-gradient(135deg, #2A1E16 0%, #33251C 55%, #1C140F 100%)",
  }}
>
  <div className="relative max-w-6xl mx-auto">
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 items-end mb-12">
        <div>
          <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
            Our
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-widest leading-none text-white mt-2">
            IMPACT
          </h2>
        </div>

        <p
          className="text-base leading-relaxed max-w-xl lg:ml-auto"
          style={{ color: "rgba(255,255,255,0.68)" }}
        >
          Every booking supports local communities, nature conservation, education
          and meaningful cultural exchange across Sri Lanka.
        </p>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {[
        { end: 12450, label: "Trees Planted", icon: "TreePine" },
        { end: 8320, label: "Students Supported", icon: "GraduationCap" },
        { end: 68, label: "Villages Supported", icon: "Home" },
        { end: 45600, label: "Volunteer Hours", icon: "Clock" },
        { end: 32, label: "Projects Completed", icon: "BadgeCheck" },
      ].map((item, i) => {
        const Icon = (LucideIcons as any)[item.icon]

        return (
          <Reveal key={i} delay={i * 70}>
            <div
              className="rounded-[2rem] p-6 text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{
                  background: "rgba(216,154,61,0.14)",
                  border: "1px solid rgba(216,154,61,0.24)",
                }}
              >
                <Icon className="h-7 w-7" style={{ color: COLORS.gold }} />
              </div>

              <p className="text-3xl font-black text-white">
                <CountUp end={item.end} />
              </p>

              <p
                className="text-xs font-bold mt-2 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
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
      {/* Popular Destinations - Clean Stable Layout */}
<section
  className="py-24 px-6"
  style={{
    background: "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 100%)",
  }}
>
  <div className="max-w-6xl mx-auto">
    <Reveal>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
            Popular
          </p>

          <h2
            className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
            style={{ color: COLORS.text }}
          >
            DESTINATIONS
          </h2>

          <p className="mt-5 max-w-xl leading-relaxed" style={{ color: COLORS.muted }}>
            Discover Sri Lanka’s most meaningful places for culture, nature,
            wellness and adventure.
          </p>
        </div>

        <a href="/destinations" className="btn-primary w-fit">
          View All Destinations
        </a>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
      {destinations.map((d, i) => (
        <Reveal key={d.name} delay={i * 70}>
          <a
            href="/destinations"
            className="group relative block rounded-[2rem] overflow-hidden h-[320px] lg:h-[380px]"
            style={{
              boxShadow: "0 20px 55px rgba(58,45,36,0.12)",
            }}
          >
            <img
              src={d.img}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-black mb-2">
                {d.name}
              </h3>

              <p className="text-white/75 text-sm">
                Explore experiences →
              </p>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      {/* Premium Testimonials */}
<section
  className="py-24 px-6"
  style={{
    background:
      "linear-gradient(180deg,#FFFDF8 0%,#F4EEE3 100%)",
    borderTop: `1px solid ${COLORS.border}`,
  }}
>
  <div className="max-w-6xl mx-auto">

    <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">

      {/* Left Side */}
      <Reveal>
        <div>
          <p
            className="script-font text-5xl"
            style={{ color: COLORS.bronze }}
          >
            Traveler
          </p>

          <h2
            className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
            style={{ color: COLORS.text }}
          >
            TESTIMONIALS
          </h2>

          <p
            className="mt-6 max-w-md leading-relaxed"
            style={{ color: COLORS.muted }}
          >
            Real stories from travelers who experienced meaningful journeys,
            cultural immersion and community impact across Sri Lanka.
          </p>

          <div className="flex gap-3 mt-8">

            <button
              onClick={() =>
                setActiveTestimonial(
                  activeTestimonial === 0
                    ? testimonials.length - 1
                    : activeTestimonial - 1
                )
              }
              className="w-12 h-12 rounded-full text-white text-xl"
              style={{
                background: COLORS.text,
              }}
            >
              ←
            </button>

            <button
              onClick={() =>
                setActiveTestimonial(
                  activeTestimonial === testimonials.length - 1
                    ? 0
                    : activeTestimonial + 1
                )
              }
              className="w-12 h-12 rounded-full text-white text-xl"
              style={{
                background: COLORS.gold,
              }}
            >
              →
            </button>

          </div>
        </div>
      </Reveal>

      {/* Right Side */}
      <Reveal>

        <div
          className="rounded-[2rem] p-8 md:p-10"
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(18px)",
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 25px 70px rgba(58,45,36,0.08)",
          }}
        >

          <div className="flex gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="text-2xl"
                style={{ color: COLORS.gold }}
              >
                ★
              </span>
            ))}
          </div>

          <p
            className="text-lg md:text-xl leading-relaxed italic mb-8"
            style={{ color: COLORS.text }}
          >
            "{testimonials[activeTestimonial].review}"
          </p>

          <div className="flex items-center gap-4">

            <img
              src={testimonials[activeTestimonial].image}
              alt={testimonials[activeTestimonial].name}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>
              <h4
                className="font-black text-lg"
                style={{ color: COLORS.text }}
              >
                {testimonials[activeTestimonial].name}
              </h4>

              <p style={{ color: COLORS.muted }}>
                {testimonials[activeTestimonial].country}
              </p>
            </div>

          </div>

        </div>

      </Reveal>

    </div>

  </div>
</section>

      {/* Latest Blog - Travel Magazine Style */}
<section
  className="py-24 px-6"
  style={{
    background:
      "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #EFE2D3 100%)",
  }}
>
  <div className="max-w-6xl mx-auto">
    <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 items-end mb-14">
        <div>
          <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
            Latest From
          </p>

          <h2
            className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
            style={{ color: COLORS.text }}
          >
            OUR BLOG
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-5 lg:justify-end">
          {["Travel Stories", "Meditation"].map((cat) => (
            <span
              key={cat}
              className="px-5 py-3 rounded-full text-xs font-black tracking-widest uppercase"
              style={{
                background: COLORS.softCream,
                color: COLORS.text,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              {cat}
            </span>
          ))}

          <a href="/blog" className="btn-primary">
            View All Articles
          </a>
        </div>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6">
      <Reveal>
        <a
          href="/blog"
          className="group relative min-h-[520px] rounded-[2rem] overflow-hidden block"
          style={{
            boxShadow: "0 30px 80px rgba(58,45,36,0.14)",
          }}
        >
          <img
            src={blogPosts[0].img}
            className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            alt={blogPosts[0].title}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/25 to-transparent" />

          <div className="absolute top-6 left-6">
            <span
              className="px-5 py-3 rounded-full text-xs font-black tracking-widest uppercase text-white"
              style={{ background: COLORS.olive }}
            >
              Featured Article
            </span>
          </div>

          <div className="absolute bottom-8 left-8 right-8 text-white">
            <p
              className="text-xs font-black tracking-widest uppercase mb-4"
              style={{ color: COLORS.gold }}
            >
              {blogPosts[0].cat}
            </p>

            <h3 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              {blogPosts[0].title}
            </h3>

            <p className="text-white/70 mb-7 max-w-xl">
              Explore hidden places, meaningful experiences and local stories
              from Sri Lanka.
            </p>

            <span
              className="inline-flex items-center justify-center w-14 h-14 rounded-full text-white"
              style={{ background: COLORS.gold }}
            >
              →
            </span>
          </div>
        </a>
      </Reveal>

      <div className="grid grid-cols-1 gap-6">
        {blogPosts.slice(1).map((b, i) => (
          <Reveal key={b.title} delay={i * 100}>
            <a
              href="/blog"
              className="group grid grid-cols-1 sm:grid-cols-[0.9fr_1fr] rounded-[2rem] overflow-hidden min-h-[247px]"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
              }}
            >
              <div className="relative min-h-[220px] sm:min-h-full overflow-hidden">
                <img
                  src={b.img}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  alt={b.title}
                />
              </div>

              <div className="p-6 flex flex-col justify-center">
                <p
                  className="text-xs font-black tracking-widest uppercase mb-3"
                  style={{ color: COLORS.gold }}
                >
                  {b.cat}
                </p>

                <h3
                  className="text-xl font-black leading-tight mb-5"
                  style={{ color: COLORS.text }}
                >
                  {b.title}
                </h3>

                <p className="text-sm mb-5" style={{ color: COLORS.muted }}>
                  {b.date}
                </p>

                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                  style={{ background: COLORS.text }}
                >
                  →
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Final CTA - Premium Journey Banner */}
<section className="relative py-28 px-6 overflow-hidden">
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
        "linear-gradient(135deg, rgba(42,30,22,0.88), rgba(42,30,22,0.62))",
    }}
  />

  <Reveal>
    <div
      className="relative max-w-5xl mx-auto rounded-[2.5rem] p-8 md:p-14 text-center"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.16)",
        backdropFilter: "blur(18px)",
        boxShadow: "0 30px 90px rgba(0,0,0,0.25)",
      }}
    >
      <p className="script-font text-5xl mb-2" style={{ color: COLORS.gold }}>
        Ready to make
      </p>

      <h2 className="text-4xl md:text-6xl font-black tracking-widest mb-6 text-white">
        A DIFFERENCE?
      </h2>

      <p
        className="max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        Start your meaningful journey today and discover Sri Lanka through
        purpose, wellness and community impact.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="/booking"
          className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-black tracking-widest uppercase text-white transition hover:-translate-y-1"
          style={{
            background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
          }}
        >
          Book Your Experience
        </a>

        <a
          href="/contact"
          className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
          style={{
            color: "white",
            border: "1px solid rgba(255,255,255,0.32)",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          Talk To Us
        </a>
      </div>
    </div>
  </Reveal>
</section>
    </main>
  )
}