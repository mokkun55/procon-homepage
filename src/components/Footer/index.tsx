import { Item } from '@/components/Item'
import { Splitter } from '@/components/Splitter'
import Link from 'next/link'
import styles from './index.module.scss'

type Props = {
  className?: string
}

export const Footer = (props: Props) => {
  return (
    <div className={`${styles.footer} ${props.className}`}>
      <div className={styles.container}>
        <div className={styles.topText}>
          <Link href="https://www.ktc.ac.jp/">
            <p className={styles.school}>近畿大学工業高等専門学校</p>
          </Link>
          <h1 className={styles.club}>プログラミング技術部</h1>
          <Item url="/" text="ホーム" size="big" />
        </div>
        <div className={styles.footerColumn}>
          <div className={styles.column}>
            <Splitter text="入学生向け">
              <Item url="https://forms.gle/qT41wWxK1Fq5Y5fK6" text="入部届" size="default" />
              <Item url="/activity" text="活動日及び活動場所" size="default" />
              <Item url="/works" text="作品一覧" size="default" />
            </Splitter>
          </div>
          <div className={styles.column}>
            <Splitter text="部員向け">
              <Item url="/schedule" text="予定" size="default" />
              <Item url="https://www.notion.so/1dc87bcd6fe1800da6beecf2bd6bcc70" text="勉強資料" size="default" />
              <Item url="/posts" text="お知らせ" size="default" />
              <Item url="https://procon-absence-form.vercel.app/" text="欠席連絡フォーム" size="default" />
            </Splitter>
          </div>
          {/* TODO 一度/devは使わない */}
          <div className={styles.column}>
            <Splitter text="開発">
              {/* <Item url="/development" text="開発の余談" size="default" /> */}
              <Item url="https://github.com/mokkun55/procon-homepage" text="Github" size="default" />
            </Splitter>
          </div>
        </div>
        <div className={styles.bottomText}>
          <Item url="https://forms.gle/jJufKCnkcdk3z4no6" text="お問い合わせ" size="default" />
          <Item url="/privacy" text="プライバシーポリシー" size="default" />
        </div>

        <div className={styles.copyrightContainer}>
          <small className={styles.copyright}>&copy; kutc Programming club</small>
        </div>
      </div>
    </div>
  )
}
