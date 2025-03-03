import { Carousel } from '@/components/Carousel'
import { Link } from '@/components/features/Link'
import { Tags } from '@/components/features/Tags'
import { getContent } from '@/feature/cms/hooks/MicroCmsContents'
import type { WorksType } from '@/libs/cms/types/MicroCmsType'
import type { Metadata } from 'next'
import styles from './page.module.scss'

type Props = {
  params: Promise<{
    id: string
  }>
}

//TODO 二回使ってるしコンポ化したい もっくんよろしくおやすみ
type Params = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params
  const content = (await getContent({ endpoint: 'works', id: id })) as WorksType

  return {
    openGraph: {
      siteName: '近大高専プロコン部',
      title: `作品 : ${content.title}`,
      description: content.description,
      images: [
        {
          url: content.mainImage.url,
          width: content.mainImage.width,
          height: content.mainImage.height,
        },
      ],
    },
  }
}

export default async function page(props: Props) {
  const params = await props.params
  const { id } = params
  const content = (await getContent({ endpoint: 'works', id: id })) as WorksType

  return (
    <div className={styles.container}>
      <p className={styles.title}>作品(詳細)</p>
      <div className={styles.contentContainer}>
        <p className={styles.contentTitle}>{content.title}</p>
        <Carousel
          images={[content.mainImage.url, ...(content.subImage ? content.subImage.map((image) => image.url) : [])]}
        />
        <p className={styles.description}>{content.description}</p>
        {content.links && content.links.length !== 0 ? (
          <div className={styles.links}>
            {content.links.map((link) => (
              <Link key={link.url} symbol={link.symbol} url={link.url} />
            ))}
          </div>
        ) : null}
        <div className={styles.tags}>
          {content.tags.map((tag) => (
            <Tags key={tag} text={tag} />
          ))}
        </div>
      </div>
    </div>
  )
}
