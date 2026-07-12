const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const programs = [
  {
    title: "Temple Stay Experience",
    slug: "temple-stay-experience",
    location: "Kandy, Sri Lanka",
    description:
      "Experience peaceful temple living, guided mindfulness and Buddhist cultural practices.",
    duration: "3 Days",
    groupSize: "4 - 12",
    impact: "High Impact",
    rating: "4.9",
    price: 180,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=900",
    tags: "Meditation, Temple stay, Mindfulness, Culture",
    isActive: true,
  },
  {
    title: "Surf & Yoga Package",
    slug: "surf-yoga-package",
    location: "Weligama, Sri Lanka",
    description:
      "Balance ocean adventure with daily yoga sessions and coastal wellness experiences.",
    duration: "7 Days",
    groupSize: "6 - 14",
    impact: "Medium Impact",
    rating: "4.8",
    price: 550,
    imageUrl: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=900",
    tags: "Adventure, Surf, Yoga, Wellness",
    isActive: true,
  },
  {
    title: "Organic Farming Program",
    slug: "organic-farming-program",
    location: "Haputale, Sri Lanka",
    description:
      "Learn organic farming, tea culture and sustainable village living in Sri Lanka.",
    duration: "5 Days",
    groupSize: "6 - 10",
    impact: "Community Impact",
    rating: "4.7",
    price: 320,
    imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=900",
    tags: "Agriculture, Farm work, Village stay, Local meals, Guide support",
    isActive: true,
  },
  {
    title: "Buddhist Mindfulness Journey",
    slug: "buddhist-mindfulness-journey",
    location: "Kandy, Sri Lanka",
    description:
      "A deeper mindfulness journey through meditation, silence and spiritual reflection.",
    duration: "7 Days",
    groupSize: "4 - 10",
    impact: "High Impact",
    rating: "4.9",
    price: 420,
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900",
    tags: "Meditation, Mindfulness, Buddhist culture, Spiritual journey",
    isActive: true,
  },
  {
    title: "Wildlife Safari Adventure",
    slug: "wildlife-safari-adventure",
    location: "Udawalawe, Sri Lanka",
    description:
      "Explore elephant habitats and wildlife conservation areas with local nature guides.",
    duration: "1 Day",
    groupSize: "2 - 8",
    impact: "Eco Impact",
    rating: "4.8",
    price: 120,
    imageUrl: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900",
    tags: "Wildlife, Safari, Elephant, Nature, Eco travel",
    isActive: true,
  },
  {
    title: "Traditional Cooking Class",
    slug: "traditional-cooking-class",
    location: "Galle, Sri Lanka",
    description:
      "Cook authentic Sri Lankan meals with local families and discover cultural food stories.",
    duration: "1 Day",
    groupSize: "2 - 12",
    impact: "Cultural Impact",
    rating: "4.6",
    price: 75,
    imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=900",
    tags: "Cultural, Cooking, Local food, Family experience",
    isActive: true,
  },
  {
    title: "Community Teaching Program",
    slug: "community-teaching-program",
    location: "Kandy, Sri Lanka",
    description:
      "Support local education through English practice, youth activities and cultural exchange.",
    duration: "14 Days",
    groupSize: "4 - 15",
    impact: "High Impact",
    rating: "4.9",
    price: 680,
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900",
    tags: "Volunteer, Teaching, Community, Education, Youth",
    isActive: true,
  },
  {
    title: "Ayurveda Healing Retreat",
    slug: "ayurveda-healing-retreat",
    location: "Bentota, Sri Lanka",
    description:
      "Relax with Ayurveda treatments, nature healing, yoga and mindful recovery practices.",
    duration: "5 Days",
    groupSize: "2 - 10",
    impact: "Wellness Impact",
    rating: "4.8",
    price: 480,
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900",
    tags: "Wellness, Ayurveda, Yoga, Healing, Nature",
    isActive: true,
  },
]

async function main() {
  for (const program of programs) {
    await prisma.program.upsert({
      where: {
        slug: program.slug,
      },
      update: program,
      create: program,
    })
  }

  console.log("Programs seeded successfully.")
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })