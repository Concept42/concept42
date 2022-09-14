import { motion } from 'framer-motion'
import Image from 'next/image'
import { TbArrowNarrowDown } from 'react-icons/tb'
import PC from '../../assets/PC.png'
import OutlinedButton from '../Ui/OutlinedButton'

const Hero: React.FC = () => {
  return (
    <>
      {/* <div className='absolute w-full h-full z-0'>
        <Image src={require('../../assets/blob-haikei.svg')} alt='' />
      </div> */}
      <div className='flex  w-screen h-screen items-center z-20'>
        <div className='flex flex-col  w-full h-full justify-center items-center font-Sora text-black font-semibold'>
          <div className='flex flex-col justify-center'>
            <h1 className=' text-[80px] leading-[86px] '>
              Lorem ipsum <br />
              dolor sit.
            </h1>
            <h2 className=' text-[20px] mb-5 font-normal '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, doloribus.
            </h2>
            <div className='flex'>
              <OutlinedButton />
            </div>
          </div>
        </div>

        <div className='flex  w-full h-full justify-center'>
          <Image src={require('../../assets/Illustration.svg')} alt='' />
        </div>
      </div>
    </>
  )
}

export default Hero
