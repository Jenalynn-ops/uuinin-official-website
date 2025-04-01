import Image from "next/image"
import { useTranslation } from "@/app/hooks/useTranslation"
export default function ShoppingMobile() {
  const {t} = useTranslation()
  return <div className="mt-[45px]">
    <div className="px-[20px]">
      <div className="bg-[#111111] flex flex-col items-center pb-[18px] px-[5px] rounded-[10px]">

        <div className="text-[20px] font-[500] mt-[18px] mb-[12px]">{t.shoppingTitle}</div>

        <div className="text-[10px] text-white/80 text-center">{t.shoppingTips1}{t.shoppingTips2}{t.shoppingTips3}</div>
      </div>
    </div>
    <div className="mt-[18px] w-full h-auto relative aspect-[91/100]">
      <Image src="/images/m2.png" alt="" fill></Image>
    </div>
  </div>
}