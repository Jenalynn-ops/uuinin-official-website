import Image from "next/image"
import { useEffect, useState } from "react"
import { useTranslation } from "@/app/hooks/useTranslation"
export default function AbilityPC() {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(1)
  const [tabs, setTabs] = useState<any[]>([])
  const [content, setContent] = useState({
    title: '',
    content1: '',
    content2: '',
    content3: '',
  })
  useEffect(() => {
    if (t.tabContent && t.tabContent instanceof Array) {
      setTabs(t.tabContent)
      setContent(t.tabContent[0])
    }
  }, [t.tabContent])

  return <div className="flex max-w-7xl mx-auto mt-10 pt-12 justify-between">
    <div>
      <div className="flex mt-20 justify-between">
        {
          tabs.map((e: any) => {
            return <div
              key={e.id}
              onClick={() => {
                setContent(e);
                setCurrent(e.id)
              }}
              className={`leading-14 cursor-pointer text-xl font-medium ${current === e.id ? 'border-b' : ''}`}
            >
              {e.tabTitle}
            </div>
            // if (current === e.id) {
            //   return <div key={e.id} onClick={() => setCurrent(e.id)} className="h-14 cursor-pointer">
            //     {/* <GradientText
            //       colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            //       animationSpeed={3}
            //       showBorder={true}
            //       className="text-xl font-medium"
            //       children={e.tabTitle}
            //     ></GradientText> */}
            //     {e.tabTitle}
            //   </div>
            // } else {
            //   return <div key={e.id} onClick={() => setCurrent(e.id)} className="leading-14 cursor-pointer text-xl font-medium">{e.tabTitle}</div>
            // }
          })
        }
      </div>
      <div className="mt-14 text-2xl font-medium">{content.title}</div>
      <div className="mt-14 text-xl">{content.content1}</div>
      <div className="mt-6 text-xl">{content.content2}</div>
      <div className="mt-6 text-xl">{content.content3}</div>
      <a href="#a1">
        <div
          className="w-40 h-12 mt-14 border border-[#006FFF] flex justify-center items-center rounded-xl cursor-pointer font-medium">
          {t.experience}
        </div>
      </a>
    </div>
    <div className="w-[52.2%]">
      <Image src={`/images/pc${current + 2}.png`} width={898} height={874} alt=""></Image>
    </div>
  </div>
}