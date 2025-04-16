import type { Metadata } from 'next'

export const pageMetadata: Metadata = {
  title: '近畿大学工業高等専門学校プログラミング技術部',
  description:
    '近大高専プログラミング技術部です！1年から5年のみんなで高専プロコンや名張祭に向けて日々活動しています！部員募集中です！プログラミング未経験も是非！！！！',
  keywords: ['近畿大学工業高等専門学校', '高専プロコン', '近大高専', '近大', 'プロコン', 'procon'],
  authors: [{ name: 'プログラミング技術部の愉快な仲間たち' }],
  openGraph: {
    title: '近畿大学工業高等専門学校プログラミング技術部',
    description:
      '近大高専プログラミング技術部です！1年から5年のみんなで高専プロコンや名張祭に向けて日々活動しています！部員募集中です！プログラミング未経験も是非！！！！',
    url: 'https://ktc-procon.vercel.app',
    siteName: '近大高専プロコン部',
    images: [
      {
        url: 'https://ktc-procon.vercel.app/images/top-carousel-1.png',
        width: 1920,
        height: 1080,
        alt: 'プログラミング技術部紹介画像',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '近畿大学工業高等専門学校プログラミング技術部',
    description:
      '近大高専プログラミング技術部です！1年から5年のみんなで高専プロコンや名張祭に向けて日々活動しています！部員募集中です！プログラミング未経験も是非！！！！',
    creator: '@ktc_procon',
    images: ['https://ktc-procon.vercel.app/images/top-carousel-1.png'],
  },
}
