import { Card, Image } from '@mantine/core'
// import styles from './index.module.scss'

type Props = {
  title: string
  date: Date
  img: string
  description: string
}

export const Work = ({ title, date, img, description }: Props) => {
  return (
    <div>
      <Card shadow="sm">
        <Card.Section>alice</Card.Section>
      </Card>
    </div>
  )
}
