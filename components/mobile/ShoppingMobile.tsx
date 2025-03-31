import Image from "next/image"
export default function ShoppingMobile() {
  return <div className="mt-[45px]">
    <div className="px-[20px]">
      <div className="bg-[#111111] flex flex-col items-center pb-[18px] px-[5px] rounded-[10px]">

        <div className="text-[20px] font-[500] mt-[18px] mb-[12px]">UUININ-极致购物体验</div>

        <div className="text-[10px] text-white/80 text-center">UUININ -新一代 AI 数字人电商平台，致力于通过人工智能技术革新传统电商模式。平台以 “用户至上、技术驱动” 为核心理念，提供高效、智能的购物解决方案，连接全球消费者与商家，打造 创新、便捷、智能化 的电商生态系统。</div>
      </div>
    </div>
    <div className="mt-[18px] w-full h-auto relative aspect-[91/100]">
      <Image src="/images/m2.png" alt="" fill></Image>
    </div>
  </div>
}