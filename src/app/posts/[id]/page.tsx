import { getContent } from '@/feature/cms/hooks/MicroCmsContents'
import type { PostsType } from '@/libs/cms/types/MicroCmsType'
import dayjs from 'dayjs'
import ReactHtmlParser, {} from 'react-html-parser'
import styles from './page.module.scss'

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function page(props: Props) {
  const params = await props.params
  const { id } = params
  const content = (await getContent({ endpoint: 'posts', id: id })) as PostsType
  const formattedDate = dayjs(content.date).format('YYYY/MM/DD')

  return (
    <div className={styles.container}>
      <p className={styles.title}>{content.title}</p>
      <div className={styles.contentContainer}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.contentTitle}>{content.description}</p>
        <img className={styles.image} src={content.mainImage.url} alt={content.title} />
        <div className={styles.content}>{ReactHtmlParser(content.content)}</div>
      </div>
    </div>
  )
}
