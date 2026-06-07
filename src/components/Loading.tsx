"use client"
import { useEffect, useState } from "react"

export default function Loading() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-green-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-green-700 font-bold text-lg">Travel With Purpose</p>
        <p className="text-gray-400 text-sm mt-1">Loading your journey...</p>
      </div>
    </div>
  )
}