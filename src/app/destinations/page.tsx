export default function Destinations() {
  return (
    <main className="min-h-screen bg-white">

   




      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Explore Destinations</h1>
        <p className="text-lg mt-3">Discover beautiful places across Sri Lanka</p>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-green-800">Kandy</h3>
              <p className="text-gray-500 text-sm mt-2">
                Cultural capital of Sri Lanka. Home to the Temple of the Tooth Relic.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Activities</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Retreats</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Hotels</span>
              </div>
              <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-green-800">Sigiriya</h3>
              <p className="text-gray-500 text-sm mt-2">
                Ancient rock fortress and UNESCO World Heritage Site.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Activities</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Retreats</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Hotels</span>
              </div>
              <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-green-800">Ella</h3>
              <p className="text-gray-500 text-sm mt-2">
                Scenic mountain village famous for hiking and tea plantations.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Activities</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Retreats</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Hotels</span>
              </div>
              <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-green-800">Nuwara Eliya</h3>
              <p className="text-gray-500 text-sm mt-2">
                Known as "Little England" with cool climate and tea estates.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Activities</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Retreats</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Hotels</span>
              </div>
              <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-green-800">Galle</h3>
              <p className="text-gray-500 text-sm mt-2">
                Historic fort city on the southern coast with Dutch architecture.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Activities</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Retreats</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Hotels</span>
              </div>
              <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-green-800">Udawalawe</h3>
              <p className="text-gray-500 text-sm mt-2">
                Famous for elephant safaris and national park wildlife.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Activities</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Retreats</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Hotels</span>
              </div>
              <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}