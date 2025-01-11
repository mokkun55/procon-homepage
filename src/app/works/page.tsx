import styles from './page.module.scss'
import Link from 'next/link'

export default function Works() {
  return (
    <div className={styles.container}>
      <Link href="/works/work1">work1</Link>
      <Link href="/works/work2">work2</Link>
    </div>
  )
}
