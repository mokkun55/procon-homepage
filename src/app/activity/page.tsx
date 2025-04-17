import styles from './page.module.scss'

export default function Activity() {
  return (
    <div className={styles.container}>
      <h1 className={styles.topTitle}>活動日及び活動場所</h1>

      <div className={styles.section}>
        <h2 className={styles.title}>活動時間</h2>
        <p>毎週月・金曜日 7限目~9限目</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>活動場所</h2>
        <p>3号館 3階 CAI教室</p>
      </div>

      <img src="images/map.png" className={styles.mapImg} width={500} alt="CAI教室までの地図" />
      {/* TODO: 画像追加してもええかも */}
    </div>
  )
}
