import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import Home from './page'

// フォント指定
const noto = Noto_Sans_JP({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={`${noto.variable} antialiased`}>
        <Home />
      </body>
    </html>
  )
}
