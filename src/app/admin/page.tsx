"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  CalendarDays,
  LogOut,
  Mail,
  MessageCircle,
  RefreshCcw,
  Search,
  Trash2,
  Users,
} from "lucide-react"

const COLORS = {
  gold: "#D89A3D",
  bronze: "#A66A2C",
  dark: "#2A1E16",
  cream: "#F7F1E8",
  softCream: "#FFFDF8",
  text: "#3A2D24",
  muted: "#7B6B5F",
  border: "rgba(58,45,36,0.12)",
}

type Booking = {
  id: number
  programName: string
  bookingDate: string
  participants: number
  name: string
  email: string
  phone: string
  totalPrice: number
  createdAt: string
}

type ContactMessage = {
  id: number
  name: string
  email: string
  phone: string | null
  inquiryType: string
  subject: string
  message: string
  createdAt: string
}

type Subscriber = {
  id: number
  email: string
  createdAt: string
}

type DeleteType = "booking" | "message" | "subscriber"

export default function AdminDashboard() {
  const router = useRouter()

  const [bookings, setBookings] = useState<Booking[]>([])
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])

  const [bookingTotal, setBookingTotal] = useState(0)
  const [messageTotal, setMessageTotal] = useState(0)
  const [subscriberTotal, setSubscriberTotal] = useState(0)

  const [loading, setLoading] = useState(true)
  const [deletingKey, setDeletingKey] = useState("")
  const [error, setError] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const loadAdminData = useCallback(async () => {
    setLoading(true)
    setError("")

    try {
      const [bookingsRes, contactRes, newsletterRes] = await Promise.all([
        fetch("/api/bookings"),
        fetch("/api/contact"),
        fetch("/api/newsletter"),
      ])

      const bookingsData = await bookingsRes.json()
      const contactData = await contactRes.json()
      const newsletterData = await newsletterRes.json()

      if (!bookingsData.success || !contactData.success || !newsletterData.success) {
        throw new Error("Failed to load admin data")
      }

      setBookings(bookingsData.data || [])
      setMessages(contactData.data || [])
      setSubscribers(newsletterData.data || [])

      setBookingTotal(bookingsData.total || 0)
      setMessageTotal(contactData.total || 0)
      setSubscriberTotal(newsletterData.total || 0)
    } catch (err) {
      console.error(err)
      setError("Admin data load කරන්න බැරි වුණා. Please try again.")
    } finally {
      setLoading(false)
    }
  }, [])

  const handleDelete = async (type: DeleteType, id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?")

    if (!confirmDelete) return

    const key = `${type}-${id}`
    setDeletingKey(key)
    setError("")

    try {
      const endpoint =
        type === "booking"
          ? "/api/bookings"
          : type === "message"
          ? "/api/contact"
          : "/api/newsletter"

      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Delete failed")
      }

      await loadAdminData()
    } catch (err) {
      console.error(err)
      setError("Record delete කරන්න බැරි වුණා. Please try again.")
    } finally {
      setDeletingKey("")
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      })

      router.push("/admin/login")
      router.refresh()
    } catch (err) {
      console.error(err)
      setError("Logout කරන්න බැරි වුණා. Please try again.")
    }
  }

  const normalizedSearch = searchQuery.trim().toLowerCase()

  const filteredBookings = bookings.filter((booking) => {
    const text = `
      ${booking.name}
      ${booking.email}
      ${booking.phone}
      ${booking.programName}
      ${booking.bookingDate}
    `.toLowerCase()

    return text.includes(normalizedSearch)
  })

  const filteredMessages = messages.filter((item) => {
    const text = `
      ${item.name}
      ${item.email}
      ${item.phone || ""}
      ${item.inquiryType}
      ${item.subject}
      ${item.message}
    `.toLowerCase()

    return text.includes(normalizedSearch)
  })

  const filteredSubscribers = subscribers.filter((subscriber) => {
    return subscriber.email.toLowerCase().includes(normalizedSearch)
  })

  useEffect(() => {
    loadAdminData()
  }, [loadAdminData])

  return (
    <main
      className="min-h-screen px-6 pt-32 pb-20"
      style={{ background: COLORS.cream, color: COLORS.text }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
              Admin Panel
            </p>

            <h1
              className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
              style={{ color: COLORS.text }}
            >
              DASHBOARD
            </h1>

            <p
              className="mt-4 max-w-2xl leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              View latest bookings, contact messages and newsletter subscribers
              from your Travel With Purpose website.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={loadAdminData}
              disabled={loading}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1 disabled:opacity-60"
              style={{
                background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
              }}
            >
              <RefreshCcw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-sm font-black tracking-widest uppercase transition hover:-translate-y-1"
              style={{
                background: COLORS.softCream,
                color: COLORS.text,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {error && (
          <div
            className="rounded-2xl p-4 mb-8 text-sm font-bold"
            style={{
              background: "rgba(217,74,56,0.10)",
              border: "1px solid rgba(217,74,56,0.20)",
              color: "#D94A38",
            }}
          >
            {error}
          </div>
        )}

        {/* Search Box */}
        <div
          className="rounded-[2rem] p-4 md:p-5 mb-8 flex items-center gap-3"
          style={{
            background: COLORS.softCream,
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 18px 50px rgba(58,45,36,0.06)",
          }}
        >
          <Search className="w-5 h-5 shrink-0" style={{ color: COLORS.bronze }} />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search bookings, messages or subscribers..."
            className="w-full bg-transparent outline-none text-sm md:text-base"
            style={{ color: COLORS.text }}
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="px-4 py-2 rounded-full text-xs font-black uppercase"
              style={{
                background: "rgba(216,154,61,0.12)",
                color: COLORS.bronze,
              }}
            >
              Clear
            </button>
          )}
        </div>

                {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div
            className="rounded-[2rem] p-6"
            style={{
              background: COLORS.softCream,
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="text-sm font-black uppercase tracking-widest"
                  style={{ color: COLORS.muted }}
                >
                  Total Bookings
                </p>

                <h2
                  className="text-5xl font-black mt-3"
                  style={{ color: COLORS.text }}
                >
                  {loading ? "..." : bookingTotal}
                </h2>
              </div>

              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(216,154,61,0.14)",
                  color: COLORS.gold,
                }}
              >
                <CalendarDays className="w-7 h-7" />
              </div>
            </div>
          </div>

          <div
            className="rounded-[2rem] p-6"
            style={{
              background: COLORS.softCream,
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="text-sm font-black uppercase tracking-widest"
                  style={{ color: COLORS.muted }}
                >
                  Messages
                </p>

                <h2
                  className="text-5xl font-black mt-3"
                  style={{ color: COLORS.text }}
                >
                  {loading ? "..." : messageTotal}
                </h2>
              </div>

              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(216,154,61,0.14)",
                  color: COLORS.gold,
                }}
              >
                <MessageCircle className="w-7 h-7" />
              </div>
            </div>
          </div>

          <div
            className="rounded-[2rem] p-6"
            style={{
              background: COLORS.softCream,
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="text-sm font-black uppercase tracking-widest"
                  style={{ color: COLORS.muted }}
                >
                  Subscribers
                </p>

                <h2
                  className="text-5xl font-black mt-3"
                  style={{ color: COLORS.text }}
                >
                  {loading ? "..." : subscriberTotal}
                </h2>
              </div>

              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(216,154,61,0.14)",
                  color: COLORS.gold,
                }}
              >
                <Users className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>

        {/* Latest Bookings */}
        <section
          className="rounded-[2rem] p-6 md:p-8 mb-10"
          style={{
            background: COLORS.softCream,
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
          }}
        >
          <h2 className="text-2xl font-black tracking-widest uppercase mb-6">
            Latest Bookings
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[980px]">
              <thead>
                <tr style={{ color: COLORS.muted }}>
                  <th className="text-left py-3 pr-4">Name</th>
                  <th className="text-left py-3 pr-4">Program</th>
                  <th className="text-left py-3 pr-4">Booking Date</th>
                  <th className="text-left py-3 pr-4">Persons</th>
                  <th className="text-left py-3 pr-4">Phone</th>
                  <th className="text-left py-3 pr-4">Total</th>
                  <th className="text-left py-3 pr-4">Created</th>
                  <th className="text-left py-3 pr-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredBookings.length === 0 ? (
                  <tr>
                    <td
                      className="py-6"
                      colSpan={8}
                      style={{ color: COLORS.muted }}
                    >
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  filteredBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      style={{ borderTop: `1px solid ${COLORS.border}` }}
                    >
                      <td className="py-4 pr-4 font-bold">{booking.name}</td>
                      <td className="py-4 pr-4">{booking.programName}</td>
                      <td className="py-4 pr-4">{booking.bookingDate}</td>
                      <td className="py-4 pr-4">{booking.participants}</td>
                      <td className="py-4 pr-4">{booking.phone}</td>
                      <td className="py-4 pr-4 font-black">
                        ${booking.totalPrice}
                      </td>
                      <td className="py-4 pr-4">
                        {formatDate(booking.createdAt)}
                      </td>
                      <td className="py-4 pr-4">
                        <button
                          onClick={() => handleDelete("booking", booking.id)}
                          disabled={deletingKey === `booking-${booking.id}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase transition hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                          style={{
                            background: "rgba(217,74,56,0.10)",
                            color: "#D94A38",
                            border: "1px solid rgba(217,74,56,0.20)",
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                          {deletingKey === `booking-${booking.id}`
                            ? "Deleting..."
                            : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

                {/* Latest Contact Messages */}
        <section
          className="rounded-[2rem] p-6 md:p-8 mb-10"
          style={{
            background: COLORS.softCream,
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
          }}
        >
          <h2 className="text-2xl font-black tracking-widest uppercase mb-6">
            Latest Contact Messages
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredMessages.length === 0 ? (
              <p style={{ color: COLORS.muted }}>No messages found.</p>
            ) : (
              filteredMessages.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl p-5"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-black text-lg">{item.subject}</h3>

                      <p
                        className="text-sm font-bold"
                        style={{ color: COLORS.bronze }}
                      >
                        {item.name} • {item.email}
                      </p>
                    </div>

                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-black uppercase shrink-0"
                      style={{
                        background: "rgba(216,154,61,0.14)",
                        color: COLORS.bronze,
                      }}
                    >
                      {item.inquiryType}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: COLORS.muted }}
                  >
                    {item.message}
                  </p>

                  <div
                    className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold"
                    style={{ color: COLORS.muted }}
                  >
                    <div className="flex flex-wrap gap-3">
                      <span>{item.phone || "No phone"}</span>
                      <span>•</span>
                      <span>{formatDate(item.createdAt)}</span>
                    </div>

                    <button
                      onClick={() => handleDelete("message", item.id)}
                      disabled={deletingKey === `message-${item.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase transition hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{
                        background: "rgba(217,74,56,0.10)",
                        color: "#D94A38",
                        border: "1px solid rgba(217,74,56,0.20)",
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                      {deletingKey === `message-${item.id}` ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

                {/* Newsletter Subscribers */}
        <section
          className="rounded-[2rem] p-6 md:p-8"
          style={{
            background: COLORS.softCream,
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
          }}
        >
          <h2 className="text-2xl font-black tracking-widest uppercase mb-6">
            Newsletter Subscribers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSubscribers.length === 0 ? (
              <p style={{ color: COLORS.muted }}>No subscribers found.</p>
            ) : (
              filteredSubscribers.map((subscriber) => (
                <div
                  key={subscriber.id}
                  className="rounded-2xl p-4 flex items-center justify-between gap-3"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(216,154,61,0.14)",
                        color: COLORS.gold,
                      }}
                    >
                      <Mail className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="font-bold text-sm truncate">
                        {subscriber.email}
                      </p>

                      <p className="text-xs mt-1" style={{ color: COLORS.muted }}>
                        {formatDate(subscriber.createdAt)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete("subscriber", subscriber.id)}
                    disabled={deletingKey === `subscriber-${subscriber.id}`}
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: "rgba(217,74,56,0.10)",
                      color: "#D94A38",
                      border: "1px solid rgba(217,74,56,0.20)",
                    }}
                    aria-label="Delete subscriber"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  )
}