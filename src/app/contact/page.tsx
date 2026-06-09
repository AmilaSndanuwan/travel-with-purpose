import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header */}
      <section className="py-16 text-center text-white gradient-green">
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
                <div className="bg-green-100 p-3 rounded-full text-green-700">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">WhatsApp</p>
                  <a
                    href="https://wa.me/94771234567"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 inline-flex items-center gap-2 mt-1"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-700">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-800">Email</p>
                  <p className="text-gray-500">info@travelwithpurpose.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-700">
                  <MapPin className="h-5 w-5" />
                </div>
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

{/* Google Map */}
      <section className="py-16 px-10 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Find Us</h2>
        <div className="rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7!2d80.6337!3d7.2906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1234567890"
            width="100%"
            height="400"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>




    </main>
  )
}