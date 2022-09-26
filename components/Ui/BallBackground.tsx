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
        className='w-full h-full absolute bottom-0 left-0 '
      >
        <div className='w-full h-full relative -z-[100]'>
          <div className='absolute w-[300px] h-[300px] left-[40%] top-[30%]  bg-neutral rounded-full'></div>
          <div
            className='absolute w-[200px] h-[200px] right-10 top-[30%] bg-secondary
           rounded-full'
          ></div>
          <div className='absolute top-40 left-10 w-[130px] h-[130px] bg-primary  rounded-full'></div>
          {/* <div className='absolute w-[200px] h-[200px] bottom-20 left-10  bg-primary rounded-xl'></div> */}
        </div>
      </motion.div>
    </>
  )
}

export default BallBackground
