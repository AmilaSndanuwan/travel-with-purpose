import type { Metadata } from "next"
import { Montserrat, Dancing_Script } from "next/font/google"
import "./globals.css"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"
import WhatsAppButton from "../components/WhatsAppButton"


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Travel With Purpose",
    template: "%s | Travel With Purpose",
  },
  description:
    "Discover meaningful travel experiences in Sri Lanka through wellness retreats, volunteering, eco-tourism, cultural immersion and adventure journeys.",
  formatDetection: {
  telephone: false,
  email: false,
  address: false,
},
  
  
    keywords: [
    "Sri Lanka travel",
    "Volunteer tourism",
    "Meditation retreats",
    "Yoga retreats Sri Lanka",
    "Eco tourism",
    "Adventure travel",
    "Cultural tourism",
    "Travel With Purpose",
  ],
  openGraph: {
    title: "Travel With Purpose",
    description: "Transform your journey through impact tourism in Sri Lanka.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body
    suppressHydrationWarning
    className={`${montserrat.variable} ${dancing.variable}`}
  >
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  )
}