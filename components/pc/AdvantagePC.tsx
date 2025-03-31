import Image from "next/image"
export default function AdvantagePC() {
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
      <div className="text-4xl font-medium">UUININ 相比传统电商的优势</div>
      <div className="mt-4 text-xl text-white/60">创新驱动，智能购物新体验</div>
      <div className="mt-11 flex items-center border-b-1 pb-6 border-white/10">
        <Image className="mr-6" src="/icons/pcIcon1.png" width={60} height={60} alt=""></Image>
        <div className="text-xl font-medium">技术领先：全球首创 AI 数字人 24/7 直播购物模式</div>
      </div>
      <div className="mt-6 flex items-center border-b-1 pb-6 border-white/10">
        <Image className="mr-6" src="/icons/pcIcon2.png" width={60} height={60} alt=""></Image>
        <div className="text-xl font-medium">成本更低：去掉中间商，优化供应链，商品更便宜</div>
      </div>
      <div className="mt-6 flex items-center border-b-1 pb-6 border-white/10">
        <Image className="mr-6" src="/icons/pcIcon3.png" width={60} height={60} alt=""></Image>
        <div className="text-xl font-medium">用户体验更智能：AI 推荐替代传统搜索，精准度高</div>
      </div>
    </div>

  </div>
}