import Image from "next/image"
export default function CoBrandingMobile() {
  const brands = Array.from({ length: 30 }, (_, index) => index + 1);
  return <div className="mt-[35px] pt-[20px] pb-[20px] overflow-hidden inset-shadow-mobile">
    <div className="text-center text-[20px] font-[500]">合作品牌</div>
    <div className="grid grid-cols-1">
      <div className="relative z-[-1] h-[15px] flex mt-[20px]" style={{ width: `${brands.length * 70}px`, animation: "scroll1 30s linear infinite" }}>
        {
          brands.map((e) => {
            return <div key={e} className="mx-[10px] w-[70px]">
              <Image alt="" width={70} height={20} src="/brands/brankLogo1.png"></Image>
            </div>
          })
        }
      </div>

      <div className="relative justify-self-end z-[-1] h-[15px] flex mt-[20px]" style={{ textAlign: 'right', width: `${brands.length * 70}px`, animation: "scroll2 28s linear infinite" }}>
        {
          brands.map((e) => {
            return <div key={e} className="mx-[10px] w-[70px]">
              <Image alt="" width={70} height={20} src="/brands/brankLogo1.png"></Image>
            </div>
          })
        }
      </div>

      <div className="relative z-[-1] h-[15px] flex mt-[20px]" style={{ width: `${brands.length * 70}px`, animation: "scroll1 25s linear infinite" }}>
        {
          brands.map((e) => {
            return <div key={e} className="mx-[10px] w-[70px]">
              <Image alt="" width={70} height={20} src="/brands/brankLogo1.png"></Image>
            </div>
          })
        }
      </div>
    </div>

  </div>
}

