import { useState } from "react"

export default function AbilityMobile() {
  const [current, setCurrent] = useState(0)
  const tabTitle = [
    { id: 0, title: 'AI 数字人直播带货' },
    { id: 1, title: 'AI 短视频带货' },
    { id: 2, title: '孪生计划' },
    { id: 3, title: '智能供应链' },
  ]
  const tabs = [
    {
      id: 0,
      title: '7x24小时不间断直播，智能互动精准推荐',
      content1: '智能 AI 主播：虚拟数字人全天候直播，自动销售商品',
      content2: '多语言支持：阿拉伯语 & 英语 AI 直播，轻松触达全球用户',
      content3: '智能推荐：AI 分析用户需求，精准推送最匹配的商品',
    },
    {
      id: 1,
      title: 'AI 生成高质量商品短视频，提升销售转化',
      content1: '智能内容创作：AI 自动生成产品展示、特点解读、购买引导短视频',
      content2: '个性化推荐：AI 分析用户行为，推送千人千面的商品内容',
      content3: '高效分发：AI 自动优化短视频投放，实现精准营销',
    },
    {
      id: 2,
      title: '1:1 复刻真人，智能成长提升转化',
      content1: '个性化定制：基于真人形象打造专属 AI 直播主播',
      content2: '智能学习：AI 模拟真人语音、语调、表达方式，实现高拟真互动',
      content3: '多场景适用：短视频带货、直播销售、智能客服多功能融合',
    },
    {
      id: 3,
      title: 'AI 优化物流，直连供货商，确保最低价格',
      content1: '去人工化运营：AI 驱动供应链管理，降低运营成本',
      content2: '智能库存调控：大数据预测销售趋势，精准补货，减少库存压力',
      content3: '极速发货：优化物流路线，提升配送效率',
    },
  ]
  return <div className="pt-[25px]">
    <div className="flex justify-around">
      {
        tabTitle.map(e => {
          return <div
            key={e.id}
            onClick={() => setCurrent(e.id)}
            className={`text-[10px] font-[500] pb-[6px] ${current === e.id ? 'border-b' : ''}`}
          >{e.title}</div>
        })
      }
    </div>
    <div className="mt-[22px] bg-[#111111] py-[18px] px-[5px] flex flex-col items-center rounded-[10px]">
      <div className="text-[15px] font-[700]">{tabs[current].title}</div>
      <div className="text-[10px] font-[600] mt-[12px] text-white/80 leading-[14px]">{tabs[current].content1}</div>
      <div className="text-[10px] font-[600] text-white/80 leading-[14px]">{tabs[current].content2}</div>
      <div className="text-[10px] font-[600] text-white/80 leading-[14px]">{tabs[current].content3}</div>
    </div>
  </div>
}