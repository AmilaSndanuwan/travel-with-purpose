export default function Wellness() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Wellness Programs</h1>
        <p className="text-lg mt-3">Reconnect with nature and find inner peace</p>
      </section>

      {/* Wellness Grid */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400" className="h-48 w-full object-cover" />
<div className="p-6">
  <h3 className="text-xl font-bold text-green-800">Yoga Retreats</h3>
              <p className="text-gray-500 mt-2">
                Rejuvenate your body and mind with daily yoga sessions
                surrounded by nature.
              </p>
              <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400" className="h-48 w-full object-cover" />
<div className="p-6">
  <h3 className="text-xl font-bold text-green-800">Ayurveda Healing</h3>
              <p className="text-gray-500 mt-2">
                Ancient healing for modern life. Traditional Sri Lankan
                Ayurveda treatments.
              </p>
              <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400" className="h-48 w-full object-cover" />
<div className="p-6">
  <h3 className="text-xl font-bold text-green-800">Detox Programs</h3>
              <p className="text-gray-500 mt-2">
                Cleanse, heal and energize your body with our specially
                designed detox programs.
              </p>
              <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" className="h-48 w-full object-cover" />
<div className="p-6">
  <h3 className="text-xl font-bold text-green-800">Mindfulness & Meditation</h3>
              <p className="text-gray-500 mt-2">
                Find inner peace and clarity through guided mindfulness
                and meditation sessions.
              </p>
              <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
           <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=400" className="h-48 w-full object-cover" />
<div className="p-6">
  <h3 className="text-xl font-bold text-green-800">Nature Healing</h3>
              <p className="text-gray-500 mt-2">
                Reconnect with nature and clarity through forest walks,
                waterfalls and natural surroundings.
              </p>
              <button className="mt-5 w-full bg-green-700 text-white py-2 rounded-full">
                View Details
              </button>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}