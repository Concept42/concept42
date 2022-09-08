import { motion } from 'framer-motion'
import { TbArrowNarrowDown } from 'react-icons/tb'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <>
      <div className='flex  gap-14 absolute w-screen h-screen justify-around items-center z-10'>
        <motion.div
          animate={{ translateY: [0, -50, 0] }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          className='flex flex-col gap-2 items-center absolute bottom-20 cursor-pointer'
        >
          <TbArrowNarrowDown size={70} color='white' />
          <p>SCROLL DOWN</p>
        </motion.div>
        <div className='flex flex-col gap-10'>
          {' '}
          <h1 className='text-white text-[86px] font-medium leading-[100px]'>
            Lorem ipsum dolor <br></br>
            sit amet consectetur.
          </h1>
          <div className='flex justify-start'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className='text-white w-36 h-16 border-solid border-2 hover:bg-black'
            >
              Krenimo
            </motion.button>
          </div>
        </div>
        <div></div>
      </div>
      <div className=' top-0 w-screen h-screen justify-center items-center'>
        <video className=' w-screen h-screen object-cover' src={require('../../assets/videoBg.mp4')} autoPlay loop />
      </div>
    </>
  )
}

export default Hero
