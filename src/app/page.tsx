export default function Home()


{
  
  return (

    <main className="min-h-screen bg-white">

{/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-48"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-white mb-4">
            Travel With Purpose
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Transform Your Journey Through Impact Tourism
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/programs" className="bg-green-700 text-white px-8 py-3 rounded-full text-lg hover:bg-green-800">
              Explore Programs
            </a>
            <a href="/volunteer" className="border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-green-700">
              Volunteer Now
            </a>
          </div>
        </div>
      </section>

{/* Impact Numbers */}
      <section className="py-20 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-12">Our Impact In Numbers</h2>
        <div className="flex justify-center gap-16 flex-wrap">

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

{/* Featured Programs */}
      <section className="py-20 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Featured Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=400" className="h-40 w-full object-cover rounded-lg mb-4" />
<h3 className="text-lg font-bold text-green-800">7-Day Silent Retreat</h3>
            <p className="text-gray-500 text-sm mt-1">Kandy, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 7 Days</p>
            <p className="text-green-700 font-bold text-lg mt-2">$450</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400" className="h-40 w-full object-cover rounded-lg mb-4" />
<h3 className="text-lg font-bold text-green-800">Knuckles Hiking</h3>
            <p className="text-gray-500 text-sm mt-1">Kandy, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 2 Days</p>
            <p className="text-green-700 font-bold text-lg mt-2">$380</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400" className="h-40 w-full object-cover rounded-lg mb-4" />
<h3 className="text-lg font-bold text-green-800">Village Homestay</h3>
            <p className="text-gray-500 text-sm mt-1">Udawalawe, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 3 Days</p>
            <p className="text-green-700 font-bold text-lg mt-2">$250</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400" className="h-40 w-full object-cover rounded-lg mb-4" />
<h3 className="text-lg font-bold text-green-800">Elephant Safari</h3>
            <p className="text-gray-500 text-sm mt-1">Udawalawe, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 1 Day</p>
            <p className="text-green-700 font-bold text-lg mt-2">$120</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

        </div>
      </section>
{/* Popular Destinations */}
      <section className="py-20 px-10 bg-green-50">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">Popular Destinations</h2>
          <a href="/destinations" className="text-green-700 hover:underline">View All Destinations →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400" className="h-40 w-full object-cover" />
            <div className="p-3 text-center">
              <h3 className="font-bold text-green-800">Kandy</h3>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=400" className="h-40 w-full object-cover" />
            <div className="p-3 text-center">
              <h3 className="font-bold text-green-800">Ella</h3>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400" className="h-40 w-full object-cover" />
            <div className="p-3 text-center">
              <h3 className="font-bold text-green-800">Sigiriya</h3>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1559628233-100c798642d5?w=400" className="h-40 w-full object-cover" />
            <div className="p-3 text-center">
              <h3 className="font-bold text-green-800">Galle</h3>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img src="https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=400" className="h-40 w-full object-cover" />
            <div className="p-3 text-center">
              <h3 className="font-bold text-green-800">Nuwara Eliya</h3>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-10 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Traveler Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-8 shadow-md hover:shadow-xl transition">
            <p className="text-gray-600 italic text-lg leading-relaxed">
              "This journey changed my life. The people, the culture, and the
              impact we created together will stay with me forever."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">S</div>
              <div>
                <p className="font-bold text-green-800">Sarah J.</p>
                <p className="text-gray-400 text-sm">Australia</p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-8 shadow-md hover:shadow-xl transition">
            <p className="text-gray-600 italic text-lg leading-relaxed">
              "The meditation retreat was absolutely transformative. I found
              peace and clarity I never knew was possible."
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">M</div>
              <div>
                <p className="font-bold text-green-800">Mark T.</p>
                <p className="text-gray-400 text-sm">United Kingdom</p>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-8 shadow-md hover:shadow-xl transition">
            <p className="text-gray-600 italic text-lg leading-relaxed">
              "Volunteering with local communities was the most rewarding
              experience of my travels. Highly recommended!"
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">A</div>
              <div>
                <p className="font-bold text-green-800">Anna K.</p>
                <p className="text-gray-400 text-sm">Germany</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}