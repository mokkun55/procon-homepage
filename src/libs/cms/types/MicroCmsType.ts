import type { symbolMapping } from '@/components/features/Link'

export type WorksType = {
  id: string
  title: string
  date: Date
  mainImage: { url: string; height: number; width: number }
  subImage?: { url: string; height: number; width: number }[]
  description: string
  tags: string[]
  links?: { symbol: keyof typeof symbolMapping; url: string }[] | null
}

export type PostsType = {
  id: string
  title: string
  date: Date
  image: { url: string; height: number; width: number }
  description: string
}

export type MicroCmsType = {
  contents: WorksType[] | PostsType[]
  totalCount: number
}

export type MicroCmsType = {
  contents: WorksType[] | PostsType[]
  totalCount: number
}
