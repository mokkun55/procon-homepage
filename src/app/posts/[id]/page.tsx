import { getContent } from '@/feature/cms/hooks/MicroCmsContents'
import type { PostsType } from '@/libs/cms/types/MicroCmsType'
import dayjs from 'dayjs'
import parser, { type DOMNode, type Element } from 'html-react-parser'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styles from './page.module.scss'

type Props = {
  params: Promise<{
    id: string
  }>
}

type CmsElement = DOMNode &
  Element & {
    data: string
  }

export default async function page(props: Props) {
  const params = await props.params
  const { id } = params
  const content = (await getContent({ endpoint: 'posts', id: id })) as PostsType
  const formattedDate = dayjs(content.date).format('YYYY/MM/DD')
  const parsedContent = parser(content.content, {
    replace: (domNode) => {
      const dom = domNode as CmsElement
      if (dom.tagName !== 'pre') return domNode
      const codeTag = dom.children[0] as CmsElement
      const code = (codeTag.children[0] as CmsElement).data
      const language = codeTag.attribs.class.replace('language-', '')
      const parentTag = dom.parent as CmsElement
      const fileNameAttribute = parentTag.attributes.find((attr) => attr.name === 'data-filename')
      if (!fileNameAttribute)
        return (
          <div className={styles.codeContainer}>
            <SyntaxHighlighter language={language} style={monokai}>
              {code}
            </SyntaxHighlighter>
          </div>
        )
      const fileName = fileNameAttribute.value
      return (
        <div className={styles.codeContainer}>
          <div className={styles.fileNameContainer}>
            <span className={styles.fileName}>{fileName}</span>
          </div>
          <div className={styles.code}>
            <SyntaxHighlighter language={language} style={monokai} showLineNumbers>
              {/* TODO この文字列の長さで来ると全然バグる */}
              {/* {code} */}
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </SyntaxHighlighter>
          </div>
        </div>
      )
    },
  })

  return (
    <div className={styles.container}>
      <p className={styles.title}>{content.title}</p>
      <div className={styles.contentContainer}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.contentTitle}>{content.description}</p>
        <img className={styles.image} src={content.mainImage.url} alt={content.title} />
        <div className={styles.content}>{parsedContent}</div>
      </div>
    </div>
  )
}
