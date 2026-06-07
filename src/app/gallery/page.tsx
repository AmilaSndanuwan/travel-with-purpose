"use client"
import { useState } from "react"

const images = [
  { id: 1, category: "Adventure", color: "bg-green-200" },
  { id: 2, category: "Meditation", color: "bg-blue-200" },
  { id: 3, category: "Wildlife", color: "bg-yellow-200" },
  { id: 4, category: "Culture", color: "bg-red-200" },
  { id: 5, category: "Volunteers", color: "bg-purple-200" },
  { id: 6, category: "Nature", color: "bg-green-300" },
  { id: 7, category: "Adventure", color: "bg-green-200" },
  { id: 8, category: "Meditation", color: "bg-blue-200" },
  { id: 9, category: "Wildlife", color: "bg-yellow-200" },
  { id: 10, category: "Culture", color: "bg-red-200" },
  { id: 11, category: "Volunteers", color: "bg-purple-200" },
  { id: 12, category: "Nature", color: "bg-green-300" },
]

const categories = ["All", "Adventure", "Meditation", "Wildlife", "Culture", "Volunteers", "Nature"]

export default function Gallery() {
  const [selected, setSelected] = useState("All")

  const filtered = selected === "All" ? images : images.filter(img => img.category === selected)

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="text-lg mt-3">Moments from our journeys across Sri Lanka</p>
      </section>

      {/* Categories */}
      <section className="py-8 px-10 border-b">
        <div className="flex gap-4 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full text-sm ${selected === cat ? "bg-green-700 text-white" : "border border-green-700 text-green-700"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filtered.map(img => (
            <div
              key={img.id}
              className={`${img.color} h-48 rounded-xl hover:opacity-80 transition cursor-pointer`}
            ></div>
          ))}
        </div>
      </section>

    </main>
  )
}