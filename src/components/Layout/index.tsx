'use client'
import { useDisclosure } from '@mantine/hooks'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { SideBar } from '../SideBar'
import styles from './index.module.scss'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <>
      <div className={styles.container}>
        <Header opened={opened} toggle={toggle} />
        <div className={styles.contents}>
          <SideBar className={styles.sidebar} style={{ ['--close' as string]: opened ? 'block' : 'none' }} />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}
