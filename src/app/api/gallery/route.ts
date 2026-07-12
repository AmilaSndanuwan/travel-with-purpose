import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { prisma } from "../../../lib/prisma"

const checkAdmin = async () => {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")?.value
  return token === "logged_in"
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

    const items = await prisma.galleryItem.findMany({
      where: isAdmin
        ? {}
        : {
            isActive: true,
          },
      orderBy: {
        createdAt: "desc",
      },
    })

    const total = await prisma.galleryItem.count({
      where: isAdmin
        ? {}
        : {
            isActive: true,
          },
    })

    return NextResponse.json({
      success: true,
      message: "Gallery items loaded successfully",
      total,
      data: items,
    })
  } catch (error) {
    console.error("Gallery GET API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load gallery items",
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
      !body.category ||
      !body.location ||
      !body.description ||
      !body.imageUrl
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required gallery fields",
        },
        { status: 400 }
      )
    }

    const item = await prisma.galleryItem.create({
      data: {
        title: String(body.title),
        category: String(body.category),
        location: String(body.location),
        description: String(body.description),
        imageUrl: String(body.imageUrl),
        isActive:
          typeof body.isActive === "boolean" ? body.isActive : true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Gallery item created successfully",
        data: item,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Gallery POST API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create gallery item",
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
          message: "Gallery item ID is required",
        },
        { status: 400 }
      )
    }

    const item = await prisma.galleryItem.update({
      where: {
        id,
      },
      data: {
        title: String(body.title),
        category: String(body.category),
        location: String(body.location),
        description: String(body.description),
        imageUrl: String(body.imageUrl),
        isActive:
          typeof body.isActive === "boolean" ? body.isActive : true,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Gallery item updated successfully",
      data: item,
    })
  } catch (error) {
    console.error("Gallery PUT API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update gallery item",
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
          message: "Gallery item ID is required",
        },
        { status: 400 }
      )
    }

    await prisma.galleryItem.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Gallery item deleted successfully",
    })
  } catch (error) {
    console.error("Gallery DELETE API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete gallery item",
      },
      { status: 500 }
    )
  }
}