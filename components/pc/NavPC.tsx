import Image from "next/image"
import LanguageSwitcher from "../LanguageSwitcher"
import { useTranslation } from "@/app/hooks/useTranslation"
export default function NavPC() {
  const { t } = useTranslation()
  return <div className="w-7xl h-[76px] left-1/2 -translate-x-1/2  fixed flex items-center justify-between bg-black z-50">
    <div className="flex flex-1">
      <a href="#a1">
        <Image className="mr-[45px]" src="/images/logo.png" priority width={172.5} height={30} alt="uuinin"></Image>
      </a>
      <a href="#a1" className="px-4 leading-[30px]">{t.nav1}</a>
      <a href="#a2" className="px-4 leading-[30px]">{t.nav2}</a>
      <a href="#a3" className="px-4 leading-[30px]">{t.nav3}</a>
      <a href="#a4" className="px-4 leading-[30px]">{t.nav4}</a>
    </div>

    <div className="flex">
      <LanguageSwitcher></LanguageSwitcher>
      <div className="flex flex-col items-center mr-9 ml-9 cursor-pointer">
        <Image src="/images/marchant.png" alt="" width={26} height={25}></Image>
        <div className="text-xs">{t.merchantJoin}</div>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <Image src="/images/user.png" alt="" width={26} height={25}></Image>
        <div className="text-xs">{t.contactUs}</div>
      </div>
    </div>

  </div>
}