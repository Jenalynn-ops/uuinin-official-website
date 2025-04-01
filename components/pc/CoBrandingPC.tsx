import Image from "next/image"
import { useTranslation } from "@/app/hooks/useTranslation";
export default function CoBrandingPC() {
  const { t } = useTranslation()
  const brands = Array.from({ length: 30 }, (_, index) => index + 1);
  return <div className="max-w-7xl mx-auto mt-10 pt-24 pb-20 px-14 overflow-hidden inset-shadow">
    <div className="text-center text-4xl font-medium">{t.coBrandingTitle}</div>
    <div className="grid grid-cols-1">

      <div className="relative z-[-1] h-10 flex mt-14" style={{ width: `${brands.length * 180}px`, animation: "scroll1 30s linear infinite" }}>
        {
          brands.map((e) => {
            return <div key={e} className="mx-4 w-48">
              <Image alt="" width={180} height={40} src="/brands/brankLogo1.png"></Image>
            </div>
          })
        }
      </div>

      <div className="relative justify-self-end z-[-1] h-10 flex mt-10" style={{ textAlign: 'right', width: `${brands.length * 180}px`, animation: "scroll2 28s linear infinite" }}>
        {
          brands.map((e) => {
            return <div key={e} className="mx-4 w-48">
              <Image alt="" width={180} height={40} src="/brands/brankLogo1.png"></Image>
            </div>
          })
        }
      </div>

      <div className="relative z-[-1] h-10 flex mt-10" style={{ width: `${brands.length * 180}px`, animation: "scroll1 25s linear infinite" }}>
        {
          brands.map((e) => {
            return <div key={e} className="mx-4 w-48">
              <Image alt="" width={180} height={40} src="/brands/brankLogo1.png"></Image>
            </div>
          })
        }
      </div>
    </div>

  </div>
}

