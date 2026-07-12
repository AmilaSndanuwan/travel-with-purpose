const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const blogPosts = [
  {
    title: "10 Hidden Places You Must Visit in Sri Lanka",
    slug: "10-hidden-places-you-must-visit-in-sri-lanka",
    category: "Travel Stories",
    excerpt:
      "Discover the most beautiful hidden gems across the island, from misty mountains to quiet coastal escapes.",
    content:
      "Sri Lanka is full of famous destinations, but some of the most meaningful travel experiences are found away from the busy routes. Hidden villages, peaceful waterfalls, tea country viewpoints, quiet beaches and local community spaces can help travelers experience the island in a deeper way.\n\nPurposeful travel is not only about seeing beautiful places. It is also about meeting local people, respecting culture, supporting small businesses and learning from the environment around you.\n\nWhen you explore hidden places in Sri Lanka, travel slowly. Take time to understand the story of each place, choose local guides where possible and protect the natural beauty for future travelers.",
    author: "Travel With Purpose Team",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200",
    isActive: true,
  },
  {
    title: "How Meditation Retreats Can Transform Your Mind",
    slug: "how-meditation-retreats-can-transform-your-mind",
    category: "Meditation",
    excerpt:
      "A personal journey through silence, mindfulness, temple spaces and peaceful reflection.",
    content:
      "Meditation retreats give travelers a chance to slow down, breathe and reconnect with themselves. In Sri Lanka, many peaceful locations such as temples, forest monasteries, mountain retreats and wellness centers create the right environment for mindfulness.\n\nA meditation retreat can help reduce stress, improve focus and bring more awareness to daily life. The experience is simple, but powerful. Silent moments, guided breathing, mindful walking and reflection can help travelers understand themselves better.\n\nFor many people, the most valuable part of a retreat is not only relaxation. It is the ability to return home with a calmer mind and a clearer direction.",
    author: "Wellness Guide",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200",
    isActive: true,
  },
  {
    title: "Volunteer Abroad: Stories That Inspire",
    slug: "volunteer-abroad-stories-that-inspire",
    category: "Volunteer Stories",
    excerpt:
      "Real stories from volunteers who supported communities and discovered deeper meaning through travel.",
    content:
      "Volunteering abroad is one of the most meaningful ways to travel. It allows travelers to support communities, share knowledge and learn from local people. In Sri Lanka, volunteer experiences may include education support, environmental projects, community programs and youth development activities.\n\nA good volunteer journey should always respect the local community. The goal is not only to help, but also to listen, learn and contribute responsibly.\n\nMany travelers say that volunteering changes the way they see the world. It creates real human connection and reminds us that travel can be a powerful tool for positive impact.",
    author: "Impact Team",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200",
    isActive: true,
  },
  {
    title: "A Complete Guide to Ayurveda in Sri Lanka",
    slug: "a-complete-guide-to-ayurveda-in-sri-lanka",
    category: "Sri Lanka Guide",
    excerpt:
      "Everything you need to know about traditional Sri Lankan healing, herbal care and wellness retreats.",
    content:
      "Ayurveda is a traditional healing system that has been practiced in Sri Lanka for generations. It focuses on balance, natural healing, herbal treatments, food habits, rest and lifestyle.\n\nMany travelers visit Sri Lanka for Ayurveda because the country offers peaceful environments, experienced practitioners and natural ingredients. Ayurveda programs may include consultations, herbal treatments, oil therapy, yoga, meditation and healthy meals.\n\nBefore joining any Ayurveda program, travelers should choose professional and trusted wellness centers. A good Ayurveda experience should feel safe, calm and personalized.",
    author: "Healing Team",
    readTime: "8 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200",
    isActive: true,
  },
  {
    title: "Why Sustainable Travel Matters More Than Ever",
    slug: "why-sustainable-travel-matters-more-than-ever",
    category: "Sustainable Travel",
    excerpt:
      "How responsible tourism can support communities, protect nature and preserve local culture.",
    content:
      "Sustainable travel is about making better choices while exploring the world. It means protecting nature, respecting culture, supporting local communities and reducing negative impact.\n\nIn Sri Lanka, sustainable travel can include staying in eco-friendly accommodation, using local guides, supporting village businesses, avoiding plastic waste and choosing meaningful experiences instead of mass tourism activities.\n\nEvery traveler has the power to make a difference. Small decisions can create positive change when they are made with care and awareness.",
    author: "Eco Travel Team",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200",
    isActive: true,
  },
  {
    title: "Best Time to Visit Sri Lanka",
    slug: "best-time-to-visit-sri-lanka",
    category: "Sri Lanka Guide",
    excerpt:
      "A month-by-month guide to planning your Sri Lanka journey based on weather, regions and activities.",
    content:
      "Sri Lanka is a year-round travel destination, but the best time depends on the region you want to visit. The island has different weather patterns across the west coast, east coast, hill country and cultural triangle.\n\nFor the south and west coast, December to April is usually popular. For the east coast, May to September is often a better time. The hill country can be beautiful throughout the year, but weather can change quickly.\n\nWhen planning a purposeful journey, do not only think about weather. Also consider festivals, community activities, wildlife seasons and the type of experience you want.",
    author: "Travel Team",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=1200",
    isActive: true,
  },
  {
    title: "Village Life Experiences That Connect You With Sri Lanka",
    slug: "village-life-experiences-that-connect-you-with-sri-lanka",
    category: "Culture",
    excerpt:
      "Explore food, traditions, crafts, family hospitality and local stories through village experiences.",
    content:
      "Village life experiences help travelers understand the real heart of Sri Lanka. Cooking with local families, learning traditional crafts, walking through paddy fields and listening to village stories can create unforgettable memories.\n\nThese experiences also support local communities directly. When travelers choose responsible village experiences, income can reach families, small businesses and community guides.\n\nThe best village journeys are respectful, simple and authentic. They are not only about taking photos. They are about connection, learning and appreciation.",
    author: "Culture Team",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200",
    isActive: true,
  },
  {
    title: "What To Expect From a Temple Stay Program",
    slug: "what-to-expect-from-a-temple-stay-program",
    category: "Meditation",
    excerpt:
      "A simple guide for travelers joining Buddhist temple stays, mindfulness programs and silent retreats.",
    content:
      "A temple stay program is a peaceful way to experience mindfulness, simple living and spiritual reflection. In Sri Lanka, temple stays may include meditation, chanting, discussions, mindful routines and quiet time.\n\nTravelers should join these programs with respect. Dress modestly, follow temple rules, speak gently and keep an open mind. The experience may be different from a normal holiday, but that is what makes it meaningful.\n\nA temple stay can teach patience, simplicity and gratitude. It is a journey that invites travelers to slow down and experience Sri Lankan Buddhist culture with respect.",
    author: "Spiritual Guide",
    readTime: "4 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
    isActive: true,
  },
]

async function main() {
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: {
        slug: post.slug,
      },
      update: post,
      create: post,
    })
  }

  console.log("Blog posts seeded successfully.")
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    prisma.$disconnect()
  })