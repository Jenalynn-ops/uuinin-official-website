"use client";
import { useEffect, useState } from "react";
import FooterMobile from "./mobile/FooterMobile";
import FooterPC from "./pc/FooterPC";
import { Descriptions, DescriptionsProps, Modal } from "antd";
export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(/mobile|android|iphone|ipad/.test(userAgent));
  }, []);
  return <div id="a4" className="border border-transparent">
    {isMobile ? <div><FooterMobile setOpen={(e: boolean) => setIsModalOpen(e)}></FooterMobile></div> : <FooterPC setOpen={(e: boolean) => setIsModalOpen(e)}></FooterPC>}
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