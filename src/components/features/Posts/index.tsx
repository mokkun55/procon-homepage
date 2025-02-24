'use client'
import { getContentsApi } from '@/feature/cms/hooks/MicroCmsContents'
import type { PostsType } from '@/libs/cms/types/MicroCmsType'
import { createLoadingPosts } from '@/libs/post/createPostDummy'
import { type JSX, useEffect, useRef, useState } from 'react'
import { LinkButton } from '../Button/LinkButton'
import { Post } from '../Post'
import styles from './index.module.scss'

export const Posts = () => {
  const [postElement, setPostElement] = useState<JSX.Element[]>([])
  const isFirstRender = useRef(true)
  const CONTENTS_PER_PAGE = 5
  const DUMMY_ELEMENT = createLoadingPosts(CONTENTS_PER_PAGE)

  useEffect(() => {
    if (!isFirstRender.current) return
    const fetchContents = async () => {
      const contents = await getContentsApi({ endpoint: 'posts', limit: 5 })
      const contentsList = contents.contents as PostsType[]
      const Element = contentsList.map((content, index) => {
        return (
          <Post
            key={content.id}
            index={index}
            id={content.id}
            title={content.title}
            date={content.date}
            mainImage={content.mainImage}
            description={content.description}
            content={content.content}
          />
        )
      })
      setPostElement(Element)
    }
    isFirstRender.current = false
    fetchContents()
  }, [])

  return (
    <div className={styles.container}>
      {postElement.length === 0 ? DUMMY_ELEMENT : postElement}
      <LinkButton className={`${styles.button}`} text="もっと見る" link="/posts" />
    </div>
  )
}
