import Image from "next/image"
import { useTranslation } from "@/app/hooks/useTranslation"
export default function BusinessModelMobile() {
  const { t } = useTranslation()
  return <div className="mt-[35px]">
    <div className="w-full h-auto aspect-[6/5] relative">
      <Image src="/images/m4.png" fill alt=""></Image>
    </div>
    <div className="px-[20px]">
      <div className="bg-[#111111] py-[21px] px-[5px] flex flex-col items-center rounded-[10px]">
        <div className="font-[700] text-[15px]">{t.businessModelTitle}</div>
        <div className="my-[8px] text-[10px] text-white/80">{t.businessModelTips}</div>
        <div className="px-[40px] w-full pb-[21px]">
          <div className="border-b-[0.7px] border-white/10 pb-[14px] w-full flex items-center">
            <div className="w-[15px] h-[22px] text-[9px] mr-[11px] rounded-[46px] bg-white/10 flex justify-center items-center">1</div>
            <div className="text-[10px] font-[500]">{t.businessModelContent1}</div>
          </div>

          <div className="border-b-[0.7px] mt-[14px] border-white/10 pb-[14px] w-full flex items-center">
            <div className="w-[15px] h-[22px] text-[9px] mr-[11px] rounded-[46px] bg-white/10 flex justify-center items-center">1</div>
            <div className="text-[10px] font-[500]">{t.businessModelContent2}</div>
          </div>

          <div className="mt-[14px] flex items-center">
            <div className="w-[15px] h-[22px] text-[9px] mr-[11px] rounded-[46px] bg-white/10 flex justify-center items-center">1</div>
            <div className="text-[10px] font-[500]">{t.businessModelContent3}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
}