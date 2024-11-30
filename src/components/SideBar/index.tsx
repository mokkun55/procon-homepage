import { Item } from './Item'
import styles from './index.module.scss'

export const SideBar = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className={styles.container}>
        <Item url="/" text="ホーム" />
      </div>
    </div>
  )
}
