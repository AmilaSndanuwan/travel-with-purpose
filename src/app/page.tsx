"use client"

import CountUp from "../components/CountUp"
import Reveal from "../components/Reveal"
import * as LucideIcons from "lucide-react"

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

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: COLORS.cream }}>
      {/* Hero Section - unchanged */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right,rgba(42,30,22,0.92) 0%,rgba(42,30,22,0.65) 35%,rgba(42,30,22,0.25) 70%,rgba(42,30,22,0) 100%)",
          }}
        />

        <div
          className="relative z-10 h-full flex flex-col justify-center"
          style={{ maxWidth: "1000px", paddingLeft: "250px" }}
        >
          <p
            className="font-bold text-sm tracking-widest mb-4 uppercase"
            style={{ color: COLORS.gold }}
          >
            transform your journey through impact tourism
          </p>

          <div className="leading-none mb-6">
            <span
              className="block font-black text-white tracking-widest"
              style={{ fontSize: "clamp(5rem, 10vw, 5rem)" }}
            >
              TRAVEL WITH
            </span>

            <span
              className="block script-font"
              style={{
                color: COLORS.gold,
                fontSize: "clamp(4rem, 10vw, 9rem)",
                lineHeight: "1",
              }}
            >
              Purpose
            </span>
          </div>

          <p className="text-gray-200 text-lg mb-8 max-w-lg">
            Giving you the opportunity to give back, learn and grow as you
            experience the most amazing places in Sri Lanka.
          </p>

          <div className="flex flex-row gap-4">
            <a
              href="/programs"
              className="text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition"
              style={{
                background: "linear-gradient(135deg, #5E6F52, #46523D)",
              }}
            >
              Explore Programs
            </a>

            <a
              href="/booking"
              className="text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition"
              style={{
                background: "linear-gradient(135deg, #A66A2C, #D89A3D)",
              }}
            >
              Book Retreat
            </a>

            <a
              href="/volunteer"
              className="border-2 px-6 py-3 rounded-full font-bold hover:opacity-70 transition"
              style={{ borderColor: COLORS.gold, color: COLORS.gold }}
            >
              Volunteer Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
          <p className="text-xs tracking-widest mb-1">SCROLL</p>
          <p className="text-2xl">↓</p>
        </div>
      </section>

      {/* Explore Programs */}
      <section className="py-16 px-6" style={{ background: COLORS.softCream }}>
        <Reveal>
          <div className="text-center mb-10">
            <p
              className="script-font text-3xl"
              style={{ color: COLORS.bronze }}
            >
              Explore Our
            </p>
            <h2
              className="text-3xl md:text-4xl font-black tracking-widest"
              style={{ color: COLORS.text }}
            >
              PROGRAMS
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {[
            { icon: "Moon", title: "Meditation", href: "/programs" },
            { icon: "Heart", title: "Yoga & Wellness", href: "/wellness" },
            { icon: "Compass", title: "Adventure", href: "/programs" },
            { icon: "Globe", title: "Cultural Tours", href: "/programs" },
            { icon: "Users", title: "Volunteer", href: "/volunteer" },
            { icon: "Leaf", title: "Eco Tourism", href: "/programs" },
            { icon: "Camera", title: "Wildlife Safari", href: "/programs" },
            { icon: "BookOpen", title: "Agriculture", href: "/programs" },
            { icon: "Tent", title: "Youth Camps", href: "/programs" },
            { icon: "MapPin", title: "Monastery Stay", href: "/programs" },
          ].map((item, i) => {
            const Icon = (LucideIcons as any)[item.icon] || (LucideIcons as any).Circle
            return (
              <Reveal key={i} delay={i * 50}>
                <a
                  href={item.href}
                  className="group h-32 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 10px 30px rgba(58,45,36,0.06)",
                  }}
                >
                  <div className="mb-3 group-hover:scale-110 transition">
                    <Icon size={28} color={COLORS.olive} />
                  </div>
                  <p
                    className="font-black text-xs uppercase tracking-widest"
                    style={{ color: COLORS.text }}
                  >
                    {item.title}
                  </p>
                </a>
              </Reveal>
            )
          })}
        </div>

        <div className="max-w-6xl mx-auto mt-4">
          <a
            href="/programs"
            className="group h-24 rounded-xl flex items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1"
            style={{
              background: COLORS.cream,
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 10px 30px rgba(58,45,36,0.06)",
            }}
          >
            <span className="text-3xl">🌏</span>
            <div>
              <p
                className="font-black text-xs uppercase tracking-widest"
                style={{ color: COLORS.text }}
              >
                Sri Lanka - Vietnam
              </p>
              <p className="text-xs" style={{ color: COLORS.muted }}>
                Cultural exchange programs
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p
                  className="script-font text-3xl"
                  style={{ color: COLORS.bronze }}
                >
                  Featured
                </p>
                <h2
                  className="text-3xl md:text-4xl font-black tracking-widest"
                  style={{ color: COLORS.text }}
                >
                  EXPERIENCES
                </h2>
              </div>

              <a
                href="/programs"
                className="text-xs font-bold tracking-widest"
                style={{ color: COLORS.bronze }}
              >
                View All Programs →
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "7-Day Silent Retreat",
                location: "Kandy",
                days: "7 Days",
                price: "$450",
                img: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600",
              },
              {
                title: "Knuckles Hiking",
                location: "Kandy",
                days: "2 Days",
                price: "$380",
                img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600",
              },
              {
                title: "Village Homestay",
                location: "Udawalawe",
                days: "3 Days",
                price: "$250",
                img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600",
              },
              {
                title: "Elephant Safari",
                location: "Udawalawe",
                days: "1 Day",
                price: "$120",
                img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=600",
              },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: COLORS.softCream,
                    border: `1px solid ${COLORS.border}`,
                    boxShadow: "0 14px 35px rgba(58,45,36,0.08)",
                  }}
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={p.img}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h3
                      className="font-black text-sm mb-2"
                      style={{ color: COLORS.text }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs mb-1" style={{ color: COLORS.muted }}>
                      {p.location}, Sri Lanka
                    </p>
                    <p className="text-xs mb-4" style={{ color: COLORS.muted }}>
                      ⏱ {p.days} · ♡ Medium Impact
                    </p>
                    <p
                      className="font-black text-xl mb-4"
                      style={{ color: COLORS.bronze }}
                    >
                      {p.price}
                    </p>
                    <a
                      href="/programs"
                      className="block text-center py-3 rounded-md text-xs font-bold"
                      style={{ background: COLORS.text, color: "white" }}
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-12 px-6" style={{ background: COLORS.softCream }}>
        <Reveal>
          <h2
            className="text-center font-black tracking-widest mb-8"
            style={{ color: COLORS.text }}
          >
            OUR IMPACT IN NUMBERS
          </h2>
        </Reveal>

        <div
          className="grid grid-cols-2 md:grid-cols-5 max-w-6xl mx-auto rounded-xl overflow-hidden"
          style={{ border: `1px solid ${COLORS.border}` }}
        >
          {[
            { end: 12450, label: "Trees Planted" },
            { end: 8320, label: "Students Supported" },
            { end: 68, label: "Villages Supported" },
            { end: 45600, label: "Volunteer Hours" },
            { end: 32, label: "Projects Completed" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <div
                className="p-8 text-center"
                style={{
                  background: COLORS.cream,
                  borderRight: `1px solid ${COLORS.border}`,
                }}
              >
                <p
                  className="text-3xl font-black"
                  style={{ color: COLORS.text }}
                >
                  <CountUp end={item.end} />
                </p>
                <p
                  className="text-xs font-bold mt-2"
                  style={{ color: COLORS.muted }}
                >
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p
                  className="script-font text-3xl"
                  style={{ color: COLORS.bronze }}
                >
                  Popular
                </p>
                <h2
                  className="text-3xl md:text-4xl font-black tracking-widest"
                  style={{ color: COLORS.text }}
                >
                  DESTINATIONS
                </h2>
              </div>

              <a
                href="/destinations"
                className="text-xs font-bold tracking-widest"
                style={{ color: COLORS.bronze }}
              >
                View All Destinations →
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {[
              {
                name: "Kandy",
                img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500",
              },
              {
                name: "Ella",
                img: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=500",
              },
              {
                name: "Sigiriya",
                img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500",
              },
              {
                name: "Galle",
                img: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=500",
              },
              {
                name: "Nuwara Eliya",
                img: "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=500",
              },
            ].map((d, i) => (
              <Reveal key={i} delay={i * 70}>
                <a
                  href="/destinations"
                  className="block rounded-xl overflow-hidden group"
                  style={{
                    background: COLORS.softCream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={d.img}
                      className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <p
                    className="text-center py-4 text-sm font-black"
                    style={{ color: COLORS.text }}
                  >
                    {d.name}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler Testimonials */}
      <section className="py-16 px-6" style={{ background: COLORS.softCream }}>
        <Reveal>
          <div className="text-center mb-8">
            <p
              className="script-font text-3xl"
              style={{ color: COLORS.bronze }}
            >
              Traveler
            </p>
            <h2
              className="text-3xl md:text-4xl font-black tracking-widest"
              style={{ color: COLORS.text }}
            >
              TESTIMONIALS
            </h2>
          </div>
        </Reveal>

        <div
          className="max-w-4xl mx-auto rounded-xl p-10 text-center"
          style={{
            background: COLORS.cream,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <p
            className="text-lg italic leading-relaxed mb-6"
            style={{ color: COLORS.text }}
          >
            “This journey changed my life. The people, the culture, and the
            impact we created together will stay with me forever.”
          </p>
          <p className="font-black" style={{ color: COLORS.text }}>
            Sarah J.
          </p>
          <p className="text-sm" style={{ color: COLORS.muted }}>
            Australia
          </p>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-16 px-6" style={{ background: COLORS.cream }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p
                  className="script-font text-3xl"
                  style={{ color: COLORS.bronze }}
                >
                  Latest From
                </p>
                <h2
                  className="text-3xl md:text-4xl font-black tracking-widest"
                  style={{ color: COLORS.text }}
                >
                  OUR BLOG
                </h2>
              </div>

              <a
                href="/blog"
                className="text-xs font-bold tracking-widest"
                style={{ color: COLORS.bronze }}
              >
                View All Articles →
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "10 Hidden Places You Must Visit in Sri Lanka",
                date: "May 10, 2024",
                img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500",
              },
              {
                title: "How Meditation Retreats Can Transform Your Mind",
                date: "May 5, 2024",
                img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500",
              },
              {
                title: "Volunteer Abroad: Stories That Inspire",
                date: "Apr 28, 2024",
                img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500",
              },
              {
                title: "A Complete Guide to Ayurveda in Sri Lanka",
                date: "Apr 20, 2024",
                img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500",
              },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 70}>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: COLORS.softCream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={b.img}
                      className="w-full h-full object-cover hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h3
                      className="font-black text-sm leading-snug"
                      style={{ color: COLORS.text }}
                    >
                      {b.title}
                    </h3>
                    <p className="text-xs mt-3" style={{ color: COLORS.muted }}>
                      {b.date}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ready CTA */}
      <section
        className="py-12 px-6 text-center"
        style={{
          background: COLORS.softCream,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <Reveal>
          <h2
            className="text-2xl md:text-3xl font-black tracking-widest mb-3"
            style={{ color: COLORS.text }}
          >
            READY TO MAKE A DIFFERENCE?
          </h2>

          <p className="mb-6" style={{ color: COLORS.muted }}>
            Start your meaningful journey today!
          </p>

          <a
            href="/booking"
            className="inline-block px-8 py-4 rounded-md text-sm font-black tracking-widest text-white"
            style={{ background: COLORS.text }}
          >
            Book Your Experience
          </a>
        </Reveal>
      </section>
    </main>
  )
}