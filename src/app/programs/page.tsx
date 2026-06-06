export default function Programs() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">

        <h1 className="text-4xl font-bold">Our Programs</h1>
        <p className="text-lg mt-3">Find the perfect experience for your journey</p>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48 rounded-lg mb-4"></div>
            <h3 className="text-lg font-bold text-green-800">Temple Stay Experience</h3>
            <p className="text-gray-500 text-sm mt-1">Kandy, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 3 Days</p>
            <p className="text-green-700 font-bold text-lg mt-2">$180</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48 rounded-lg mb-4"></div>
            <h3 className="text-lg font-bold text-green-800">Surf & Yoga Package</h3>
            <p className="text-gray-500 text-sm mt-1">Weligama, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 7 Days</p>
            <p className="text-green-700 font-bold text-lg mt-2">$550</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48 rounded-lg mb-4"></div>
            <h3 className="text-lg font-bold text-green-800">Organic Farming Program</h3>
            <p className="text-gray-500 text-sm mt-1">Haputale, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 5 Days</p>
            <p className="text-green-700 font-bold text-lg mt-2">$320</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48 rounded-lg mb-4"></div>
            <h3 className="text-lg font-bold text-green-800">Buddhist Mindfulness Journey</h3>
            <p className="text-gray-500 text-sm mt-1">Kandy, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 7 Days</p>
            <p className="text-green-700 font-bold text-lg mt-2">$420</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48 rounded-lg mb-4"></div>
            <h3 className="text-lg font-bold text-green-800">Wildlife Safari Adventure</h3>
            <p className="text-gray-500 text-sm mt-1">Udawalawe, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 1 Day</p>
            <p className="text-green-700 font-bold text-lg mt-2">$120</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-5 shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48 rounded-lg mb-4"></div>
            <h3 className="text-lg font-bold text-green-800">Traditional Cooking Class</h3>
            <p className="text-gray-500 text-sm mt-1">Galle, Sri Lanka</p>
            <p className="text-gray-500 text-sm">⏱ 1 Day</p>
            <p className="text-green-700 font-bold text-lg mt-2">$75</p>
            <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

        </div>
      </section>

    </main>
  )
}