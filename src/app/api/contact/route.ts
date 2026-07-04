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
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    })

    const total = await prisma.contactMessage.count()

    return NextResponse.json({
      success: true,
      message: "Contact messages loaded successfully",
      total,
      data: messages,
    })
  } catch (error) {
    console.error("Contact GET API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load contact messages",
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

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required contact fields",
        },
        { status: 400 }
      )
    }

    const message = await prisma.contactMessage.create({
      data: {
        name: String(body.name),
        email: String(body.email),
        phone: body.phone ? String(body.phone) : null,
        inquiryType: body.inquiryType
          ? String(body.inquiryType)
          : "General Inquiry",
        subject: String(body.subject),
        message: String(body.message),
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Contact message saved successfully",
        data: message,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Contact POST API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save contact message",
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
          message: "Message ID is required",
        },
        { status: 400 }
      )
    }

    await prisma.contactMessage.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Contact message deleted successfully",
    })
  } catch (error) {
    console.error("Contact DELETE API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete contact message",
      },
      { status: 500 }
    )
  }
}