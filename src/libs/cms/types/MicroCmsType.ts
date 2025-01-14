import type { symbolMapping } from '@/components/features/Link'

export type WorksType = {
  id: string
  title: string
  date: Date
  image: { url: string; height: number; width: number }
  description: string
  tags: string[]
  links: { symbol: keyof typeof symbolMapping; url: string }[] | null
}

export type PostsType = {
  // TODO 仮置き
  id: string
}
