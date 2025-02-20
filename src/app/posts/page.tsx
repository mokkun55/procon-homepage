'use client'
import { Pagination } from '@/components/features/Pagination'
import { Post } from '@/components/features/Post'
import { getContentsApi } from '@/feature/cms/hooks/MicroCmsContents'
import type { PostsType } from '@/libs/cms/types/MicroCmsType'
import { createLoadingPosts } from '@/libs/post/createPostDummy'
import { type JSX, useEffect, useState } from 'react'
import styles from './page.module.scss'

export default function Posts() {
  const [contents, setContents] = useState<PostsType[]>([])
  const [postElement, setPostElement] = useState(new Map<number, JSX.Element[]>())
  const [page, setPage] = useState<number>(0)
  const [totalCount, setTotalCount] = useState<number>(0)
  const CONTENTS_PER_PAGE = 5
  const DUMMY_ELEMENT = createLoadingPosts(CONTENTS_PER_PAGE)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const element = contents.map((content, index) => {
      return (
        <Post
          key={content.id}
          index={index}
          id={content.id}
          title={content.title}
          date={content.date}
          mainImage={content.mainImage}
          description={content.description}
          contents={content.contents}
        />
      )
    })
    postElement.set(page, element)
    setPostElement(new Map(postElement))
  }, [contents])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const fetchContents = async () => {
      const contents = await getContentsApi({
        endpoint: 'posts',
        limit: CONTENTS_PER_PAGE,
        offset: page * CONTENTS_PER_PAGE,
      })
      const contentsList = contents.contents as PostsType[]
      if (totalCount === 0) setTotalCount(contents.totalCount)
      setContents(contentsList)
    }
    if (!postElement.has(page) || postElement.get(page)?.length === 0) fetchContents()
  }, [page])

  return (
    <div className={styles.container}>
      {!postElement.get(page) || postElement.get(page)?.length === 0 ? DUMMY_ELEMENT : postElement.get(page)}
      <Pagination
        total={totalCount / CONTENTS_PER_PAGE}
        activePages={page + 1}
        onChange={(page) => {
          setPage(page - 1)
        }}
        className={`${styles.pagination}`}
      />
    </div>
  )
}
