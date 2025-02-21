import { Work } from '@/components/features/Work'
import { getContents } from '@/feature/cms/hooks/MicroCmsContents'
import type { WorksType } from '@/libs/cms/types/MicroCmsType'
import { SimpleGrid } from '@mantine/core'
import styles from './page.module.scss'

export default async function Works() {
  const worksContents = (await getContents({ endpoint: 'works', limit: 10 })).contents as WorksType[]

  const worksElement = worksContents.map((work: WorksType) => (
    <Work
      key={work.id}
      title={work.title}
      id={work.id}
      date={work.date}
      mainImage={work.mainImage}
      description={work.description}
      tags={work.tags}
      links={work.links}
    />
  ))

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>作品紹介</h1>
        <p className={styles.description}>画像クリックで詳細ページに移動できます</p>
      </div>

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
    </div>
  )
}
