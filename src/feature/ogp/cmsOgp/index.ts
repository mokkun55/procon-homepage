import { getContent } from '@/feature/cms/hooks/MicroCmsContents'
import type { EndpointList } from '@/feature/cms/hooks/MicroCmsContentsTypes'
import type { Metadata } from 'next'

export type OgpParams = {
  params: Promise<{ id: string }>
}

export type Props = {
  endpoint: (typeof EndpointList)[number]
} & OgpParams

const titleType = {
  posts: 'お知らせ',
  works: '作品',
} as const

export async function generateMicroCmsMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const id = params.id
  const content = await getContent({ endpoint: props.endpoint, id: id })

  return {
    openGraph: {
      siteName: '近大高専プロコン部',
      title: `${titleType[props.endpoint]} : ${content.title}`,
      description: content.description,
      images: [
        {
          url: content.mainImage.url,
          width: content.mainImage.width,
          height: content.mainImage.height,
        },
      ],
    },
  }
}
