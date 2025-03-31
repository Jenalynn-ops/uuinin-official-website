import Image from "next/image"
export default function IntroduceMobile() {

  return <div className="flex flex-col items-center">
    <Image className="mt-[16px]" alt="" width={104} height={18} src="/images/logo.png"></Image>
    <div className="mt-[35px] text-[26px] font-semibold">UUININ开启智能购物时代</div>
    <div className="mt-[10px] text-center text-[12px] w-[152px] text-white/60">你的私人 AI 购物助理</div>
    <div className="mt-4 text-center text-[12px] w-[152px] text-white/60">7×24 小时直播推荐最优商品</div>
    <div className="relative w-full h-auto aspect-square mt-[35px]">
      <Image src="/images/m1.png" fill alt=""></Image>
    </div>
    <div className="flex justify-center">
      <a href="http://obs.alstarai.com/20241204/app-release.apk">
        <Image className="mr-[11px]" src="/images/androidBtn.png" alt="" width={110} height={35}></Image>
      </a>
      <a href="https://apps.apple.com/cn/app/uuinin/id6737213354">
        <Image src="/images/appStoreBtn.png" alt="" width={110} height={35}></Image>
      </a>
    </div>
  </div>
}