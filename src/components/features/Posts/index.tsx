'use client'
import { getContentsApi } from '@/feature/cms/hooks/MicroCmsContents'
import type { PostsType, WorksType } from '@/libs/cms/types/MicroCmsType'
import { type JSX, useEffect, useState } from 'react'
import { BasicButton } from '../Button/BasicButton'
import { Pagination } from '../Pagination'
import { Post } from '../Post'
import styles from './index.module.scss'

export const Posts = () => {
  const [contents, setContents] = useState<PostsType[]>([])
  const [postElement, setPostElement] = useState(new Map<number, JSX.Element[]>())
  const [page, setPage] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [isExtended, setExtended] = useState(false)
  // useEffect(() => {
  //   //TODO ページ遷移してから戻る再に２回実行されるの防ぐため。改善策募集
  //   if (!isFirst.current) return
  //   const fetchContents = async () => {
  //     const contents = await getContentsApi({ endpoint: 'works', limit: 2 })
  //     setTotalCount(contents.totalCount)
  //     const convertedContents = (contents.contents as WorksType[]).map((content: WorksType) => convertContents(content))
  //     setContents(convertedContents)
  //   }
  //   fetchContents()
  //   isFirst.current = false

  //   return () => {
  //     setContents([])
  //     setPostElement([])
  //     setTotalCount(0)
  //     setExtended(false)
  //   }
  // }, [])

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
          image={content.image}
          description={content.description}
        />
      )
    })
    postElement.set(page, element)
    setPostElement(new Map(postElement))
  }, [contents])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const fetchContents = async () => {
      const contents = await getContentsApi({ endpoint: 'works', limit: 4, offset: page * 4 })
      const json = contents.contents as WorksType[]
      if (totalCount === 0) setTotalCount(contents.totalCount)
      const convertedContents = json.map((content: WorksType) => convertContents(content))
      setContents(convertedContents)
    }
    if (!postElement.has(page) || postElement.get(page)?.length === 0) fetchContents()
  }, [page])

  const convertContents = (contents: WorksType): PostsType => {
    const convertedContents: PostsType = {
      id: contents.id,
      title: contents.title,
      date: contents.date,
      image: contents.mainImage,
      description: contents.description,
    }
    return convertedContents
  }

  return (
    <div className={styles.container}>
      {postElement.get(page)}
      <BasicButton
        className={`${styles.button} ${isExtended ? styles.extended : ''}`}
        text="もっと見る"
        onClick={() => {
          setExtended(true)
        }}
      />
      <Pagination
        total={totalCount / 4}
        activePages={page + 1}
        onChange={(page) => {
          setPage(page - 1)
        }}
        className={`${styles.pagination} ${isExtended ? '' : styles.extended}`}
      />
    </div>
  )
}
