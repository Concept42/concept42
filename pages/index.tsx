import type { NextPage } from 'next'
import TopBar from '../components/Ui/TopBar'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col w-screen h-screen bg-white font-poppins'>
      <section>
        <TopBar />
      </section>
    </div>
  )
}

export default Home
