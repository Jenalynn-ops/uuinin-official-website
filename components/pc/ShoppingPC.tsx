import Image from "next/image"
export default function ShoppingPC() {
  return <div className="max-w-7xl mx-auto flex flex-col items-center mt-18">
    <div className="font-semibold text-4xl mb-5">UUININ-极致购物体验</div>
    <div className="f text-xl text-center mb-12">
      <div>UUININ -新一代 AI 数字人电商平台，致力于通过人工智能技术革新传统电商模式。</div>
      <div>平台以 “用户至上、技术驱动” 为核心理念，提供高效、智能的购物解决方案，连接全球消费者与商家，</div>
      <div>打造 创新、便捷、智能化 的电商生态系统。</div>
    </div>
    <div className="relative w-full">
      <Image className="w-full" src="/images/pc2.png" width={1200} height={1200} alt=""></Image>
    </div>
  </div>
}