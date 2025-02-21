import { Item } from '@/components/features/Item'
import { Splitter } from '@/components/features/Splitter'
import Link from 'next/link'
import styles from './index.module.scss'

type Props = {
  className?: string
}

//TODOフッターリンク
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
              <Item url="/registration" text="入部届け" size="default" />
              <Item url="/activity" text="活動日及び活動場所" size="default" />
              <Item url="/works" text="作品一覧" size="default" />
            </Splitter>
          </div>
          <div className={styles.column}>
            <Splitter text="部員向け">
              <Item url="/schedule" text="予定" size="default" />
              <Item url="/posts" text="お知らせ" size="default" />
              <Item url="absence" text="欠席連絡フォーム" size="default" />
            </Splitter>
          </div>
          <div className={styles.column}>
            <Splitter text="開発">
              <Item url="/development" text="開発の余談" size="default" />
              <Item url="https://github.com/mokkun55/procon-homepage" text="Github" size="default" />
            </Splitter>
          </div>
        </div>
      </div>
    </div>
  )
}
