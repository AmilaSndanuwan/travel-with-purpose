export default function Volunteer() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Volunteer Programs</h1>
        <p className="text-lg mt-3">Make a difference while exploring Sri Lanka</p>
      </section>

      {/* Programs List */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-green-800">English Teaching Program</h3>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <p>⏱ Duration: 2-12 Weeks</p>
              <p>🏠 Accommodation: Shared Rooms</p>
              <p>🍽 Meals: 3 per day</p>
              <p>💰 Fee: $200 / Week</p>
              <p>📜 Includes Certificate</p>
            </div>
            <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-green-800">Organic Farming Program</h3>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <p>⏱ Duration: 2-12 Weeks</p>
              <p>🏠 Accommodation: Shared Rooms</p>
              <p>🍽 Meals: 3 per day</p>
              <p>💰 Fee: $150 / Week</p>
              <p>📜 Includes Certificate</p>
            </div>
            <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-green-800">Temple Support Program</h3>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <p>⏱ Duration: 2-12 Weeks</p>
              <p>🏠 Accommodation: Shared Rooms</p>
              <p>🍽 Meals: 3 per day</p>
              <p>💰 Fee: $180 / Week</p>
              <p>📜 Includes Certificate</p>
            </div>
            <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

          <div className="border rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-green-800">Environmental Conservation</h3>
            <div className="mt-4 space-y-2 text-gray-600 text-sm">
              <p>⏱ Duration: 2-12 Weeks</p>
              <p>🏠 Accommodation: Shared Rooms</p>
              <p>🍽 Meals: 3 per day</p>
              <p>💰 Fee: $160 / Week</p>
              <p>📜 Includes Certificate</p>
            </div>
            <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-full">
              View Details
            </button>
          </div>

        </div>
      </section>

    </main>
  )
}