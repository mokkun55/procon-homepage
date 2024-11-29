import { Header } from '@/components/Header'
import { SideBar } from '@/components/SideBar'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-2 grid grid-cols-2">
        <SideBar className="w-1/4" />
        <div className="w-3/4">
          <video autoPlay loop playsInline muted poster="/introduction/topmovie_720p.jpg" className="size-full">
            <source src="/introduction/topmovie_720p.mp4" type="video/mp4" />
          </video>
          <div className="block h-[1000px]"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
