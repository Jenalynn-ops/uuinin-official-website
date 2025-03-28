import GradientTextDefault from '@/components/reactBits/GradientTextDefault'
import { Button } from "antd"
export default function FooterPC() {
  return <div className="w-7xl mx-auto mt-10">
    <div className="h-80 bg-[#0E0E0E] rounded-2xl flex justify-between items-center px-11">
      <div className="text-4xl font-semibold">
        <div>加入我们</div>
        <div className="mt-4">开启智能购物时代</div>
      </div>
      <div className="flex items-center">
        <Button style={{ background: 'transparent', color: '#fff', height: '60px', fontSize: '18px', fontWeight: 500,borderRadius:'11px' }} className="text-white w-44 h-16">体验UUININ</Button>
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
  </div>
}