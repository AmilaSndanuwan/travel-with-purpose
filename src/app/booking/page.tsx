export default function Booking() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Book Your Experience</h1>
        <p className="text-lg mt-3">Start your meaningful journey today</p>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Program Info */}
          <div>
            <div className="bg-green-100 h-64 rounded-xl mb-6"></div>
            <h2 className="text-2xl font-bold text-green-800">7-Day Silent Retreat</h2>
            <p className="text-gray-500 mt-2">📍 Kandy, Sri Lanka</p>
            <div className="mt-4 space-y-2 text-gray-600">
              <p>⏱ 7 Days</p>
              <p>🌿 High Impact</p>
              <p>👥 Group Size: 10-15</p>
            </div>
            <div className="mt-6 border-t pt-6">
              <p className="text-3xl font-bold text-green-700">$450</p>
              <p className="text-gray-500 text-sm">Per Person</p>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-8">Complete Your Booking</h2>
            <div className="space-y-4">

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Select Date</label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Number of Participants</label>
                <select className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700">
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>3 Persons</option>
                  <option>4 Persons</option>
                  <option>5+ Persons</option>
                </select>
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Your Phone</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700"
                />
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between text-gray-700 mb-2">
                  <p>Program Fee</p>
                  <p>$450</p>
                </div>
                <div className="flex justify-between font-bold text-green-800 text-lg">
                  <p>Total</p>
                  <p>$450</p>
                </div>
              </div>

              <button className="w-full bg-green-700 text-white py-3 rounded-full text-lg font-bold">
                Continue to Booking
              </button>

              <p className="text-center text-gray-400 text-sm">
                ❤️ Add to Wishlist
              </p>

            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
