import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";
  const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);

  const res = NextResponse.next();
  // res.headers.set("x-device-type", isMobile ? "mobile" : "desktop"); // 传递设备信息
  res.cookies.set("device-type", isMobile ? "mobile" : "desktop"); // ✅ 存入 Cookie
  return res;
}