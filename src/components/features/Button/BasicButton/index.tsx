'use client'

import styles from '@/components/features/Button/index.module.scss'
import { Button as MantineButton } from '@mantine/core'

export type Props = {
  onClick?: () => void
  text: string
}

export const BasicButton = ({ text, onClick }: Props) => {
  return (
    <MantineButton variant="default" className={styles.button} radius="0" onClick={onClick}>
      {text}
    </MantineButton>
  )
}
