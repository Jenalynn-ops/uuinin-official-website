"use client";
import { useEffect, useState } from "react";
import BusinessModelMobile from "./mobile/BusinessModelMobile";
import BusinessModelPC from "./pc/BusinessModelPC";
export default function BusinessModel() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  return <div id="a1" className="border border-transparent">
    {isMobile ? <div><BusinessModelMobile></BusinessModelMobile></div> : <BusinessModelPC></BusinessModelPC>}
  </div>
}