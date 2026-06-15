import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94771234567"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-[9999] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        boxShadow: "0 14px 35px rgba(18,140,126,0.35)",
      }}
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </a>
  )
} 