"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Mountain, Leaf, Handshake, BookOpen, Feather } from "lucide-react"

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

  const navLinkClass = scrolled
    ? "text-gray-700 hover:text-[#D4A373] transition"
    : "text-white hover:underline hover:text-white transition"

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className={`text-xl font-bold ${scrolled ? "text-green-700" : "text-white"}`}>
          Travel With Purpose
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex gap-6 items-center`}>
          <Link href="/" className={`${navLinkClass}`}>Home</Link>

          {/* Programs Dropdown */}
          <div className="relative">
            <button
              className={`${navLinkClass} flex items-center gap-1`}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              Programs ▾
            </button>
            {dropdown && (
              <div
                className="absolute top-6 left-0 bg-white shadow-xl rounded-xl p-3 w-60 flex flex-col gap-2 border border-gray-100"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link href="/programs" className="text-gray-800 text-sm flex items-center gap-2 rounded-md px-2 py-1 hover:bg-[#E8F5E9] hover:text-[#1A202C] transition">
                  <Leaf className="w-4 h-4 text-gray-800" />
                  Meditation
                </Link>
                <Link href="/programs" className="text-gray-800 text-sm flex items-center gap-2 rounded-md px-2 py-1 hover:bg-[#E8F5E9] hover:text-[#1A202C] transition">
                  <Mountain className="w-4 h-4 text-gray-800" />
                  Adventure
                </Link>
                <Link href="/wellness" className="text-gray-800 text-sm flex items-center gap-2 rounded-md px-2 py-1 hover:bg-[#E8F5E9] hover:text-[#1A202C] transition">
                  <Leaf className="w-4 h-4 text-gray-800" />
                  Yoga & Wellness
                </Link>
                <Link href="/volunteer" className="text-gray-800 text-sm flex items-center gap-2 rounded-md px-2 py-1 hover:bg-[#E8F5E9] hover:text-[#1A202C] transition">
                  <Handshake className="w-4 h-4 text-gray-800" />
                  Volunteer
                </Link>
                <Link href="/programs" className="text-gray-800 text-sm flex items-center gap-2 rounded-md px-2 py-1 hover:bg-[#E8F5E9] hover:text-[#1A202C] transition">
                  <BookOpen className="w-4 h-4 text-gray-800" />
                  Culture
                </Link>
                <Link href="/programs" className="text-gray-800 text-sm flex items-center gap-2 rounded-md px-2 py-1 hover:bg-[#E8F5E9] hover:text-[#1A202C] transition">
                  <Feather className="w-4 h-4 text-gray-800" />
                  Wildlife
                </Link>
              </div>
            )}
          </div>

          <Link href="/destinations" className={`${navLinkClass}`}>Destinations</Link>
          <Link href="/wellness" className={`${navLinkClass}`}>Wellness</Link>
          <Link href="/gallery" className={`${navLinkClass}`}>Gallery</Link>
          <Link href="/blog" className={`${navLinkClass}`}>Blog</Link>
          <Link href="/about" className={`${navLinkClass}`}>About Us</Link>
          <Link href="/contact" className={`${navLinkClass}`}>Contact</Link>
        </div>

        {/* Desktop Book Now */}
        <Link href="/booking" className="hidden md:block text-white px-5 py-2 rounded-full hover:opacity-90 transition" style={{background: "linear-gradient(135deg, #8B6914, #C4962A)"}}>
          Book Now
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className={`md:hidden ${scrolled ? "text-green-700" : "text-white"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col gap-4 text-gray-800 z-40 overflow-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-bold text-gray-800" onClick={() => setOpen(false)}>Travel With Purpose</Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-4 flex flex-col gap-2">
            <Link href="/" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/programs" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Meditation</Link>
            <Link href="/programs" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Adventure</Link>
            <Link href="/wellness" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Yoga & Wellness</Link>
            <Link href="/volunteer" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Volunteer</Link>
            <Link href="/programs" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Culture</Link>
            <Link href="/programs" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Wildlife</Link>
            <Link href="/destinations" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Destinations</Link>
            <Link href="/gallery" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Gallery</Link>
            <Link href="/blog" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/about" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/contact" className="block text-lg px-4 py-3 rounded-md hover:bg-[#E8F5E9] transition text-gray-800" onClick={() => setOpen(false)}>Contact</Link>
          </nav>

          <div className="mt-6">
            <Link href="/booking" className="block bg-green-700 text-white px-6 py-3 rounded-full text-center hover:bg-green-800 transition text-lg" onClick={() => setOpen(false)}>
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}