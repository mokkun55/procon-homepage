'use client'
import { Burger } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.scss'

type Props = {
  opened: boolean
  toggle: () => void
  hiddenFrom: string
  className?: string
}

export const Header = (props: Props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      <div>
        <Link href="/" className={styles.headerLeft}>
          <Image src="/header/procon.png" width={30} height={30} alt="kutc-logo" className={styles.logo} />
          <h1 className={styles.title}>近畿大学工業高等専門学校プログラミング技術部</h1>
        </Link>
      </div>
      <div className={styles.headerRight}>
        <Burger
          opened={props.opened}
          onClick={props.toggle}
          hiddenFrom={props.hiddenFrom}
          aria-label="Toggle navigation"
          className={styles.burger}
        />
      </div>
    </div>
  )
}
