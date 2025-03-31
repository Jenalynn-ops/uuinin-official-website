import Image from "next/image"
import { useTranslation } from "@/app/hooks/useTranslation"
export default function IntroducePC() {
  const { t } = useTranslation()
  return <div className="mt-28 flex justify-between max-w-7xl mx-auto">
    <div className="pt-5">
      <div className="text-6xl leading-20">{t.introduceTitle1}</div>
      <div className="text-6xl leading-20">{t.introduceTitle2}</div>
      <div className="text-base mt-5">{t.introduceTips1}</div>
      <div className="text-base">{t.introduceTips2}</div>
      <div className="text-base">{t.introduceTips3}</div>

      <div className="flex items-center h-21 mt-[102px]">
        <a href="http://obs.alstarai.com/20241204/app-release.apk">
          <div className="h-[62] px-8 cursor-pointer flex justify-center items-center mr-[22px] bg-gradient-to-r from-[#1D51FE] to-[#289AFF] rounded-[15]">
            <Image className="mr-[5px]" width={26} height={26} src="/images/android.png" alt=""></Image>
            <span className="fonwe text-lg">{t.androidDownload}</span>
          </div>
        </a>
        <a href="https://apps.apple.com/cn/app/uuinin/id6737213354">
          <div className="px-8 h-[62] cursor-pointer flex justify-center items-center mr-[22px] bg-gradient-to-r from-[#1D51FE] to-[#289AFF] rounded-[15]">
            <Image className="mr-[5px]" width={26} height={26} src="/images/apple.png" alt=""></Image>
            <span className="fonwe text-lg">{t.appStoreDownload}</span>
          </div>
        </a>

      </div>

    </div>
    <div className="w-[46.51%] relative">
      <Image
        src="/images/pc1.png"
        alt=""
        width={500}
        height={500}
        className="w-full h-auto"
        priority></Image>
    </div>

  </div>
}