'use client'
import WorksComponent from '@/components/Works'
import styles from './page.module.scss'

export default function Works() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>作品紹介</h1>
        <p className={styles.description}>画像クリックで詳細ページに移動できます</p>
      </div>
      <WorksComponent useInfinityScroll contentsPerPage={9} />
    </div>
  )
}
