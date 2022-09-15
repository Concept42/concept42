import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { motion } from 'framer-motion'

function ScrollDown() {
  return (
    <div className='flex w-full h-full flex-col absolute text-black text-[50px] justify-center items-center top-[40%] z-[-1] '>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className='flex -mb-10 '
      >
        <MdKeyboardArrowDown />
      </motion.div>
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className='flex -mb-6 '
      >
        <MdKeyboardArrowDown />
      </motion.div>
      <motion.div
        className='flex '
        initial={{ opacity: 0.7 }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <MdKeyboardArrowDown />
      </motion.div>
    </div>
  )
}

export default ScrollDown
