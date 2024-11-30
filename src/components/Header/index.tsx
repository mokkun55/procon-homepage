import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

export const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="https://www.ktc.ac.jp/" className={styles.headerLeft}>
          <Image src="/header/kindai-logo.png" width={30} height={30} alt="kutc-logo" className={styles.logo} />
          <h1 className={styles.title}>近畿大学工業高等専門学校</h1>
        </Link>
      </div>
      <div className={styles.headerRight}>
        <h1 className={styles.title}>プログラミング技術部</h1>
        <Image src="/header/node-logo.png" width={30} height={30} alt="node-logo" className={styles.logo} />
      </div>
    </div>
  )
}
