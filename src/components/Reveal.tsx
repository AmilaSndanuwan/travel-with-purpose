"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px) scale(1)"
          : "translateY(36px) scale(0.98)",
        filter: visible ? "blur(0px)" : "blur(4px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms, filter 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}