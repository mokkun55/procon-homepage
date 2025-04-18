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
      {props.mainImage && <img className={styles.img} src={props.mainImage.url} alt={props.id} />}
      <div className={styles.textContainer}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.title}>{props.title}</p>
      </div>
    </Link>
  )
}
