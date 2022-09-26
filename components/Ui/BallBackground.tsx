import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

interface Props {
  positionX: number
  positionY: number
}

function BallBackground(props: Props) {
  return (
    <>
      <motion.div
        animate={{ x: props.positionX / 50, y: props.positionY / 50 }}
        className='w-full h-full absolute bottom-0 left-0 -z-1'
      >
        <div className='w-full h-full relative'>
          <div className='absolute w-[400px] h-[400px] bottom-0    bg-neutral rounded-full'></div>
          <div className='absolute w-[200px] h-[200px] right-10 top-[50%] bg-neutral rounded-full'></div>
          <div className='absolute top-0 w-[130px] h-[130px] bg-neutral  rounded-full'></div>
          <div className='absolute w-[200px] h-[200px] top-[50%] left-10  bg-neutral rounded-full'></div>
        </div>
      </motion.div>
    </>
  )
}

export default BallBackground
