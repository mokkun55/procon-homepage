import styles from './index.module.scss'

export const Splitter = ({ text, children }: { text: string; children: React.ReactNode }) => {
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
