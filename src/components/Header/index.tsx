'use client'
import { Burger } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

type Props = {
  opened: boolean
  toggle: () => void
}

export const Header = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="https://www.ktc.ac.jp/" className={styles.headerLeft}>
          <Image src="/header/kindai-logo.png" width={30} height={30} alt="kutc-logo" className={styles.logo} />
          <h1 className={styles.title}>近畿大学工業高等専門学校</h1>
        </Link>
      </div>
      <div className={styles.headerRight}>
        <Link href="/" className={styles.headerLeft}>
          <h1 className={styles.title}>プログラミング技術部</h1>
          <Image src="/header/node-logo.png" width={30} height={30} alt="node-logo" className={styles.logo} />
        </Link>
        <Burger opened={props.opened} onClick={props.toggle} aria-label="Toggle navigation" className={styles.burger} />
      </div>
    </div>
  )
}
