"use client"

import { useMemo, useState } from "react"
import Reveal from "../../components/Reveal"
import {
  ArrowRight,
  Camera,
  Filter,
  ImageIcon,
  Leaf,
  Mountain,
  Search,
  Sparkles,
  TreePine,
  Users,
  X,
  ZoomIn,
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

const galleryImages = [
  {
    id: 1,
    category: "Adventure",
    title: "Mountain Hiking",
    location: "Knuckles, Sri Lanka",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1000",
    large: true,
  },
  {
    id: 2,
    category: "Meditation",
    title: "Silent Retreat",
    location: "Kandy, Sri Lanka",
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000",
    large: false,
  },
  {
    id: 3,
    category: "Wildlife",
    title: "Elephant Safari",
    location: "Udawalawe, Sri Lanka",
    src: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1000",
    large: false,
  },
  {
    id: 4,
    category: "Culture",
    title: "Island Culture",
    location: "Sri Lanka",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000",
    large: false,
  },
  {
    id: 5,
    category: "Volunteers",
    title: "Community Support",
    location: "Kandy, Sri Lanka",
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1000",
    large: true,
  },
  {
    id: 6,
    category: "Nature",
    title: "Forest Healing",
    location: "Ella, Sri Lanka",
    src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000",
    large: false,
  },
  {
    id: 7,
    category: "Adventure",
    title: "Organic Farm Trails",
    location: "Haputale, Sri Lanka",
    src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1000",
    large: false,
  },
  {
    id: 8,
    category: "Meditation",
    title: "Temple Peace",
    location: "Kandy, Sri Lanka",
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1000",
    large: false,
  },
  {
    id: 9,
    category: "Wildlife",
    title: "Wild Landscapes",
    location: "Sri Lanka",
    src: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=1000",
    large: false,
  },
  {
    id: 10,
    category: "Culture",
    title: "Ancient Places",
    location: "Sigiriya, Sri Lanka",
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1000",
    large: true,
  },
  {
    id: 11,
    category: "Volunteers",
    title: "Teaching Moments",
    location: "Local School",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000",
    large: false,
  },
  {
    id: 12,
    category: "Nature",
    title: "Golden Landscapes",
    location: "Sri Lanka",
    src: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1000",
    large: false,
  },
]

const categories = [
  { name: "All", icon: ImageIcon },
  { name: "Adventure", icon: Mountain },
  { name: "Meditation", icon: Sparkles },
  { name: "Wildlife", icon: Camera },
  { name: "Culture", icon: Filter },
  { name: "Volunteers", icon: Users },
  { name: "Nature", icon: TreePine },
]

export default function Gallery() {
  const [selected, setSelected] = useState("All")
  const [search, setSearch] = useState("")
  const [selectedImage, setSelectedImage] =
    useState<(typeof galleryImages)[number] | null>(null)

  const filtered = useMemo(() => {
    return galleryImages.filter((image) => {
      const categoryMatch = selected === "All" || image.category === selected

      const searchMatch =
        image.title.toLowerCase().includes(search.toLowerCase()) ||
        image.category.toLowerCase().includes(search.toLowerCase()) ||
        image.location.toLowerCase().includes(search.toLowerCase())

      return categoryMatch && searchMatch
    })
  }, [selected, search])

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
              "linear-gradient(90deg, rgba(42,30,22,0.88) 0%, rgba(42,30,22,0.60) 45%, rgba(42,30,22,0.20) 100%)",
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
                  Moments from meaningful journeys
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Travel Gallery
              </p>

              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                CAPTURED EXPERIENCES
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                Explore adventure, meditation, wildlife, culture, volunteer
                moments and nature experiences from journeys across Sri Lanka.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#gallery-grid"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  View Gallery
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
                  Book Journey
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section
        id="gallery-grid"
        className="py-12 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 100%)",
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-[2rem] p-5 md:p-6"
            style={{
              background: "rgba(255,255,255,0.82)",
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
              backdropFilter: "blur(18px)",
            }}
          >
            <div className="relative mb-5">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5"
                style={{ color: COLORS.muted }}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search photos, places, categories..."
                className="w-full rounded-full py-4 pl-14 pr-5 outline-none text-sm"
                style={{
                  background: COLORS.softCream,
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                  minHeight: "56px",
                }}
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => {
                const Icon = cat.icon
                const active = selected === cat.name

                return (
                  <button
                    key={cat.name}
                    onClick={() => setSelected(cat.name)}
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
        </div>
      </section>

            {/* Gallery */}
      <section
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, #F7F1E8 0%, #FFFDF8 55%, #EFE2D3 100%)",
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
                  Visual Stories
                </p>

                <h2
                  className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                  style={{ color: COLORS.text }}
                >
                  MOMENTS OF PURPOSE
                </h2>
              </div>

              <p className="max-w-md leading-relaxed" style={{ color: COLORS.muted }}>
                Showing {filtered.length} photo
                {filtered.length === 1 ? "" : "s"} from our travel gallery.
              </p>
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <div
              className="text-center py-24 rounded-[2rem]"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <Search
                className="mx-auto mb-4 h-14 w-14"
                style={{ color: COLORS.gold }}
              />

              <h3
                className="font-black text-2xl mb-2"
                style={{ color: COLORS.text }}
              >
                No photos found
              </h3>

              <p style={{ color: COLORS.muted }}>
                Try another category or search keyword.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[260px] gap-5">
              {filtered.map((image, i) => (
                <Reveal
                  key={image.id}
                  delay={i * 50}
                  className={
                    image.large
                      ? "sm:col-span-2 sm:row-span-2"
                      : "sm:col-span-1 sm:row-span-1"
                  }
                >
                  <button
                    onClick={() => setSelectedImage(image)}
                    className="group relative w-full h-full rounded-[2rem] overflow-hidden text-left"
                    style={{
                      boxShadow: "0 18px 50px rgba(58,45,36,0.10)",
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/12 to-transparent opacity-90" />

                    <div className="absolute top-5 left-5">
                      <span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
                        style={{
                          background: "rgba(42,30,22,0.68)",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        <Camera className="w-4 h-4" />
                        {image.category}
                      </span>
                    </div>

                    <div className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                      style={{
                        background: "rgba(255,255,255,0.16)",
                        border: "1px solid rgba(255,255,255,0.20)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h3 className="text-2xl font-black leading-tight">
                        {image.title}
                      </h3>

                      <p className="text-white/70 text-sm mt-2 flex items-center gap-2">
                        <Leaf className="w-4 h-4" />
                        {image.location}
                      </p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
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
            Create Your Moment
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white mt-2">
            BE PART OF THE NEXT STORY
          </h2>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Join a meaningful journey and create your own memories across
            Sri Lanka through travel, wellness, volunteering and culture.
          </p>

          <a
            href="/booking"
            className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
            }}
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.82)" }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white"
            style={{
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.20)",
              backdropFilter: "blur(12px)",
            }}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl w-full rounded-[2rem] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[78vh] object-cover"
            />

            <div
              className="p-6"
              style={{
                background: COLORS.softCream,
              }}
            >
              <p
                className="text-xs font-black tracking-widest uppercase mb-2"
                style={{ color: COLORS.bronze }}
              >
                {selectedImage.category}
              </p>

              <h3
                className="text-2xl md:text-4xl font-black"
                style={{ color: COLORS.text }}
              >
                {selectedImage.title}
              </h3>

              <p className="mt-2" style={{ color: COLORS.muted }}>
                {selectedImage.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}