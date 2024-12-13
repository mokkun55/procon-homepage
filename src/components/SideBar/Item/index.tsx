import Link from 'next/link'
import styles from './index.module.scss'

type Props = {
  url: string
  text: string
  size: keyof typeof sizeMapping
}

const sizeMapping = {
  big: 18,
  default: 16,
  small: 12,
} as const

export const Item = ({ url, text, size }: Props): React.ReactNode => {
  return (
    <div>
      <Link className={styles.link} href={url} style={{ fontSize: sizeMapping[size] }}>
        {text}
      </Link>
    </div>
  )
}
