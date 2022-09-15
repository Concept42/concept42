import React, { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store'
import { setHamburgerOpen, hamburgerOpen } from '../../slices/themeSlice'
import { motion } from 'framer-motion'
import MobileNavLinks from './MobileNavLinks'

function NavModal() {
  const hamburgerIsOpen = useAppSelector(hamburgerOpen)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsOpen(hamburgerIsOpen)
  }, [hamburgerIsOpen])

  return (
    <>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, backgroundColor: 'none' }}
          animate={isOpen ? { opacity: 1, backgroundColor: 'black' } : ''}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='flex fixed w-screen h-screen '
        ></motion.div>
      ) : (
        ''
      )}
      <MobileNavLinks />
    </>
  )
}
export default NavModal
