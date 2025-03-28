"use client";
import { useEffect, useState } from "react";
import IntroduceMobile from "./mobile/IntroduceMobile";
import IntroducePC from "./pc/IntroducePC";
export default function Introduce() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  return <div id="a1" className="border border-transparent">
    {isMobile ? <div><IntroduceMobile></IntroduceMobile></div> : <IntroducePC></IntroducePC>}
  </div>
}