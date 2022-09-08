import type { NextPage } from 'next'
import TopBar from '../components/Ui/TopBar'
import Hero from '../components/Sections/Hero'
import { TbArrowNarrowDown } from 'react-icons/tb'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col w-screen h-screen bg-white font-darker'>
      <section className='flex flex-col'>
        <TopBar />
        <Hero />
      
      </section>
    </div>
  )
}

export default Home
