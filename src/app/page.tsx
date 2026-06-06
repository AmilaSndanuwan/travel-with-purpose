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
{/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">Travel With Purpose</h3>
            <p className="text-gray-400 text-sm">
              Travel with purpose. Create impact. Inspire change.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Home</li>
              <li>Programs</li>
              <li>Destinations</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Programs</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>Meditation</li>
              <li>Adventure</li>
              <li>Volunteer</li>
              <li>Wildlife</li>
              <li>Wellness</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>📱 WhatsApp: +94 77 123 4567</li>
              <li>✉️ info@travelwithpurpose.com</li>
              <li>📍 Kandy, Sri Lanka</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2024 Travel With Purpose. All rights reserved.
        </div>
      </footer>

    </main>
  )
}