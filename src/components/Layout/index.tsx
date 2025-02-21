'use client'
import { AppShell } from '../features/AppShell'
import styles from './index.module.scss'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <AppShell>{children}</AppShell>
      </div>
    </div>
  )
}
