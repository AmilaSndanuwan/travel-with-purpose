"use client"

import { useEffect, useMemo, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Reveal from "../../../components/Reveal"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Frown,
  Newspaper,
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
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export default function BlogDetailsPage() {
  const params = useParams()
  const slug = String(params?.slug || "")

  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true)
      setError("")

      try {
        const response = await fetch("/api/blog", {
          cache: "no-store",
        })

        const result = await response.json()

        if (!response.ok || !result.success) {
          throw new Error(result.message || "Failed to load blog post")
        }

        setPosts(result.data || [])
      } catch (err) {
        console.error(err)
        setError("Blog article load කරන්න බැරි වුණා. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  const post = useMemo(() => {
    return posts.find((item) => item.slug === slug) || null
  }, [posts, slug])

  const relatedPosts = useMemo(() => {
    if (!post) return []

    return posts
      .filter(
        (item) =>
          item.slug !== post.slug &&
          item.category.toLowerCase() === post.category.toLowerCase()
      )
      .slice(0, 3)
  }, [posts, post])

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
            Loading Article...
          </h1>

          <p className="mt-3" style={{ color: COLORS.muted }}>
            Please wait while we load the latest blog content.
          </p>
        </div>
      </main>
    )
  }

  if (error || !post) {
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
            Article Not Found
          </h1>

          <p className="mt-4 leading-relaxed" style={{ color: COLORS.muted }}>
            {error || "This blog article may be removed or inactive."}
          </p>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
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
            backgroundImage: `url('${post.imageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(42,30,22,0.92) 0%, rgba(42,30,22,0.66) 48%, rgba(42,30,22,0.24) 100%)",
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
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest mb-7 text-white/80 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
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
                  Blog Article
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Story
              </p>

              <h1 className="text-4xl md:text-7xl font-black tracking-widest text-white leading-tight mt-2">
                {post.title}
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-white/78 text-sm">
                <span className="inline-flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>

                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {formatDate(post.createdAt)}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>

                <span className="inline-flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

            {/* Article Content */}
      <section
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
          <Reveal>
            <article
              className="rounded-[2rem] p-6 md:p-10"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
              }}
            >
              <div className="mb-8">
                <p
                  className="script-font text-5xl"
                  style={{ color: COLORS.bronze }}
                >
                  Full Story
                </p>

                <h2
                  className="text-3xl md:text-5xl font-black tracking-widest uppercase mt-2"
                  style={{ color: COLORS.text }}
                >
                  ARTICLE
                </h2>
              </div>

              <div
                className="prose prose-lg max-w-none leading-relaxed whitespace-pre-line"
                style={{
                  color: COLORS.muted,
                  fontSize: "18px",
                  lineHeight: "1.9",
                }}
              >
                {post.content}
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <aside
              className="lg:sticky lg:top-28 rounded-[2rem] overflow-hidden"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 25px 70px rgba(58,45,36,0.10)",
              }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p
                    className="text-xs font-black uppercase tracking-widest mb-2"
                    style={{ color: COLORS.gold }}
                  >
                    {post.category}
                  </p>

                  <h3 className="text-2xl font-black leading-tight">
                    {post.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div
                  className="rounded-2xl p-4 flex gap-3"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <User
                    className="w-5 h-5 shrink-0 mt-1"
                    style={{ color: COLORS.gold }}
                  />

                  <div>
                    <p
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: COLORS.muted }}
                    >
                      Author
                    </p>

                    <p className="font-black text-sm" style={{ color: COLORS.text }}>
                      {post.author}
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
                      Published
                    </p>

                    <p className="font-black text-sm" style={{ color: COLORS.text }}>
                      {formatDate(post.createdAt)}
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
                  <Clock
                    className="w-5 h-5 shrink-0 mt-1"
                    style={{ color: COLORS.gold }}
                  />

                  <div>
                    <p
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: COLORS.muted }}
                    >
                      Read Time
                    </p>

                    <p className="font-black text-sm" style={{ color: COLORS.text }}>
                      {post.readTime}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  Share Your Story
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/blog"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: COLORS.text,
                  }}
                >
                  Back to Blog
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

            {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section
          className="py-24 px-6"
          style={{
            background: COLORS.softCream,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="mb-12">
                <p
                  className="script-font text-5xl"
                  style={{ color: COLORS.bronze }}
                >
                  Continue Reading
                </p>

                <h2
                  className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                  style={{ color: COLORS.text }}
                >
                  RELATED STORIES
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedPosts.map((relatedPost, index) => (
                <Reveal key={relatedPost.id} delay={index * 80}>
                  <article
                    className="group h-full rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
                    }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={relatedPost.imageUrl}
                        alt={relatedPost.title}
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
                          <Newspaper className="w-4 h-4" />
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div
                        className="flex items-center gap-2 text-xs font-bold mb-3"
                        style={{ color: COLORS.muted }}
                      >
                        <CalendarDays className="w-4 h-4" />
                        {formatDate(relatedPost.createdAt)}
                      </div>

                      <h3
                        className="text-xl font-black leading-tight"
                        style={{ color: COLORS.text }}
                      >
                        {relatedPost.title}
                      </h3>

                      <p
                        className="text-sm leading-relaxed mt-3 mb-5"
                        style={{ color: COLORS.muted }}
                      >
                        {relatedPost.excerpt}
                      </p>

                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="mt-auto inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition group-hover:translate-x-1"
                        style={{ color: COLORS.bronze }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}