import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const password = String(body.password || "")

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        { status: 401 }
      )
    }

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    })

    response.cookies.set("admin_token", "logged_in", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 4,
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Admin login error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Login failed",
      },
      { status: 500 }
    )
  }
}