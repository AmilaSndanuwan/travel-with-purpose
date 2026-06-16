"use client"

import { useState } from "react"
import Reveal from "../../components/Reveal"
import {
  ArrowRight,
  Building2,
  Camera,
  Compass,
  Hotel,
  Landmark,
  Leaf,
  MapPin,
  Mountain,
  Navigation,
  Sparkles,
  Star,
  Tent,
  TreePine,
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

const destinations = [
  {
    name: "Kandy",
    region: "Central Highlands",
    desc: "Cultural capital of Sri Lanka, home to the Temple of the Tooth Relic and peaceful mountain retreats.",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1000",
    experiences: 25,
    bestFor: "Culture & Retreats",
    icon: Landmark,
    highlights: ["Temple Visits", "Meditation", "Cultural Walks"],
  },
  {
    name: "Sigiriya",
    region: "Cultural Triangle",
    desc: "Ancient rock fortress surrounded by jungle, village life and unforgettable sunrise viewpoints.",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1000",
    experiences: 18,
    bestFor: "History & Adventure",
    icon: Mountain,
    highlights: ["Rock Fortress", "Village Tours", "Nature Trails"],
  },
  {
    name: "Ella",
    region: "Hill Country",
    desc: "A scenic mountain village known for tea estates, hiking trails, waterfalls and slow travel experiences.",
    image:
      "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=1000",
    experiences: 22,
    bestFor: "Hiking & Nature",
    icon: TreePine,
    highlights: ["Nine Arch Bridge", "Tea Trails", "Waterfalls"],
  },
  {
    name: "Nuwara Eliya",
    region: "Tea Country",
    desc: "Cool climate, colonial charm and beautiful tea plantations surrounded by misty mountain scenery.",
    image:
      "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=1000",
    experiences: 14,
    bestFor: "Tea & Wellness",
    icon: Leaf,
    highlights: ["Tea Estates", "Nature Healing", "Scenic Walks"],
  },
  {
    name: "Galle",
    region: "South Coast",
    desc: "Historic fort city with Dutch architecture, coastal culture, art spaces and meaningful local experiences.",
    image:
      "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=1000",
    experiences: 16,
    bestFor: "Heritage & Coast",
    icon: Building2,
    highlights: ["Galle Fort", "Cooking Classes", "Coastal Walks"],
  },
  {
    name: "Udawalawe",
    region: "Wildlife Region",
    desc: "A beautiful wildlife destination famous for elephant safaris, bird watching and nature conservation.",
    image:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1000",
    experiences: 12,
    bestFor: "Wildlife Safari",
    icon: Camera,
    highlights: ["Elephant Safari", "Bird Watching", "Eco Tours"],
  },
  {
    name: "Bentota",
    region: "Golden Coast",
    desc: "A peaceful beach destination for Ayurveda, yoga, river experiences and relaxing coastal wellness.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000",
    experiences: 11,
    bestFor: "Beach Wellness",
    icon: Waves,
    highlights: ["Ayurveda", "Beach Yoga", "River Safari"],
  },
  {
    name: "Haputale",
    region: "Mountain Edge",
    desc: "A quiet hill town with tea fields, viewpoints, organic farming and sustainable living experiences.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
    experiences: 13,
    bestFor: "Agriculture & Eco",
    icon: Tent,
    highlights: ["Organic Farms", "Tea Lifestyle", "Viewpoints"],
  },
]

const experienceTypes = [
  {
    title: "Activities",
    icon: Compass,
    desc: "Hiking, tours and local experiences",
  },
  {
    title: "Retreats",
    icon: Sparkles,
    desc: "Meditation, yoga and healing stays",
  },
  {
    title: "Hotels",
    icon: Hotel,
    desc: "Comfortable stays near destinations",
  },
  {
    title: "Local Experiences",
    icon: Leaf,
    desc: "Village life, food and culture",
  },
]
export default function Destinations() {
  const [active, setActive] = useState(destinations[0])
  const ActiveIcon = active.icon

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
              "linear-gradient(90deg, rgba(42,30,22,0.86) 0%, rgba(42,30,22,0.62) 45%, rgba(42,30,22,0.22) 100%)",
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
                  Explore meaningful places
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Explore Sri Lanka
              </p>

              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                DESTINATIONS
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                Discover cultural cities, misty mountains, wildlife parks,
                coastal wellness escapes and village experiences across Sri
                Lanka.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#destination-map"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  Explore Map
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
                  Plan Journey
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map + Active Destination */}
      <section
        id="destination-map"
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
            {/* Map */}
            <Reveal className="h-full">
              <div
                className="rounded-[2rem] overflow-hidden min-h-[520px] h-full flex flex-col"
                style={{
                  background: COLORS.softCream,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 25px 70px rgba(58,45,36,0.10)",
                }}
              >
                <div className="p-6 md:p-8">
                  <p
                    className="script-font text-4xl"
                    style={{ color: COLORS.bronze }}
                  >
                    Journey Map
                  </p>

                  <h2
                    className="text-3xl md:text-5xl font-black tracking-widest leading-none mt-2"
                    style={{ color: COLORS.text }}
                  >
                    EXPLORE THE ISLAND
                  </h2>

                  <p
                    className="mt-4 max-w-xl leading-relaxed"
                    style={{ color: COLORS.muted }}
                  >
                    Select a destination to discover experiences, retreats and
                    local highlights.
                  </p>
                </div>

                <div className="relative h-[420px] flex-1 min-h-[360px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4053831.0!2d79.8612!3d7.8731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: "sepia(0.12) saturate(0.85)",
                    }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>

            {/* Active Destination */}
            <Reveal delay={120} className="h-full">
              <div
                className="relative rounded-[2rem] overflow-hidden min-h-[680px] sm:min-h-[620px] lg:min-h-[520px] h-full"
                style={{
                  boxShadow: "0 25px 70px rgba(58,45,36,0.14)",
                }}
              >
                <img
                  src={active.image}
                  alt={active.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="absolute top-6 left-6">
                  <span
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black tracking-widest uppercase text-white"
                    style={{
                      background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                    }}
                  >
                    <ActiveIcon className="w-4 h-4" />
                    {active.bestFor}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white">
                  <p
                    className="script-font text-4xl mb-2"
                    style={{ color: COLORS.gold }}
                  >
                    Featured Destination
                  </p>

                  <h3 className="text-4xl md:text-5xl font-black leading-none mb-3">
                    {active.name}
                  </h3>

                  <p className="text-white/70 mb-5">{active.region}</p>

                  <p className="text-white/80 leading-relaxed mb-7">
                    {active.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-7">
                    {active.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest"
                        style={{
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.16)",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/55">
                        Experiences
                      </p>

                      <p
                        className="text-3xl font-black"
                        style={{ color: COLORS.gold }}
                      >
                        {active.experiences}+
                      </p>
                    </div>

                    <a
                      href="/booking"
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white transition hover:translate-x-1"
                      style={{ background: COLORS.olive }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

                    {/* Destination Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {destinations.map((destination, index) => {
              const Icon = destination.icon
              const selected = active.name === destination.name

              return (
                <Reveal
                  key={destination.name}
                  delay={index * 60}
                  className="block h-full w-full"
                >
                  <button
                    onClick={() => setActive(destination)}
                    className="w-full h-full rounded-2xl p-5 text-left transition hover:-translate-y-1"
                    style={{
                      background: selected
                        ? `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`
                        : COLORS.softCream,
                      border: selected
                        ? "1px solid transparent"
                        : `1px solid ${COLORS.border}`,
                      color: selected ? "white" : COLORS.text,
                      boxShadow: selected
                        ? "0 18px 45px rgba(166,106,44,0.22)"
                        : "0 14px 35px rgba(58,45,36,0.06)",
                    }}
                  >
                    <Icon className="w-6 h-6 mb-3" />

                    <p className="font-black">{destination.name}</p>

                    <p
                      className="text-xs mt-1"
                      style={{
                        color: selected
                          ? "rgba(255,255,255,0.75)"
                          : COLORS.muted,
                      }}
                    >
                      {destination.experiences} experiences
                    </p>
                  </button>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Types */}
      <section
        className="py-20 px-6"
        style={{
          background: COLORS.softCream,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p
                className="script-font text-5xl"
                style={{ color: COLORS.bronze }}
              >
                Explore More
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                DESTINATION EXPERIENCES
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {experienceTypes.map((type, index) => {
              const Icon = type.icon

              return (
                <Reveal
                  key={type.title}
                  delay={index * 65}
                  className="block h-full w-full"
                >
                  <div
                    className="rounded-[2rem] p-6 text-center transition hover:-translate-y-2 h-full"
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

                    <h3
                      className="font-black text-lg mb-2"
                      style={{ color: COLORS.text }}
                    >
                      {type.title}
                    </h3>

                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: COLORS.muted }}
                    >
                      {type.desc}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

            {/* Destination Grid */}
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
                  Popular Places
                </p>

                <h2
                  className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                  style={{ color: COLORS.text }}
                >
                  CHOOSE YOUR DESTINATION
                </h2>
              </div>

              <p
                className="max-w-md leading-relaxed"
                style={{ color: COLORS.muted }}
              >
                Every destination is connected with activities, retreats, hotels
                and local experiences designed for purposeful travel.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {destinations.map((destination, index) => {
              const Icon = destination.icon

              return (
                <Reveal
                  key={destination.name}
                  delay={index * 65}
                  className="block h-full w-full"
                >
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
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                      <div className="absolute top-5 left-5">
                        <span
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
                          style={{
                            background: "rgba(42,30,22,0.62)",
                            backdropFilter: "blur(12px)",
                          }}
                        >
                          <Icon className="w-4 h-4" />
                          {destination.bestFor}
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                        <div>
                          <h3 className="text-3xl font-black text-white">
                            {destination.name}
                          </h3>

                          <p className="text-white/70 text-sm flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {destination.region}
                          </p>
                        </div>

                        <div className="flex items-center gap-1 text-white">
                          <Star
                            className="w-4 h-4"
                            fill={COLORS.gold}
                            style={{ color: COLORS.gold }}
                          />

                          <span className="text-sm font-black">4.9</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <p
                        className="text-sm leading-relaxed mb-5 min-h-[88px]"
                        style={{ color: COLORS.muted }}
                      >
                        {destination.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6 min-h-[88px] content-start">
                        {destination.highlights.map((item) => (
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

                      <div className="flex items-center justify-between gap-4 mt-auto pt-2">
                        <div>
                          <p
                            className="text-xs uppercase tracking-widest font-black"
                            style={{ color: COLORS.muted }}
                          >
                            Available
                          </p>

                          <p
                            className="text-2xl font-black"
                            style={{ color: COLORS.bronze }}
                          >
                            {destination.experiences}+
                          </p>
                        </div>

                        <a
                          href="/booking"
                          className="inline-flex shrink-0 whitespace-nowrap items-center gap-2 px-4 sm:px-5 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase transition group-hover:translate-x-1"
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
        <Reveal>
          <div className="relative max-w-4xl mx-auto">
            <p
              className="script-font text-5xl"
              style={{ color: COLORS.gold }}
            >
              Ready to explore?
            </p>

            <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white mt-2">
              PLAN YOUR SRI LANKA JOURNEY
            </h2>

            <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
              Choose your favorite destination and let us help you create a
              meaningful journey with purpose.
            </p>

            <a
              href="/booking"
              className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
              style={{
                background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
              }}
            >
              Start Planning
              <Navigation className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  )
} 