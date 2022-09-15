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
        className='w-full h-full fixed bottom-0 left-0 -z-1'
      >
        <div className='absolute w-[400px] h-[400px] bottom-0 -left-20  bg-neutral rounded-full'></div>
        <div className='absolute w-[135px] h-[135px] top-[25%] left-96  bg-neutral rounded-full'></div>
        <div className='absolute w-[200px] h-[200px] right-20 top-[50%]  bg-neutral rounded-full'></div>
        <div className='absolute w-[200px] h-[200px] left-20 top-[50%]  bg-neutral rounded-full'></div>
      </motion.div>
    </>
  )
}

export default BallBackground
