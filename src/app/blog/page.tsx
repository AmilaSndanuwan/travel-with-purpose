export default function Blog() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Blog & Stories</h1>
        <p className="text-lg mt-3">Travel stories, experiences and insights</p>
      </section>

      {/* Categories */}
      <section className="py-8 px-10 border-b">
        <div className="flex gap-4 flex-wrap">
          <button className="bg-green-700 text-white px-5 py-2 rounded-full text-sm">All</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Travel Stories</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Meditation</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Culture</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Volunteer Stories</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Sri Lanka Guide</button>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <p className="text-green-700 text-xs font-bold mb-2">TRAVEL STORIES</p>
              <h3 className="text-lg font-bold text-gray-800">10 Hidden Places You Must Visit in Sri Lanka</h3>
              <p className="text-gray-500 text-sm mt-2">Discover the most beautiful hidden gems across the island.</p>
              <p className="text-gray-400 text-xs mt-4">May 10, 2024</p>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <p className="text-green-700 text-xs font-bold mb-2">MEDITATION</p>
              <h3 className="text-lg font-bold text-gray-800">How Meditation Retreats Can Transform Your Mind</h3>
              <p className="text-gray-500 text-sm mt-2">A personal journey through silence and mindfulness.</p>
              <p className="text-gray-400 text-xs mt-4">May 5, 2024</p>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <p className="text-green-700 text-xs font-bold mb-2">VOLUNTEER STORIES</p>
              <h3 className="text-lg font-bold text-gray-800">Volunteer Abroad: Stories That Inspire</h3>
              <p className="text-gray-500 text-sm mt-2">Real stories from volunteers who changed lives.</p>
              <p className="text-gray-400 text-xs mt-4">Apr 28, 2024</p>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <p className="text-green-700 text-xs font-bold mb-2">SRI LANKA GUIDE</p>
              <h3 className="text-lg font-bold text-gray-800">A Complete Guide to Ayurveda in Sri Lanka</h3>
              <p className="text-gray-500 text-sm mt-2">Everything you need to know about traditional healing.</p>
              <p className="text-gray-400 text-xs mt-4">Apr 20, 2024</p>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <p className="text-green-700 text-xs font-bold mb-2">TRAVEL STORIES</p>
              <h3 className="text-lg font-bold text-gray-800">Why Sustainable Travel Matters More Than Ever</h3>
              <p className="text-gray-500 text-sm mt-2">How responsible tourism is changing communities.</p>
              <p className="text-gray-400 text-xs mt-4">Apr 15, 2024</p>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="bg-green-100 h-48"></div>
            <div className="p-5">
              <p className="text-green-700 text-xs font-bold mb-2">SRI LANKA GUIDE</p>
              <h3 className="text-lg font-bold text-gray-800">Best Time to Visit Sri Lanka</h3>
              <p className="text-gray-500 text-sm mt-2">A month by month guide to planning your trip.</p>
              <p className="text-gray-400 text-xs mt-4">Apr 10, 2024</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}