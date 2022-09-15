import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Intro() {
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsDone(true), 6000)
  })

  return (
    <>
      {!isDone ? (
        <div>
          <motion.div
            initial={{ backgroundColor: 'black', opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className='flex fixed w-screen h-screen z-[9999999] justify-center items-center'
          >
            <div className='flex w-screen h-screen justify-center items-center'>
              <svg
                className='flex fixed w-[433px] h-[100px]  md:w-[1300px] md:h-[300px] '
                xmlns='http://www.w3.org/2000/svg'
              >
                <motion.path
                  d='M0,0 H1300,0 M1300,0 v300,0 M1300,300 l -1300,0 M1300,300 M0,300 v -300,0 '
                  stroke='white'
                  strokeWidth={2}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 5, ease: 'easeInOut' }}
                />
              </svg>
              <motion.h1
                className='text-[50px] flex  font-Sora text-bold text-white md:text-[150px] '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                CONCEPT 42
              </motion.h1>
            </div>
          </motion.div>
          <div className='flex fixed w-full h-full z-[999999]'>
            <motion.div
              initial={{ backgroundColor: 'black', y: 0 }}
              animate={{ x: '-100vw' }}
              transition={{ delay: 3, duration: 1 }}
              className='flex   w-[50%] h-screen  justify-end items-center'
            ></motion.div>
            <motion.div
              initial={{ backgroundColor: 'black', y: 0 }}
              animate={{ x: '100vw' }}
              transition={{ delay: 3, duration: 1 }}
              className='flex  w-[50%] h-screen  justify-start items-center'
            ></motion.div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Intro
