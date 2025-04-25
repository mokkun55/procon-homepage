import NextLink from 'next/link'
import { FaCode, FaFigma, FaGithub } from 'react-icons/fa'
import styles from './index.module.scss'

type Props = {
  symbol: keyof typeof symbolMapping
  url: string
}

export const symbolMapping = {
  Github: FaGithub,
  Figma: FaFigma,
  Demo: FaCode,
} as const

export const Link = ({ symbol, url }: Props) => {
  const SymbolComponent = symbolMapping[symbol]
  return (
    <NextLink href={url} className={styles.link}>
      <SymbolComponent className={styles.symbol} />
      <span className={styles.text}>{symbol}</span>
    </NextLink>
  )
}
