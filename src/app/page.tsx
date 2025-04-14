import { Carousel } from '@/components/Carousel'
import { Posts } from '@/components/features/Posts'
import { Section } from '@/components/features/Section'
import Works from '@/components/features/Works'
import styles from './index.module.scss'

const Home = async () => {
  return (
    <div className={styles.container}>
      {/* メイン画像(スライドショー) */}
      <div>
        {/* TODO 画像は仮置き */}
        <Carousel images={['/images/top-carousel-1.png', '/images/top-carousel-2.png']} isAutoplay />
      </div>
      <div className={styles.contentContainer}>
        {/* お知らせ一覧 */}
        <Section sectionType="bottomLine" text="お知らせ">
          <Posts />
        </Section>

        {/* 部活紹介 */}
        <Section sectionType="bottomLine" text="部活紹介">
          <Section sectionType="leftLine" text="概要">
            <p>
              プログラミング技術部は、ものづくりが好きなメンバーが集まり、自由な発想でプログラムを作成しています。
              初心者から経験者まで、誰でも楽しめる環境を提供しています。
            </p>
          </Section>
          <Section sectionType="leftLine" text="活動内容">
            <ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
              <li>Web開発：学校紹介サイトや部活管理システムの開発</li>
              <li>アプリ制作：便利なツールアプリやゲームの制作</li>
              <li>イベントへの参加：プログラミングコンテストやハッカソンへの参加</li>
              <li>文化祭 : 文化祭では部員の作品を展示しています</li>
            </ul>
          </Section>
          <Section sectionType="leftLine" text="作品紹介">
            <Works contentsPerPage={3} gridCols={{ sm: 1, md: 3 }} />
          </Section>
          {/* TODO 最近の作品３つくらい置きたい */}
          <Section sectionType="leftLine" text="活動時間・場所">
            <ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
              <li>活動時間：月・金の放課後 7限目~9限</li>
              <li>活動場所：3号館3階 CAI教室</li>
              <img src="images/map.png" alt="地図" />
            </ul>
          </Section>
          <Section sectionType="leftLine" text="PC持参について">
            <p>
              プログラミング技術部では、開発作業を行うために<span style={{ fontWeight: 700 }}>ノートPCの持参</span>
              を推奨しています。
              学校のPCも利用可能ですが、自分の環境で作業を進めることで、より効率的に学ぶことができます。
            </p>
          </Section>
          <Section sectionType="leftLine" text="部員募集中">
            <p>現在、新入部員を募集中です！興味がある人はぜひ気軽に見学に来てください。</p>
          </Section>
        </Section>
      </div>
    </div>
  )
}

export default Home
