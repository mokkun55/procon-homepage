'use client'

import type { WorksType } from '@/libs/cms/types/MicroCmsType'
import { Card } from '@mantine/core'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import styles from './index.module.scss'

export const Work = ({ title, date, mainImage, description, id }: WorksType) => {
  const formattedDate = dayjs(date).format('YYYY/MM/DD')
  const router = useRouter()
  return (
    <Card withBorder className={styles.container} onClick={() => router.push(`/works/${id}`)}>
      <div className={styles.cardTop}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{formattedDate}</p>
      </div>
      <img src={mainImage.url} alt={title} />
      <div className={styles.cardBottom}>
        <p>{description}</p>
      </div>
    </Card>
  )
}
