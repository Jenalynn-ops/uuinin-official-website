'use client';
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Translations } from '../types/i18n'

export function useTranslation() {
  const params = useParams()
  const locale = params?.locale as string
  const [translations, setTranslations] = useState<Translations>({})

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${locale}/common.json`)
        const data: Translations = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error('Failed to load translations:', error)
      }
    }
    loadTranslations()
  }, [locale])

  return { t: translations, locale }
}