'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/app/types/i18n'
import { Dropdown, Button } from "antd";
import { useEffect, useState } from 'react';
export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [language, setLanguage] = useState('Language')
  const items = [
    { key: "en", label: "English" },
    { key: "zh", label: "中文" },
    { key: "ar", label: "بالعربية" },
  ];
  useEffect(() => {
    const item = items.find(e => pathname.includes(e.key))
    setLanguage(item ? item.label : 'Language')
  }, [pathname])
  const changeLanguage = ({ key }: { key: string }) => {
    router.push(`/${key}${pathname.replace(/^\/(en|zh|ar)/, "")}`);
  };
  return (
    <div className='flex items-center cursor-pointer'>
      <Dropdown
        menu={{ items, onClick: changeLanguage }}
        trigger={["click"]}
      >
        <span>{language}</span>
      </Dropdown>
    </div>

  )
}