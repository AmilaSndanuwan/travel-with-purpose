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
  metadataBase: new URL("https://travelwithpurpose.lk"),

  title: {
    default: "Travel With Purpose | Meaningful Travel Experiences in Sri Lanka",
    template: "%s | Travel With Purpose",
  },

  description:
    "Discover meaningful travel experiences in Sri Lanka through wellness retreats, volunteering, eco-tourism, cultural immersion, adventure journeys and community impact programs.",

  keywords: [
    "Travel With Purpose",
    "Sri Lanka travel",
    "Meaningful travel Sri Lanka",
    "Volunteer tourism Sri Lanka",
    "Wellness retreats Sri Lanka",
    "Yoga retreats Sri Lanka",
    "Meditation retreats Sri Lanka",
    "Eco tourism Sri Lanka",
    "Cultural tourism Sri Lanka",
    "Adventure travel Sri Lanka",
    "Community impact travel",
    "Sustainable tourism Sri Lanka",
  ],

  authors: [{ name: "Travel With Purpose" }],
  creator: "Travel With Purpose",
  publisher: "Travel With Purpose",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  openGraph: {
    title: "Travel With Purpose | Meaningful Travel Experiences in Sri Lanka",
    description:
      "Transform your journey through wellness, culture, volunteering, nature and community impact experiences in Sri Lanka.",
    url: "https://travelwithpurpose.lk",
    siteName: "Travel With Purpose",
    type: "website",
    locale: "en_US",
    countryName: "Sri Lanka",

    images: [
  {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Travel With Purpose - Meaningful Travel Experiences in Sri Lanka",
  },
],

  },

  twitter: {
    card: "summary_large_image",
    title: "Travel With Purpose | Meaningful Travel Experiences in Sri Lanka",
    description:
      "Explore Sri Lanka through wellness, culture, nature, volunteering and community impact journeys.",
      images: ["/twitter-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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