import GradientTextDefault from '@/components/reactBits/GradientTextDefault'
import Image from 'next/image'
export default function FooterPC() {
  return <div className="w-7xl mx-auto mt-26">
    <div className="h-80 bg-[#0E0E0E] rounded-2xl flex justify-between items-center px-11">
      <div className="text-4xl font-semibold">
        <div>加入我们</div>
        <div className="mt-4">开启智能购物时代</div>
      </div>
      <div className="flex items-center">
        <a
          href='#a1'
          className="text-white cursor-pointer w-44 h-14 rounded-xl flex justify-center items-center border border-white/80"
        >体验UUININ</a>
        <div className='h-14 w-56 ml-8'>
          <GradientTextDefault
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={true}
            className="custom-class"
          >
            <div className='w-56 flex justify-center items-center text-lg font-medium'>联系我们</div>
          </GradientTextDefault>
        </div>
      </div>
    </div>
    <div className='mt-5'>
      <div className='flex justify-between items-center py-[118px]'>
        <div>
          <Image alt="" width={184} height={32} src="/images/logo.png"></Image>
          <div className='text-xl text-white/60 mt-8'>Your Personal AI Shopping Advisor</div>
          <div className='flex mt-9'>
            <div className='bg-white/10 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center items-center'>
              <Image width={29} height={29} src="/icons/YouTobe.png" alt=''></Image>
            </div>
            <div className='bg-white/10 cursor-pointer mx-3 w-14 h-14 rounded-[50%] flex justify-center items-center'>
              <Image width={29} height={29} src="/icons/FaceBook.png" alt=''></Image>
            </div>
            <div className='bg-white/10 cursor-pointer w-14 h-14 rounded-[50%] flex justify-center items-center'>
              <Image width={29} height={29} src="/icons/X.png" alt=''></Image>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <div className='text-[28px] font-medium'>Get UUININ APP</div>
          <div className='flex mt-5'>
            <a href="https://apps.apple.com/cn/app/uuinin/id6737213354">
              <Image className='mr-4 cursor-pointer' src="/images/appleBtn.png" width={204} height={71} alt=''></Image>
            </a>
            <Image onClick={() => alert('尽情期待')} src="/images/googleBtn.png" className='cursor-pointer' width={204} height={71} alt=''></Image>
          </div>
        </div>
      </div>
      <div
        className='h-[135px] border-t-[1.4px] border-white/20 flex justify-center items-center text-white/40 text-lg'
      >Copyright ©2025 Crypgo. All rights reserved</div>
    </div>
  </div>
}