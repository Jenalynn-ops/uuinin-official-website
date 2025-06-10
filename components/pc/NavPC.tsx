import Image from "next/image"
import LanguageSwitcher from "../LanguageSwitcher"
import { useTranslation } from "@/app/hooks/useTranslation"
import { Modal, Descriptions } from "antd"
import { useState } from "react"
import type { DescriptionsProps } from 'antd';

export default function NavPC() {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const items: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Name of Company',
      children: 'UUININ TECHNOLOGY PTE. LTD.',
    },
    {
      key: '2',
      label: 'Registered Office Address',
      children: '60 PAYA LEBAR ROAD, #04-16, PAYA LEBAR SQUARE, SINGAPORE 409051',
    },
    {
      key: '3',
      label: 'Phone',
      children: '83031006',
    },
  ]
  return <div className="w-7xl h-[76px] left-1/2 -translate-x-1/2  fixed flex items-center justify-between bg-black z-50">
    <div className="flex flex-1">
      <a href="#a1">
        <Image className="mr-[45px]" src="/images/logo.png" priority width={172.5} height={30} alt="uuinin"></Image>
      </a>
      <a href="#a1" className="px-4 leading-[30px]">{t.nav1}</a>
      <a href="#a2" className="px-4 leading-[30px]">{t.nav2}</a>
      <a href="#a3" className="px-4 leading-[30px]">{t.nav3}</a>
      <a href="#a4" className="px-4 leading-[30px]">{t.nav4}</a>
    </div>

    <div className="flex">
      <LanguageSwitcher></LanguageSwitcher>
      {/* <div className="flex flex-col items-center mr-9 ml-9 cursor-pointer">
        <Image src="/images/marchant.png" alt="" width={26} height={25}></Image>
        <div className="text-xs">{t.merchantJoin}</div>
      </div> */}

      <div onClick={() => setIsModalOpen(true)} className="flex ml-9 flex-col items-center cursor-pointer">
        <Image src="/images/user.png" alt="" width={26} height={25}></Image>
        <div className="text-xs">{t.contactUs}</div>
      </div>
    </div>
    <Modal
      title="About Us"
      footer={null}
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
    >
      <div className="my-6">
        <Descriptions className="mt-2" column={1} title="" items={items} />
      </div>
    </Modal>
  </div>
}