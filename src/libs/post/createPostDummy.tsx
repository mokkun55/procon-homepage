import { Post } from '@/components/features/Post'
import { Loader } from '@mantine/core'
import styles from './index.module.scss'

export const createDummyPosts = (amount: number) => {
  const dummyElement = []
  for (let i = 0; i < amount; i++) {
    dummyElement.push(
      <Post
        key={i}
        index={i}
        id="Dummy"
        title=""
        date={new Date()}
        image={{
          url: 'testImgs/mock1.png',
          width: 1920,
          height: 1080,
        }}
        description=""
      />
    )
  }
  return <div className={styles.dummy}>{dummyElement}</div>
}

export const createLoadingPosts = (amount: number) => {
  const dummyElement = createDummyPosts(amount)
  return (
    <>
      {dummyElement}
      <Loader className={styles.loader} />
    </>
  )
}
