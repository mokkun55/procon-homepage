import styles from './style.module.scss'

type Props = {
  text: string
  marginBottom?: string
  marginTop?: string
}

export const SectionSplit = ({ text, marginBottom = '0px', marginTop = '0px' }: Props) => {
  return (
    <div className={styles.breakLine} style={{ marginBottom: marginBottom, marginTop: marginTop }}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}
