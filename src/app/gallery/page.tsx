export default function Gallery() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="text-lg mt-3">Moments from our journeys across Sri Lanka</p>
      </section>

      {/* Categories */}
      <section className="py-8 px-10 border-b">
        <div className="flex gap-4 flex-wrap">
          <button className="bg-green-700 text-white px-5 py-2 rounded-full text-sm">All</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Adventure</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Meditation</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Wildlife</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Culture</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Volunteers</button>
          <button className="border border-green-700 text-green-700 px-5 py-2 rounded-full text-sm">Nature</button>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-green-100 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-200 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-300 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-100 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-200 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-300 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-100 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-200 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-300 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-100 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-200 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
          <div className="bg-green-300 h-48 rounded-xl hover:opacity-80 transition cursor-pointer"></div>
        </div>
      </section>

    </main>
  )
}