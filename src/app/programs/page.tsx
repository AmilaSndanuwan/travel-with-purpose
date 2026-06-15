"use client"

import { useMemo, useState, useEffect} from "react"
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Camera,
  Clock,
  Frown,
  Globe2,
  Heart,
  Leaf,
  MapPin,
  Mountain,
  Search,
  SlidersHorizontal,
  Sparkles,
  Sprout,
  Star,
  Users,
  Wallet,
  X,
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
    id: 1,
    category: "Meditation",
    title: "Temple Stay Experience",
    location: "Kandy, Sri Lanka",
    days: 3,
    price: 180,
    impact: "High Impact",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900",
    desc: "Experience peaceful temple living, guided mindfulness and Buddhist cultural practices.",
  },
  {
    id: 2,
    category: "Adventure",
    title: "Surf & Yoga Package",
    location: "Weligama, Sri Lanka",
    days: 7,
    price: 550,
    impact: "Medium Impact",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900",
    desc: "Balance ocean adventure with daily yoga sessions and coastal wellness experiences.",
  },
  {
    id: 3,
    category: "Agriculture",
    title: "Organic Farming Program",
    location: "Haputale, Sri Lanka",
    days: 5,
    price: 320,
    impact: "Community Impact",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=900",
    desc: "Learn organic farming, tea culture and sustainable village living in Sri Lanka.",
  },
  {
    id: 4,
    category: "Meditation",
    title: "Buddhist Mindfulness Journey",
    location: "Kandy, Sri Lanka",
    days: 7,
    price: 420,
    impact: "High Impact",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900",
    desc: "A deeper mindfulness journey through meditation, silence and spiritual reflection.",
  },
  {
    id: 5,
    category: "Wildlife",
    title: "Wildlife Safari Adventure",
    location: "Udawalawe, Sri Lanka",
    days: 1,
    price: 120,
    impact: "Eco Impact",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900",
    desc: "Explore elephant habitats and wildlife conservation areas with local nature guides.",
  },
  {
    id: 6,
    category: "Cultural",
    title: "Traditional Cooking Class",
    location: "Galle, Sri Lanka",
    days: 1,
    price: 75,
    impact: "Cultural Impact",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900",
    desc: "Cook authentic Sri Lankan meals with local families and discover cultural food stories.",
  },
  {
    id: 7,
    category: "Volunteer",
    title: "Community Teaching Program",
    location: "Kandy, Sri Lanka",
    days: 14,
    price: 680,
    impact: "High Impact",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900",
    desc: "Support local education through English practice, youth activities and cultural exchange.",
  },
  {
    id: 8,
    category: "Wellness",
    title: "Ayurveda Healing Retreat",
    location: "Bentota, Sri Lanka",
    days: 5,
    price: 480,
    impact: "Wellness Impact",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900",
    desc: "Relax with Ayurveda treatments, nature healing, yoga and mindful recovery practices.",
  },
]

const categories = [
  { name: "All", icon: Globe2 },
  { name: "Meditation", icon: Leaf },
  { name: "Adventure", icon: Mountain },
  { name: "Agriculture", icon: Sprout },
  { name: "Wildlife", icon: Camera },
  { name: "Cultural", icon: BookOpen },
  { name: "Volunteer", icon: Users },
  { name: "Wellness", icon: Sparkles },
]

export default function Programs() {
  const [category, setCategory] = useState("All")
  useEffect(() => {
  const applyHashCategory = () => {
    const hash = decodeURIComponent(
      window.location.hash.replace("#", "")
    ).toLowerCase()

    const categoryMap: Record<string, string> = {
      all: "All",
      meditation: "Meditation",
      adventure: "Adventure",
      culture: "Culture",
      cultural: "Culture",
      wildlife: "Wildlife",
    }

    const nextCategory = categoryMap[hash]

    if (nextCategory) {
      setCategory(nextCategory)

      setTimeout(() => {
        document
          .getElementById("program-list")
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }
  }

  applyHashCategory()
  window.addEventListener("hashchange", applyHashCategory)

  return () => window.removeEventListener("hashchange", applyHashCategory)
}, [])
  const [maxPrice, setMaxPrice] = useState(1000)
  const [maxDays, setMaxDays] = useState(30)
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    return programs.filter((program) => {
      const categoryMatch =
        category === "All" || program.category === category

      const priceMatch = program.price <= maxPrice
      const daysMatch = program.days <= maxDays

      const searchMatch =
        program.title.toLowerCase().includes(search.toLowerCase()) ||
        program.location.toLowerCase().includes(search.toLowerCase()) ||
        program.category.toLowerCase().includes(search.toLowerCase())

      return categoryMatch && priceMatch && daysMatch && searchMatch
    })
  }, [category, maxPrice, maxDays, search])

  const resetFilters = () => {
    setCategory("All")
    setMaxPrice(1000)
    setMaxDays(30)
    setSearch("")
  }

  return (
    <main style={{ background: COLORS.cream, color: COLORS.text }}>
      {/* Hero */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden px-6 pt-28 pb-20">
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
              "linear-gradient(90deg, rgba(42,30,22,0.84) 0%, rgba(42,30,22,0.62) 45%, rgba(42,30,22,0.28) 100%)",
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
                Purposeful travel programs
              </p>
            </div>

            <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
              Explore Our
            </p>

            <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
              PROGRAMS
            </h1>

            <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
              Discover meaningful Sri Lanka travel experiences through
              meditation, adventure, culture, volunteering, wildlife, wellness
              and community impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#program-list"
                className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                }}
              >
                Browse Programs
              </a>

              <a
                href="/contact"
                className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(255,255,255,0.32)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(14px)",
                }}
              >
                Ask For Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section
        id="program-list"
        className="relative py-20 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 50%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top filter bar */}
<div
  className="rounded-[2rem] p-5 md:p-6 mb-8"
  style={{
    background: "rgba(255,255,255,0.82)",
    border: `1px solid ${COLORS.border}`,
    boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
    backdropFilter: "blur(18px)",
  }}
>
  {/* Search input */}
  <div className="relative mb-5">
    <Search
      className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5"
      style={{ color: COLORS.muted }}
    />

    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search programs, locations, categories..."
      className="w-full rounded-full py-4 pl-14 pr-5 outline-none text-sm"
      style={{
        background: COLORS.softCream,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.text,
        minHeight: "56px",
      }}
    />
  </div>

  {/* Category buttons */}
  <div className="flex flex-wrap gap-3">
    {categories.map((cat) => {
      const Icon = cat.icon
      const active = category === cat.name

      return (
        <button
          key={cat.name}
          onClick={() => setCategory(cat.name)}
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-black uppercase tracking-widest transition hover:-translate-y-0.5"
          style={{
            background: active
              ? `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`
              : COLORS.softCream,
            color: active ? "white" : COLORS.text,
            border: active
              ? "1px solid transparent"
              : `1px solid ${COLORS.border}`,
          }}
        >
          <Icon className="w-4 h-4" />
          {cat.name}
        </button>
      )
    })}
  </div>
</div>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            {/* Sidebar */}
            <aside
              className="lg:sticky lg:top-28 h-fit rounded-[2rem] p-6"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 18px 45px rgba(58,45,36,0.08)",
              }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(216,154,61,0.15)",
                    color: COLORS.gold,
                  }}
                >
                  <SlidersHorizontal className="w-5 h-5" />
                </div>

                <div>
                  <h2 className="font-black text-lg" style={{ color: COLORS.text }}>
                    Filter Programs
                  </h2>
                  <p className="text-sm" style={{ color: COLORS.muted }}>
                    Find your ideal journey
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className="font-black text-sm uppercase tracking-widest"
                      style={{ color: COLORS.text }}
                    >
                      Max Price
                    </h3>

                    <span
                      className="text-sm font-black"
                      style={{ color: COLORS.bronze }}
                    >
                      ${maxPrice}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={50}
                    max={1000}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#D89A3D]"
                  />

                  <div className="flex justify-between text-xs mt-2" style={{ color: COLORS.muted }}>
                    <span>$50</span>
                    <span>$1000</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className="font-black text-sm uppercase tracking-widest"
                      style={{ color: COLORS.text }}
                    >
                      Duration
                    </h3>

                    <span
                      className="text-sm font-black"
                      style={{ color: COLORS.bronze }}
                    >
                      {maxDays} Days
                    </span>
                  </div>

                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={maxDays}
                    onChange={(e) => setMaxDays(Number(e.target.value))}
                    className="w-full accent-[#D89A3D]"
                  />

                  <div className="flex justify-between text-xs mt-2" style={{ color: COLORS.muted }}>
                    <span>1 Day</span>
                    <span>30 Days</span>
                  </div>
                </div>

                <div
                  className="rounded-3xl p-5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(216,154,61,0.14), rgba(94,111,82,0.10))",
                    border: "1px solid rgba(216,154,61,0.20)",
                  }}
                >
                  <p
                    className="text-xs font-black tracking-widest uppercase mb-2"
                    style={{ color: COLORS.bronze }}
                  >
                    Results
                  </p>

                  <p className="text-3xl font-black" style={{ color: COLORS.text }}>
                    {filtered.length}
                  </p>

                  <p className="text-sm mt-1" style={{ color: COLORS.muted }}>
                    Programs matched your filters
                  </p>
                </div>

                <button
                  onClick={resetFilters}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: COLORS.text,
                    color: "white",
                  }}
                >
                  <X className="w-4 h-4" />
                  Reset Filters
                </button>
              </div>
            </aside>

            {/* Programs Grid */}
            <section>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <p className="script-font text-4xl" style={{ color: COLORS.bronze }}>
                    All Programs
                  </p>

                  <h2
                    className="text-3xl md:text-5xl font-black tracking-widest leading-none mt-2"
                    style={{ color: COLORS.text }}
                  >
                    SELECT YOUR JOURNEY
                  </h2>
                </div>

                <p className="text-sm" style={{ color: COLORS.muted }}>
                  Showing {filtered.length} of {programs.length} programs
                </p>
              </div>

              {filtered.length === 0 ? (
                <div
                  className="text-center py-24 rounded-[2rem]"
                  style={{
                    background: COLORS.softCream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <Frown
                    className="mx-auto mb-4 h-14 w-14"
                    style={{ color: COLORS.gold }}
                  />

                  <h3
                    className="font-black text-2xl mb-2"
                    style={{ color: COLORS.text }}
                  >
                    No programs found
                  </h3>

                  <p style={{ color: COLORS.muted }}>
                    Try adjusting your filters or search keyword.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                  {filtered.map((program) => (
                    <article
                      key={program.id}
                      className="group rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2"
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

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                        <div className="absolute top-5 left-5">
                          <span
                            className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
                            style={{
                              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                            }}
                          >
                            {program.category}
                          </span>
                        </div>

                        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                          <div className="flex items-center gap-1 text-white">
                            <Star
                              className="w-4 h-4"
                              fill={COLORS.gold}
                              style={{ color: COLORS.gold }}
                            />
                            <span className="text-sm font-black">
                              {program.rating}
                            </span>
                          </div>

                          <span className="text-xs text-white/80">
                            {program.impact}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3
                          className="text-xl font-black leading-tight mb-3"
                          style={{ color: COLORS.text }}
                        >
                          {program.title}
                        </h3>

                        <p
                          className="text-sm leading-relaxed mb-5"
                          style={{ color: COLORS.muted }}
                        >
                          {program.desc}
                        </p>

                        <div className="space-y-3 mb-6">
                          <p
                            className="flex items-center gap-2 text-sm"
                            style={{ color: COLORS.muted }}
                          >
                            <MapPin className="w-4 h-4" style={{ color: COLORS.gold }} />
                            {program.location}
                          </p>

                          <p
                            className="flex items-center gap-2 text-sm"
                            style={{ color: COLORS.muted }}
                          >
                            <Clock className="w-4 h-4" style={{ color: COLORS.gold }} />
                            {program.days} {program.days === 1 ? "Day" : "Days"}
                          </p>

                          <p
                            className="flex items-center gap-2 text-sm"
                            style={{ color: COLORS.muted }}
                          >
                            <CalendarDays
                              className="w-4 h-4"
                              style={{ color: COLORS.gold }}
                            />
                            Flexible schedule
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p
                              className="text-xs uppercase tracking-widest font-black"
                              style={{ color: COLORS.muted }}
                            >
                              From
                            </p>

                            <p
                              className="text-2xl font-black"
                              style={{ color: COLORS.bronze }}
                            >
                              ${program.price}
                            </p>
                          </div>

                          <a
                            href="/booking"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase transition group-hover:translate-x-1"
                            style={{
                              background: COLORS.text,
                            }}
                          >
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
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
            Need help choosing?
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white mt-2">
            BUILD YOUR OWN JOURNEY
          </h2>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Tell us your travel goals and we will help you choose the perfect
            purpose-driven experience in Sri Lanka.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
            }}
          >
            Contact Us
            <Wallet className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  )
}