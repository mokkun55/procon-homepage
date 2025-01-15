import { pageMetadata } from '@/components/metadata'

export const metadata = pageMetadata
import { Section } from '@/components/features/Section'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <video autoPlay loop playsInline muted poster="/introduction/topMovie_720p.jpg" className={styles.video}>
          <source src="/introduction/topMovie_720p.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.contentContainer}>
        <Section sectionType="bottomLine" text="部活紹介">
          <Section sectionType="leftLine" text="概要"></Section>
        </Section>
      </div>
    </div>
  )
}

export default Home
