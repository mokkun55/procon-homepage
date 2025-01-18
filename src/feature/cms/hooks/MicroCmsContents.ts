import { getClient } from '@/libs/cms/microCmsClient'
import type { PostsType, WorksType } from '@/libs/cms/types/MicroCmsType'
import type { MicroCmsContentsType } from './MicroCmsContentsTypes'

export const getContents = async ({
  endpoint,
  limit,
  offset = 0,
}: MicroCmsContentsType): Promise<WorksType[] | PostsType[]> => {
  const data = await getClient().get({
    endpoint: endpoint,
    queries: {
      limit: limit,
      offset: offset,
    },
  })

  return data.contents
}

export const getContent = async (endpoint: 'works' | 'posts', id: string): Promise<WorksType | PostsType> => {
  const data = await getClient().get({
    endpoint: endpoint,
    contentId: id,
  })

  return data
}
