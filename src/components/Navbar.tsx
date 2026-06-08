"use client"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className={`text-xl font-bold ${scrolled ? "text-green-700" : "text-white"}`}>
          Travel With Purpose
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex gap-6 items-center ${scrolled ? "text-gray-700" : "text-white"}`}>
          <Link href="/" className="hover:text-green-500">Home</Link>

          {/* Programs Dropdown */}
          <div className="relative">
            <button
              className="hover:text-green-500 flex items-center gap-1"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              Programs ▾
            </button>
            {dropdown && (
              <div
                className="absolute top-6 left-0 bg-white shadow-xl rounded-xl p-4 w-48 flex flex-col gap-2"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link href="/programs" className="hover:text-green-700 text-gray-700 text-sm">🧘 Meditation</Link>
                <Link href="/programs" className="hover:text-green-700 text-gray-700 text-sm">🏔️ Adventure</Link>
                <Link href="/wellness" className="hover:text-green-700 text-gray-700 text-sm">🌿 Yoga & Wellness</Link>
                <Link href="/volunteer" className="hover:text-green-700 text-gray-700 text-sm">🤝 Volunteer</Link>
                <Link href="/programs" className="hover:text-green-700 text-gray-700 text-sm">🏛️ Culture</Link>
                <Link href="/programs" className="hover:text-green-700 text-gray-700 text-sm">🐘 Wildlife</Link>
              </div>
            )}
          </div>

          <Link href="/destinations" className="hover:text-green-500">Destinations</Link>
          <Link href="/wellness" className="hover:text-green-500">Wellness</Link>
          <Link href="/gallery" className="hover:text-green-500">Gallery</Link>
          <Link href="/blog" className="hover:text-green-500">Blog</Link>
          <Link href="/about" className="hover:text-green-500">About Us</Link>
          <Link href="/contact" className="hover:text-green-500">Contact</Link>
        </div>

        {/* Desktop Book Now */}
        <Link href="/booking" className="hidden md:block text-white px-5 py-2 rounded-full hover:opacity-90 transition" style={{background: "linear-gradient(135deg, #8B6914, #C4962A)"}}>
          Book Now
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className={`md:hidden text-3xl ${scrolled ? "text-green-700" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 text-gray-700 border-t">
          <Link href="/" className="hover:text-green-700 pt-4" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/programs" className="hover:text-green-700" onClick={() => setOpen(false)}>Meditation</Link>
          <Link href="/programs" className="hover:text-green-700" onClick={() => setOpen(false)}>Adventure</Link>
          <Link href="/wellness" className="hover:text-green-700" onClick={() => setOpen(false)}>Yoga & Wellness</Link>
          <Link href="/volunteer" className="hover:text-green-700" onClick={() => setOpen(false)}>Volunteer</Link>
          <Link href="/programs" className="hover:text-green-700" onClick={() => setOpen(false)}>Culture</Link>
          <Link href="/programs" className="hover:text-green-700" onClick={() => setOpen(false)}>Wildlife</Link>
          <Link href="/destinations" className="hover:text-green-700" onClick={() => setOpen(false)}>Destinations</Link>
          <Link href="/gallery" className="hover:text-green-700" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/blog" className="hover:text-green-700" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/about" className="hover:text-green-700" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/contact" className="hover:text-green-700" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/booking" className="bg-green-700 text-white px-5 py-2 rounded-full text-center hover:bg-green-800" onClick={() => setOpen(false)}>
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}