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
      <BallBackground positionX={position.x} positionY={position.y} />
      <div className='flex flex-col md:flex-row gap-10 w-screen h-screen justify-center items-center z-10 '>
        <div className=''>
          <div className='flex flex-col gap-5 md:gap-10  px-10 md:items-start text-black '>
            <h1 className='text-[50px] lg:text-[70px] xl:text-[80px] xl:leading-[86px] '>
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
        <div className='flex '>
          <Image src={require('../../assets/Illustration.svg')} alt='' />
        </div>
      </div>
    </>
  )
}

export default Hero
