import Image from "next/image"
export default function AdvantageMobile() {
  return <div className="mt-[25px]">
    <div className="w-full h-auto relative aspect-square">
      <Image src="/images/m3.png" alt="" fill></Image>
    </div>
    <div className="px-[20px]">
      <div className="bg-[#111111] flex flex-col items-center pt-[18px] rounded-[10px]">
        <div className="text-[15px] font-[700]">UUININ 相比传统电商的优势</div>
        <div className="text-[10px] mt-[8px] text-white/80">创新驱动，智能购物新体验</div>
        <div className="m-auto w-full px-[36px] mt-[15px] pb-[18px]">
          <div className="mt-[15px] flex items-center border-b-[0.7px] pb-[14px] border-white/10">
            <div className="mr-[11px] h-[22px] w-[22px] rounded-[50%] bg-white/10 flex justify-center items-center">
              <Image width={11} height={11} src="/icons/pcIcon1.png" alt=""></Image>
            </div>
            <div className="text-[10px] font-[500]">技术领先：全球首创 AI 数字人 24/7 直播购物模式</div>
          </div>

          <div className="flex items-center mt-[14px] border-b-[0.7px] pb-[14px] border-white/10">
            <div className="mr-[11px] h-[22px] w-[22px] rounded-[50%] bg-white/10 flex justify-center items-center">
              <Image width={11} height={11} src="/icons/pcIcon2.png" alt=""></Image>
            </div>
            <div className="text-[10px] font-[500]">技术领先：全球首创 AI 数字人 24/7 直播购物模式</div>
          </div>

          <div className="flex items-center mt-[14px]">
            <div className="mr-[11px] h-[22px] w-[22px] rounded-[50%] bg-white/10 flex justify-center items-center">
              <Image width={11} height={11} src="/icons/pcIcon3.png" alt=""></Image>
            </div>
            <div className="text-[10px] font-[500]">技术领先：全球首创 AI 数字人 24/7 直播购物模式</div>
          </div>
        </div>
      </div>
    </div>
  </div>
}