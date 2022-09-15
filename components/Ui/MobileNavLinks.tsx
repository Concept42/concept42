import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useAppSelector } from '../../store'
import { hamburgerOpen } from '../../slices/themeSlice'

function MobileNavLinks() {
  const hamburgerIsOpen = useAppSelector(hamburgerOpen)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsOpen(hamburgerIsOpen)
  }, [hamburgerIsOpen])

  return (
    <>
      {isOpen ? (
        <ul className=' flex flex-col w-screen fixed font-Sora font-black text-[30px]  gap-10 h-screen justify-center items-center text-white  md:hidden mt-10 z-[12]'>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.1 }} className='cursor-pointer '>
              Naslovnica
            </motion.li>
          </Link>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.1 }} className='cursor-pointer '>
              O nama
            </motion.li>
          </Link>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.1 }} className='cursor-pointer '>
              Usluge
            </motion.li>
          </Link>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.1 }} className='cursor-pointer '>
              Reference
            </motion.li>
          </Link>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.1 }} className='cursor-pointer '>
              Kontakt
            </motion.li>
          </Link>
        </ul>
      ) : (
        ''
      )}
    </>
  )
}

export default MobileNavLinks
