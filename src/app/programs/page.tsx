"use client"
import { useState } from "react"
import { Clock, Frown, MapPin } from "lucide-react"

const programs = [
  { id: 1, category: "Meditation", title: "Temple Stay Experience", location: "Kandy, Sri Lanka", days: 3, price: 180, image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400" },
  { id: 2, category: "Adventure", title: "Surf & Yoga Package", location: "Weligama, Sri Lanka", days: 7, price: 550, image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400" },
  { id: 3, category: "Agriculture", title: "Organic Farming Program", location: "Haputale, Sri Lanka", days: 5, price: 320, image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400" },
  { id: 4, category: "Meditation", title: "Buddhist Mindfulness Journey", location: "Kandy, Sri Lanka", days: 7, price: 420, image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" },
  { id: 5, category: "Wildlife", title: "Wildlife Safari Adventure", location: "Udawalawe, Sri Lanka", days: 1, price: 120, image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400" },
  { id: 6, category: "Cultural", title: "Traditional Cooking Class", location: "Galle, Sri Lanka", days: 1, price: 75, image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400" },
]

const categories = ["All", "Meditation", "Adventure", "Agriculture", "Wildlife", "Cultural"]

export default function Programs() {
  const [category, setCategory] = useState("All")
  const [maxPrice, setMaxPrice] = useState(1000)
  const [maxDays, setMaxDays] = useState(30)

  const filtered = programs.filter(p => {
    const categoryMatch = category === "All" || p.category === category
    const priceMatch = p.price <= maxPrice
    const daysMatch = p.days <= maxDays
    return categoryMatch && priceMatch && daysMatch
  })

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="py-30 text-center text-white gradient-green"> 
        <h1 className="text-4xl font-bold">Our Programs</h1>
        <p className="text-lg mt-3">Find the perfect experience for your journey</p>
      </section>

      <div className="flex flex-col md:flex-row">

        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 p-8 border-r bg-gray-50">

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="font-bold text-green-800 mb-4">Category</h3>
            <div className="flex flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-left px-4 py-2 rounded-lg text-sm ${category === cat ? "bg-green-700 text-white" : "hover:bg-green-100 text-gray-700"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="font-bold text-green-800 mb-4">Max Price: ${maxPrice}</h3>
            <input
              type="range"
              min={50}
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-green-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$50</span>
              <span>$1000</span>
            </div>
          </div>

          {/* Duration Filter */}
          <div className="mb-8">
            <h3 className="font-bold text-green-800 mb-4">Max Duration: {maxDays} Days</h3>
            <input
              type="range"
              min={1}
              max={30}
              value={maxDays}
              onChange={(e) => setMaxDays(Number(e.target.value))}
              className="w-full accent-green-700"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 Day</span>
              <span>30 Days</span>
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => { setCategory("All"); setMaxPrice(1000); setMaxDays(30) }}
            className="w-full border border-green-700 text-green-700 py-2 rounded-full text-sm hover:bg-green-700 hover:text-white transition"
          >
            Reset Filters
          </button>

        </aside>

        {/* Programs Grid */}
        <section className="flex-1 py-10 px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Frown className="mx-auto mb-2 h-12 w-12 text-green-700" />
              <p>No programs found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filtered.map(program => (
                <div key={program.id} className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition card-hover">
                  <div className="img-zoom">
                    <img src={program.image} className="h-48 w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-green-800">{program.title}</h3>
                    <p className="flex items-center gap-2 text-gray-500 text-sm mt-1"><MapPin className="w-4 h-4 text-green-700" />{program.location}</p>
                    <p className="flex items-center gap-2 text-gray-500 text-sm"><Clock className="w-4 h-4 text-green-700" />{program.days} {program.days === 1 ? "Day" : "Days"}</p>
                    <p className="text-green-700 font-bold text-lg mt-2">${program.price}</p>
                    <a href="/booking" className="mt-3 block w-full bg-green-700 text-white py-2 rounded-full text-center hover:bg-green-800">
                      View Details
                    </a>
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