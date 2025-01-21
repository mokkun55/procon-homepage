import { getClient } from '@/libs/cms/microCmsClient'
import type { MicroCmsType, PostsType, WorksType } from '@/libs/cms/types/MicroCmsType'
import type { MicroCmsContentType, MicroCmsContentsType } from './MicroCmsContentsTypes'

export const getContents = async ({ endpoint, limit, offset = 0 }: MicroCmsContentsType): Promise<MicroCmsType> => {
  const data = await getClient().get({
    endpoint: endpoint,
    queries: {
      limit: limit,
      offset: offset,
    },
  })

  return data
}

export const getContent = async ({ endpoint, id }: MicroCmsContentType): Promise<WorksType | PostsType> => {
  const data = await getClient().get({
    endpoint: endpoint,
    contentId: id,
  })

  return data
}

export const getContentsApi = async ({ endpoint, limit, offset }: MicroCmsContentsType): Promise<MicroCmsType> => {
  const data = await fetch(`api/cms/contents?endpoint=${endpoint}&limit=${limit}${offset ? `&offset=${offset}` : ''}`)
  const json = data.json()
  return json
}

export const getContentApi = async ({ endpoint, id }: MicroCmsContentType): Promise<WorksType | PostsType> => {
  const data = await fetch(`api/cms/content?endpoint=${endpoint}&id=${id}`)
  const json = data.json()
  return json
}
