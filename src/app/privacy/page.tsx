import { Section } from '@/components/features/Section'
import type { ReactNode } from 'react'
import styles from './style.module.scss'

const Page = (): ReactNode => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>利用規約等</h1>
      <Section text="プライバシーポリシー" sectionType="leftLine">
        <p className={styles.text}>
          本ウェブサイトでは、アクセス状況の把握やサイト改善のために、
          <a href="https://vercel.com/docs/analytics/privacy-policy" className={styles.link}>
            Vercel Analytics
          </a>
          を利用しています。
          このツールにより、訪問者のIPアドレス、閲覧時間、閲覧ページなどの情報が自動的に収集される場合があります。
          <br />
          これらのデータは匿名化されており、個人を特定する目的では使用されません。
          収集した情報は、サイトの利用状況を分析し、今後の改善や運営に活用するために使用します。
          <br />
          また、これらの情報は第三者に提供されることはありません。
        </p>
      </Section>

      <Section text="サイトポリシー" sectionType="leftLine">
        <p className={styles.text}>
          本サイトに掲載されている文章・画像・プログラムなどのコンテンツの著作権は、プログラミング技術部または各制作者に帰属します。
          無断での転載・再利用・改変などはご遠慮ください。
          本サイトから外部サイトへのリンクが含まれている場合、それらのサイトの内容やセキュリティに関して当部では責任を負いかねます。
          掲載情報には万全を期しておりますが、内容に誤りがあった場合でも一切の責任を負いません。あらかじめご了承ください。
        </p>
      </Section>

      <Section text="お問い合わせ" sectionType="leftLine">
        <p className={styles.text}>
          内容に関するご質問・ご要望がありましたら、
          {/* TODO 後で要望フォームにリンクする */}
          <a href="/" className={styles.link}>
            お問い合わせフォーム
          </a>
          を通じてご連絡ください。
        </p>
      </Section>
    </div>
  )
}

export default Page
