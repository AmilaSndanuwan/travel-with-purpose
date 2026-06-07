export default function Destinations() {
  return (
    <main className="min-h-screen bg-white">

   
      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Explore Destinations</h1>
        <p className="text-lg mt-3">Discover beautiful places across Sri Lanka</p>
      </section>

{/* Sri Lanka Map */}
      <section className="py-16 px-10 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Explore Sri Lanka
        </h2>
        <div className="rounded-xl overflow-hidden shadow-xl mx-auto max-w-3xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4053831.0!2d79.8612!3d7.8731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1234567890"
            width="100%"
            height="500"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Destination Pins */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer">
            <p className="text-2xl">📍</p>
            <p className="font-bold text-green-800 mt-1">Kandy</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer">
            <p className="text-2xl">📍</p>
            <p className="font-bold text-green-800 mt-1">Sigiriya</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer">
            <p className="text-2xl">📍</p>
            <p className="font-bold text-green-800 mt-1">Ella</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer">
            <p className="text-2xl">📍</p>
            <p className="font-bold text-green-800 mt-1">Nuwara Eliya</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer">
            <p className="text-2xl">📍</p>
            <p className="font-bold text-green-800 mt-1">Galle</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer">
            <p className="text-2xl">📍</p>
            <p className="font-bold text-green-800 mt-1">Udawalawe</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer">
            <p className="text-2xl">📍</p>
            <p className="font-bold text-green-800 mt-1">Bentota</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition cursor-pointer">
            <p className="text-2xl">📍</p>
            <p className="font-bold text-green-800 mt-1">Haputale</p>
          </div>
        </div>
      </section>







      {/* Destinations Grid */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
           <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400" className="h-48 w-full object-cover" />
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
            <img src="https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400" className="h-48 w-full object-cover" />
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
            <img src="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=400" className="h-48 w-full object-cover" />
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
            <img src="https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=400" className="h-48 w-full object-cover" />
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
            <img src="https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=400" className="h-48 w-full object-cover" />
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
           <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400" className="h-48 w-full object-cover" />
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