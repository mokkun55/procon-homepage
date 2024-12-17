import './globals.css'
import styles from './layout.module.scss'
import { Noto_Sans_JP } from 'next/font/google'
import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'
import { Footer } from '@/components/Footer'
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core'

// フォント指定
const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
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
        </div>
        </MantineProvider>
      </body>
    </html>
  )
}
