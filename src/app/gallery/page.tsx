"use client"
import { useState } from "react"

const images = [
  { id: 1, category: "Adventure", src: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400" },
  { id: 2, category: "Meditation", src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" },
  { id: 3, category: "Wildlife", src: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400" },
  { id: 4, category: "Culture", src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400" },
  { id: 5, category: "Volunteers", src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400" },
  { id: 6, category: "Nature", src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400" },
  { id: 7, category: "Adventure", src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400" },
  { id: 8, category: "Meditation", src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400" },
  { id: 9, category: "Wildlife", src: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=400" },
  { id: 10, category: "Culture", src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400" },
  { id: 11, category: "Volunteers", src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400" },
  { id: 12, category: "Nature", src: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400" },
]

const categories = ["All", "Adventure", "Meditation", "Wildlife", "Culture", "Volunteers", "Nature"]

export default function Gallery() {
  const [selected, setSelected] = useState("All")

  const filtered = selected === "All" ? images : images.filter(img => img.category === selected)

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="py-16 text-center text-white gradient-green">
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
           <img
  key={img.id}
  src={img.src}
  className="h-48 w-full object-cover rounded-xl hover:opacity-80 transition cursor-pointer"
/>
          ))}
        </div>
      </section>

    </main>
  )
}