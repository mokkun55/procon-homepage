import { Post } from '@/components/features/Post'
import { getContents } from '@/feature/cms/hooks/MicroCmsContents'
import type { PostsType } from '@/libs/cms/types/MicroCmsType'

export const Posts = async () => {
  const contents = (await getContents('posts')) as PostsType[]
  const postElement = contents.map((post: PostsType, index: number) => <Post key={post.id} {...post} index={index} />)

  return <>{postElement}</>
}
