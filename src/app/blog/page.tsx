"use client"
import { useState } from "react"

const blogs = [
  { id: 1, category: "Travel Stories", title: "10 Hidden Places You Must Visit in Sri Lanka", description: "Discover the most beautiful hidden gems across the island.", date: "May 10, 2024", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400" },
  { id: 2, category: "Meditation", title: "How Meditation Retreats Can Transform Your Mind", description: "A personal journey through silence and mindfulness.", date: "May 5, 2024", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" },
  { id: 3, category: "Volunteer Stories", title: "Volunteer Abroad: Stories That Inspire", description: "Real stories from volunteers who changed lives.", date: "Apr 28, 2024", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400" },
  { id: 4, category: "Sri Lanka Guide", title: "A Complete Guide to Ayurveda in Sri Lanka", description: "Everything you need to know about traditional healing.", date: "Apr 20, 2024", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400" },
  { id: 5, category: "Travel Stories", title: "Why Sustainable Travel Matters More Than Ever", description: "How responsible tourism is changing communities.", date: "Apr 15, 2024", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400" },
  { id: 6, category: "Sri Lanka Guide", title: "Best Time to Visit Sri Lanka", description: "A month by month guide to planning your trip.", date: "Apr 10, 2024", image: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=400" },
]

const categories = ["All", "Travel Stories", "Meditation", "Culture", "Volunteer Stories", "Sri Lanka Guide"]

export default function Blog() {
  const [selected, setSelected] = useState("All")

  const filtered = selected === "All" ? blogs : blogs.filter(b => b.category === selected)

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Blog & Stories</h1>
        <p className="text-lg mt-3">Travel stories, experiences and insights</p>
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

      {/* Blog Grid */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(blog => (
            <div key={blog.id} className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img src={blog.image} className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="text-green-700 text-xs font-bold mb-2">{blog.category.toUpperCase()}</p>
                <h3 className="text-lg font-bold text-gray-800">{blog.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{blog.description}</p>
                <p className="text-gray-400 text-xs mt-4">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}