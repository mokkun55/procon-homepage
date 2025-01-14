import Posts from '@/app/posts/page'
import { Works } from '@/libs/cms/MicroCmsType'
import { getClient } from '@/libs/cms/microCmsClient'

export const getContents = async (endpoint: 'works' | 'posts') => {
  const data = await getClient().get({
    endpoint: endpoint,
  })

  return data.contents
}
