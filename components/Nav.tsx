"use client";
import { useEffect, useState } from "react";
import NavMobile from "./mobile/NavMobile";
import NavPC from "./pc/NavPC";
export default function Nav() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  return <div className="w-full">
    {isMobile ? <div className="px-[0px]"><NavMobile></NavMobile></div> : <NavPC></NavPC>}
  </div>
}