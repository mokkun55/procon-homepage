import './globals.css'
import './variables.css'
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import dayjs from 'dayjs'
import { Noto_Sans_JP } from 'next/font/google'
import 'dayjs/locale/ja'
import { Layout } from '@/components/Layout'
dayjs.locale('ja')

import { pageMetadata } from '@/components/metadata'

export const metadata = pageMetadata

// フォント指定
const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

const jsonLd = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  name: '近畿大学工業高等専門学校プログラミング技術部',
  url: "https://ktc-procon.vercel.app/'",
  author: {
    '@type': 'Person',
    name: '近畿大学工業高等専門学校プログラミング技術部',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css" />
        <ColorSchemeScript />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${noto.variable} antialiased`}>
        <MantineProvider>
          <Layout>{children}</Layout>
        </MantineProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
