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

    const posts = await prisma.blogPost.findMany({
      where: isAdmin
        ? {}
        : {
            isActive: true,
          },
      orderBy: {
        createdAt: "desc",
      },
    })

    const total = await prisma.blogPost.count({
      where: isAdmin
        ? {}
        : {
            isActive: true,
          },
    })

    return NextResponse.json({
      success: true,
      message: "Blog posts loaded successfully",
      total,
      data: posts,
    })
  } catch (error) {
    console.error("Blog GET API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load blog posts",
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
      !body.excerpt ||
      !body.content ||
      !body.author ||
      !body.readTime ||
      !body.imageUrl
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required blog fields",
        },
        { status: 400 }
      )
    }

    const slug = body.slug
      ? createSlug(String(body.slug))
      : createSlug(String(body.title))

    const post = await prisma.blogPost.create({
      data: {
        title: String(body.title),
        slug,
        category: String(body.category),
        excerpt: String(body.excerpt),
        content: String(body.content),
        author: String(body.author),
        readTime: String(body.readTime),
        imageUrl: String(body.imageUrl),
        isActive:
          typeof body.isActive === "boolean" ? body.isActive : true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Blog post created successfully",
        data: post,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Blog POST API error:", error)

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to create blog post. Slug එක duplicate වෙලා තියෙන්න පුළුවන්.",
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
          message: "Blog post ID is required",
        },
        { status: 400 }
      )
    }

    const slug = body.slug
      ? createSlug(String(body.slug))
      : createSlug(String(body.title))

    const post = await prisma.blogPost.update({
      where: {
        id,
      },
      data: {
        title: String(body.title),
        slug,
        category: String(body.category),
        excerpt: String(body.excerpt),
        content: String(body.content),
        author: String(body.author),
        readTime: String(body.readTime),
        imageUrl: String(body.imageUrl),
        isActive:
          typeof body.isActive === "boolean" ? body.isActive : true,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Blog post updated successfully",
      data: post,
    })
  } catch (error) {
    console.error("Blog PUT API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog post",
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
          message: "Blog post ID is required",
        },
        { status: 400 }
      )
    }

    await prisma.blogPost.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Blog post deleted successfully",
    })
  } catch (error) {
    console.error("Blog DELETE API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete blog post",
      },
      { status: 500 }
    )
  }
}