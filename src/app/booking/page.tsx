"use client"

import { useState } from "react"
import Reveal from "../../components/Reveal"
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock,
  CreditCard,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet,
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
    title: "7-Day Silent Retreat",
    location: "Kandy, Sri Lanka",
    duration: "7 Days",
    impact: "High Impact",
    groupSize: "10 - 15",
    price: 450,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1000",
    desc: "A peaceful meditation retreat designed for inner clarity, temple connection and mindful rest.",
    includes: ["Accommodation", "Daily meals", "Guided sessions", "Certificate"],
  },
  {
    title: "Surf & Yoga Package",
    location: "Weligama, Sri Lanka",
    duration: "7 Days",
    impact: "Wellness Impact",
    groupSize: "8 - 12",
    price: 550,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1000",
    desc: "A balanced coastal journey with surfing, yoga, healthy meals and beachside relaxation.",
    includes: ["Yoga classes", "Surf lessons", "Beach stay", "Daily meals"],
  },
  {
    title: "Organic Farming Program",
    location: "Haputale, Sri Lanka",
    duration: "5 Days",
    impact: "Community Impact",
    groupSize: "6 - 10",
    price: 320,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1000",
    desc: "Learn organic farming, tea culture and sustainable village living in Sri Lanka.",
    includes: ["Farm work", "Village stay", "Local meals", "Guide support"],
  },
  {
    title: "Ayurveda Healing Retreat",
    location: "Bentota, Sri Lanka",
    duration: "5 Days",
    impact: "Wellness Impact",
    groupSize: "5 - 10",
    price: 480,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1000",
    desc: "Traditional Sri Lankan Ayurveda treatments with nature healing, rest and wellness care.",
    includes: ["Ayurveda care", "Wellness meals", "Consultation", "Relaxation"],
  },
]

const trustItems = [
  {
    title: "Secure Request",
    desc: "Your details are safely submitted for booking confirmation.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Dates",
    desc: "Choose your preferred date and we will confirm availability.",
    icon: CalendarDays,
  },
  {
    title: "Local Support",
    desc: "Our team will guide you before and during your journey.",
    icon: Users,
  },
]

export default function Booking() {
  const [persons, setPersons] = useState(1)
  const [selectedProgramTitle, setSelectedProgramTitle] = useState(programs[0].title)
  const [submitted, setSubmitted] = useState(false)
  const [wishlist, setWishlist] = useState(false)

  const selectedProgram =
    programs.find((program) => program.title === selectedProgramTitle) ?? programs[0]

  const pricePerPerson = selectedProgram.price
  const total = pricePerPerson * persons

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
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
              "linear-gradient(90deg, rgba(42,30,22,0.88) 0%, rgba(42,30,22,0.62) 45%, rgba(42,30,22,0.24) 100%)",
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
                  Start your meaningful journey today
                </p>
              </div>

              <p className="script-font text-5xl" style={{ color: COLORS.gold }}>
                Book Your Experience
              </p>

              <h1 className="text-5xl md:text-7xl font-black tracking-widest text-white leading-none mt-2">
                RESERVE YOUR JOURNEY
              </h1>

              <p className="text-white/78 mt-6 max-w-2xl leading-relaxed text-base md:text-lg">
                Choose your program, select your date and send your booking
                request. Our team will contact you with confirmation and next
                steps.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#booking-form"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  Book Now
                </a>

                <a
                  href="/programs"
                  className="inline-flex justify-center px-7 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(255,255,255,0.32)",
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  View Programs
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Booking Area */}
      <section
        id="booking-form"
        className="py-24 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FFFDF8 0%, #F7F1E8 55%, #EFE2D3 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
                Booking Details
              </p>

              <h2
                className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
                style={{ color: COLORS.text }}
              >
                COMPLETE YOUR BOOKING
              </h2>

              <p
                className="mt-5 max-w-2xl mx-auto leading-relaxed"
                style={{ color: COLORS.muted }}
              >
                Fill the form and our team will contact you to confirm
                availability, payment options and travel details.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            {/* Program Info */}
            <Reveal>
              <div
                className="rounded-[2rem] overflow-hidden sticky top-28"
                style={{
                  background: COLORS.softCream,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 25px 70px rgba(58,45,36,0.10)",
                }}
              >
                <div className="relative h-[360px] overflow-hidden">
                  <img
                    src={selectedProgram.image}
                    alt={selectedProgram.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute top-5 left-5">
                    <span
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                      Featured Experience
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-3xl font-black leading-tight">
                      {selectedProgram.title}
                    </h3>

                    <p className="text-white/75 text-sm flex items-center gap-2 mt-2">
                      <MapPin className="w-4 h-4" />
                      {selectedProgram.location}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p
                    className="leading-relaxed mb-6"
                    style={{ color: COLORS.muted }}
                  >
                    {selectedProgram.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div
                      className="rounded-2xl p-4"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <Clock className="w-5 h-5 mb-2" style={{ color: COLORS.gold }} />
                      <p className="text-xs font-black uppercase tracking-widest" style={{ color: COLORS.muted }}>
                        Duration
                      </p>
                      <p className="font-black" style={{ color: COLORS.text }}>
                        {selectedProgram.duration}
                      </p>
                    </div>

                    <div
                      className="rounded-2xl p-4"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <Users className="w-5 h-5 mb-2" style={{ color: COLORS.gold }} />
                      <p className="text-xs font-black uppercase tracking-widest" style={{ color: COLORS.muted }}>
                        Group Size
                      </p>
                      <p className="font-black" style={{ color: COLORS.text }}>
                        {selectedProgram.groupSize}
                      </p>
                    </div>

                    <div
                      className="rounded-2xl p-4"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <Leaf className="w-5 h-5 mb-2" style={{ color: COLORS.gold }} />
                      <p className="text-xs font-black uppercase tracking-widest" style={{ color: COLORS.muted }}>
                        Impact
                      </p>
                      <p className="font-black" style={{ color: COLORS.text }}>
                        {selectedProgram.impact}
                      </p>
                    </div>

                    <div
                      className="rounded-2xl p-4"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <Star
                        className="w-5 h-5 mb-2"
                        fill={COLORS.gold}
                        style={{ color: COLORS.gold }}
                      />
                      <p className="text-xs font-black uppercase tracking-widest" style={{ color: COLORS.muted }}>
                        Rating
                      </p>
                      <p className="font-black" style={{ color: COLORS.text }}>
                        {selectedProgram.rating}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProgram.includes.map((item) => (
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

                  <div
                    className="rounded-[1.5rem] p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(216,154,61,0.14), rgba(94,111,82,0.10))",
                      border: "1px solid rgba(216,154,61,0.20)",
                    }}
                  >
                    <p
                      className="text-xs font-black tracking-widest uppercase"
                      style={{ color: COLORS.muted }}
                    >
                      Starting From
                    </p>

                    <p className="text-4xl font-black mt-1" style={{ color: COLORS.bronze }}>
                      ${pricePerPerson}
                    </p>

                    <p className="text-sm" style={{ color: COLORS.muted }}>
                      Per Person
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

                        {/* Booking Form */}
            <Reveal delay={120}>
              <div
                className="rounded-[2rem] p-6 md:p-8"
                style={{
                  background: COLORS.softCream,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 25px 70px rgba(58,45,36,0.10)",
                }}
              >
                {submitted ? (
                  <div className="text-center py-16">
                    <div
                      className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6"
                      style={{
                        background: "rgba(216,154,61,0.14)",
                        color: COLORS.gold,
                      }}
                    >
                      <BadgeCheck className="h-10 w-10" />
                    </div>

                    <h3
                      className="text-3xl font-black mb-3"
                      style={{ color: COLORS.text }}
                    >
                      Booking Request Sent!
                    </h3>

                    <p className="max-w-md mx-auto leading-relaxed" style={{ color: COLORS.muted }}>
                      Thank you. Our team will contact you shortly with
                      confirmation, availability and payment details.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-white text-xs font-black tracking-widest uppercase"
                      style={{ background: COLORS.text }}
                    >
                      Make Another Booking
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <p
                        className="script-font text-4xl"
                        style={{ color: COLORS.bronze }}
                      >
                        Reserve Now
                      </p>

                      <h2
                        className="text-3xl md:text-5xl font-black tracking-widest leading-none mt-2"
                        style={{ color: COLORS.text }}
                      >
                        BOOKING FORM
                      </h2>

                      <p className="mt-4 leading-relaxed" style={{ color: COLORS.muted }}>
                        Select your preferred program and send your booking
                        request.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          className="text-sm font-black mb-2 block"
                          style={{ color: COLORS.text }}
                        >
                          Select Program
                        </label>

                        <select
                          value={selectedProgramTitle}
                          onChange={(e) => setSelectedProgramTitle(e.target.value)}
                          className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                          style={{
                            background: COLORS.cream,
                            border: `1px solid ${COLORS.border}`,
                            color: COLORS.text,
                          }}
                        >
                          {programs.map((program) => (
                            <option key={program.title}>{program.title}</option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label
                            className="text-sm font-black mb-2 block"
                            style={{ color: COLORS.text }}
                          >
                            Select Date
                          </label>

                          <input
                            required
                            type="date"
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
                            Participants
                          </label>

                          <select
                            value={persons}
                            onChange={(e) => setPersons(Number(e.target.value))}
                            className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                            style={{
                              background: COLORS.cream,
                              border: `1px solid ${COLORS.border}`,
                              color: COLORS.text,
                            }}
                          >
                            <option value={1}>1 Person</option>
                            <option value={2}>2 Persons</option>
                            <option value={3}>3 Persons</option>
                            <option value={4}>4 Persons</option>
                            <option value={5}>5 Persons</option>
                          </select>
                        </div>
                      </div>

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

                          <div className="relative">
                            <Mail
                              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                              style={{ color: COLORS.muted }}
                            />
                            <input
                              required
                              type="email"
                              placeholder="Enter your email"
                              className="w-full rounded-2xl pl-11 pr-4 py-4 text-sm outline-none"
                              style={{
                                background: COLORS.cream,
                                border: `1px solid ${COLORS.border}`,
                                color: COLORS.text,
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          className="text-sm font-black mb-2 block"
                          style={{ color: COLORS.text }}
                        >
                          Your Phone
                        </label>

                        <div className="relative">
                          <Phone
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4"
                            style={{ color: COLORS.muted }}
                          />
                          <input
                            required
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full rounded-2xl pl-11 pr-4 py-4 text-sm outline-none"
                            style={{
                              background: COLORS.cream,
                              border: `1px solid ${COLORS.border}`,
                              color: COLORS.text,
                            }}
                          />
                        </div>
                      </div>

                      {/* Price Calculator */}
                      <div
                        className="rounded-[1.5rem] p-5"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(216,154,61,0.12), rgba(94,111,82,0.08))",
                          border: "1px solid rgba(216,154,61,0.20)",
                        }}
                      >
                        <div className="flex justify-between mb-3" style={{ color: COLORS.muted }}>
                          <p>Price Per Person</p>
                          <p>${pricePerPerson}</p>
                        </div>

                        <div className="flex justify-between mb-3" style={{ color: COLORS.muted }}>
                          <p>Participants</p>
                          <p>{persons}</p>
                        </div>

                        <div
                          className="pt-4 flex justify-between text-2xl font-black"
                          style={{
                            borderTop: "1px solid rgba(216,154,61,0.25)",
                            color: COLORS.text,
                          }}
                        >
                          <p>Total</p>
                          <p style={{ color: COLORS.bronze }}>${total}</p>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
                        style={{
                          background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                        }}
                      >
                        Continue to Booking
                        <CreditCard className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setWishlist(!wishlist)}
                        className="w-full flex items-center justify-center gap-2 text-sm font-bold transition"
                        style={{ color: wishlist ? "#D94A38" : COLORS.muted }}
                      >
                        <Heart
                          className="w-4 h-4"
                          fill={wishlist ? "#D94A38" : "transparent"}
                        />
                        {wishlist ? "Added to Wishlist" : "Add to Wishlist"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust Items */}
      <section
        className="py-20 px-6"
        style={{
          background: COLORS.softCream,
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {trustItems.map((item, i) => {
            const Icon = item.icon

            return (
              <Reveal key={item.title} delay={i * 80}>
                <div
                  className="rounded-[2rem] p-6 text-center h-full transition hover:-translate-y-2"
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

                  <h3 className="font-black text-lg mb-2" style={{ color: COLORS.text }}>
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            )
          })}
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
            Need Help?
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-widest text-white mt-2">
            TALK TO OUR TRAVEL TEAM
          </h2>

          <p className="text-white/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            Not sure which program to choose? Contact us and we will help you
            plan the best experience for your journey.
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