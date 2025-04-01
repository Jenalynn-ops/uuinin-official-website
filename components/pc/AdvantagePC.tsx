import Image from "next/image"
import { useTranslation } from "@/app/hooks/useTranslation"
export default function AdvantagePC() {
  const { t } = useTranslation()
  return <div className="mt-10 flex max-w-7xl mx-auto justify-between pt-14">
    <div className="w-[50.46%] relative">
      <Image
        src="/images/pc7.png"
        alt=""
        width={868}
        height={738}
        className="w-full h-auto"
        priority></Image>
    </div>
    <div className="w-[48%] flex flex-col justify-center">
      <div className="text-4xl font-medium">{t.advantageTitle}</div>
      <div className="mt-4 text-xl text-white/60">{t.advantageTips}</div>
      <div className="mt-11 flex items-center border-b-1 pb-6 border-white/10">
        <Image className="mr-6" src="/icons/pcIcon1.png" width={60} height={60} alt=""></Image>
        <div className="text-xl font-medium">{t.advantageFunction1}</div>
      </div>
      <div className="mt-6 flex items-center border-b-1 pb-6 border-white/10">
        <Image className="mr-6" src="/icons/pcIcon2.png" width={60} height={60} alt=""></Image>
        <div className="text-xl font-medium">{t.advantageFunction2}</div>
      </div>
      <div className="mt-6 flex items-center border-b-1 pb-6 border-white/10">
        <Image className="mr-6" src="/icons/pcIcon3.png" width={60} height={60} alt=""></Image>
        <div className="text-xl font-medium">{t.advantageFunction3}</div>
      </div>
    </div>

  </div>
}