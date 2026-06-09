import { Leaf, Handshake, Heart, ShieldCheck, Star } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-3">Our story, mission and values</p>
      </section>

{/* Hero Image */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We are a travel company with a mission to create positive impact through
          meaningful and responsible travel experiences in Sri Lanka and beyond.
          Every journey we create supports local communities, protects nature
          and preserves culture.
        </p>
      </section>

      {/* Our Values */}
      <section className="py-16 px-10 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">

          <div className="p-5">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-700 shadow-sm">
              <Leaf className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-green-800">Sustainability</h3>
          </div>

          <div className="p-5">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-700 shadow-sm">
              <Handshake className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-green-800">Community</h3>
          </div>

          <div className="p-5">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-700 shadow-sm">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-green-800">Authenticity</h3>
          </div>

          <div className="p-5">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-700 shadow-sm">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-green-800">Respect</h3>
          </div>

          <div className="p-5">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-700 shadow-sm">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-green-800">Transparency</h3>
          </div>

        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 px-10 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <p className="text-5xl font-bold">12,450</p>
            <p className="text-lg mt-2">Trees Planted</p>
          </div>

          <div>
            <p className="text-5xl font-bold">8,320</p>
            <p className="text-lg mt-2">Students Supported</p>
          </div>

          <div>
            <p className="text-5xl font-bold">68</p>
            <p className="text-lg mt-2">Villages Supported</p>
          </div>

          <div>
            <p className="text-5xl font-bold">45,600</p>
            <p className="text-lg mt-2">Volunteer Hours</p>
          </div>

        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 px-10 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-12">Our Partners</h2>
        <div className="flex justify-center gap-10 flex-wrap">
          <div className="bg-gray-100 w-32 h-16 rounded-lg flex items-center justify-center text-gray-500 font-bold">Partner 1</div>
          <div className="bg-gray-100 w-32 h-16 rounded-lg flex items-center justify-center text-gray-500 font-bold">Partner 2</div>
          <div className="bg-gray-100 w-32 h-16 rounded-lg flex items-center justify-center text-gray-500 font-bold">Partner 3</div>
          <div className="bg-gray-100 w-32 h-16 rounded-lg flex items-center justify-center text-gray-500 font-bold">Partner 4</div>
          <div className="bg-gray-100 w-32 h-16 rounded-lg flex items-center justify-center text-gray-500 font-bold">Partner 5</div>
        </div>
      </section>

    </main>
  )
}