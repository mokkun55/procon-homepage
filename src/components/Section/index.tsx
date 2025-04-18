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

const sectionMarginMapping = {
  leftLine: { marginBottom: '32px' },
  bottomLine: { marginTop: '64px' },
}

export const Section = ({ text, sectionType, children }: props) => {
  return (
    <div className={styles.container} style={sectionMarginMapping[sectionType]}>
      <div className={sectionTypeMapping[sectionType]}>
        <p className={styles.text}>{text}</p>
      </div>
      {children}
    </div>
  )
}
