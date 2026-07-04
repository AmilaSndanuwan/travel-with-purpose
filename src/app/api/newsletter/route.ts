import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { prisma } from "../../../lib/prisma"

export async function GET() {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")?.value

  if (token !== "logged_in") {
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

  try {
    const subscribers = await prisma.newsletterSubscriber.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    })

    const total = await prisma.newsletterSubscriber.count()

    return NextResponse.json({
      success: true,
      message: "Newsletter subscribers loaded successfully",
      total,
      data: subscribers,
    })
  } catch (error) {
    console.error("Newsletter GET API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load newsletter subscribers",
        total: 0,
        data: [],
      },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = String(body.email || "").trim().toLowerCase()

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      )
    }

    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: {
        email,
      },
      update: {},
      create: {
        email,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Subscribed successfully",
        data: subscriber,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Newsletter API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to subscribe",
      },
      { status: 500 }
    )
  }
}
export async function DELETE(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")?.value

  if (token !== "logged_in") {
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
          message: "Subscriber ID is required",
        },
        { status: 400 }
      )
    }

    await prisma.newsletterSubscriber.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Subscriber deleted successfully",
    })
  } catch (error) {
    console.error("Newsletter DELETE API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete subscriber",
      },
      { status: 500 }
    )
  }
}