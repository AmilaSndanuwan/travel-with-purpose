"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true)
          }, delay)

          observer.unobserve(element)
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      suppressHydrationWarning
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0px)"
          : "translateY(35px)",

        filter: visible
          ? "blur(0px)"
          : "blur(6px)",

        transition: `
          opacity 0.9s cubic-bezier(.22,.61,.36,1) ${delay}ms,
          transform 0.9s cubic-bezier(.22,.61,.36,1) ${delay}ms,
          filter 0.9s cubic-bezier(.22,.61,.36,1) ${delay}ms
        `,

        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  )
}