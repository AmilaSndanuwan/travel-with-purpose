import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">
      
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-green-700">
        Travel With Purpose
      </Link>

      {/* Links */}
      <div className="flex gap-6 text-gray-700">
        <Link href="/" className="hover:text-green-700">Home</Link>
        <Link href="/programs" className="hover:text-green-700">Programs</Link>
        <Link href="/destinations" className="hover:text-green-700">Destinations</Link>
        <Link href="/volunteer" className="hover:text-green-700">Volunteer</Link>
        <Link href="/wellness" className="hover:text-green-700">Wellness</Link>
        <Link href="/gallery" className="hover:text-green-700">Gallery</Link>
        <Link href="/blog" className="hover:text-green-700">Blog</Link>
        <Link href="/about" className="hover:text-green-700">About Us</Link>
        <Link href="/contact" className="hover:text-green-700">Contact</Link>
      </div>

      {/* Book Now Button */}
      <Link href="/booking" className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800">
        Book Now
      </Link>

    </nav>
  )
}