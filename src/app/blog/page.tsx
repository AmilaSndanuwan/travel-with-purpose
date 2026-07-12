"use client"

import { useEffect, useMemo, useState } from "react"
import Reveal from "../../components/Reveal"
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Camera,
  Frown,
  HeartHandshake,
  Leaf,
  Newspaper,
  RefreshCcw,
  Search,
  Sparkles,
  Tag,
  User,
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

type BlogPost = {
  id: number
  title: string
  slug: string
  category: string
  excerpt: string
  content: string
  author: string
  readTime: string
  imageUrl: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

const formatDate = (dateValue: string) => {
  const date = new Date(dateValue)

  if (Number.isNaN(date.getTime())) {
    return "Latest"
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

const getCategoryIcon = (category: string) => {
  const value = category.toLowerCase()

  if (value.includes("travel")) return Camera
  if (value.includes("meditation")) return Sparkles
  if (value.includes("culture")) return BookOpen
  if (value.includes("volunteer")) return HeartHandshake
  if (value.includes("guide")) return Tag
  if (value.includes("sustainable")) return Leaf

  return Newspaper
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selected, setSelected] = useState("All")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const loadPosts = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/blog", {
        cache: "no-store",
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to load blog posts")
      }

      setPosts(result.data || [])
    } catch (err) {
      console.error(err)
      setError("Blog posts load කරන්න බැරි වුණා. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(posts.map((post) => post.category).filter(Boolean))
    )

    return ["All", ...uniqueCategories]
  }, [posts])

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch = selected === "All" || post.category === selected

      const searchText = `
        ${post.title}
        ${post.category}
        ${post.excerpt}
        ${post.content}
        ${post.author}
      `.toLowerCase()

      const searchMatch = searchText.includes(search.toLowerCase())

      return categoryMatch && searchMatch
    })
  }, [posts, selected, search])

  const featuredBlog = filtered[0] || null
  const otherBlogs = filtered.slice(1)

  return (
    <main style={{ background: COLORS.cream, color: COLORS.text }}>

            {/* Hero */}
      <section className="relative min-h-[72vh] flex items-center overflow-hidden px-6 pt-28 pb-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600')",
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
                  Travel stories, guides and real experiences
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Blog & Stories
              </p>

              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                STORIES WITH PURPOSE
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                Read travel stories, wellness insights, volunteer experiences
                and Sri Lanka guides created for meaningful travelers.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#blog-list"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  Read Articles
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
                  Share Your Story
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section
        id="blog-list"
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
                placeholder="Search articles, guides, stories..."
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
              {categories.map((category) => {
                const Icon = category === "All" ? Newspaper : getCategoryIcon(category)
                const active = selected === category

                return (
                  <button
                    key={category}
                    onClick={() => setSelected(category)}
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
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

            {/* Featured + Grid */}
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
                  Latest Articles
                </p>

                <h2
                  className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                  style={{ color: COLORS.text }}
                >
                  TRAVEL JOURNAL
                </h2>
              </div>

              <p className="max-w-md leading-relaxed" style={{ color: COLORS.muted }}>
                Showing {filtered.length} article
                {filtered.length === 1 ? "" : "s"} from our travel journal.
              </p>
            </div>
          </Reveal>

          {loading ? (
            <div
              className="text-center py-24 rounded-[2rem]"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <Sparkles
                className="mx-auto mb-4 h-14 w-14 animate-pulse"
                style={{ color: COLORS.gold }}
              />

              <h3
                className="font-black text-2xl mb-2"
                style={{ color: COLORS.text }}
              >
                Loading blog posts...
              </h3>

              <p style={{ color: COLORS.muted }}>
                Please wait while we load the latest CMS stories.
              </p>
            </div>
          ) : error ? (
            <div
              className="text-center py-24 rounded-[2rem]"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <Frown
                className="mx-auto mb-4 h-14 w-14"
                style={{ color: "#D94A38" }}
              />

              <h3
                className="font-black text-2xl mb-2"
                style={{ color: COLORS.text }}
              >
                Something went wrong
              </h3>

              <p style={{ color: COLORS.muted }}>{error}</p>

              <button
                onClick={loadPosts}
                className="mt-8 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                }}
              >
                <RefreshCcw className="w-4 h-4" />
                Try Again
              </button>
            </div>
          ) : filtered.length === 0 ? (
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
                No articles found
              </h3>

              <p style={{ color: COLORS.muted }}>
                Try another category or search keyword.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Blog */}
              {featuredBlog && (
                <Reveal>
                  <article
                    className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] rounded-[2rem] overflow-hidden mb-8"
                    style={{
                      background: COLORS.softCream,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: "0 25px 70px rgba(58,45,36,0.10)",
                    }}
                  >
                    <div className="relative min-h-[420px] overflow-hidden">
                      <img
                        src={featuredBlog.imageUrl}
                        alt={featuredBlog.title}
                        className="absolute inset-0 w-full h-full object-cover transition duration-700 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent lg:hidden" />
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 mb-5">
                        <span
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
                          style={{
                            background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                          }}
                        >
                          <Tag className="w-4 h-4" />
                          {featuredBlog.category}
                        </span>

                        <span
                          className="inline-flex items-center gap-2 text-sm"
                          style={{ color: COLORS.muted }}
                        >
                          <CalendarDays className="w-4 h-4" />
                          {formatDate(featuredBlog.createdAt)}
                        </span>
                      </div>

                                            <h3
                        className="text-3xl md:text-5xl font-black leading-tight"
                        style={{ color: COLORS.text }}
                      >
                        {featuredBlog.title}
                      </h3>

                      <p
                        className="mt-5 leading-relaxed text-lg"
                        style={{ color: COLORS.muted }}
                      >
                        {featuredBlog.excerpt}
                      </p>

                      <div
                        className="flex flex-wrap items-center gap-5 mt-7 text-sm"
                        style={{ color: COLORS.muted }}
                      >
                        <span className="inline-flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredBlog.author}
                        </span>

                        <span>{featuredBlog.readTime}</span>
                      </div>

                      <a
                        href={`/blog/${featuredBlog.slug}`}
                        className="mt-8 inline-flex w-fit items-center gap-2 px-6 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase transition hover:translate-x-1"
                        style={{
                          background: COLORS.text,
                        }}
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              )}

              {/* Blog Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
                {otherBlogs.map((blog, i) => (
                  <Reveal key={blog.id} delay={i * 80} className="h-full">
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
                          src={blog.imageUrl}
                          alt={blog.title}
                          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                        <div className="absolute top-5 left-5">
                          <span
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
                            style={{
                              background: "rgba(42,30,22,0.68)",
                              backdropFilter: "blur(12px)",
                            }}
                          >
                            <Tag className="w-4 h-4" />
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div
                          className="flex items-center gap-2 text-xs font-bold mb-3"
                          style={{ color: COLORS.muted }}
                        >
                          <CalendarDays className="w-4 h-4" />
                          {formatDate(blog.createdAt)}
                        </div>

                        <h3
                          className="text-xl font-black leading-tight min-h-[58px]"
                          style={{ color: COLORS.text }}
                        >
                          {blog.title}
                        </h3>

                        <p
                          className="text-sm leading-relaxed mt-3 mb-5 min-h-[66px]"
                          style={{ color: COLORS.muted }}
                        >
                          {blog.excerpt}
                        </p>

                        <div
                          className="flex items-center justify-between mt-auto pt-5"
                          style={{ borderTop: `1px solid ${COLORS.border}` }}
                        >
                          <span className="text-xs" style={{ color: COLORS.muted }}>
                            {blog.readTime}
                          </span>

                          <a
                            href={`/blog/${blog.slug}`}
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition group-hover:translate-x-1"
                            style={{ color: COLORS.bronze }}
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </>
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
            Share Your Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white mt-2">
            INSPIRE OTHER TRAVELERS
          </h2>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Have a meaningful travel story, volunteer experience or wellness
            journey? Connect with us and share your story.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
            }}
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  )
}