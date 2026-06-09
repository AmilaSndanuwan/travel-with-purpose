import Link from "next/link"
import { Smartphone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-white py-16 px-10" style={{background: "linear-gradient(135deg, #1A1A0F, #2D5016)"}}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4">Travel With Purpose</h3>
          <p className="text-gray-400 text-sm">
            Travel with purpose. Create impact. Inspire change.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link href="/" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/programs" className="hover:text-green-400">Programs</Link></li>
            <li><Link href="/destinations" className="hover:text-green-400">Destinations</Link></li>
            <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Programs</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link href="/programs" className="hover:text-green-400">Meditation</Link></li>
            <li><Link href="/programs" className="hover:text-green-400">Adventure</Link></li>
            <li><Link href="/volunteer" className="hover:text-green-400">Volunteer</Link></li>
            <li><Link href="/wellness" className="hover:text-green-400">Wellness</Link></li>
            <li><Link href="/programs" className="hover:text-green-400">Wildlife</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> WhatsApp: +94 77 123 4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@travelwithpurpose.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Kandy, Sri Lanka</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2024 Travel With Purpose. All rights reserved.
      </div>
    </footer>
  )
}