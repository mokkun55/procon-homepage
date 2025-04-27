import styles from './page.module.scss'

export default function Development() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://kutc-procon.notion.site/ebd/1dc87bcd6fe1800da6beecf2bd6bcc70"
        allowFullScreen
        title="notion"
        className={styles.notion}
      />
    </div>
  )
}
