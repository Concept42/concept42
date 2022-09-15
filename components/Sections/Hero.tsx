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
    console.log(position)
  })

  return (
    <>
      {/* <div className='absolute w-full h-full z-0'>
        <Image src={require('../../assets/blob-haikei.svg')} alt='' />
      </div> */}

      <div className='flex relative w-screen h-screen items-center z-20'>
        <BallBackground positionX={position.x} positionY={position.y} />
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
        <ScrollDown />
      </div>
    </>
  )
}

export default Hero
