"use client"

import { useCallback, useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  ImageIcon,
  MapPin,
  Pencil,
  Plus,
  RefreshCcw,
  Save,
  Sparkles,
  Trash2,
  Users,
  X,
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

type Program = {
  id: number
  title: string
  slug: string
  location: string
  description: string
  duration: string
  groupSize: string
  impact: string
  rating: string
  price: number
  imageUrl: string
  tags: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

type ProgramForm = {
  title: string
  slug: string
  location: string
  description: string
  duration: string
  groupSize: string
  impact: string
  rating: string
  price: string
  imageUrl: string
  tags: string
  isActive: boolean
}

const initialForm: ProgramForm = {
  title: "",
  slug: "",
  location: "",
  description: "",
  duration: "",
  groupSize: "",
  impact: "",
  rating: "",
  price: "",
  imageUrl: "",
  tags: "",
  isActive: true,
}

const createSlug = (value: string) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export default function AdminProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([])
  const [form, setForm] = useState<ProgramForm>(initialForm)

  const [editingId, setEditingId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [actionKey, setActionKey] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const loadPrograms = useCallback(async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/programs?admin=true", {
        cache: "no-store",
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to load programs")
      }

      setPrograms(result.data || [])
    } catch (err) {
      console.error(err)
      setError("Programs load කරන්න බැරි වුණා. Please try again.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadPrograms()
  }, [loadPrograms])

    const updateForm = (key: keyof ProgramForm, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleTitleChange = (value: string) => {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: editingId ? prev.slug : createSlug(value),
    }))
  }

  const resetForm = () => {
    setForm(initialForm)
    setEditingId(null)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSaving(true)
    setError("")
    setSuccess("")

    try {
      const payload = {
        id: editingId,
        title: form.title,
        slug: form.slug || createSlug(form.title),
        location: form.location,
        description: form.description,
        duration: form.duration,
        groupSize: form.groupSize,
        impact: form.impact,
        rating: form.rating,
        price: Number(form.price),
        imageUrl: form.imageUrl,
        tags: form.tags,
        isActive: form.isActive,
      }

      const response = await fetch("/api/programs", {
        method: editingId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to save program")
      }

      setSuccess(editingId ? "Program updated successfully." : "Program added successfully.")
      resetForm()
      await loadPrograms()
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      console.error(err)
      setError("Program save කරන්න බැරි වුණා. Slug duplicate වෙලාද බලන්න.")
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (program: Program) => {
    setEditingId(program.id)
    setForm({
      title: program.title,
      slug: program.slug,
      location: program.location,
      description: program.description,
      duration: program.duration,
      groupSize: program.groupSize,
      impact: program.impact,
      rating: program.rating,
      price: String(program.price),
      imageUrl: program.imageUrl,
      tags: program.tags,
      isActive: program.isActive,
    })

    setError("")
    setSuccess("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this program?")
    if (!confirmDelete) return

    setActionKey(`delete-${id}`)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/programs", {
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

      setSuccess("Program deleted successfully.")
      await loadPrograms()
    } catch (err) {
      console.error(err)
      setError("Program delete කරන්න බැරි වුණා. Please try again.")
    } finally {
      setActionKey("")
    }
  }

  const handleToggleActive = async (program: Program) => {
    setActionKey(`toggle-${program.id}`)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/programs", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: program.id,
          title: program.title,
          slug: program.slug,
          location: program.location,
          description: program.description,
          duration: program.duration,
          groupSize: program.groupSize,
          impact: program.impact,
          rating: program.rating,
          price: program.price,
          imageUrl: program.imageUrl,
          tags: program.tags,
          isActive: !program.isActive,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Update failed")
      }

      setSuccess(program.isActive ? "Program hidden successfully." : "Program activated successfully.")
      await loadPrograms()
    } catch (err) {
      console.error(err)
      setError("Program status update කරන්න බැරි වුණා.")
    } finally {
      setActionKey("")
    }
  }

  const splitTags = (tags: string) => {
    return tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
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
              PROGRAMS
            </h1>

            <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: COLORS.muted }}>
              Add, edit, hide or delete travel programs from your website without
              changing code.
            </p>
          </div>

          <button
            onClick={loadPrograms}
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

                {/* Add / Edit Form */}
        <section
          className="rounded-[2rem] p-6 md:p-8 mb-10"
          style={{
            background: COLORS.softCream,
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-black tracking-widest uppercase">
                {editingId ? "Edit Program" : "Add New Program"}
              </h2>

              <p className="text-sm mt-2" style={{ color: COLORS.muted }}>
                Fill the details below. Tags should be comma separated.
              </p>
            </div>

            {editingId && (
              <button
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-black uppercase"
                style={{
                  background: "rgba(217,74,56,0.10)",
                  color: "#D94A38",
                  border: "1px solid rgba(217,74,56,0.20)",
                }}
              >
                <X className="w-4 h-4" />
                Cancel Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-black mb-2 block">
                  Program Title
                </label>

                <input
                  required
                  value={form.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Organic Farming Program"
                  className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                  }}
                />
              </div>

              <div>
                <label className="text-sm font-black mb-2 block">
                  Slug
                </label>

                <input
                  required
                  value={form.slug}
                  onChange={(e) => updateForm("slug", createSlug(e.target.value))}
                  placeholder="organic-farming-program"
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
              <label className="text-sm font-black mb-2 block">
                Description
              </label>

              <textarea
                required
                rows={4}
                value={form.description}
                onChange={(e) => updateForm("description", e.target.value)}
                placeholder="Write a short description about this program..."
                className="w-full rounded-2xl px-4 py-4 text-sm outline-none resize-none"
                style={{
                  background: COLORS.cream,
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="text-sm font-black mb-2 block">
                  Location
                </label>

                <input
                  required
                  value={form.location}
                  onChange={(e) => updateForm("location", e.target.value)}
                  placeholder="Haputale, Sri Lanka"
                  className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                  }}
                />
              </div>

              <div>
                <label className="text-sm font-black mb-2 block">
                  Duration
                </label>

                <input
                  required
                  value={form.duration}
                  onChange={(e) => updateForm("duration", e.target.value)}
                  placeholder="5 Days"
                  className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                  }}
                />
              </div>

              <div>
                <label className="text-sm font-black mb-2 block">
                  Group Size
                </label>

                <input
                  required
                  value={form.groupSize}
                  onChange={(e) => updateForm("groupSize", e.target.value)}
                  placeholder="6 - 10"
                  className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="text-sm font-black mb-2 block">
                  Impact
                </label>

                <input
                  required
                  value={form.impact}
                  onChange={(e) => updateForm("impact", e.target.value)}
                  placeholder="Community Impact"
                  className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                  }}
                />
              </div>

              <div>
                <label className="text-sm font-black mb-2 block">
                  Rating
                </label>

                <input
                  required
                  value={form.rating}
                  onChange={(e) => updateForm("rating", e.target.value)}
                  placeholder="4.7"
                  className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                  }}
                />
              </div>

              <div>
                <label className="text-sm font-black mb-2 block">
                  Price Per Person
                </label>

                <input
                  required
                  type="number"
                  min="1"
                  value={form.price}
                  onChange={(e) => updateForm("price", e.target.value)}
                  placeholder="320"
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
              <label className="text-sm font-black mb-2 block">
                Image URL
              </label>

              <input
                required
                value={form.imageUrl}
                onChange={(e) => updateForm("imageUrl", e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                style={{
                  background: COLORS.cream,
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                }}
              />
            </div>

            <div>
              <label className="text-sm font-black mb-2 block">
                Tags
              </label>

              <input
                required
                value={form.tags}
                onChange={(e) => updateForm("tags", e.target.value)}
                placeholder="Farm work, Village stay, Local meals, Guide support"
                className="w-full rounded-2xl px-4 py-4 text-sm outline-none"
                style={{
                  background: COLORS.cream,
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                }}
              />
            </div>

            <label
              className="flex items-center gap-3 rounded-2xl p-4 cursor-pointer"
              style={{
                background: COLORS.cream,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) => updateForm("isActive", e.target.checked)}
                className="w-5 h-5"
              />

              <span className="text-sm font-black">
                Show this program on website
              </span>
            </label>

            <button
              type="submit"
              disabled={saving}
              className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-full text-white text-sm font-black tracking-widest uppercase transition hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
              }}
            >
              {saving ? "Saving..." : editingId ? "Update Program" : "Add Program"}
              {editingId ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </form>
        </section>

                {/* Program List */}
        <section
          className="rounded-[2rem] p-6 md:p-8"
          style={{
            background: COLORS.softCream,
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 18px 50px rgba(58,45,36,0.08)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-black tracking-widest uppercase">
                Program List
              </h2>

              <p className="text-sm mt-2" style={{ color: COLORS.muted }}>
                Total programs: {programs.length}
              </p>
            </div>
          </div>

          {loading ? (
            <p className="font-bold" style={{ color: COLORS.muted }}>
              Loading programs...
            </p>
          ) : programs.length === 0 ? (
            <div
              className="rounded-[2rem] p-10 text-center"
              style={{
                background: COLORS.cream,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.gold }} />

              <h3 className="text-2xl font-black mb-2">
                No Programs Yet
              </h3>

              <p style={{ color: COLORS.muted }}>
                Add your first travel program using the form above.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="rounded-[2rem] overflow-hidden"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <div className="relative h-56 overflow-hidden">
                    {program.imageUrl ? (
                      <img
                        src={program.imageUrl}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={{ background: "rgba(216,154,61,0.14)" }}
                      >
                        <ImageIcon className="w-12 h-12" style={{ color: COLORS.gold }} />
                      </div>
                    )}

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-black uppercase"
                        style={{
                          background: program.isActive
                            ? "rgba(94,111,82,0.92)"
                            : "rgba(217,74,56,0.92)",
                          color: "white",
                        }}
                      >
                        {program.isActive ? "Active" : "Hidden"}
                      </span>

                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-black uppercase"
                        style={{
                          background: "rgba(42,30,22,0.75)",
                          color: "white",
                        }}
                      >
                        ${program.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-black leading-tight">
                          {program.title}
                        </h3>

                        <p className="text-xs mt-1 font-bold" style={{ color: COLORS.bronze }}>
                          /{program.slug}
                        </p>
                      </div>

                      <button
                        onClick={() => handleToggleActive(program)}
                        disabled={actionKey === `toggle-${program.id}`}
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(216,154,61,0.14)",
                          color: COLORS.bronze,
                        }}
                        aria-label="Toggle active"
                      >
                        {program.isActive ? (
                          <Eye className="w-5 h-5" />
                        ) : (
                          <EyeOff className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <p className="text-sm leading-relaxed mb-5" style={{ color: COLORS.muted }}>
                      {program.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <MapPin className="w-4 h-4" style={{ color: COLORS.gold }} />
                        {program.location}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Clock className="w-4 h-4" style={{ color: COLORS.gold }} />
                        {program.duration}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Users className="w-4 h-4" style={{ color: COLORS.gold }} />
                        {program.groupSize}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Sparkles className="w-4 h-4" style={{ color: COLORS.gold }} />
                        {program.rating}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {splitTags(program.tags).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[10px] font-black"
                          style={{
                            background: "rgba(216,154,61,0.14)",
                            color: COLORS.bronze,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleEdit(program)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white text-xs font-black uppercase"
                        style={{
                          background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(program.id)}
                        disabled={actionKey === `delete-${program.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-black uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          background: "rgba(217,74,56,0.10)",
                          color: "#D94A38",
                          border: "1px solid rgba(217,74,56,0.20)",
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                        {actionKey === `delete-${program.id}` ? "Deleting..." : "Delete"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}