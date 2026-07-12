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

    const programs = await prisma.program.findMany({
      where: isAdmin
        ? {}
        : {
            isActive: true,
          },
      orderBy: {
        createdAt: "desc",
      },
    })

    const total = await prisma.program.count({
      where: isAdmin
        ? {}
        : {
            isActive: true,
          },
    })

    return NextResponse.json({
      success: true,
      message: "Programs loaded successfully",
      total,
      data: programs,
    })
  } catch (error) {
    console.error("Programs GET API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load programs",
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
      !body.description ||
      !body.duration ||
      !body.groupSize ||
      !body.impact ||
      !body.rating ||
      !body.price ||
      !body.imageUrl ||
      !body.tags
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required program fields",
        },
        { status: 400 }
      )
    }

    const slug = body.slug
      ? createSlug(String(body.slug))
      : createSlug(String(body.title))

    const program = await prisma.program.create({
      data: {
        title: String(body.title),
        slug,
        location: String(body.location),
        description: String(body.description),
        duration: String(body.duration),
        groupSize: String(body.groupSize),
        impact: String(body.impact),
        rating: String(body.rating),
        price: Number(body.price),
        imageUrl: String(body.imageUrl),
        tags: String(body.tags),
        isActive:
          typeof body.isActive === "boolean" ? body.isActive : true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Program created successfully",
        data: program,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Programs POST API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create program. Slug එක duplicate වෙලා තියෙන්න පුළුවන්.",
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
          message: "Program ID is required",
        },
        { status: 400 }
      )
    }

    const slug = body.slug
      ? createSlug(String(body.slug))
      : createSlug(String(body.title))

    const program = await prisma.program.update({
      where: {
        id,
      },
      data: {
        title: String(body.title),
        slug,
        location: String(body.location),
        description: String(body.description),
        duration: String(body.duration),
        groupSize: String(body.groupSize),
        impact: String(body.impact),
        rating: String(body.rating),
        price: Number(body.price),
        imageUrl: String(body.imageUrl),
        tags: String(body.tags),
        isActive:
          typeof body.isActive === "boolean" ? body.isActive : true,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Program updated successfully",
      data: program,
    })
  } catch (error) {
    console.error("Programs PUT API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update program",
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
          message: "Program ID is required",
        },
        { status: 400 }
      )
    }

    await prisma.program.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Program deleted successfully",
    })
  } catch (error) {
    console.error("Programs DELETE API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete program",
      },
      { status: 500 }
    )
  }
}