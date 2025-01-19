'use client'

import { Post } from '@/components/features/Post'
import type { PostsType, WorksType } from '@/libs/cms/types/MicroCmsType'
import { type JSX, useEffect, useState } from 'react'
import { BasicButton } from '../Button/BasicButton'
import { Pagination } from '../Pagination'
import styles from './index.module.scss'

export const Posts = () => {
  const [contents, setContents] = useState<PostsType[]>([])
  const [postElement, setPostElement] = useState<JSX.Element[]>([])
  const [isExtended, setExtended] = useState(false)
  const [limit, setLimit] = useState(2)
  const [totalCount, setTotalCount] = useState(0)
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const fetchContents = async () => {
      const data = await fetch(
        `/api/cms/contents?endpoint=works&limit=${limit - postElement.length}&offset=${postElement.length}`
      )
      const json = await data.json()
      const aaa = json.contents.map((post: WorksType) => {
        const replace: PostsType = {
          id: post.id,
          title: post.title,
          date: post.date,
          description: post.description,
          image: post.mainImage,
        }
        return replace
      })
      setContents(aaa)
      setTotalCount(json.totalCount)
    }
    fetchContents()
  }, [limit])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setPostElement([
      ...postElement,
      ...contents.map((post: PostsType, index: number) => (
        <Post
          index={postElement.length + index}
          key={post.id}
          title={post.title}
          id={post.id}
          date={post.date}
          description={post.description}
          image={post.image}
        />
      )),
    ])
  }, [contents])

  return (
    <div className={styles.container}>
      {postElement}
      <BasicButton
        className={`${styles.button} ${isExtended ? styles.extended : ''}`}
        text="もっと見る"
        onClick={() => {
          setLimit(4)
          setExtended(true)
        }}
      />
      <Pagination
        total={totalCount / 2}
        activePages={0}
        onChange={() => {}}
        className={`${isExtended ? '' : styles.extended}`}
      />
    </div>
  )
}
