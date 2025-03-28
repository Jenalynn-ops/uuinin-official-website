"use client";
import { useEffect, useState } from "react";
import FooterMobile from "./mobile/FooterMobile";
import FooterPC from "./pc/FooterPC";
export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  return <div id="a1" className="border border-transparent">
    {isMobile ? <div><FooterMobile></FooterMobile></div> : <FooterPC></FooterPC>}
  </div>
}