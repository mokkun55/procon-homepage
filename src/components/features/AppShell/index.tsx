import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'
import { AppShell as MantineAppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import styles from './index.module.scss'

type Props = {
  children: React.ReactNode
}

export const AppShell = (props: Props) => {
  const breakPoint = '768px'
  const [opened, { toggle }] = useDisclosure()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (opened) {
      toggle()
    }
  }, [pathname, searchParams])

  return (
    <MantineAppShell
      header={{ height: '50px' }}
      navbar={{
        width: 300,
        breakpoint: breakPoint,
        collapsed: { mobile: !opened },
      }}
      padding="md"
      withBorder={false}
      className={styles.container}
    >
      <MantineAppShell.Header style={{ position: 'sticky', zIndex: 10000 }}>
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom={breakPoint} size="sm" /> */}
        <Header opened={opened} toggle={toggle} hiddenFrom={breakPoint} />
      </MantineAppShell.Header>

      <div className={styles.contentsContainer}>
        <MantineAppShell.Navbar p="md" className={styles.sidebar}>
          <SideBar />
        </MantineAppShell.Navbar>

        <MantineAppShell.Main className={styles.contents}>{props.children}</MantineAppShell.Main>
      </div>
      <MantineAppShell.Footer className={styles.footer}>
        <Footer />
      </MantineAppShell.Footer>
    </MantineAppShell>
  )
}
