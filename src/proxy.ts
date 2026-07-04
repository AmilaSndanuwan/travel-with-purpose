import { NextResponse, type NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const isAdminPage = pathname.startsWith("/admin")
  const isLoginPage = pathname === "/admin/login"

  if (!isAdminPage || isLoginPage) {
    return NextResponse.next()
  }

  const token = request.cookies.get("admin_token")?.value

  if (token !== "logged_in") {
    const loginUrl = new URL("/admin/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}