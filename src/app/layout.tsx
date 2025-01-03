import './globals.css'
import './variables.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core'
import { Noto_Sans_JP } from 'next/font/google'
import styles from './layout.module.scss'

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
          <div className={styles.container}>
            <Header />
            <div className={styles.contents}>
              <SideBar className={styles.sidebar} />
              <div className={styles.content}>{children}</div>
            </div>
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
