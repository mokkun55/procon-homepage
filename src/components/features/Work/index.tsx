'use client'

import { Card } from '@mantine/core'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import styles from './index.module.scss'

type Props = {
  id: string
  title: string
  date: Date
  img: string
  description: string
}

export const Work = ({ title, date, img, description, id }: Props) => {
  const formattedDate = dayjs(date).format('YYYY/MM/DD')
  const router = useRouter()
  return (
    <Card withBorder className={styles.container} onClick={() => router.push(`/works/${id}`)}>
      <div className={styles.cardTop}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{formattedDate}</p>
      </div>
      <img src={img} alt={title} />
      <div className={styles.cardBottom}>
        <p>{description}</p>
      </div>
    </Card>
  )
}
