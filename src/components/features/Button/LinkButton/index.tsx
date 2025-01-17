'use client'

import styles from '@/components/features/Button/index.module.scss'
import { Button as MantineButton } from '@mantine/core'
import Link from 'next/link'

export type Props = {
  link: string
  text: string
  className?: string
}

export const LinkButton = async ({ text, link, className }: Props) => {
  return (
    <MantineButton
      component={Link}
      variant="default"
      className={`${styles.button} ${className}`}
      radius="0"
      href={link}
    >
      {text}
    </MantineButton>
  )
}
