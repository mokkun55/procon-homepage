import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'
import { AppShell as MantineAppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import styles from './index.module.scss'

type Props = {
  children: React.ReactNode
}

export const AppShell = (props: Props) => {
  const breakPoint = '768px'
  const [opened, { toggle }] = useDisclosure()
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
      <MantineAppShell.Header style={{ position: 'sticky' }}>
        {/* <Burger opened={opened} onClick={toggle} hiddenFrom={breakPoint} size="sm" /> */}
        <Header opened={opened} toggle={toggle} hiddenFrom={breakPoint} />
      </MantineAppShell.Header>

      <div className={styles.contentsContainer}>
        <MantineAppShell.Navbar p="md" className={styles.sidebar}>
          <SideBar />
        </MantineAppShell.Navbar>

        <MantineAppShell.Main className={styles.contents}>{props.children}</MantineAppShell.Main>
      </div>
    </MantineAppShell>
  )
}
