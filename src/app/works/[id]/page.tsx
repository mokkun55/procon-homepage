import { Tags } from '@/components/features/Tags'
import { getContent } from '@/feature/cms/hooks/MicroCmsContents'
import type { WorksType } from '@/libs/cms/types/MicroCmsType'
import { Image } from '@mantine/core'
import styles from './page.module.scss'

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function page(props: Props) {
  const params = await props.params
  const { id } = params
  const content = (await getContent('works', id)) as WorksType
  return (
    <div className={styles.container}>
      <p className={styles.title}>作品(詳細)</p>
      <div className={styles.contentContainer}>
        <p className={styles.contentTitle}>{content.title}</p>
        <img className={styles.image} src={content.image.url} alt={content.title} width={800} />
        <p className={styles.description}>{content.description}</p>
        <div className={styles.tags}></div>
      </div>
    </div>
  )
}
