import Image from "next/image"
export default function BusinessModelPC() {
  return <div className="mt-10 flex max-w-7xl mx-auto justify-between pt-16">
    <div className="w-[51%]">
      <div className="text-4xl font-medium">UUININ-商业模式</div>
      <div className="text-white/60 mt-4">AI 赋能，全链路高效运作</div>
      <div className="flex items-center mt-12 border-b-1 pb-6 border-white/10">
        <div className="w-10 mr-5 h-14 bg-white/10 rounded-[1400px] flex justify-center items-center text-2xl font-medium">1</div>
        <div className="font-medium text-xl">商家入驻：基于 AI 推荐提升销量，降低广告投入</div>
      </div>
      <div className="flex items-center mt-12 border-b-1 pb-6 border-white/10">
        <div className="w-10 mr-5 h-14 bg-white/10 rounded-[1400px] flex justify-center items-center text-2xl font-medium">2</div>
        <div className="font-medium text-xl">用户交易：直播 + 短视频引导交易，提升转化率</div>
      </div>
      <div className="flex items-center mt-12 border-b-1 pb-6 border-white/10">
        <div className="w-10 mr-5 h-14 bg-white/10 rounded-[1400px] flex justify-center items-center text-2xl font-medium">3</div>
        <div className="font-medium text-xl">数据智能化：AI 预测用户需求，优化供应链管理</div>
      </div>
    </div>
    <div className="w-[48.37%]">
      <Image src="/images/pc8.png" width={831} height={764} alt=""></Image>
    </div>
  </div>
}