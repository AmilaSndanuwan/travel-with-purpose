"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Reveal from "../../../components/Reveal"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Frown,
  MapPin,
  Mountain,
  Navigation,
  ShieldCheck,
  Sparkles,
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

type Destination = {
  id: number
  title: string
  slug: string
  location: string
  region: string
  description: string
  bestTime: string
  imageUrl: string
  highlights: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

const splitHighlights = (highlights: string) => {
  return highlights
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

export default function DestinationDetailsPage() {
  const params = useParams()
  const slug = String(params?.slug || "")

  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadDestinations = async () => {
      setLoading(true)
      setError("")

      try {
        const response = await fetch("/api/destinations", {
          cache: "no-store",
        })

        const result = await response.json()

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to load destination")
        }

        setDestinations(result.data || [])
      } catch (err) {
        console.error(err)
        setError("Destination details load කරන්න බැරි වුණා. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    loadDestinations()
  }, [])

  const destination = useMemo(() => {
    return destinations.find((item) => item.slug === slug) || null
  }, [destinations, slug])

  if (loading) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: COLORS.cream, color: COLORS.text }}
      >
        <div className="text-center">
          <Sparkles
            className="w-14 h-14 mx-auto mb-5 animate-pulse"
            style={{ color: COLORS.gold }}
          />

          <h1 className="text-3xl font-black tracking-widest uppercase">
            Loading Destination...
          </h1>

          <p className="mt-3" style={{ color: COLORS.muted }}>
            Please wait while we load the latest CMS data.
          </p>
        </div>
      </main>
    )
  }

  if (error || !destination) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: COLORS.cream, color: COLORS.text }}
      >
        <div
          className="max-w-xl text-center rounded-[2rem] p-10"
          style={{
            background: COLORS.softCream,
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
          }}
        >
          <Frown
            className="w-14 h-14 mx-auto mb-5"
            style={{ color: COLORS.gold }}
          />

          <h1 className="text-3xl font-black tracking-widest uppercase">
            Destination Not Found
          </h1>

          <p className="mt-4 leading-relaxed" style={{ color: COLORS.muted }}>
            {error || "This destination may be removed or inactive."}
          </p>

          <Link
            href="/destinations"
            className="mt-8 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Destinations
          </Link>
        </div>
      </main>
    )
  }

    return (
    <main style={{ background: COLORS.cream, color: COLORS.text }}>
      {/* Hero */}
      <section className="relative min-h-[78vh] flex items-end overflow-hidden px-6 pt-32 pb-16">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${destination.imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(42,30,22,0.88) 0%, rgba(42,30,22,0.65) 48%, rgba(42,30,22,0.25) 100%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 25%, rgba(216,154,61,0.45), transparent 28%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto w-full">
          <Reveal>
            <div className="max-w-4xl">
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest mb-7 text-white/80 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Destinations
              </Link>

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
                  Destination Details
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Explore
              </p>

              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                {destination.title}
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                {destination.description}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center gap-3 px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  Plan This Trip
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.32)",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  View Programs
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Details */}
      <section
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <Reveal>
              <div
                className="rounded-[2rem] p-6 md:p-8"
                style={{
                  background: COLORS.softCream,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
                }}
              >
                <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
                  Overview
                </p>

                <h2
                  className="text-3xl md:text-5xl font-black tracking-widest uppercase mt-2"
                  style={{ color: COLORS.text }}
                >
                  ABOUT {destination.title}
                </h2>

                <p
                  className="mt-6 text-base md:text-lg leading-relaxed"
                  style={{ color: COLORS.muted }}
                >
                  {destination.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div
                className="rounded-[2rem] p-6 md:p-8"
                style={{
                  background: COLORS.softCream,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
                }}
              >
                <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
                  Highlights
                </p>

                <h2
                  className="text-3xl md:text-5xl font-black tracking-widest uppercase mt-2"
                  style={{ color: COLORS.text }}
                >
                  THINGS TO EXPERIENCE
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {splitHighlights(destination.highlights).map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl p-5 flex items-center gap-3"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <CheckCircle2
                        className="w-5 h-5 shrink-0"
                        style={{ color: COLORS.gold }}
                      />

                      <p className="font-bold" style={{ color: COLORS.text }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

                    {/* Right Info Card */}
          <Reveal delay={160}>
            <aside
              className="lg:sticky lg:top-28 rounded-[2rem] overflow-hidden"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 25px 70px rgba(58,45,36,0.10)",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.imageUrl}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p
                    className="text-xs font-black uppercase tracking-widest mb-2"
                    style={{ color: COLORS.gold }}
                  >
                    {destination.region}
                  </p>

                  <h3 className="text-2xl font-black">
                    {destination.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div
                    className="rounded-2xl p-4 flex gap-3"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <MapPin
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: COLORS.gold }}
                    />

                    <div>
                      <p
                        className="text-xs font-black uppercase tracking-widest"
                        style={{ color: COLORS.muted }}
                      >
                        Location
                      </p>

                      <p className="font-black text-sm" style={{ color: COLORS.text }}>
                        {destination.location}
                      </p>
                    </div>
                  </div>

                  <div
                    className="rounded-2xl p-4 flex gap-3"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <Mountain
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: COLORS.gold }}
                    />

                    <div>
                      <p
                        className="text-xs font-black uppercase tracking-widest"
                        style={{ color: COLORS.muted }}
                      >
                        Region
                      </p>

                      <p className="font-black text-sm" style={{ color: COLORS.text }}>
                        {destination.region}
                      </p>
                    </div>
                  </div>

                  <div
                    className="rounded-2xl p-4 flex gap-3"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <CalendarDays
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: COLORS.gold }}
                    />

                    <div>
                      <p
                        className="text-xs font-black uppercase tracking-widest"
                        style={{ color: COLORS.muted }}
                      >
                        Best Time
                      </p>

                      <p className="font-black text-sm" style={{ color: COLORS.text }}>
                        {destination.bestTime}
                      </p>
                    </div>
                  </div>

                  <div
                    className="rounded-2xl p-4 flex gap-3"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <Compass
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: COLORS.gold }}
                    />

                    <div>
                      <p
                        className="text-xs font-black uppercase tracking-widest"
                        style={{ color: COLORS.muted }}
                      >
                        Travel Type
                      </p>

                      <p className="font-black text-sm" style={{ color: COLORS.text }}>
                        Purposeful Travel
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  Plan This Trip
                  <Navigation className="w-4 h-4" />
                </Link>

                <Link
                  href="/destinations"
                  className="mt-3 w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: COLORS.text,
                    color: "white",
                  }}
                >
                  Back to Destinations
                  <ArrowLeft className="w-4 h-4" />
                </Link>

                <div
                  className="mt-6 rounded-2xl p-4 flex gap-3"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <ShieldCheck
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: COLORS.gold }}
                  />

                  <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                    Our team can help you plan programs, stays and local
                    experiences around this destination.
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </main>
  )
}

