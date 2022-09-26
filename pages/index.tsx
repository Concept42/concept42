import type { NextPage } from 'next'
import TopBar from '../components/Ui/TopBar'
import Hero from '../components/Sections/Hero'
import Services from '../components/Sections/Services'
import Cursor from '../components/util/Cursor'
import NavModal from '../components/Ui/NavModal'

const Home: NextPage = () => {
  return (
    <>
      <div className='hidden md:flex '> {/* <Cursor /> */}</div>

      <div className='flex flex-col w-full h-full bg-white font-Sora  '>
        <TopBar />
        <NavModal />
        <Hero />
        <Services />
      </div>
    </>
  )
}

export default Home
