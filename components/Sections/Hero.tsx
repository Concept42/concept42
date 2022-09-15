import Image from 'next/image'
import { useState, useEffect } from 'react'
import OutlinedButton from '../Ui/OutlinedButton'
import { motion, MotionValue, useMotionValue, useTransform } from 'framer-motion'
import BallBackground from '../Ui/BallBackground'
import GlowingBall from '../Ui/GlowingBall'
import ScrollDown from '../Ui/ScrollDown'

const Hero: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  })

  return (
    <>
      <div className='flex  sm:flex-col lg:flex-row relative w-screen h-screen items-center z-20'>
        <BallBackground positionX={position.x} positionY={position.y} />
        <div className='flex sm:flex-col w-[50%] h-[50%] xl:w-full xl:h-full lg:px-20 justify-center items-center font-Sora text-black font-semibold'>
          <div className='flex flex-col gap-10  px-10 md:items-start'>
            <h1 className='text-[30px] lg:text-[70px] xl:text-[80px] xl:leading-[86px] '>
              Lorem ipsum <br />
              dolor sit.
            </h1>
            <h2 className=' text-[15px] lg:text-[16px] xl:text-[20px] mb-5 font-normal '>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, doloribus.
            </h2>
            <div className='flex'>
              <OutlinedButton />
            </div>
          </div>
        </div>
        <div className='flex w-[70%] justify-start md:w-full md:h-full md:justify-center'>
          <Image src={require('../../assets/Illustration.svg')} alt='' />
        </div>
        <ScrollDown />
      </div>
    </>
  )
}

export default Hero
