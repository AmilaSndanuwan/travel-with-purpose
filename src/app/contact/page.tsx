export default function Contact() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-green-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-lg mt-3">We would love to hear from you</p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-8">Get In Touch</h2>
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-2xl">📱</div>
                <div>
                  <p className="font-bold text-gray-800">WhatsApp</p>
                 <a href="https://wa.me/94771234567"
                    target="_blank"
                        className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 inline-block mt-1">
                            💬 Chat on WhatsApp
                </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-2xl">✉️</div>
                <div>
                  <p className="font-bold text-gray-800">Email</p>
                  <p className="text-gray-500">info@travelwithpurpose.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-2xl">📍</div>
                <div>
                  <p className="font-bold text-gray-800">Address</p>
                  <p className="text-gray-500">No. 123, Kandy Road,<br/>Kandy, Sri Lanka</p>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div className="mt-10">
              <p className="font-bold text-gray-800 mb-4">Follow Us</p>
              <div className="flex gap-4">
                <div className="bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">f</div>
                <div className="bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">in</div>
                <div className="bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">ig</div>
                <div className="bg-green-700 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">yt</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-green-800 mb-8">Send Us a Message</h2>
            <div className="space-y-4">

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
                <label className="text-gray-700 text-sm font-bold mb-2 block">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-bold mb-2 block">Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows={5}
                  className="w-full border rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-green-700"
                />
              </div>

              <button className="w-full bg-green-700 text-white py-3 rounded-full text-lg font-bold">
                Send Message
              </button>

            </div>
          </div>

        </div>
      </section>

    </main>
  )
}