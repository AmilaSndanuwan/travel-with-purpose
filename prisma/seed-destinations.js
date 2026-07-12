const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const destinations = [
  {
    title: "Kandy",
    slug: "kandy",
    location: "Kandy, Sri Lanka",
    region: "Central Highlands",
    description:
      "Cultural capital of Sri Lanka, home to the Temple of the Tooth Relic and peaceful mountain retreats.",
    bestTime: "December to April",
    imageUrl: "/kandy.jpg",
    highlights: "Temple Visits, Meditation, Cultural Walks",
    isActive: true,
  },
  {
    title: "Sigiriya",
    slug: "sigiriya",
    location: "Matale District, Sri Lanka",
    region: "Cultural Triangle",
    description:
      "Ancient rock fortress surrounded by jungle, village life and unforgettable sunrise viewpoints.",
    bestTime: "January to April",
    imageUrl: "/sigiriya.jpg",
    highlights: "Rock Fortress, Village Tours, Nature Trails",
    isActive: true,
  },
  {
    title: "Ella",
    slug: "ella",
    location: "Badulla District, Sri Lanka",
    region: "Hill Country",
    description:
      "A scenic mountain village known for tea estates, hiking trails, waterfalls and slow travel experiences.",
    bestTime: "January to April",
    imageUrl: "/ella.jpg",
    highlights: "Nine Arch Bridge, Tea Trails, Waterfalls",
    isActive: true,
  },
  {
    title: "Nuwara Eliya",
    slug: "nuwara-eliya",
    location: "Nuwara Eliya, Sri Lanka",
    region: "Tea Country",
    description:
      "Cool climate, colonial charm and beautiful tea plantations surrounded by misty mountain scenery.",
    bestTime: "February to April",
    imageUrl: "/nuwaraeliya.jpg",
    highlights: "Tea Estates, Nature Healing, Scenic Walks",
    isActive: true,
  },
  {
    title: "Galle",
    slug: "galle",
    location: "Galle, Sri Lanka",
    region: "South Coast",
    description:
      "Historic fort city with Dutch architecture, coastal culture, art spaces and meaningful local experiences.",
    bestTime: "December to April",
    imageUrl: "/galle.jpg",
    highlights: "Galle Fort, Cooking Classes, Coastal Walks",
    isActive: true,
  },
  {
    title: "Udawalawe",
    slug: "udawalawe",
    location: "Udawalawe, Sri Lanka",
    region: "Wildlife Region",
    description:
      "A beautiful wildlife destination famous for elephant safaris, bird watching and nature conservation.",
    bestTime: "May to September",
    imageUrl: "/udawalawe.jpg",
    highlights: "Elephant Safari, Bird Watching, Eco Tours",
    isActive: true,
  },
  {
    title: "Bentota",
    slug: "bentota",
    location: "Bentota, Sri Lanka",
    region: "Golden Coast",
    description:
      "A peaceful beach destination for Ayurveda, yoga, river experiences and relaxing coastal wellness.",
    bestTime: "November to April",
    imageUrl: "/bentota.jpg",
    highlights: "Ayurveda, Beach Yoga, River Safari",
    isActive: true,
  },
  {
    title: "Haputale",
    slug: "haputale",
    location: "Haputale, Sri Lanka",
    region: "Mountain Edge",
    description:
      "A quiet hill town with tea fields, viewpoints, organic farming and sustainable living experiences.",
    bestTime: "January to April",
    imageUrl: "/haputale.jpg",
    highlights: "Organic Farms, Tea Lifestyle, Viewpoints",
    isActive: true,
  },
]

async function main() {
  for (const destination of destinations) {
    await prisma.destination.upsert({
      where: {
        slug: destination.slug,
      },
      update: destination,
      create: destination,
    })
  }

  console.log("Destinations seeded successfully.")
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })