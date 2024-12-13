import styles from './index.module.scss'

type Props = {
  text: string
  children: React.ReactNode
}

export const Splitter = ({ text, children }: Props) => {
  return (
    <div className={styles.splitter}>
      <div className={styles.index}>
        <span className={styles.text}>
          <h3>{text}</h3>
        </span>
      </div>
      {children}
    </div>
  )
}
