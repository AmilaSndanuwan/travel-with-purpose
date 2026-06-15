"use client"

import { useEffect, useState } from "react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="hidden md:flex fixed bottom-24 right-6 z-[9998] w-12 h-12 items-center justify-center rounded-full text-white text-xl font-black shadow-lg transition hover:-translate-y-1"
      style={{
        background: "linear-gradient(135deg, #A66A2C, #D89A3D)",
        boxShadow: "0 14px 35px rgba(166,106,44,0.28)",
      }}
    >
      ↑
    </button>
  )
}