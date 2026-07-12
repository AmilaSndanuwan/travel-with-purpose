const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const galleryItems = [
  {
    title: "Mountain Hiking",
    category: "Adventure",
    location: "Knuckles, Sri Lanka",
    description:
      "A beautiful mountain hiking experience through misty trails, green valleys and peaceful nature paths.",
    imageUrl:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200",
    isActive: true,
  },
  {
    title: "Silent Retreat",
    category: "Meditation",
    location: "Kandy, Sri Lanka",
    description:
      "A calm meditation retreat experience designed for mindfulness, silence and inner peace.",
    imageUrl:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200",
    isActive: true,
  },
  {
    title: "Elephant Safari",
    category: "Wildlife",
    location: "Udawalawe, Sri Lanka",
    description:
      "A meaningful wildlife journey to observe elephants and natural landscapes responsibly.",
    imageUrl:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200",
    isActive: true,
  },
  {
    title: "Island Culture",
    category: "Culture",
    location: "Sri Lanka",
    description:
      "A cultural travel moment showing the beauty of local traditions, people and island lifestyle.",
    imageUrl:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200",
    isActive: true,
  },
  {
    title: "Community Support",
    category: "Volunteers",
    location: "Kandy, Sri Lanka",
    description:
      "Volunteers supporting local communities through meaningful service and responsible travel.",
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200",
    isActive: true,
  },
  {
    title: "Forest Healing",
    category: "Nature",
    location: "Ella, Sri Lanka",
    description:
      "A peaceful forest environment for slow travel, wellness and nature connection.",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200",
    isActive: true,
  },
  {
    title: "Organic Farm Trails",
    category: "Adventure",
    location: "Haputale, Sri Lanka",
    description:
      "A slow travel experience through organic farms, tea landscapes and mountain villages.",
    imageUrl:
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1200",
    isActive: true,
  },
  {
    title: "Temple Peace",
    category: "Meditation",
    location: "Kandy, Sri Lanka",
    description:
      "A peaceful temple moment for mindfulness, reflection and cultural respect.",
    imageUrl:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=1200",
    isActive: true,
  },
  {
    title: "Wild Landscapes",
    category: "Wildlife",
    location: "Sri Lanka",
    description:
      "Wild natural landscapes that show the biodiversity and beauty of Sri Lanka.",
    imageUrl:
      "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?w=1200",
    isActive: true,
  },
  {
    title: "Ancient Places",
    category: "Culture",
    location: "Sigiriya, Sri Lanka",
    description:
      "Ancient heritage, cultural history and timeless travel experiences from Sri Lanka.",
    imageUrl:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200",
    isActive: true,
  },
  {
    title: "Teaching Moments",
    category: "Volunteers",
    location: "Local School",
    description:
      "A volunteer teaching experience focused on education, kindness and community impact.",
    imageUrl:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200",
    isActive: true,
  },
  {
    title: "Golden Landscapes",
    category: "Nature",
    location: "Sri Lanka",
    description:
      "Golden natural landscapes from meaningful journeys across Sri Lanka.",
    imageUrl:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200",
    isActive: true,
  },
]

async function main() {
  for (const item of galleryItems) {
    const existingItem = await prisma.galleryItem.findFirst({
      where: {
        title: item.title,
        location: item.location,
      },
    })

    if (existingItem) {
      await prisma.galleryItem.update({
        where: {
          id: existingItem.id,
        },
        data: item,
      })
    } else {
      await prisma.galleryItem.create({
        data: item,
      })
    }
  }

  console.log("Gallery items seeded successfully.")
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })