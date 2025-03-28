export type Locale = 'en' | 'zh'

export interface Translations {
  [key: string]: string
}

export interface LocaleResources {
  [locale: string]: Translations
}

// 扩展Next.js类型

  interface NextPageContext {
    locale?: Locale
  }


declare module 'next/navigation' {
  interface Pathnames {
    '/': string
    '/blog/[slug]': string
  }
}