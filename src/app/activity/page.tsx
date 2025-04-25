import { Section } from '@/components/Section'
import { SectionSplit } from '@/components/SectionSplit'
import styles from './page.module.scss'

export default function Activity() {
  return (
    <div className={styles.container}>
      <h1 className={styles.topTitle}>活動日及び活動場所</h1>

      <Section text="活動時間" sectionType="leftLine">
        <p>毎週月・金曜日 7限目~9限目</p>
      </Section>

      <Section text="活動場所" sectionType="leftLine">
        <p>3号館 3階 CAI教室</p>
        <img src="images/map.png" className={styles.mapImg} width={500} alt="CAI教室までの地図" />
        {/* なにかよさげな画像あれば追加する */}
      </Section>

      <Section text="PC持参について" sectionType="leftLine">
        <p>
          プログラミング技術部では、開発作業を行うために<span style={{ fontWeight: 700 }}>ノートPCの持参</span>
          を推奨しています。 学校のPCも利用可能ですが、自分の環境で作業を進めることで、より効率的に学ぶことができます。
        </p>
      </Section>

      <Section text="部員募集中!!" sectionType="leftLine">
        <p>
          現在、新入部員を募集中です！興味がある人はぜひ気軽に見学に来てください。
          <a
            className={styles.link}
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-wrODcSGHWsLW0sk4jDu3VhKOKIdkG8eIrMB8Bl9eMLoHLA/viewform"
          >
            こちら
          </a>
          から見学申し込みができます。
        </p>
      </Section>

      <SectionSplit text="部員向け" marginBottom="24px" />

      <Section text="部室の鍵の借り方" sectionType="leftLine">
        <p>
          教務部にCIA教室の鍵があるので教務部に行き鍵を借りる。
          <br />
          借りる時・返す時にSlackに連絡する
        </p>
      </Section>
    </div>
  )
}
