import Image from "next/image"
import { useTranslation } from "@/app/hooks/useTranslation"
export default function IntroduceMobile() {
  const { t } = useTranslation()
  return <div className="flex flex-col items-center">
    <Image className="mt-[16px]" alt="" width={104} height={18} src="/images/logo.png"></Image>
    <div className="mt-[35px] text-[26px] font-semibold text-center">{t.introduceTitle1}{t.introduceTitle2}</div>
    <div className="mt-[10px] text-center text-[12px] w-full text-white/60">{t.introduceTips1}</div>
    <div className="mt-4 text-center text-[12px] w-full text-white/60">{t.introduceTips3}</div>
    <div className="relative w-full h-auto aspect-square mt-[35px]">
      <Image src="/images/m1.png" fill alt=""></Image>
    </div>
    <div className="flex justify-center">
      <a className="mr-[11px]" href="http://obs.alstarai.com/20241204/app-release.apk">
        <div className="w-[110px] h-[35px] relative">
          <Image className="mr-[11px] absolute left-0 top-0 z-[-1]" src="/images/btnbag.png" alt="" width={110} height={35}></Image>
          <div className="flex h-full items-center justify-center">
            <Image className="mr-[2px]" width={13} height={13} src="/images/android.png" alt=""></Image>
            <div className="text-[11px] font-[600]">{t.androidDownload}</div>
          </div>
        </div>
      </a>
      <a href="https://apps.apple.com/cn/app/uuinin/id6737213354">
        <div className="w-[110px] h-[35px] relative">
          <Image className="mr-[11px] absolute left-0 top-0 z-[-1]" src="/images/btnbag.png" alt="" width={110} height={35}></Image>
          <div className="flex h-full items-center justify-center">
            <Image className="mr-[2px]" width={13} height={13} src="/images/apple.png" alt=""></Image>
            <div className="text-[11px] font-[600]">{t.appStoreDownload}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
}