import { Carousel } from '@/components/Carousel'
import { Tags } from '@/components/features/Tags'
import styles from './page.module.scss'

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function page(props: Props) {
  const params = await props.params
  const { id } = params
  return (
    <div className={styles.container}>
      <p>{id}</p>
      <div className={styles.tags}>
        <Tags text="React.js" />
        <Tags text="Next.js" />
        <Tags text="TypeScript" />
      </div>
      <Carousel
        height={300}
        images={[
          '/testImgs/procon1.jpg',
          '/testImgs/procon2.jpg',
          '/testImgs/procon3.jpg',
          '/testImgs/procon4.jpg',
          '/testImgs/procon5.jpg',
        ]}
      />
    </div>
  )
}
