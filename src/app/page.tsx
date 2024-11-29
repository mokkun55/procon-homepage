import { Header } from '@/components/Header'
import { pageMetadata } from '@/components/metadate'

export const metadata = pageMetadata

const Home = () => {
  return (
    <div className="px-2">
      <Header />
      <div>
        <video autoPlay loop playsInline muted poster="/introduction/topmovie_720p.jpg" className="size-full">
          <source src="/introduction/topmovie_720p.mp4" type="video/mp4" />
        </video>
        <div className="block h-[1000px]"></div>
      </div>
    </div>
  )
}

export default Home
