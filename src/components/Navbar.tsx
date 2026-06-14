"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import {
  BookOpen,
  Camera,
  HeartHandshake,
  Leaf,
  Menu,
  Mountain,
  Palmtree,
  Sparkles,
  X,
} from "lucide-react"

const COLORS = {
  gold: "#D89A3D",
  bronze: "#A66A2C",
  dark: "#2A1E16",
  cream: "#F7F1E8",
  softCream: "#FFFDF8",
  text: "#3A2D24",
  muted: "#7B6B5F",
}

const programLinks = [
  { title: "Meditation", desc: "Temple stays & silent retreats", href: "/programs", icon: Leaf },
  { title: "Adventure", desc: "Hiking, camping & nature trips", href: "/programs", icon: Mountain },
  { title: "Yoga & Wellness", desc: "Ayurveda, detox & healing", href: "/wellness", icon: Sparkles },
  { title: "Volunteer", desc: "Community impact projects", href: "/volunteer", icon: HeartHandshake },
  { title: "Culture", desc: "Village life & heritage tours", href: "/programs", icon: BookOpen },
  { title: "Wildlife", desc: "Safari & eco experiences", href: "/programs", icon: Palmtree },
]

const mainLinks = [
  { title: "Home", href: "/" },
  { title: "Destinations", href: "/destinations" },
  { title: "Wellness", href: "/wellness" },
  { title: "Gallery", href: "/gallery" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [programOpen, setProgramOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const navText = scrolled ? COLORS.text : "#ffffff"

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full transition-all duration-300"
        style={{
          zIndex: 9999,
          background: scrolled
            ? "rgba(255,253,248,0.94)"
            : "rgba(42,30,22,0.14)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(58,45,36,0.10)"
            : "1px solid rgba(255,255,255,0.10)",
          boxShadow: scrolled ? "0 12px 35px rgba(58,45,36,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="h-24 flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: scrolled
                    ? `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.text})`
                    : "rgba(255,255,255,0.14)",
                  border: scrolled
                    ? "1px solid rgba(216,154,61,0.30)"
                    : "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <Palmtree
                  className="w-5 h-5"
                  style={{ color: scrolled ? "#fff" : COLORS.gold }}
                />
              </div>

              <div className="leading-tight">
                <p
                className="font-black text-base md:text-lg tracking-[0.18em] uppercase"
                  style={{ color: navText }}
                >
                  Travel With
                </p>
                <p
                  className="script-font text-xl -mt-1"
                  style={{ color: COLORS.gold }}
                >
                  Purpose
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              <Link
                href="/"
                className="text-sm font-bold tracking-wide transition hover:opacity-70"
                style={{ color: navText }}
              >
                Home
              </Link>

              {/* Programs Dropdown */}
              <div
                className="relative py-6  -my-8"
                onMouseEnter={() => setProgramOpen(true)}
                onMouseLeave={() => setProgramOpen(false)}
              >
                <button
                  className="text-sm font-bold tracking-wide flex items-center gap-1 transition hover:opacity-70"
                  style={{ color: navText }}
                  type="button"
                >
                  Programs ▾
                </button>

                {programOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                    <div
                      className="w-[680px] rounded-3xl p-5 grid grid-cols-2 gap-3"
                      style={{
                        background: "rgba(42,30,22,0.45)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        boxShadow: "0 25px 80px rgba(0,0,0,0.28)",
                      }}
                    >
                      {programLinks.map((item) => {
                        const Icon = item.icon

                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="flex gap-4 p-4 rounded-2xl transition hover:-translate-y-0.5"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              backdropFilter: "blur(12px)",
                              WebkitBackdropFilter: "blur(12px)",
                            }}
                          >
                            <div
                              className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                              style={{
                                background: "rgba(216,154,61,0.15)",
                                border: "1px solid rgba(216,154,61,0.25)",
                                color: COLORS.gold,
                              }}
                            >
                              <Icon className="w-5 h-5" />
                            </div>

                            <div>
                              <p className="font-black text-sm text-white">
                                {item.title}
                              </p>
                              <p
                                className="text-xs mt-1 leading-relaxed"
                                style={{ color: "rgba(255,255,255,0.75)" }}
                              >
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {mainLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold tracking-wide transition hover:opacity-70"
                  style={{ color: navText }}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="/booking"
              className="hidden lg:inline-flex px-6 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase transition hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                boxShadow: "0 12px 24px rgba(166,106,44,0.25)",
              }}
            >
              Book Now
            </Link>

            {/* Mobile Button */}
            <button
              className="lg:hidden w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                color: navText,
                border: scrolled
                  ? "1px solid rgba(58,45,36,0.12)"
                  : "1px solid rgba(255,255,255,0.25)",
                background: scrolled
                  ? "rgba(255,255,255,0.6)"
                  : "rgba(255,255,255,0.12)",
              }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 lg:hidden" style={{ zIndex: 99999 }}>
          <div
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
          />

          <div
            className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto p-6"
            style={{
              background: COLORS.softCream,
              boxShadow: "-20px 0 60px rgba(42,30,22,0.25)",
            }}
          >
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  <Palmtree className="w-5 h-5 text-white" />
                </div>

                <div className="leading-tight">
                  <p
                    className="font-black text-sm tracking-[0.12em] uppercase"
                    style={{ color: COLORS.text }}
                  >
                    Travel With
                  </p>
                  <p
                    className="script-font text-xl -mt-1"
                    style={{ color: COLORS.gold }}
                  >
                    Purpose
                  </p>
                </div>
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  color: COLORS.text,
                  border: "1px solid rgba(58,45,36,0.12)",
                }}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-2xl font-bold text-sm"
                  style={{
                    color: COLORS.text,
                    background: "rgba(247,241,232,0.85)",
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <p
                className="text-xs font-black tracking-widest uppercase mb-3"
                style={{ color: COLORS.bronze }}
              >
                Programs
              </p>

              <div className="grid grid-cols-1 gap-2">
                {programLinks.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                      style={{ background: "rgba(247,241,232,0.85)" }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: COLORS.bronze }}
                      />
                      <span
                        className="text-sm font-bold"
                        style={{ color: COLORS.text }}
                      >
                        {item.title}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>

            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-8 flex items-center justify-center w-full px-6 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase"
              style={{
                background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
              }}
            >
              Book Now
            </Link>

            <div
              className="mt-8 rounded-3xl p-5"
              style={{
                background: COLORS.cream,
                border: "1px solid rgba(58,45,36,0.10)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Camera
                  className="w-5 h-5"
                  style={{ color: COLORS.bronze }}
                />
                <p
                  className="font-black text-sm"
                  style={{ color: COLORS.text }}
                >
                  Start your meaningful journey
                </p>
              </div>

              <p
                className="text-sm leading-relaxed"
                style={{ color: COLORS.muted }}
              >
                Explore Sri Lanka through wellness, culture, nature and
                community impact.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}