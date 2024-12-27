import Link from 'next/link'
import styles from './index.module.scss'
import { Item } from '@/components/features/Item'
import { Splitter } from '@/components/features/Splitter'

//TODOフッターリンク
export const Footer = () => {
  return (
    <div className={styles.footer}>
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
              <Item url="/" text="入部届け" size="default" />
              <Item url="/" text="活動日及び活動場所" size="default" />
              <Item url="/" text="作品一覧" size="default" />
            </Splitter>
          </div>
          <div className={styles.column}>
            <Splitter text="部員向け">
              <Item url="/" text="予定" size="default" />
              <Item url="/" text="お知らせ" size="default" />
              <Item url="https://procon-absence-form-3d1be.firebaseapp.com/" text="欠席連絡フォーム" size="default" />
            </Splitter>
          </div>
          <div className={styles.column}>
            <Splitter text="開発">
              <Item url="/" text="開発の余談" size="default" />
              <Item url="https://github.com/mokkun55/procon-homepage" text="Github" size="default" />
            </Splitter>
          </div>
        </div>
      </div>
    </div>
  )
}
