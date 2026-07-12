import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { prisma } from "../../../lib/prisma"

const checkAdmin = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")?.value
  return token === "logged_in"
}

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const isAdmin = searchParams.get("admin") === "true"

    if (isAdmin) {
      const isLoggedIn = await checkAdmin()

      if (!isLoggedIn) {
        return NextResponse.json(
          {
            success: false,
            message: "Unauthorized access",
            total: 0,
            data: [],
          },
          { status: 401 }
        )
      }
    }

    const destinations = await prisma.destination.findMany({
      where: isAdmin
        ? {}
        : {
            isActive: true,
          },
      orderBy: {
        createdAt: "desc",
      },
    })

    const total = await prisma.destination.count({
      where: isAdmin
        ? {}
        : {
            isActive: true,
          },
    })

    return NextResponse.json({
      success: true,
      message: "Destinations loaded successfully",
      total,
      data: destinations,
    })
  } catch (error) {
    console.error("Destinations GET API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load destinations",
        total: 0,
        data: [],
      },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
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
      !body.title ||
      !body.location ||
      !body.region ||
      !body.description ||
      !body.bestTime ||
      !body.imageUrl ||
      !body.highlights
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required destination fields",
        },
        { status: 400 }
      )
    }

    const slug = body.slug
      ? createSlug(String(body.slug))
      : createSlug(String(body.title))

    const destination = await prisma.destination.create({
      data: {
        title: String(body.title),
        slug,
        location: String(body.location),
        region: String(body.region),
        description: String(body.description),
        bestTime: String(body.bestTime),
        imageUrl: String(body.imageUrl),
        highlights: String(body.highlights),
        isActive:
          typeof body.isActive === "boolean" ? body.isActive : true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Destination created successfully",
        data: destination,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Destinations POST API error:", error)

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to create destination. Slug එක duplicate වෙලා තියෙන්න පුළුවන්.",
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
    const id = Number(body.id)

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Destination ID is required",
        },
        { status: 400 }
      )
    }

    const slug = body.slug
      ? createSlug(String(body.slug))
      : createSlug(String(body.title))

    const destination = await prisma.destination.update({
      where: {
        id,
      },
      data: {
        title: String(body.title),
        slug,
        location: String(body.location),
        region: String(body.region),
        description: String(body.description),
        bestTime: String(body.bestTime),
        imageUrl: String(body.imageUrl),
        highlights: String(body.highlights),
        isActive:
          typeof body.isActive === "boolean" ? body.isActive : true,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Destination updated successfully",
      data: destination,
    })
  } catch (error) {
    console.error("Destinations PUT API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update destination",
      },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
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
    const id = Number(body.id)

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Destination ID is required",
        },
        { status: 400 }
      )
    }

    await prisma.destination.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Destination deleted successfully",
    })
  } catch (error) {
    console.error("Destinations DELETE API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete destination",
      },
      { status: 500 }
    )
  }
}