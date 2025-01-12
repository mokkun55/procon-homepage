import { Work } from '@/components/features/Work'
import { SimpleGrid } from '@mantine/core'
import styles from './page.module.scss'

export default function Works() {
  return (
    // TODO 後々スケルトンとか表示したいな
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>作品紹介</h1>
        <p className={styles.description}>画像クリックで詳細ページに移動できます</p>
      </div>

      <SimpleGrid cols={3} className={styles.works}>
        <Work
          title={'テスト'}
          date={new Date()}
          img={'/testImgs/chicken.jpg'}
          description={'皆さん今日のお昼ごはんは、何を食べますか？？ 今日は、唐揚げを作りました！'}
          id="work1"
        />
        <Work
          title={'work2'}
          date={new Date()}
          img={'/404/404not-found.png'}
          description={'皆さん今日のお昼ごはんは、何を食べますか？？ 今日は、唐揚げを作りました！ほげほげほげほげほげ'}
          id="work2"
        />
        <Work
          title={'3'}
          date={new Date()}
          img={'/404/404not-found.png'}
          description={'皆さん今日のお昼ごはんは、何を食べますか？？ 今日は、唐揚げを作りました！'}
          id="work3"
        />
        <Work
          title={'4'}
          date={new Date()}
          img={'/404/404not-found.png'}
          description={'皆さん今日のお昼ごはんは、何を食べますか？？ 今日は、唐揚げを作りました！'}
          id="work4"
        />
      </SimpleGrid>
    </div>
  )
}
