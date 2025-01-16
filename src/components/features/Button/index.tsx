'use client'

import {
  Button as MantineButton,
  MantineThemeProvider,
  type VariantColorsResolver,
  darken,
  parseThemeColor,
  rgba,
} from '@mantine/core'
import styles from './index.module.scss'

const variantColorResolver: VariantColorsResolver = () => {
  return {
    background: rgba('var(--primary)', 0.05),
    hover: rgba('var(--primary)', 0.15),
    border: '2px solid var(--primary)',
    color: darken('var(--primary)', 0.1),
  }
}

type Props = {
  className?: string
  text: string
}

export const Button = (props: Props) => {
  return (
    <MantineThemeProvider theme={{ variantColorResolver }}>
      <div className={props.className}>
        <MantineButton variant="primary" radius="0">
          {props.text}
        </MantineButton>
      </div>
    </MantineThemeProvider>
  )
}
