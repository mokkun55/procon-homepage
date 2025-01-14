import Posts from "@/app/posts/page"
import { getClient } from "@/libs/cms/microCmsClient"
import { Works } from "@/libs/cms/MicroCmsType"

export const getContents = async (endpoint: 'works'|'posts') => {
  const data = await getClient().get({
    endpoint: endpoint,
  })

  return data.contents
}
