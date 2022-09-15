import type { NextPage } from 'next'
import TopBar from '../components/Ui/TopBar'
import Hero from '../components/Sections/Hero'
import Cursor from '../components/util/Cursor'
import Intro from '../components/Sections/Intro'
import NavModal from '../components/Ui/NavModal'

const Home: NextPage = () => {
  return (
    <>
      <div className='hidden md:flex '>
        {' '}
        <Cursor />
      </div>

      <div className='flex flex-col w-screen h-screen bg-white font-Sora '>
        <TopBar />
        <NavModal />

        <Hero />
      </div>
    </>
  )
}

export default Home
