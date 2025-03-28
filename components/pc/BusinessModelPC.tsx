import Image from "next/image"
export default function BusinessModelPC() {
  return <div className="br mt-10 flex max-w-7xl mx-auto justify-between pt-16">
    <div className="br w-[51%]">
      <div>UUININ-商业模式</div>
      <div>AI 赋能，全链路高效运作</div>
      <div className="flex items-center">
        <div>1</div>
        <div>商家入驻：基于 AI 推荐提升销量，降低广告投入</div>
      </div>
    </div>
    <div className="w-[48.37%]">
      <Image src="/images/pc8.png" width={831} height={764} alt=""></Image>
    </div>
  </div>
}