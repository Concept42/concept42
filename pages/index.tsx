import type { NextPage } from 'next'
import TopBar from '../components/Ui/TopBar'
import Hero from '../components/Sections/Hero'
import Cursor from '../components/util/Cursor'
import Intro from '../components/Sections/Intro'
import NavModal from '../components/Ui/NavModal'

const Home: NextPage = () => {
  return (
    <>
      <Cursor />
      <NavModal />
      <div className='flex flex-col w-screen h-screen bg-white font-Sora cursor-none'>
        <TopBar />
        {/* <Hero /> */}
      </div>
    </>
  )
}

export default Home
