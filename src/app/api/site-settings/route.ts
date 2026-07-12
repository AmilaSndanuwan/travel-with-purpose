import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { prisma } from "../../../lib/prisma"

const checkAdmin = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")?.value
  return token === "logged_in"
}

const defaultSettings = {
  companyName: "Travel With Purpose",
  email: "info@travelwithpurpose.lk",
  phone: "+94 77 000 0000",
  whatsapp: "+94770000000",
  website: "https://travelwithpurpose.lk",
  heroTitle: "Travel With Purpose",
  heroSubtitle:
    "Discover meaningful travel experiences across Sri Lanka through wellness, volunteering, culture and nature.",
  footerText:
    "Travel With Purpose creates meaningful journeys across Sri Lanka through responsible tourism, wellness, culture and community impact.",
  facebookUrl: "",
  instagramUrl: "",
  linkedinUrl: "",
  youtubeUrl: "",
}

export async function GET() {
  try {
    const settings = await prisma.siteSetting.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({
      success: true,
      message: "Site settings loaded successfully",
      data: settings || defaultSettings,
    })
  } catch (error) {
    console.error("Site Settings GET API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load site settings",
        data: defaultSettings,
      },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  const isLoggedIn = await checkAdmin()

  if (!isLoggedIn) {
    return NextResponse.json(
      {
        success: false,
        message: "Unauthorized access",
      },
      { status: 401 }
    )
  }

  try {
    const body = await request.json()

    if (
      !body.companyName ||
      !body.email ||
      !body.phone ||
      !body.whatsapp ||
      !body.website ||
      !body.heroTitle ||
      !body.heroSubtitle ||
      !body.footerText
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required site setting fields",
        },
        { status: 400 }
      )
    }

    const existingSettings = await prisma.siteSetting.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    })

    const data = {
      companyName: String(body.companyName),
      email: String(body.email),
      phone: String(body.phone),
      whatsapp: String(body.whatsapp),
      website: String(body.website),
      heroTitle: String(body.heroTitle),
      heroSubtitle: String(body.heroSubtitle),
      footerText: String(body.footerText),
      facebookUrl: body.facebookUrl ? String(body.facebookUrl) : "",
      instagramUrl: body.instagramUrl ? String(body.instagramUrl) : "",
      linkedinUrl: body.linkedinUrl ? String(body.linkedinUrl) : "",
      youtubeUrl: body.youtubeUrl ? String(body.youtubeUrl) : "",
    }

    const settings = existingSettings
      ? await prisma.siteSetting.update({
          where: {
            id: existingSettings.id,
          },
          data,
        })
      : await prisma.siteSetting.create({
          data,
        })

    return NextResponse.json({
      success: true,
      message: "Site settings updated successfully",
      data: settings,
    })
  } catch (error) {
    console.error("Site Settings PUT API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update site settings",
      },
      { status: 500 }
    )
  }
}