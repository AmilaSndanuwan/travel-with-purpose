"use client"

import { useState } from "react"
import Reveal from "../../components/Reveal"
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
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

const contactCards = [
  {
    title: "WhatsApp",
    value: "+94 77 123 4567",
    desc: "Chat with our travel team",
    icon: MessageCircle,
    href: "https://wa.me/94771234567",
    button: "Chat on WhatsApp",
  },
  {
    title: "Email",
    value: "info@travelwithpurpose.com",
    desc: "Send your inquiry anytime",
    icon: Mail,
    href: "mailto:info@travelwithpurpose.com",
    button: "Send Email",
  },
  {
    title: "Location",
    value: "Kandy, Sri Lanka",
    desc: "Travel With Purpose office",
    icon: MapPin,
    href: "#map",
    button: "View Map",
  },
]

const supportItems = [
  {
    title: "Fast Response",
    desc: "We usually reply within 24 hours.",
    icon: Clock,
  },
  {
    title: "Trip Planning Help",
    desc: "Tell us your goal and we will guide you.",
    icon: CalendarDays,
  },
  {
    title: "Trusted Support",
    desc: "Get clear details before you book.",
    icon: ShieldCheck,
  },
]

const socialLinks = [
  { name: "FB", label: "Facebook" },
  { name: "IN", label: "LinkedIn" },
  { name: "IG", label: "Instagram" },
  { name: "YT", label: "YouTube" },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
const [loading, setLoading] = useState(false)
const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setError("")
  setLoading(true)

  try {
    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      inquiryType: String(formData.get("inquiryType") || "General Inquiry"),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    const result = await response.json()

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to save contact message")
    }

    setSent(true)
    form.reset()
  } catch (err) {
    console.error(err)
    setError("Message save කරන්න බැරි වුණා. Please try again.")
  } finally {
    setLoading(false)
  }
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
              "linear-gradient(90deg, rgba(42,30,22,0.88) 0%, rgba(42,30,22,0.62) 45%, rgba(42,30,22,0.22) 100%)",
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
                  We would love to hear from you
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Contact Us
              </p>

              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                LET'S PLAN YOUR JOURNEY
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                Have a question about programs, destinations, wellness retreats,
                volunteering or booking? Send us a message and our team will
                guide you.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  Send Message
                </a>

                <a
                  href="https://wa.me/94771234567"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.32)",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
                Get In Touch
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                CONTACT OPTIONS
              </h2>

              <p
                className="mt-5 max-w-2xl mx-auto leading-relaxed"
                style={{ color: COLORS.muted }}
              >
                Choose the easiest way to contact us. We are ready to help you
                plan a meaningful travel experience.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon

              return (
                <Reveal key={card.title} delay={i * 80}>
                  <div
                    className="rounded-[2rem] p-7 h-full transition hover:-translate-y-2"
                    style={{
                      background: COLORS.softCream,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                      style={{
                        background: "rgba(216,154,61,0.14)",
                        color: COLORS.gold,
                      }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-black mb-2" style={{ color: COLORS.text }}>
                      {card.title}
                    </h3>

                    <p className="font-bold" style={{ color: COLORS.bronze }}>
                      {card.value}
                    </p>

                    <p className="text-sm mt-2 mb-6" style={{ color: COLORS.muted }}>
                      {card.desc}
                    </p>

                    <a
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase transition hover:translate-x-1"
                      style={{ background: COLORS.text }}
                    >
                      {card.button}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

            {/* Contact Form + Info */}
      <section
        id="contact-form"
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, #F7F1E8 0%, #FFFDF8 55%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          {/* Left Info */}
          <Reveal>
            <div>
              <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
                Need Help?
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                TALK TO OUR TEAM
              </h2>

              <p className="mt-5 leading-relaxed" style={{ color: COLORS.muted }}>
                Tell us what kind of journey you want. We can help you choose
                the right program, destination, duration and travel style.
              </p>

              <div className="space-y-4 mt-8">
                {supportItems.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] p-5 flex gap-4"
                      style={{
                        background: COLORS.softCream,
                        border: `1px solid ${COLORS.border}`,
                        boxShadow: "0 14px 35px rgba(58,45,36,0.06)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex shrink-0 items-center justify-center font-black"
                        style={{
                          background:
                            index === 0
                              ? `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`
                              : "rgba(216,154,61,0.14)",
                          color: index === 0 ? "white" : COLORS.gold,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="font-black text-lg" style={{ color: COLORS.text }}>
                          {item.title}
                        </h3>

                        <p className="text-sm mt-1 leading-relaxed" style={{ color: COLORS.muted }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10">
                <p className="font-black mb-4" style={{ color: COLORS.text }}>
                  Follow Us
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <button
                      key={social.label}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-black transition hover:-translate-y-1"
                      style={{
                        background: COLORS.text,
                        color: "white",
                      }}
                      aria-label={social.label}
                    >
                      {social.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div
              className="rounded-[2rem] p-6 md:p-8"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 25px 70px rgba(58,45,36,0.10)",
              }}
            >
              {sent ? (
                <div className="text-center py-16">
                  <div
                    className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(216,154,61,0.14)",
                      color: COLORS.gold,
                    }}
                  >
                    <Sparkles className="h-10 w-10" />
                  </div>

                  <h3
                    className="text-3xl font-black mb-3"
                    style={{ color: COLORS.text }}
                  >
                    Message Sent!
                  </h3>

                  <p className="max-w-md mx-auto leading-relaxed" style={{ color: COLORS.muted }}>
                    Thank you for contacting us. Our team will reply as soon as
                    possible.
                  </p>

                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase"
                    style={{ background: COLORS.text }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <p
                      className="script-font text-4xl"
                      style={{ color: COLORS.bronze }}
                    >
                      Send Message
                    </p>

                    <h2
                      className="text-3xl md:text-5xl font-black tracking-widest leading-none mt-2"
                      style={{ color: COLORS.text }}
                    >
                      INQUIRY FORM
                    </h2>

                    <p className="mt-4 leading-relaxed" style={{ color: COLORS.muted }}>
                      Fill this form and we will contact you with helpful
                      details.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="text-sm font-black mb-2 block"
                          style={{ color: COLORS.text }}
                        >
                          Your Name
                        </label>

                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                          style={{
                            background: COLORS.cream,
                            border: `1px solid ${COLORS.border}`,
                            color: COLORS.text,
                          }}
                        />
                      </div>

                      <div>
                        <label
                          className="text-sm font-black mb-2 block"
                          style={{ color: COLORS.text }}
                        >
                          Your Email
                        </label>

                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                          style={{
                            background: COLORS.cream,
                            border: `1px solid ${COLORS.border}`,
                            color: COLORS.text,
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="text-sm font-black mb-2 block"
                          style={{ color: COLORS.text }}
                        >
                          Phone / WhatsApp
                        </label>

                        <input
                          name="phone"
                          type="tel"
                          placeholder="Enter phone number"
                          className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                          style={{
                            background: COLORS.cream,
                            border: `1px solid ${COLORS.border}`,
                            color: COLORS.text,
                          }}
                        />
                      </div>

                      <div>
                        <label
                          className="text-sm font-black mb-2 block"
                          style={{ color: COLORS.text }}
                        >
                          Inquiry Type
                        </label>

                        <select
                          name="inquiryType"
                          className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                          style={{
                            background: COLORS.cream,
                            border: `1px solid ${COLORS.border}`,
                            color: COLORS.text,
                          }}
                        >
                          <option>General Inquiry</option>
                          <option>Program Booking</option>
                          <option>Volunteer Program</option>
                          <option>Wellness Retreat</option>
                          <option>Custom Journey</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        className="text-sm font-black mb-2 block"
                        style={{ color: COLORS.text }}
                      >
                        Subject
                      </label>

                      <input
                        required
                        name="subject"
                        type="text"
                        placeholder="Enter subject"
                        className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                        style={{
                          background: COLORS.cream,
                          border: `1px solid ${COLORS.border}`,
                          color: COLORS.text,
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="text-sm font-black mb-2 block"
                        style={{ color: COLORS.text }}
                      >
                        Message
                      </label>

                      <textarea
                        required
                        name="message"
                        placeholder="Tell us about your journey..."
                        rows={5}
                        className="w-full rounded-2xl px-4 py-4 text-sm outline-none resize-none"
                        style={{
                          background: COLORS.cream,
                          border: `1px solid ${COLORS.border}`,
                          color: COLORS.text,
                        }}
                      />
                    </div>
                        {error && (
                         <div
                          className="rounded-2xl p-4 text-sm font-bold"
                          style={{
                              background: "rgba(217,74,56,0.10)",
                              border: "1px solid rgba(217,74,56,0.20)",
                              color: "#D94A38",
                         }}
                    >
                              {error}
                     </div>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                      }}
                    >
                      Send Message
                      {loading ? "Sending Message..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </button>

                    <div
                      className="flex items-start gap-3 rounded-2xl p-4"
                      style={{
                        background: "rgba(216,154,61,0.10)",
                        border: "1px solid rgba(216,154,61,0.16)",
                      }}
                    >
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: COLORS.bronze }}
                      />

                      <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                        We respect your privacy and only use your details to
                        respond to your inquiry.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Google Map */}
      <section
        id="map"
        className="py-24 px-6"
        style={{
          background: COLORS.softCream,
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
                Find Us
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                KANDY, SRI LANKA
              </h2>

              <p className="mt-5 max-w-2xl mx-auto leading-relaxed" style={{ color: COLORS.muted }}>
                Our team is based in Sri Lanka and works with local communities,
                guides and partner destinations.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="rounded-[2rem] overflow-hidden"
              style={{
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 25px 70px rgba(58,45,36,0.10)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7!2d80.6337!3d7.2906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="460"
                style={{ border: 0, filter: "sepia(0.12) saturate(0.85)" }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Reveal>
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
            Start Today
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white mt-2">
            YOUR PURPOSEFUL JOURNEY BEGINS HERE
          </h2>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Message us today and let us help you plan a meaningful Sri Lankan
            travel experience.
          </p>

          <a
            href="/booking"
            className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
            }}
          >
            Book Your Experience
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main> 
  )
}