import Image from "next/image"
import { useTranslation } from "@/app/hooks/useTranslation"
export default function FooterMobile() {
  const { t } = useTranslation()
  return <div className="mt-[26px]">
    <div className="px-[10px]">
      <div className="bg-[#0E0E0E] flex justify-between py-[21px] px-[10px] rounded-[4px]">
        <div className="text-[16px] font-[600]">
          <div>{t.footerTitle1}</div>
          <div>{t.footerTitle2}</div>
        </div>
        <div className="flex">
          <div className="w-[78px] mr-[11px] h-[25px] border-[0.3px] border-[#006FFF]/90 rounded-[5px] flex justify-center items-center text-[8px] font-[600]">{t.footerTitle1}</div>
          <div className="w-[78px] h-[25px] border-[0.3px] border-[#006FFF]/90 rounded-[5px] flex justify-center items-center text-[8px] font-[600]">{t.contact}</div>
        </div>
      </div>
    </div>
    <div className="px-[20px] flex justify-between items-center pt-[24px]">
      <div>
        <Image width={57} height={10} alt="" src="/images/logo.png"></Image>
        <div className="text-[8px] text-white/60 mt-[7px]">{t.footerTips}</div>
        <div className='flex mt-[7px]'>
          <div className='bg-white/10 cursor-pointer w-[15px] h-[15px] rounded-[50%] flex justify-center items-center'>
            <Image width={8} height={8} src="/icons/YouTobe.png" alt=''></Image>
          </div>
          <div className='bg-white/10 cursor-pointer w-[15px] h-[15px] rounded-[50%] flex justify-center items-center'>
            <Image width={8} height={8} src="/icons/faceBook.png" alt=''></Image>
          </div>
          <div className='bg-white/10 cursor-pointer w-[15px] h-[15px] rounded-[50%] flex justify-center items-center'>
            <Image width={8} height={8} src="/icons/x.png" alt=''></Image>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-end'>
        <div className='text-[10px] font-[500]'>Get UUININ APP</div>
        <div className='flex mt-[4px]'>
          <a href="https://apps.apple.com/cn/app/uuinin/id6737213354">
            <Image className='mr-[4px] cursor-pointer' src="/images/appleBtn.png" width={57} height={20} alt=''></Image>
          </a>
          <Image onClick={() => alert('尽情期待')} src="/images/googleBtn.png" className='cursor-pointer' width={57} height={20} alt=''></Image>
        </div>
      </div>

    </div>
    <div className="h-[27px] text-white/30 mt-[24px] border-t-[0.3] border-white/20 flex justify-center items-center">Copyright ©2025 Crypgo. All rights reserved</div>
  </div>
}