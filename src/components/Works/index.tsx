'use client'
import { Work } from '@/components/Work'
import { getContentsApi } from '@/feature/cms/hooks/MicroCmsContents'
import type { WorksType } from '@/libs/cms/types/MicroCmsType'
import { Loader, SimpleGrid } from '@mantine/core'
import { type JSX, useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LinkButton } from '../Button/LinkButton'
import styles from './index.module.scss'

type Props = {
  useInfinityScroll?: boolean
  contentsPerPage?: number
  gridCols?: {
    sm?: number
    md?: number
    lg?: number
  }
}

export default function Works({
  contentsPerPage = 9,
  useInfinityScroll = false,
  gridCols = { sm: 1, md: 2, lg: 3 },
}: Props) {
  const [worksElement, setWorksElement] = useState<JSX.Element[]>([])
  const [contents, setContents] = useState<WorksType[]>([])
  const isFirstRender = useRef(true)
  const page = useRef(0)
  const totalCount = useRef(0)

  const loader = (
    <div className={styles.loaderContainer}>
      <Loader />
    </div>
  )

  const loadMore = async () => {
    const newContents = await getContentsApi({
      endpoint: 'works',
      limit: contentsPerPage,
      offset: contentsPerPage * page.current,
    })
    setTimeout(() => {
      setContents(newContents.contents as WorksType[])
    }, 1000) //TODO ダミーのwait 協議
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!isFirstRender.current) return
    const fetchContents = async () => {
      const contents = await getContentsApi({
        endpoint: 'works',
        limit: contentsPerPage,
        offset: 0,
      })
      setContents(contents.contents as WorksType[])
      totalCount.current = contents.totalCount
    }
    isFirstRender.current = false
    fetchContents()
  }, [])

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setWorksElement([
      ...worksElement,
      ...contents.map((content) => {
        return (
          <Work
            id={content.id}
            title={content.title}
            date={content.date}
            mainImage={content.mainImage}
            description={content.description}
            tags={content.tags}
            key={content.id}
          />
        )
      }),
    ])
  }, [contents])

  return (
    <div className={styles.container} id="works">
      <InfiniteScroll
        next={() => {
          if (!useInfinityScroll) return
          page.current++
          loadMore()
        }}
        hasMore={useInfinityScroll ? worksElement.length < totalCount.current : worksElement.length < contentsPerPage}
        dataLength={worksElement.length}
        loader={loader}
      >
        <SimpleGrid cols={gridCols} className={styles.works}>
          {worksElement}
        </SimpleGrid>
      </InfiniteScroll>
      {!useInfinityScroll && worksElement.length >= contentsPerPage ? (
        <div className={styles.buttonContainer}>
          <LinkButton text="もっと見る" link="/works" />
        </div>
      ) : null}
    </div>
  )
}
