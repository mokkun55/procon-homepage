import { Item } from '@/components/Item'
import { Splitter } from '@/components/Splitter'
import type { CSSProperties } from 'react'
import styles from './index.module.scss'

type Props = {
  className?: string
  isOpen?: boolean
  style?: CSSProperties
}

export const SideBar = ({ className, style }: Props) => {
  return (
    <div className={className} style={style}>
      <div className={styles.container} style={style}>
        <Item url="/" text="ホーム" size="big" />
        <Splitter text="入学生向け">
          <Item url="https://forms.gle/qT41wWxK1Fq5Y5fK6" text="入部届" size="default" />
          <Item url="/activity" text="活動日及び活動場所" size="default" />
          <Item url="/works" text="作品一覧" size="default" />
        </Splitter>
        <Splitter text="部員向け">
          <Item url="/schedule" text="予定" size="default" />
          <Item url="/posts" text="お知らせ" size="default" />
          <Item url="https://procon-absence-form.vercel.app/" text="欠席連絡フォーム" size="default" />
        </Splitter>
        <Splitter text="開発">
          {/* TODO 一度/devは消しておく */}
          {/* <Item url="/development" text="開発の余談" size="default" /> */}
          <Item url="https://github.com/mokkun55/procon-homepage" text="Github" size="default" />
        </Splitter>
      </div>
    </div>
  )
}
