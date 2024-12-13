import { Item } from './Item'
import { Splitter } from './Splitter'
import styles from './index.module.scss'

export const SideBar = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className={styles.container}>
        <Item url="/" text="ホーム" size="big" />
        <Splitter text="部員向け">
          <Item url="/" text="予定" size="default" />
        </Splitter>
      </div>
    </div>
  )
}
