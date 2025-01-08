import styles from './index.module.scss'

type Props = {
  text: string
  children?: React.ReactNode
}

export const Tags = ({ text, children }: Props) => {
  return (
    <div className={styles.tags}>
      <span className={styles.text}>{text}</span>
      {children}
    </div>
  )
}
