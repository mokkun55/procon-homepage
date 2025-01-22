'use client'

import type { PostsType } from '@/libs/cms/types/MicroCmsType'
import dayjs from 'dayjs'
import Link from 'next/link'
import styles from './index.module.scss'

type Props = {
  index: number
} & PostsType

export const Post = (props: Props) => {
  const containerStyle = props.index === 0 ? styles.firstPost : styles.Post
  const formattedDate = dayjs(props.date).format('YYYY/MM/DD')
  return (
    <Link className={`${styles.container} ${containerStyle}`} href={`/posts/${props.id}`}>
      <img className={styles.img} src={props.image.url} alt={props.id} />
      <div className={styles.textContainer}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </Link>
  )
}
