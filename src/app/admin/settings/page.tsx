"use client"

import { useCallback, useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  FileText,
  Globe,
  LinkIcon,
  Mail,
  MessageCircle,
  Phone,
  RefreshCcw,
  Save,
  Sparkles,
  Type,
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

type SiteSettings = {
  companyName: string
  email: string
  phone: string
  whatsapp: string
  website: string
  heroTitle: string
  heroSubtitle: string
  footerText: string
  facebookUrl: string
  instagramUrl: string
  linkedinUrl: string
  youtubeUrl: string
}

const initialSettings: SiteSettings = {
  companyName: "",
  email: "",
  phone: "",
  whatsapp: "",
  website: "",
  heroTitle: "",
  heroSubtitle: "",
  footerText: "",
  facebookUrl: "",
  instagramUrl: "",
  linkedinUrl: "",
  youtubeUrl: "",
}

export default function AdminSettingsPage() {
  const [form, setForm] = useState<SiteSettings>(initialSettings)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const loadSettings = useCallback(async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/site-settings", {
        cache: "no-store",
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to load settings")
      }

      setForm({
        companyName: result.data.companyName || "",
        email: result.data.email || "",
        phone: result.data.phone || "",
        whatsapp: result.data.whatsapp || "",
        website: result.data.website || "",
        heroTitle: result.data.heroTitle || "",
        heroSubtitle: result.data.heroSubtitle || "",
        footerText: result.data.footerText || "",
        facebookUrl: result.data.facebookUrl || "",
        instagramUrl: result.data.instagramUrl || "",
        linkedinUrl: result.data.linkedinUrl || "",
        youtubeUrl: result.data.youtubeUrl || "",
      })
    } catch (err) {
      console.error(err)
      setError("Site settings load කරන්න බැරි වුණා. Please try again.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadSettings()
  }, [loadSettings])

  const updateForm = (key: keyof SiteSettings, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/site-settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to update settings")
      }

      setSuccess("Site settings updated successfully.")
      await loadSettings()
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      console.error(err)
      setError("Site settings save කරන්න බැරි වුණා. Required fields check කරන්න.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <main
      className="min-h-screen px-6 pt-32 pb-20"
      style={{ background: COLORS.cream, color: COLORS.text }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest mb-6"
              style={{ color: COLORS.bronze }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>

            <p className="script-font text-5xl" style={{ color: COLORS.bronze }}>
              CMS
            </p>

            <h1
              className="text-4xl md:text-6xl font-black tracking-widest leading-none mt-2"
              style={{ color: COLORS.text }}
            >
              SITE SETTINGS
            </h1>

            <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: COLORS.muted }}>
              Manage basic website information, contact details, hero text,
              footer text and social media links.
            </p>
          </div>

          <button
            onClick={loadSettings}
            disabled={loading}
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1 disabled:opacity-60"
            style={{
              background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
            }}
          >
            <RefreshCcw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {error && (
          <div
            className="rounded-2xl p-4 mb-6 text-sm font-bold"
            style={{
              background: "rgba(217,74,56,0.10)",
              border: "1px solid rgba(217,74,56,0.20)",
              color: "#D94A38",
            }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            className="rounded-2xl p-4 mb-6 text-sm font-bold flex items-center gap-3"
            style={{
              background: "rgba(94,111,82,0.12)",
              border: "1px solid rgba(94,111,82,0.20)",
              color: COLORS.olive,
            }}
          >
            <CheckCircle2 className="w-5 h-5" />
            {success}
          </div>
        )}

                {loading ? (
          <section
            className="rounded-[2rem] p-10 text-center"
            style={{
              background: COLORS.softCream,
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
            }}
          >
            <Sparkles
              className="w-12 h-12 mx-auto mb-4 animate-pulse"
              style={{ color: COLORS.gold }}
            />

            <h2 className="text-2xl font-black">
              Loading settings...
            </h2>

            <p className="mt-2" style={{ color: COLORS.muted }}>
              Please wait while we load current website settings.
            </p>
          </section>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
            <section
              className="rounded-[2rem] p-6 md:p-8"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
              }}
            >
              <h2 className="text-2xl font-black tracking-widest uppercase mb-8">
                Website Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="text-sm font-black mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4" style={{ color: COLORS.gold }} />
                    Company Name
                  </label>

                  <input
                    required
                    value={form.companyName}
                    onChange={(e) => updateForm("companyName", e.target.value)}
                    placeholder="Travel With Purpose"
                    className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.text,
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-black mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" style={{ color: COLORS.gold }} />
                      Email
                    </label>

                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      placeholder="info@travelwithpurpose.lk"
                      className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-black mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" style={{ color: COLORS.gold }} />
                      Phone
                    </label>

                    <input
                      required
                      value={form.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                      placeholder="+94 77 000 0000"
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
                    <label className="text-sm font-black mb-2 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" style={{ color: COLORS.gold }} />
                      WhatsApp Number
                    </label>

                    <input
                      required
                      value={form.whatsapp}
                      onChange={(e) => updateForm("whatsapp", e.target.value)}
                      placeholder="+94770000000"
                      className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-black mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4" style={{ color: COLORS.gold }} />
                      Website
                    </label>

                    <input
                      required
                      value={form.website}
                      onChange={(e) => updateForm("website", e.target.value)}
                      placeholder="https://travelwithpurpose.lk"
                      className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-black mb-2 flex items-center gap-2">
                    <Type className="w-4 h-4" style={{ color: COLORS.gold }} />
                    Hero Title
                  </label>

                  <input
                    required
                    value={form.heroTitle}
                    onChange={(e) => updateForm("heroTitle", e.target.value)}
                    placeholder="Travel With Purpose"
                    className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.text,
                    }}
                  />
                </div>

                <div>
                  <label className="text-sm font-black mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" style={{ color: COLORS.gold }} />
                    Hero Subtitle
                  </label>

                  <textarea
                    required
                    rows={4}
                    value={form.heroSubtitle}
                    onChange={(e) => updateForm("heroSubtitle", e.target.value)}
                    placeholder="Discover meaningful travel experiences across Sri Lanka..."
                    className="w-full rounded-2xl px-4 py-4 text-sm outline-none resize-none"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.text,
                    }}
                  />
                </div>

                <div>
                  <label className="text-sm font-black mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" style={{ color: COLORS.gold }} />
                    Footer Text
                  </label>

                  <textarea
                    required
                    rows={4}
                    value={form.footerText}
                    onChange={(e) => updateForm("footerText", e.target.value)}
                    placeholder="Footer description..."
                    className="w-full rounded-2xl px-4 py-4 text-sm outline-none resize-none"
                    style={{
                      background: COLORS.cream,
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.text,
                    }}
                  />
                </div>

                                <div className="pt-5">
                  <h3 className="text-xl font-black tracking-widest uppercase mb-5">
                    Social Links
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input
                      value={form.facebookUrl}
                      onChange={(e) => updateForm("facebookUrl", e.target.value)}
                      placeholder="Facebook URL"
                      className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                      }}
                    />

                    <input
                      value={form.instagramUrl}
                      onChange={(e) => updateForm("instagramUrl", e.target.value)}
                      placeholder="Instagram URL"
                      className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                      }}
                    />

                    <input
                      value={form.linkedinUrl}
                      onChange={(e) => updateForm("linkedinUrl", e.target.value)}
                      placeholder="LinkedIn URL"
                      className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                      }}
                    />

                    <input
                      value={form.youtubeUrl}
                      onChange={(e) => updateForm("youtubeUrl", e.target.value)}
                      placeholder="YouTube URL"
                      className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                      style={{
                        background: COLORS.cream,
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text,
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={saving}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                  }}
                >
                  {saving ? "Saving Settings..." : "Save Settings"}
                  <Save className="w-4 h-4" />
                </button>
              </div>
            </section>

            <aside
              className="lg:sticky lg:top-28 rounded-[2rem] p-6"
              style={{
                background: COLORS.softCream,
                border: `1px solid ${COLORS.border}`,
                boxShadow: "0 25px 70px rgba(58,45,36,0.10)",
              }}
            >
              <h2 className="text-2xl font-black tracking-widest uppercase mb-6">
                Live Preview
              </h2>

              <div
                className="rounded-[2rem] p-6"
                style={{
                  background: COLORS.cream,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <p className="script-font text-4xl" style={{ color: COLORS.bronze }}>
                  Website
                </p>

                <h3 className="text-3xl font-black mt-2">
                  {form.companyName || "Company Name"}
                </h3>

                <p className="mt-4 text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                  {form.heroSubtitle || "Hero subtitle preview will appear here."}
                </p>

                <div className="mt-6 space-y-3 text-sm">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" style={{ color: COLORS.gold }} />
                    {form.email || "Email"}
                  </p>

                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" style={{ color: COLORS.gold }} />
                    {form.phone || "Phone"}
                  </p>

                  <p className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" style={{ color: COLORS.gold }} />
                    {form.whatsapp || "WhatsApp"}
                  </p>

                  <p className="flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" style={{ color: COLORS.gold }} />
                    {form.website || "Website"}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                මේ settings save කළාට පස්සේ අපි next step එකේ Home page,
                Footer සහ WhatsApp button එකට මේ data connect කරමු.
              </p>
            </aside>
          </form>
        )}
      </div>
    </main>
  )
}