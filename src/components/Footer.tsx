"use client"

import { useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import { Mail, MapPin, MessageCircle, Palmtree, Phone, Send } from "lucide-react"
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa"

const COLORS = {
  gold: "#D89A3D",
  bronze: "#A66A2C",
  mutedLight: "rgba(255,255,255,0.68)",
  borderLight: "rgba(255,255,255,0.12)",
}

type ContactSettings = {
  email: string
  phone: string
  whatsapp: string
  facebookUrl: string
  instagramUrl: string
  youtubeUrl: string
  linkedinUrl: string
}

const DEFAULT_CONTACTS: ContactSettings = {
  email: "info@travelwithpurpose.com",
  phone: "+94 77 123 4567",
  whatsapp: "+94771234567",
  facebookUrl: "https://facebook.com",
  instagramUrl: "https://instagram.com",
  youtubeUrl: "https://youtube.com",
  linkedinUrl: "https://linkedin.com",
}

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Programs", href: "/programs" },
  { title: "Destinations", href: "/destinations" },
  { title: "Impact Projects", href: "/impact" },
  { title: "Gallery", href: "/gallery" },
  { title: "Blog", href: "/blog" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
]

const programLinks = [
  { title: "Meditation", href: "/programs" },
  { title: "Yoga & Wellness", href: "/wellness" },
  { title: "Adventure", href: "/programs" },
  { title: "Volunteer", href: "/volunteer" },
  { title: "Culture", href: "/programs" },
  { title: "Wildlife", href: "/programs" },
]

const supportLinks = [
  { title: "FAQ", href: "/contact" },
  { title: "Terms & Conditions", href: "/contact" },
  { title: "Privacy Policy", href: "/contact" },
  { title: "Refund Policy", href: "/contact" },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [contacts, setContacts] = useState<ContactSettings>(DEFAULT_CONTACTS)

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const loadContactSettings = async () => {
      try {
        const response = await fetch("/api/site-settings", {
          cache: "no-store",
        })

        const result = await response.json()

        if (response.ok && result.success && result.data) {
          setContacts({
            email: result.data.email || DEFAULT_CONTACTS.email,
            phone: result.data.phone || DEFAULT_CONTACTS.phone,
            whatsapp: result.data.whatsapp || DEFAULT_CONTACTS.whatsapp,
            facebookUrl: result.data.facebookUrl || DEFAULT_CONTACTS.facebookUrl,
            instagramUrl: result.data.instagramUrl || DEFAULT_CONTACTS.instagramUrl,
            youtubeUrl: result.data.youtubeUrl || DEFAULT_CONTACTS.youtubeUrl,
            linkedinUrl: result.data.linkedinUrl || DEFAULT_CONTACTS.linkedinUrl,
          })
        }
      } catch (err) {
        console.error("Failed to load footer contact settings:", err)
      }
    }

    loadContactSettings()
  }, [])

  const socialLinks = [
    { icon: FaFacebookF, href: contacts.facebookUrl, label: "Facebook" },
    { icon: FaInstagram, href: contacts.instagramUrl, label: "Instagram" },
    { icon: FaYoutube, href: contacts.youtubeUrl, label: "YouTube" },
    { icon: FaLinkedinIn, href: contacts.linkedinUrl, label: "LinkedIn" },
  ]

  const handleNewsletterSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage("")
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to subscribe")
      }

      setMessage("Subscribed successfully!")
      setEmail("")
    } catch (err) {
      console.error(err)
      setError("Subscribe කරන්න බැරි වුණා. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(216,154,61,0.18), transparent 35%), linear-gradient(135deg, #2A1E16 0%, #33251C 48%, #1C140F 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-20 pb-8">
        <div
          className="rounded-3xl p-6 md:p-8 mb-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: `1px solid ${COLORS.borderLight}`,
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        >
          <div>
            <p className="script-font text-3xl mb-2" style={{ color: COLORS.gold }}>
              Begin your meaningful journey
            </p>

            <h2 className="text-2xl md:text-4xl font-black tracking-widest uppercase">
              Travel with purpose
            </h2>

            <p
              className="mt-3 text-sm md:text-base max-w-2xl leading-relaxed"
              style={{ color: COLORS.mutedLight }}
            >
              Explore Sri Lanka through wellness, culture, nature, volunteering
              and community impact experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-6 py-4 rounded-full text-sm font-black tracking-widest uppercase transition hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                color: "white",
              }}
            >
              Book Now
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-6 py-4 rounded-full text-sm font-black tracking-widest uppercase transition hover:-translate-y-0.5"
              style={{
                border: `1px solid ${COLORS.borderLight}`,
                color: "white",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              Explore Programs
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-4 mb-5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                }}
              >
                <Palmtree className="w-6 h-6 text-white" />
              </div>

              <div className="leading-tight">
                <p className="font-black text-base tracking-[0.14em] uppercase">
                  Travel With
                </p>
                <p className="script-font text-2xl -mt-1" style={{ color: COLORS.gold }}>
                  Purpose
                </p>
              </div>
            </Link>

            <p
              className="text-sm leading-relaxed mb-6 max-w-[230px]"
              style={{ color: COLORS.mutedLight }}
            >
              Travel with purpose. Create impact. Inspire change.
            </p>

            <div className="space-y-3">
              <p className="flex items-center gap-3 text-sm" style={{ color: COLORS.mutedLight }}>
                <MapPin className="w-4 h-4 shrink-0" style={{ color: COLORS.gold }} />
                Kandy, Sri Lanka
              </p>

              <a
                href={`tel:${contacts.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm transition hover:text-[#D89A3D]"
                style={{ color: COLORS.mutedLight }}
              >
                <Phone className="w-4 h-4 shrink-0" style={{ color: COLORS.gold }} />
                {contacts.phone}
              </a>

              <a
                href={`https://wa.me/${contacts.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition hover:text-[#D89A3D]"
                style={{ color: COLORS.mutedLight }}
              >
                <MessageCircle className="w-4 h-4 shrink-0" style={{ color: COLORS.gold }} />
                {contacts.whatsapp}
              </a>

              <a
                href={`mailto:${contacts.email}`}
                className="flex items-center gap-3 text-sm break-all transition hover:text-[#D89A3D]"
                style={{ color: COLORS.mutedLight }}
              >
                <Mail className="w-4 h-4 shrink-0" style={{ color: COLORS.gold }} />
                {contacts.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-black text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-sm transition hover:translate-x-1 hover:text-[#D89A3D]"
                  style={{ color: COLORS.mutedLight }}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black text-sm tracking-widest uppercase mb-5">
              Programs
            </h3>

            <div className="flex flex-col gap-3">
              {programLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-sm transition hover:translate-x-1 hover:text-[#D89A3D]"
                  style={{ color: COLORS.mutedLight }}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black text-sm tracking-widest uppercase mb-5">
              Support
            </h3>

            <div className="flex flex-col gap-3">
              {supportLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-sm transition hover:translate-x-1 hover:text-[#D89A3D]"
                  style={{ color: COLORS.mutedLight }}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black text-sm tracking-widest uppercase mb-5">
              Newsletter
            </h3>

            <p className="text-sm leading-relaxed mb-4" style={{ color: COLORS.mutedLight }}>
              Subscribe to get updates and offers.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="group flex rounded-full overflow-hidden mb-3 transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: `1px solid ${COLORS.borderLight}`,
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full min-w-0 px-4 py-3 bg-transparent outline-none text-sm placeholder:text-white/45 text-white"
              />

              <button
                type="submit"
                disabled={loading}
                aria-label="Subscribe"
                className="w-12 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(216,154,61,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                }}
              >
                <Send className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>

            {message && (
              <p className="text-xs font-bold mb-4" style={{ color: COLORS.gold }}>
                {message}
              </p>
            )}

            {error && (
              <p className="text-xs font-bold mb-4" style={{ color: "#ff8a7a" }}>
                {error}
              </p>
            )}

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-[0_0_20px_rgba(216,154,61,0.35)] group"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: `1px solid ${COLORS.borderLight}`,
                      color: "white",
                      boxShadow: "0 0 0 rgba(216,154,61,0)",
                    }}
                  >
                    <Icon
                      size={16}
                      className="transition-all duration-300 group-hover:text-[#D89A3D]"
                    />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div
          className="mt-14 pt-6 text-center text-xs"
          style={{
            borderTop: `1px solid ${COLORS.borderLight}`,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          © 2026 Travel With Purpose. All rights reserved.
        </div>
      </div>
    </footer>
  )
}