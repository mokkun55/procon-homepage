import { Item } from '@/components/features/Item'
import { Splitter } from '@/components/features/Splitter'
import styles from './index.module.scss'

type Props = {
  className?: string
  isOpen?: boolean
}

export const SideBar = ({ className, isOpen }: Props) => {
  return (
    <div className={className} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className={styles.container} style={{}}>
        <Item url="/" text="ホーム" size="big" />
        <Splitter text="入学生向け">
          <Item url="/registration" text="入部届" size="default" />
          <Item url="/activity" text="活動日及び活動場所" size="default" />
          <Item url="/works" text="作品一覧" size="default" />
        </Splitter>
        <Splitter text="部員向け">
          <Item url="/schedule" text="予定" size="default" />
          <Item url="/posts" text="お知らせ" size="default" />
          <Item url="/absence" text="欠席連絡フォーム" size="default" />
        </Splitter>
        <Splitter text="開発">
          <Item url="/development" text="開発の余談" size="default" />
          <Item url="https://github.com/mokkun55/procon-homepage" text="Github" size="default" />
        </Splitter>
      </div>
    </div>
  )
}
