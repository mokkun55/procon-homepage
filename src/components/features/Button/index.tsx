'use client'

import { Button as MantineButton } from '@mantine/core'
import styles from './index.module.scss'

export type Props = {
  onClick?: () => void
  text: string
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <MantineButton
      variant="default"
      className={styles.button}
      radius="0"
      onClick={() => {
        console.log('aaa')
      }}
    >
      {text}
    </MantineButton>
  )
}
