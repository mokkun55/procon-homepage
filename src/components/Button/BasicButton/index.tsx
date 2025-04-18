'use client'

import styles from '@/components/Button/index.module.scss'
import { Button as MantineButton } from '@mantine/core'

export type Props = {
  onClick?: () => void
  text: string
  className?: string
}

export const BasicButton = ({ text, onClick, className }: Props) => {
  return (
    <MantineButton variant="default" className={`${styles.button} ${className}`} radius="0" onClick={onClick}>
      {text}
    </MantineButton>
  )
}
