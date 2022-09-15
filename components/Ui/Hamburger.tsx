import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Hamburger() {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen)
    console.log(isOpen)
  }
  useEffect(() => {
    handleClick()
  }, [])

  return (
    <>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, backgroundColor: 'none' }}
          animate={isOpen ? { opacity: 1, backgroundColor: 'black' } : ''}
          className='flex absolute w-screen h-screen justify-center items-center'
        ></motion.div>
      ) : (
        ''
      )}
      <motion.div onClick={handleClick} className='block md:hidden cursor-pointer z-[2]'>
        <motion.div
          initial={{ translateY: 0, rotate: 0, backgroundColor: 'black' }}
          animate={isOpen ? { translateY: 12, rotate: 45, backgroundColor: 'white' } : ''}
          className='block w-10 h-1 my-2 bg-black'
        ></motion.div>
        <motion.div
          initial={{ translateY: 0, opacity: 1, backgroundColor: 'black' }}
          animate={isOpen ? { opacity: 0, backgroundColor: 'white' } : ''}
          className='block w-10 h-1 my-2 bg-black'
        ></motion.div>
        <motion.div
          initial={{ translateY: 0, rotate: 0, backgroundColor: 'black' }}
          animate={isOpen ? { translateY: -12, rotate: -45, backgroundColor: 'white' } : ''}
          className='block w-10 h-1 my-2 bg-black'
        ></motion.div>
      </motion.div>
    </>
  )
}

export default Hamburger
