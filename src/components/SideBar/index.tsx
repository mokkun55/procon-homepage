import { Item } from '@/components/features/Item'
import { Splitter } from '@/components/features/Splitter'
import styles from './index.module.scss'

export const SideBar = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className={styles.container}>
        <Item url="/" text="ホーム" size="big" />
        <Splitter text="入学生向け">
          <Item url="/registration" text="入部届け" size="default" />
          <Item url="/activity" text="活動日及び活動場所" size="default" />
          <Item url="/works" text="作品一覧" size="default" />
        </Splitter>
        <Splitter text="部員向け">
          <Item url="/schedule" text="予定" size="default" />
          <Item url="/notice" text="お知らせ" size="default" />
          <Item url="absence" text="欠席連絡フォーム" size="default" />
        </Splitter>
        <Splitter text="開発">
          <Item url="/development" text="開発の余談" size="default" />
          <Item url="https://github.com/mokkun55/procon-homepage" text="Github" size="default" />
        </Splitter>
      </div>
    </div>
  )
}
