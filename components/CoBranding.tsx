"use client";
import { useEffect, useState } from "react";
import CoBrandingMobile from "./mobile/CoBrandingMobile";
import CoBrandingPC from "./pc/CoBrandingPC";
export default function CoBranding() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  return <div id="a1" className="border border-transparent">
    {isMobile ? <div><CoBrandingMobile></CoBrandingMobile></div> : <CoBrandingPC></CoBrandingPC>}
  </div>
}