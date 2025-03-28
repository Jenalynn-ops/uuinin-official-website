import Image from "next/image"
import GradientText from "../reactBits/GradientTextProps"
import { useState } from "react"
export default function AbilityPC() {
  const [current, setCurrent] = useState(1)
  const tabs = [
    {
      id: 1, tabTitle: 'AI 数字人直播带货',
      title: '7x24小时不间断直播，智能互动精准推荐',
      content1: '智能 AI 主播：虚拟数字人全天候直播，自动销售商品',
      content2: '多语言支持：阿拉伯语 & 英语 AI 直播，轻松触达全球用户',
      content3: '智能推荐：AI 分析用户需求，精准推送最匹配的商品'
    },
    {
      id: 2, tabTitle: 'AI 短视频带货',
      title: 'AI 生成高质量商品短视频，提升销售转化',
      content1: '智能内容创作：AI 自动生成产品展示、特点解读、购买引导短视频',
      content2: '个性化推荐：AI 分析用户行为，推送千人千面的商品内容',
      content3: '高效分发：AI 自动优化短视频投放，实现精准营销'
    },
    {
      id: 3, tabTitle: '孪生计划',
      title: '1:1 复刻真人，智能成长提升转化',
      content1: '个性化定制：基于真人形象打造专属 AI 直播主播',
      content2: '智能学习：AI 模拟真人语音、语调、表达方式，实现高拟真互动',
      content3: '多场景适用：短视频带货、直播销售、智能客服多功能融合'
    },
    {
      id: 4,
      tabTitle: '智能供应链',
      title: 'AI 优化物流，直连供货商，确保最低价格',
      content1: '去人工化运营：AI 驱动供应链管理，降低运营成本',
      content2: '智能库存调控：大数据预测销售趋势，精准补货，减少库存压力',
      content3: '极速发货：优化物流路线，提升配送效率'
    },
  ]
  return <div className="flex max-w-7xl mx-auto mt-10 justify-between">
    <div>
      <div className="flex mt-20 justify-between">
        {
          tabs.map(e => {
            if (current === e.id) {
              return <div key={e.id} onClick={() => setCurrent(e.id)} className="h-14 cursor-pointer">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={true}
                  className="text-xl font-medium"
                  children={e.tabTitle}
                ></GradientText>
              </div>
            } else {
              return <div key={e.id} onClick={() => setCurrent(e.id)} className="leading-14 cursor-pointer text-xl font-medium">{e.tabTitle}</div>
            }
          })
        }
      </div>
      <div className="mt-14 text-2xl font-medium">{tabs[current - 1].title}</div>
      <div className="mt-14 text-xl">{tabs[current - 1].content1}</div>
      <div className="mt-6 text-xl">{tabs[current - 1].content2}</div>
      <div className="mt-6 text-xl">{tabs[current - 1].content3}</div>

      <div className="w-40 h-12 mt-14 border border-[#006FFF] flex justify-center items-center rounded-xl cursor-pointer font-medium">立即体验</div>
    </div>
    <div className="w-[52.2%]">
      <Image src={`/images/pc${current+2}.png`} width={898} height={874} alt=""></Image>
    </div>
  </div>
}