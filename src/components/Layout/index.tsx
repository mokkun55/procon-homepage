'use client'
import { AppShell } from '../features/AppShell'
import styles from './index.module.scss'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      {/* <Modal opened={opened} onClose={toggle} className={styles.modal} xOffset="10vw" size={'sm'}>
        <SideBar />
      </Modal>
      <div className={styles.container}>
        <Header opened={opened} toggle={toggle} className={styles.header} />
        <div className={styles.contents}>
          <SideBar className={styles.sidebar} style={{ ['--close' as string]: opened ? 'block' : 'none' }} />
          <div className={styles.content}>{children}</div>
        </div>
      </div>
      <Footer className={styles.footer} /> */}
      <div className={styles.container}>
        <AppShell>{children}</AppShell>
      </div>
    </div>
  )
}
