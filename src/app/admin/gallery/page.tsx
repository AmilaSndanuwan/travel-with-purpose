"use client"

import { useCallback, useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  Eye,
  EyeOff,
  ImageIcon,
  MapPin,
  Pencil,
  Plus,
  RefreshCcw,
  Save,
  Sparkles,
  Tag,
  Trash2,
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

type GalleryItem = {
  id: number
  title: string
  category: string
  location: string
  description: string
  imageUrl: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

type GalleryForm = {
  title: string
  category: string
  location: string
  description: string
  imageUrl: string
  isActive: boolean
}

const initialForm: GalleryForm = {
  title: "",
  category: "",
  location: "",
  description: "",
  imageUrl: "",
  isActive: true,
}

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [form, setForm] = useState<GalleryForm>(initialForm)

  const [editingId, setEditingId] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [actionKey, setActionKey] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const loadItems = useCallback(async () => {
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/gallery?admin=true", {
        cache: "no-store",
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to load gallery items")
      }

      setItems(result.data || [])
    } catch (err) {
      console.error(err)
      setError("Gallery items load කරන්න බැරි වුණා. Please try again.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadItems()
  }, [loadItems])

    const updateForm = (key: keyof GalleryForm, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
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
        category: form.category,
        location: form.location,
        description: form.description,
        imageUrl: form.imageUrl,
        isActive: form.isActive,
      }

      const response = await fetch("/api/gallery", {
        method: editingId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to save gallery item")
      }

      setSuccess(
        editingId
          ? "Gallery item updated successfully."
          : "Gallery item added successfully."
      )

      resetForm()
      await loadItems()
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (err) {
      console.error(err)
      setError("Gallery item save කරන්න බැරි වුණා. Please try again.")
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (item: GalleryItem) => {
    setEditingId(item.id)

    setForm({
      title: item.title,
      category: item.category,
      location: item.location,
      description: item.description,
      imageUrl: item.imageUrl,
      isActive: item.isActive,
    })

    setError("")
    setSuccess("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this gallery item?"
    )

    if (!confirmDelete) return

    setActionKey(`delete-${id}`)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/gallery", {
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

      setSuccess("Gallery item deleted successfully.")
      await loadItems()
    } catch (err) {
      console.error(err)
      setError("Gallery item delete කරන්න බැරි වුණා. Please try again.")
    } finally {
      setActionKey("")
    }
  }

  const handleToggleActive = async (item: GalleryItem) => {
    setActionKey(`toggle-${item.id}`)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/gallery", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: item.id,
          title: item.title,
          category: item.category,
          location: item.location,
          description: item.description,
          imageUrl: item.imageUrl,
          isActive: !item.isActive,
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Update failed")
      }

      setSuccess(
        item.isActive
          ? "Gallery item hidden successfully."
          : "Gallery item activated successfully."
      )

      await loadItems()
    } catch (err) {
      console.error(err)
      setError("Gallery item status update කරන්න බැරි වුණා.")
    } finally {
      setActionKey("")
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
              GALLERY
            </h1>

            <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: COLORS.muted }}>
              Add, edit, hide or delete gallery images from your website
              without changing code.
            </p>
          </div>

          <button
            onClick={loadItems}
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
                {editingId ? "Edit Gallery Item" : "Add New Gallery Item"}
              </h2>

              <p className="text-sm mt-2" style={{ color: COLORS.muted }}>
                Add gallery images with title, category, location and description.
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
                  Image Title
                </label>

                <input
                  required
                  value={form.title}
                  onChange={(e) => updateForm("title", e.target.value)}
                  placeholder="Sunrise in Ella"
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
                  Category
                </label>

                <input
                  required
                  value={form.category}
                  onChange={(e) => updateForm("category", e.target.value)}
                  placeholder="Nature"
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
                Location
              </label>

              <input
                required
                value={form.location}
                onChange={(e) => updateForm("location", e.target.value)}
                placeholder="Ella, Sri Lanka"
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
                Description
              </label>

              <textarea
                required
                rows={4}
                value={form.description}
                onChange={(e) => updateForm("description", e.target.value)}
                placeholder="Short description about this gallery image..."
                className="w-full rounded-2xl px-4 py-4 text-sm outline-none resize-none"
                style={{
                  background: COLORS.cream,
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                }}
              />
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
                Show this gallery item on website
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
              {saving
                ? "Saving..."
                : editingId
                ? "Update Gallery Item"
                : "Add Gallery Item"}

              {editingId ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>
          </form>
        </section>

                {/* Gallery List */}
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
                Gallery Item List
              </h2>

              <p className="text-sm mt-2" style={{ color: COLORS.muted }}>
                Total items: {items.length}
              </p>
            </div>
          </div>

          {loading ? (
            <p className="font-bold" style={{ color: COLORS.muted }}>
              Loading gallery items...
            </p>
          ) : items.length === 0 ? (
            <div
              className="rounded-[2rem] p-10 text-center"
              style={{
                background: COLORS.cream,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: COLORS.gold }} />

              <h3 className="text-2xl font-black mb-2">
                No Gallery Items Yet
              </h3>

              <p style={{ color: COLORS.muted }}>
                Add your first gallery image using the form above.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[2rem] overflow-hidden"
                  style={{
                    background: COLORS.cream,
                    border: `1px solid ${COLORS.border}`,
                  }}
                >
                  <div className="relative h-64 overflow-hidden">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
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

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-black uppercase"
                        style={{
                          background: item.isActive
                            ? "rgba(94,111,82,0.92)"
                            : "rgba(217,74,56,0.92)",
                          color: "white",
                        }}
                      >
                        {item.isActive ? "Active" : "Hidden"}
                      </span>

                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-black uppercase"
                        style={{
                          background: "rgba(42,30,22,0.75)",
                          color: "white",
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h3 className="text-xl font-black leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-sm text-white/75 mt-1">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-black leading-tight">
                          {item.title}
                        </h3>

                        <p className="text-sm mt-1 font-bold" style={{ color: COLORS.bronze }}>
                          {item.location}
                        </p>
                      </div>

                      <button
                        onClick={() => handleToggleActive(item)}
                        disabled={actionKey === `toggle-${item.id}`}
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(216,154,61,0.14)",
                          color: COLORS.bronze,
                        }}
                        aria-label="Toggle active"
                      >
                        {item.isActive ? (
                          <Eye className="w-5 h-5" />
                        ) : (
                          <EyeOff className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <p className="text-sm leading-relaxed mb-5" style={{ color: COLORS.muted }}>
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 mb-6">
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Tag className="w-4 h-4" style={{ color: COLORS.gold }} />
                        {item.category}
                      </div>

                      <div className="flex items-center gap-2 text-sm font-bold">
                        <MapPin className="w-4 h-4" style={{ color: COLORS.gold }} />
                        {item.location}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleEdit(item)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white text-xs font-black uppercase"
                        style={{
                          background: `linear-gradient(135deg, ${COLORS.bronze}, ${COLORS.gold})`,
                        }}
                      >
                        <Pencil className="w-4 h-4" />
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        disabled={actionKey === `delete-${item.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-black uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{
                          background: "rgba(217,74,56,0.10)",
                          color: "#D94A38",
                          border: "1px solid rgba(217,74,56,0.20)",
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                        {actionKey === `delete-${item.id}`
                          ? "Deleting..."
                          : "Delete"}
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