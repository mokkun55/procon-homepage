'use client'
import { Work } from '@/components/features/Work'
import { getContentsApi } from '@/feature/cms/hooks/MicroCmsContents'
import type { WorksType } from '@/libs/cms/types/MicroCmsType'
import { Loader, SimpleGrid } from '@mantine/core'
import { type JSX, useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import styles from './page.module.scss'

export default function Works() {
  const CONTENTS_PER_PAGE = 9
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
      limit: CONTENTS_PER_PAGE,
      offset: CONTENTS_PER_PAGE * page.current,
    })
    setTimeout(() => {
      setContents(newContents.contents as WorksType[])
    }, 1000) //TODO ダミーのwait 協議
  }

  useEffect(() => {
    if (!isFirstRender.current) return
    const fetchContents = async () => {
      const contents = await getContentsApi({
        endpoint: 'works',
        limit: CONTENTS_PER_PAGE,
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
      <div className={styles.header}>
        <h1 className={styles.title}>作品紹介</h1>
        <p className={styles.description}>画像クリックで詳細ページに移動できます</p>
      </div>
      <InfiniteScroll
        next={() => {
          console.log('next')
          page.current++
          loadMore()
        }}
        hasMore={worksElement.length < totalCount.current}
        dataLength={worksElement.length}
        loader={loader}
      >
        <SimpleGrid
          cols={{
            sm: 1,
            md: 2,
            lg: 3,
          }}
          className={styles.works}
        >
          {worksElement}
        </SimpleGrid>
      </InfiniteScroll>
    </div>
  )
}
