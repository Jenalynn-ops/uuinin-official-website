import Image from "next/image"
import { useTranslation } from "@/app/hooks/useTranslation"
export default function BusinessModelPC() {
  const { t } = useTranslation()
  return <div className="mt-10 flex max-w-7xl mx-auto justify-between pt-16">
    <div className="w-[51%]">
      <div className="text-4xl font-medium">{t.businessModelTitle}</div>
      <div className="text-white/60 mt-4">{t.businessModelTips}</div>
      <div className="flex items-center mt-12 border-b-1 pb-6 border-white/10">
        <div className="w-10 mr-5 h-14 bg-white/10 rounded-[1400px] flex justify-center items-center text-2xl font-medium">1</div>
        <div className="font-medium text-xl">{t.businessModelContent1}</div>
      </div>
      <div className="flex items-center mt-12 border-b-1 pb-6 border-white/10">
        <div className="w-10 mr-5 h-14 bg-white/10 rounded-[1400px] flex justify-center items-center text-2xl font-medium">2</div>
        <div className="font-medium text-xl">{t.businessModelContent2}</div>
      </div>
      <div className="flex items-center mt-12 border-b-1 pb-6 border-white/10">
        <div className="w-10 mr-5 h-14 bg-white/10 rounded-[1400px] flex justify-center items-center text-2xl font-medium">3</div>
        <div className="font-medium text-xl">{t.businessModelContent3}</div>
      </div>
    </div>
    <div className="w-[48.37%]">
      <Image src="/images/pc8.png" width={831} height={764} alt=""></Image>
    </div>
  </div>
}