import { Work } from '@/components/features/Work'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Works() {
  return (
    <div className={styles.container}>
      <Link href="/works/work1">work1</Link>
      <Link href="/works/work2">work2</Link>
      <Work title="ほげ" date={new Date()} img="/404/404not-found.png" description="あいうえお" />
    </div>
  )
}
