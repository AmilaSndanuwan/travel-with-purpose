"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LockKeyhole, LogIn } from "lucide-react"

const COLORS = {
  gold: "#D89A3D",
  bronze: "#A66A2C",
  cream: "#F7F1E8",
  softCream: "#FFFDF8",
  text: "#3A2D24",
  muted: "#7B6B5F",
  border: "rgba(58,45,36,0.12)",
}

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Login failed")
      }

      router.push("/admin")
      router.refresh()
    } catch (err) {
      console.error(err)
      setError("Password එක වැරදියි. ආයෙත් try කරන්න.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16"
      style={{ background: COLORS.cream, color: COLORS.text }}
    >
      <div
        className="w-full max-w-md rounded-[2rem] p-7 md:p-8"
        style={{
          background: COLORS.softCream,
          border: `1px solid ${COLORS.border}`,
          boxShadow: "0 25px 70px rgba(58,45,36,0.12)",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
          style={{
            background: "rgba(216,154,61,0.14)",
            color: COLORS.gold,
          }}
        >
          <LockKeyhole className="w-8 h-8" />
        </div>

        <div className="text-center mb-8">
          <p className="script-font text-4xl" style={{ color: COLORS.bronze }}>
            Admin Access
          </p>

          <h1
            className="text-3xl font-black tracking-widest uppercase mt-2"
            style={{ color: COLORS.text }}
          >
            Login
          </h1>

          <p className="text-sm mt-3" style={{ color: COLORS.muted }}>
            Enter admin password to access the dashboard.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              className="text-sm font-black mb-2 block"
              style={{ color: COLORS.text }}
            >
              Admin Password
            </label>

            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
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
            {loading ? "Logging in..." : "Login"}
            <LogIn className="w-4 h-4" />
          </button>
        </form>
      </div>
    </main>
  )
}