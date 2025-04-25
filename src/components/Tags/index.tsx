import styles from './index.module.scss'

type Props = {
  text: string
}

export const Tags = ({ text }: Props) => {
  return (
    <div className={styles.tags}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}
