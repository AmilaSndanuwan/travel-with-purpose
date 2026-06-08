"use client"
import { useState } from "react"
import CountUp from "@/components/CountUp"
import Reveal from "@/components/Reveal"
import {
  Flower2,
  HeartHandshake,
  Mountain,
  Sparkles,
  Landmark,
  Trees,
  PawPrint,
  Wheat,
  Tent,
  Church
} from "lucide-react";

export default function Home() {
  
  const programs = [
    { icon: Flower2, title: "Meditation" },
    { icon: Sparkles, title: "Yoga & Wellness" },
    { icon: Mountain, title: "Adventure" },
    { icon: Landmark, title: "Cultural Tours" },
    { icon: HeartHandshake, title: "Volunteer" },
    { icon: Trees, title: "Eco Tourism" },
    { icon: PawPrint, title: "Wildlife Safaris" },
    { icon: Wheat, title: "Agriculture" },
    { icon: Tent, title: "Youth Camps" },
    { icon: Church, title: "Monastery Stay" }
  ];

  return (
  
    <main className="min-h-screen" style={{background: "#F5F0E8"}}>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        ></div>
        {/* Gradient Overlay - Left Black fade to transparent */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to right, rgba(3,8,7,0.85) 5%, rgba(3,8,7,0.5) 30%, rgba(3,8,7,0.2) 60%, rgba(3,8,7,0) 100%)"
        }}></div>
        <div className="relative z-10 h-full flex flex-col justify-center" style={{maxWidth: "1000px", paddingLeft: "250px"}}>
          <p className="font-bold text-sm tracking-widest mb-4 uppercase" style={{color: "#C4962A"}}>
            transform your journey through impact tourism
          </p>
         {/* Main Title */}
          <div className="leading-none mb-6">
            <span className="block font-black text-white tracking-widest" style={{
              fontSize: "clamp(3rem, 7vw, 8rem)",
              fontFamily: "'BebasNeue', sans-serif"
            }}>
              TRAVEL WITH
            </span>
          <span className="block script-font" style={{
              color: "#CF8528",
              fontSize: "clamp(4rem, 10vw, 9rem)",
              lineHeight: "1",
            }}>
              Purpose
            </span>
          </div>
          <p className="text-gray-200 text-lg mb-8 max-w-lg">
            Giving you the opportunity to give back, learn and grow as you experience
            the most amazing places in Sri Lanka.
          </p>
          <div className="flex flex-row gap-4">
            <a href="/programs" className="text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition whitespace-nowrap" style={{background: "linear-gradient(135deg, #223C33, #2D5016)"}}>
              Explore Programs
            </a>
            <a href="/booking" className="text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition whitespace-nowrap" style={{background: "linear-gradient(135deg, #674408, #CF8528)"}}>
              Book Retreat
            </a>
            <a href="/volunteer" className="border-2 px-6 py-3 rounded-full font-bold hover:opacity-70 transition whitespace-nowrap" style={{borderColor: "#CF8528", color: "#CF8528"}}>
              Volunteer Now
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
          <p className="text-xs tracking-widest mb-1">SCROLL</p>
          <p className="text-2xl">↓</p>
        </div>
      </section>

      

      {/* Programs Section */}
<section
  className="py-24 px-6 lg:px-10 relative overflow-hidden"
  style={{ background: "#030807" }}
>

  {/* Background Glow */}
  <div
    className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[180px] opacity-20"
    style={{
      background:
        "radial-gradient(circle, rgba(207,133,40,0.25) 0%, transparent 70%)"
    }}
  />

  <div>
  <div className="text-center mb-16 relative z-10">

      <div className="flex items-center justify-center gap-4 mb-4">
        <div
          className="h-px w-16"
          style={{ background: "#CF8528" }}
        ></div>

        <p
          className="script-font text-3xl"
          style={{ color: "#CF8528" }}
        >
          Explore Our
        </p>

        <div
          className="h-px w-16"
          style={{ background: "#CF8528" }}
        ></div>
      </div>

      <h2 className="text-5xl md:text-6xl font-black tracking-[0.25em] text-white">
        PROGRAMS
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-6">
        Discover authentic experiences that connect you with Sri Lanka’s
        culture, spirituality, nature and community.
      </p>

    </div>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">

    {programs.map((item, i) => {

      const Icon = item.icon;

      return (
        <div key={i}>
          <a
            href="/programs"
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              p-8
              text-center
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-[0_0_50px_rgba(207,133,40,0.15)]
            "
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)"
            }}
          >

            {/* Hover Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
              "
              style={{
                background:
                  "radial-gradient(circle at center, rgba(207,133,40,0.18), transparent 70%)"
              }}
            />

            {/* Gold Corner Effect */}
            <div
              className="
                absolute
                top-0
                left-0
                w-0
                h-[2px]
                group-hover:w-full
                transition-all
                duration-500
              "
              style={{
                background: "#CF8528"
              }}
            />

            {/* Icon */}
            <div
              className="
                relative
                z-10
                w-16
                h-16
                mx-auto
                mb-5
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
              style={{
                background: "rgba(207,133,40,0.08)",
                border: "1px solid rgba(207,133,40,0.35)"
              }}
            >
              <Icon
                size={30}
                strokeWidth={1.6}
                style={{
                  color: "#CF8528"
                }}
              />
            </div>

            {/* Title */}
            <h3
              className="
                relative
                z-10
                text-white
                font-semibold
                text-sm
                md:text-base
                tracking-wide
                leading-relaxed
              "
            >
              {item.title}
            </h3>

            {/* Bottom Gold Border */}
            <div
              className="
                absolute
                bottom-0
                left-0
                h-[2px]
                w-0
                group-hover:w-full
                transition-all
                duration-500
              "
              style={{
                background: "#CF8528"
              }}
            />

          </a>
        </div>
      );
    })}
  </div>

  {/* View All Button */}
  <div className="text-center mt-16 relative z-10">

    <a
      href="/programs"
      className="
        inline-flex
        items-center
        gap-3
        px-10
        py-4
        rounded-full
        font-semibold
        tracking-widest
        transition-all
        duration-300
        hover:-translate-y-1
      "
      style={{
        border: "1px solid #CF8528",
        color: "#CF8528"
      }}
    >
      VIEW ALL PROGRAMS
      <span>→</span>
    </a>

  </div>

</section>



      {/* Featured Programs */}
      <section className="py-24 px-10" style={{background: "#1A1A0F"}}>
        <Reveal>
          <p className="script-font text-center text-4xl mb-2" style={{color: "#C4962A"}}>Featured</p>
          <h2 className="text-4xl font-black text-center tracking-widest mb-16 text-white">EXPERIENCES</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {title: "7-Day Silent Retreat", location: "Kandy", days: "7 Days", price: "$450", img: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400"},
            {title: "Knuckles Hiking", location: "Kandy", days: "2 Days", price: "$380", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400"},
            {title: "Village Homestay", location: "Udawalawe", days: "3 Days", price: "$250", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400"},
            {title: "Elephant Safari", location: "Udawalawe", days: "1 Day", price: "$120", img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400"},
          ].map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="rounded-xl overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden h-64">
                  <img src={p.img} className="h-full w-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition"></div>
                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <p className="font-black text-xl">{p.title}</p>
                    <p className="text-sm opacity-80">📍 {p.location} · ⏱ {p.days}</p>
                  </div>
                  <div className="absolute top-4 right-4 text-white font-black text-lg" style={{color: "#C4962A"}}>{p.price}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/programs" className="border-2 text-white px-10 py-4 rounded-full font-bold hover:opacity-80 transition" style={{borderColor: "#C4962A", color: "#C4962A"}}>
            View All Programs →
          </a>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 px-10 text-white text-center" style={{background: "linear-gradient(135deg, #2D5016, #4A7C20)"}}>
        <Reveal>
          <p className="script-font text-4xl mb-2" style={{color: "#C4962A"}}>Our</p>
          <h2 className="text-4xl font-black tracking-widest mb-16">IMPACT</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {end: 12450, label: "Trees Planted", icon: "🌳"},
            {end: 8320, label: "Students Supported", icon: "👨‍🎓"},
            {end: 68, label: "Villages Supported", icon: "🏘️"},
            {end: 45600, label: "Volunteer Hours", icon: "⏰"},
          ].map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div>
                <p className="text-4xl mb-2">{item.icon}</p>
                <p className="text-5xl font-black" style={{color: "#C4962A"}}><CountUp end={item.end} /></p>
                <p className="text-lg mt-2 opacity-80">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 px-10" style={{background: "#F5F0E8"}}>
        <Reveal>
          <p className="script-font text-center text-4xl mb-2" style={{color: "#8B6914"}}>Popular</p>
          <h2 className="text-4xl font-black text-center tracking-widest mb-16" style={{color: "#2D5016"}}>DESTINATIONS</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            {name: "Kandy", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"},
            {name: "Ella", img: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=400"},
            {name: "Sigiriya", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400"},
            {name: "Galle", img: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d?w=400"},
            {name: "Nuwara Eliya", img: "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?w=400"},
          ].map((d, i) => (
            <Reveal key={i} delay={i * 80}>
              <a href="/destinations" className="block rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition">
                <div className="relative h-48 overflow-hidden">
                  <img src={d.img} className="h-full w-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition"></div>
                  <p className="absolute bottom-3 left-3 text-white font-black text-lg">{d.name}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-10" style={{background: "#2D5016"}}>
        <Reveal>
          <p className="script-font text-center text-4xl mb-2" style={{color: "#C4962A"}}>Traveler</p>
          <h2 className="text-4xl font-black text-center tracking-widest mb-16 text-white">TESTIMONIALS</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {text: "This journey changed my life. The people, the culture, and the impact we created together will stay with me forever.", name: "Sarah J.", country: "Australia"},
            {text: "The meditation retreat was absolutely transformative. I found peace and clarity I never knew was possible.", name: "Mark T.", country: "United Kingdom"},
            {text: "Volunteering with local communities was the most rewarding experience of my travels. Highly recommended!", name: "Anna K.", country: "Germany"},
          ].map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="p-8 rounded-xl" style={{background: "rgba(255,255,255,0.1)"}}>
                <p className="text-4xl mb-4" style={{color: "#C4962A"}}>"</p>
                <p className="text-white italic leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white" style={{background: "#C4962A"}}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-black text-white">{t.name}</p>
                    <p className="text-sm" style={{color: "#C4962A"}}>{t.country}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-24 px-10" style={{background: "#F5F0E8"}}>
        <Reveal>
          <p className="script-font text-center text-4xl mb-2" style={{color: "#8B6914"}}>Latest From</p>
          <h2 className="text-4xl font-black text-center tracking-widest mb-16" style={{color: "#2D5016"}}>OUR BLOG</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {cat: "TRAVEL STORIES", title: "10 Hidden Places You Must Visit in Sri Lanka", date: "May 10, 2024", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400"},
            {cat: "MEDITATION", title: "How Meditation Retreats Can Transform Your Mind", date: "May 5, 2024", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400"},
            {cat: "VOLUNTEER STORIES", title: "Volunteer Abroad: Stories That Inspire", date: "Apr 28, 2024", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400"},
          ].map((b, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <div className="relative h-48 overflow-hidden">
                  <img src={b.img} className="h-full w-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-black mb-2 tracking-widest" style={{color: "#C4962A"}}>{b.cat}</p>
                  <h3 className="text-lg font-black" style={{color: "#2D5016"}}>{b.title}</h3>
                  <p className="text-sm mt-3" style={{color: "#7A7060"}}>{b.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/blog" className="border-2 px-10 py-4 rounded-full font-bold hover:opacity-80 transition" style={{borderColor: "#2D5016", color: "#2D5016"}}>
            View All Articles →
          </a>
        </div>
      </section>

      {/* Call To Action */}
      <section className="relative py-40 text-center overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
        <div className="absolute inset-0" style={{background: "rgba(45, 80, 22, 0.75)"}}></div>
        <Reveal>
          <div className="relative z-10">
            <p className="script-font text-5xl mb-2" style={{color: "#C4962A"}}>Ready to make</p>
            <h2 className="text-5xl font-black text-white tracking-widest mb-6">A DIFFERENCE?</h2>
            <p className="text-gray-200 text-xl mb-10">Start your meaningful journey today!</p>
            <a href="/booking" className="text-white px-12 py-5 rounded-full text-xl font-black hover:opacity-90 transition" style={{background: "linear-gradient(135deg, #8B6914, #C4962A)"}}>
              Book Your Experience
            </a>
          </div>
        </Reveal>
      </section>

    </main>
  )
}