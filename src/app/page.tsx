import { Header } from '@/components/Header'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div>
        <video autoPlay loop playsInline muted poster="/introduction/topmovie_720p.jpg" className={styles.video}>
          <source src="/introduction/topmovie_720p.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        仮置きテキスト Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam incidunt expedita inventore
        maxime minus, molestiae similique rem sapiente voluptatibus perferendis? Accusantium excepturi voluptatum natus
        dolor animi praesentium asperiores? Libero at, placeat maxime autem unde incidunt nisi blanditiis odio impedit
        similique iure saepe accusantium cupiditate. Eligendi qui facere est dolor excepturi iusto itaque velit beatae
        quo, facilis exercitationem, ex unde ab officiis voluptate ipsum voluptatem ullam? Quos ut beatae voluptas
        facilis quasi, ducimus et sapiente! Unde exercitationem fugiat velit eveniet ipsum! Aspernatur nam rerum impedit
        similique cumque possimus totam itaque. Architecto et fugit nulla enim distinctio hic? Esse alias ducimus
        corrupti eveniet ex culpa voluptas blanditiis explicabo necessitatibus commodi quisquam nostrum atque odit
        repellat temporibus aperiam ad neque facilis quibusdam, dolorum laudantium quasi ipsa error. Ipsum praesentium
        facere corporis, deleniti error iure quibusdam. Cupiditate beatae dignissimos non vero voluptatum asperiores,
        molestias excepturi quasi debitis alias corrupti incidunt odit, laborum blanditiis perferendis sapiente
        voluptate voluptates, placeat perspiciatis explicabo ullam quas quam sint? Libero ipsum ex magnam, non soluta
        commodi corporis veniam rem distinctio totam enim itaque illum, at, ea accusamus odio vel. Quas quibusdam
        dignissimos a fugit! Error, deleniti eveniet. Sint quaerat temporibus modi molestias nisi doloribus doloremque
        quam non. Repudiandae, est.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam incidunt expedita
        inventore maxime minus, molestiae similique rem sapiente voluptatibus perferendis? Accusantium excepturi
        voluptatum natus dolor animi praesentium asperiores? Libero at, placeat maxime autem unde incidunt nisi
        blanditiis odio impedit similique iure saepe accusantium cupiditate. Eligendi qui facere est dolor excepturi
        iusto itaque velit beatae quo, facilis exercitationem, ex unde ab officiis voluptate ipsum voluptatem ullam?
        Quos ut beatae voluptas facilis quasi, ducimus et sapiente! Unde exercitationem fugiat velit eveniet ipsum!
        Aspernatur nam rerum impedit similique cumque possimus totam itaque. Architecto et fugit nulla enim distinctio
        hic? Esse alias ducimus corrupti eveniet ex culpa voluptas blanditiis explicabo necessitatibus commodi quisquam
        nostrum atque odit repellat temporibus aperiam ad neque facilis quibusdam, dolorum laudantium quasi ipsa error.
        Ipsum praesentium facere corporis, deleniti error iure quibusdam. Cupiditate beatae dignissimos non vero
        voluptatum asperiores, molestias excepturi quasi debitis alias corrupti incidunt odit, laborum blanditiis
        perferendis sapiente voluptate voluptates, placeat perspiciatis explicabo ullam quas quam sint? Libero ipsum ex
        magnam, non soluta commodi corporis veniam rem distinctio totam enim itaque illum, at, ea accusamus odio vel.
        Quas quibusdam dignissimos a fugit! Error, deleniti eveniet. Sint quaerat temporibus modi molestias nisi
        doloribus doloremque quam non. Repudiandae, est.
      </div>
    </div>
  )
}

export default Home
