"use client";
import { useEffect, useState } from "react";
import ShoppingMobile from "./mobile/ShoppingMobile";
import ShoppingPC from "./pc/ShoppingPC";
export default function Shopping() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  return <div className="w-full border border-transparent" id="a2">
    {isMobile ? <ShoppingMobile></ShoppingMobile> : <ShoppingPC></ShoppingPC>}
  </div>
}