import Image from "next/image"
import { useTranslation } from "@/app/hooks/useTranslation";
export default function ShoppingPC() {
  const { t } = useTranslation()
  return <div className="max-w-7xl mx-auto flex flex-col items-center mt-18">
    <div className="font-semibold text-4xl mb-5">{t.shoppingTitle}</div>
    <div className="f text-xl text-center mb-12">
      <div>{t.shoppingTips1}</div>
      <div>{t.shoppingTips2}</div>
      <div>{t.shoppingTips3}</div>
    </div>
    <div className="relative w-full flex justify-center">
      <Image src="/images/pc2.png" width={1019} height={1049} alt=""></Image>

      <div className="absolute left-0 top-[20%] flex w-96">
        <div className="mr-4 flex-1">
          <div className="text-right font-medium text-2xl">{t.function1}</div>
          <div className="text-right text-white/60 mt-[2px]">{t.functionTips1}</div>
        </div>
        <div className="relative w-16 h-16">
          <Image fill alt="" src="/icons/titleIcon.png"></Image>
        </div>
      </div>

      <div className="absolute left-0 bottom-[20%] flex w-96">
        <div className="mr-4 flex-1">
          <div className="text-right font-medium text-2xl">{t.function2}</div>
          <div className="text-right text-white/60 mt-[2px]">{t.functionTips2}</div>
        </div>
        <div className="relative w-16 h-16">
          <Image fill alt="" src="/icons/titleIcon.png"></Image>
        </div>
      </div>

      <div className="absolute right-0 top-[20%] flex w-96">
        <div className="relative w-16 h-16 mr-4">
          <Image fill alt="" src="/icons/titleIcon.png"></Image>
        </div>
        <div className="flex-1">
          <div className="font-medium text-2xl">{t.function3}</div>
          <div className=" text-white/60 mt-[2px]">{t.functionTips3}</div>
        </div>

      </div>

      <div className="absolute right-0 bottom-[20%] flex w-96">
        <div className="relative w-16 h-16 mr-4">
          <Image fill alt="" src="/icons/titleIcon.png"></Image>
        </div>
        <div className="flex-1">
          <div className="font-medium text-2xl">{t.function4}</div>
          <div className=" text-white/60 mt-[2px]">{t.functionTips4}</div>
        </div>
        
      </div>
    </div>
  </div>
}