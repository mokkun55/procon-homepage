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
          title={'work1'}
          date={new Date()}
          img={'/testImgs/procon1.jpg'}
          description={
            'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。'
          }
          id="work1"
        />
        <Work
          title={'work2'}
          date={new Date()}
          img={'/testImgs/procon2.jpg'}
          description={'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。'}
          id="work2"
        />
        <Work
          title={'work3'}
          date={new Date()}
          img={'/testImgs/procon3.jpg'}
          description={
            'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。'
          }
          id="work3"
        />
        <Work
          title={'work4'}
          date={new Date()}
          img={'/testImgs/procon4.jpg'}
          description={'この文章はダミーです。'}
          id="work4"
        />
        <Work
          title={'work5'}
          date={new Date()}
          img={'/testImgs/procon5.jpg'}
          description={'この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。'}
          id="work5"
        />
        <Work
          title={'からあげ'}
          date={new Date()}
          img={'/testImgs/chicken.jpg'}
          description={'皆さん今日のお昼ごはんは、何を食べますか？？ 今日は、唐揚げを作りました！ほげほげほげほげほげ'}
          id="chicken"
        />
      </SimpleGrid>
    </div>
  )
}
