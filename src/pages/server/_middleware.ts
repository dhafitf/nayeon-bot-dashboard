import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API_URL } from "~utils/constants";

const validateCookies = (req: NextRequest) => {
  const sessionID = req.cookies["nayeon.sid"];
  return sessionID ? { Cookie: `nayeon.sid=${sessionID}` } : false;
};

export async function middleware(req: NextRequest) {
  try {
    const headers = validateCookies(req);
    if (!headers) return NextResponse.redirect(new URL("/login", req.url));

    if (req.page.name === "/server/[...id]") {
      if (!req.page.params) return NextResponse.redirect(new URL("/", req.url));
      const response = await fetch(`${API_URL}/auth/status`, {
        headers,
      });

      return response.status === 200 ? NextResponse.next() : NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.log(error);
  }
}
