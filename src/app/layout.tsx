import './globals.css'
import './variables.css'
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${noto.variable} antialiased`}>
        <MantineProvider>
          <Layout>{children}</Layout>
        </MantineProvider>
      </body>
    </html>
  )
}
