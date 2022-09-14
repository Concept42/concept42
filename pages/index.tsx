import type { NextPage } from 'next'
import TopBar from '../components/Ui/TopBar'
import Hero from '../components/Sections/Hero'
import Cursor from '../components/util/Cursor'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col w-screen h-screen bg-white font-Sora cursor-none'>
      <Cursor />
      <section className='flex flex-col'>
        <TopBar />
        <Hero />
      </section>
    </div>
  )
}

export default Home
