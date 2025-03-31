"use client";
import { useEffect, useState } from "react";
import AbilityMobile from "./mobile/AbilityMobile";
import AbilityPC from "./pc/AbilityPC";
export default function Ability() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  return <div id="a2" className="border border-transparent">
    {isMobile ? <div><AbilityMobile></AbilityMobile></div> : <AbilityPC></AbilityPC>}
  </div>
}