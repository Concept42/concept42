import React from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'

const Test: NextPage = () => {
  return (
    <div className='flex fixed w-screen h-screen z-[9999999] bg-black '>
      <div className='flex w-screen h-screen justify-center items-center'>
        <svg className='flex fixed w-[1300px] h-[300px] ' xmlns='http://www.w3.org/2000/svg'>
          <motion.path
            d='M0,0 H1300,0 M1300,0 v300,0 M1300,300 l -1300,0 M1300,300 M0,300 v -300,0 '
            stroke='white'
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5 }}
          />
        </svg>
        <motion.h1
          className='flex  font-Sora text-bold text-white text-[150px] '
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          CONCEPT 42
        </motion.h1>
      </div>
    </div>
  )
}

export default Test
