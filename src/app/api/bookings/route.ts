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
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    })

    const total = await prisma.booking.count()

    return NextResponse.json({
      success: true,
      message: "Bookings loaded successfully",
      total,
      data: bookings,
    })
  } catch (error) {
    console.error("Bookings GET API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load bookings",
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

    if (
      !body.programName ||
      !body.bookingDate ||
      !body.name ||
      !body.email ||
      !body.phone
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required booking fields",
        },
        { status: 400 }
      )
    }

    const booking = await prisma.booking.create({
      data: {
        programName: String(body.programName),
        bookingDate: String(body.bookingDate),
        participants: Number(body.participants),
        name: String(body.name),
        email: String(body.email),
        phone: String(body.phone),
        totalPrice: Number(body.totalPrice),
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Booking saved successfully",
        data: booking,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Booking POST API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save booking",
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
          message: "Booking ID is required",
        },
        { status: 400 }
      )
    }

    await prisma.booking.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Booking deleted successfully",
    })
  } catch (error) {
    console.error("Booking DELETE API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete booking",
      },
      { status: 500 }
    )
  }
}