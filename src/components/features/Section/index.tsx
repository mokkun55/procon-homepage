import styles from './index.module.scss'

type props = {
  text: string
  sectionType: keyof typeof sectionTypeMapping
  children?: React.ReactNode
}

const sectionTypeMapping = {
  bottomLine: styles.bottomLine,
  leftLine: styles.leftLine,
} as const

export const Section = ({ text, sectionType, children }: props) => {
  return (
    <div className={styles.container}>
      <div className={sectionTypeMapping[sectionType]}>
        <p className={styles.text}>{text}</p>
      </div>
      {children}
    </div>
  )
}
