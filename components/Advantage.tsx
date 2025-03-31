"use client";
import { useEffect, useState } from "react";
import AdvantagePC from "./pc/AdvantagePC";
import AdvantageMobile from "./mobile/AdvantageMobile";
export default function Advantage() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  return <div id="a3" className="border border-transparent">
    {isMobile ? <div><AdvantageMobile></AdvantageMobile></div> : <AdvantagePC></AdvantagePC>}
  </div>
}