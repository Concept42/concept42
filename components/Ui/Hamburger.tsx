import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store'
import { setHamburgerOpen, hamburgerOpen } from '../../slices/themeSlice'
import { motion } from 'framer-motion'

function Hamburger() {
  const hamburgerIsOpen = useAppSelector(hamburgerOpen)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(setHamburgerOpen())
    console.log(isOpen)
  }

  useEffect(() => {
    setIsOpen(hamburgerIsOpen)
  }, [hamburgerIsOpen])

  return (
    <>
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
