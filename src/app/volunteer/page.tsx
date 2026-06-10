"use client"
import { useState } from "react"
import { Clock, Home, Coffee, DollarSign, ClipboardCheck, Sparkles } from "lucide-react"

export default function Volunteer() {
  const [applied, setApplied] = useState(false)

  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="py-16 text-center text-white gradient-green">
        <h1 className="text-4xl font-bold">Volunteer Programs</h1>
        <p className="text-lg mt-3">Make a difference while exploring Sri Lanka</p>
      </section>

      {/* Hero Image */}
      <section className="relative">
        <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* Programs List */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-green-800">English Teaching Program</h3>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-700" /> Duration: 2-12 Weeks</p>
              <p className="flex items-center gap-2"><Home className="w-4 h-4 text-green-700" /> Accommodation: Shared Rooms</p>
              <p className="flex items-center gap-2"><Coffee className="w-4 h-4 text-green-700" /> Meals: 3 per day</p>
              <p className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-green-700" /> Fee: $200 / Week</p>
              <p className="flex items-center gap-2"><ClipboardCheck className="w-4 h-4 text-green-700" /> Includes Certificate</p>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-green-800">Organic Farming Program</h3>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-700" /> Duration: 2-12 Weeks</p>
              <p className="flex items-center gap-2"><Home className="w-4 h-4 text-green-700" /> Accommodation: Shared Rooms</p>
              <p className="flex items-center gap-2"><Coffee className="w-4 h-4 text-green-700" /> Meals: 3 per day</p>
              <p className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-green-700" /> Fee: $150 / Week</p>
              <p className="flex items-center gap-2"><ClipboardCheck className="w-4 h-4 text-green-700" /> Includes Certificate</p>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=400" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-green-800">Temple Support Program</h3>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-700" /> Duration: 2-12 Weeks</p>
              <p className="flex items-center gap-2"><Home className="w-4 h-4 text-green-700" /> Accommodation: Shared Rooms</p>
              <p className="flex items-center gap-2"><Coffee className="w-4 h-4 text-green-700" /> Meals: 3 per day</p>
              <p className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-green-700" /> Fee: $180 / Week</p>
              <p className="flex items-center gap-2"><ClipboardCheck className="w-4 h-4 text-green-700" /> Includes Certificate</p>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=400" className="h-40 w-full object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-green-800">Environmental Conservation</h3>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-green-700" /> Duration: 2-12 Weeks</p>
              <p className="flex items-center gap-2"><Home className="w-4 h-4 text-green-700" /> Accommodation: Shared Rooms</p>
              <p className="flex items-center gap-2"><Coffee className="w-4 h-4 text-green-700" /> Meals: 3 per day</p>
              <p className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-green-700" /> Fee: $160 / Week</p>
              <p className="flex items-center gap-2"><ClipboardCheck className="w-4 h-4 text-green-700" /> Includes Certificate</p>
            </div>
          </div>

        </div>
      </section>

      {/* Apply Form */}
      <section className="py-16 px-10 bg-green-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Apply Now</h2>

          {applied ? (
            <div className="text-center py-16">
              <Sparkles className="mx-auto mb-4 h-16 w-16 text-green-700" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
              <p className="text-gray-600">We will contact you within 24 hours. Thank you!</p>
            </div>
          ) : (
            <div className="space-y-4">

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Your Name</label>
                <input type="text" placeholder="Enter your name" className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700" />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Your Email</label>
                <input type="email" placeholder="Enter your email" className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700" />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Your Country</label>
                <input type="text" placeholder="Enter your country" className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700" />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Select Program</label>
                <select className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700">
                  <option>English Teaching Program</option>
                  <option>Organic Farming Program</option>
                  <option>Temple Support Program</option>
                  <option>Environmental Conservation</option>
                </select>
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Duration</label>
                <select className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700">
                  <option>2 Weeks</option>
                  <option>4 Weeks</option>
                  <option>8 Weeks</option>
                  <option>12 Weeks</option>
                </select>
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Why do you want to volunteer?</label>
                <textarea placeholder="Tell us about yourself..." rows={4} className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700" />
              </div>

              <button
                onClick={() => setApplied(true)}
                className="w-full bg-green-700 text-white py-3 rounded-full text-lg font-bold hover:bg-green-800 transition"
              >
                Submit Application
              </button>

            </div>
          )}
        </div>
      </section>
    </main>
  )
}
