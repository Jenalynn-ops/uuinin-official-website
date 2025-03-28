import Image from "next/image"
export default function IntroducePC() {
  return <div className="mt-28 flex justify-between max-w-7xl mx-auto">
    <div className="pt-5">
      <div className="text-6xl leading-20">用UUININ</div>
      <div className="text-6xl leading-20">开启智能购物时代</div>
      <div className="text-base mt-5">你的私人 AI 购物助理</div>
      <div className="text-base">UUININ -新一代 AI 数字人电商平台</div>
      <div className="text-base">7×24 小时直播推荐最优商品</div>

      <div className="flex items-center h-21 mt-[102px]">
        <div className="w-[200] h-[62] flex justify-center items-center mr-[22px] bg-gradient-to-r from-[#1D51FE] to-[#289AFF] rounded-[15]">
          <Image className="mr-[5px]" width={26} height={26} src="/images/android.png" alt=""></Image>
          <span className="fonwe text-lg">Android 版</span>

        </div>
        <div className="w-[200] h-[62] flex justify-center items-center mr-[22px] bg-gradient-to-r from-[#1D51FE] to-[#289AFF] rounded-[15]">
          <Image className="mr-[5px]" width={26} height={26} src="/images/apple.png" alt=""></Image>
          <span className="fonwe text-lg">App Store 版</span>
        </div>
      </div>

    </div>
    <div className="w-[46.51%] relative">
      <Image
        src="/images/pc1.png"
        alt=""
        width={500}
        height={500}
        className="w-full h-auto"
        priority></Image>
    </div>

  </div>
}