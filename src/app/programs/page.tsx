"use client"
import { useState } from "react"

const programs = [
  { id: 1, category: "Meditation", title: "Temple Stay Experience", location: "Kandy, Sri Lanka", days: "3 Days", price: 180, image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400" },
  { id: 2, category: "Adventure", title: "Surf & Yoga Package", location: "Weligama, Sri Lanka", days: "7 Days", price: 550, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400" },
  { id: 3, category: "Agriculture", title: "Organic Farming Program", location: "Haputale, Sri Lanka", days: "5 Days", price: 320, image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400" },
  { id: 4, category: "Meditation", title: "Buddhist Mindfulness Journey", location: "Kandy, Sri Lanka", days: "7 Days", price: 420, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" },
  { id: 5, category: "Wildlife", title: "Wildlife Safari Adventure", location: "Udawalawe, Sri Lanka", days: "1 Day", price: 120, image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400" },
  { id: 6, category: "Cultural", title: "Traditional Cooking Class", location: "Galle, Sri Lanka", days: "1 Day", price: 75, image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400" },
]

const categories = ["All", "Meditation", "Adventure", "Agriculture", "Wildlife", "Cultural"]

export default function Programs() {
  const [selected, setSelected] = useState("All")

  const filtered = selected === "All" ? programs : programs.filter(p => p.category === selected)

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Our Programs</h1>
        <p className="text-lg mt-3">Find the perfect experience for your journey</p>
      </section>

      {/* Filter Buttons */}
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

      {/* Programs Grid */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(program => (
            <div key={program.id} className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img src={program.image} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold text-green-800">{program.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{program.location}</p>
                <p className="text-gray-500 text-sm">⏱ {program.days}</p>
                <p className="text-green-700 font-bold text-lg mt-2">${program.price}</p>
                <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}