import React, { useState } from 'react'
import Hamburger from './Hamburger'

import Link from 'next/link'
import { motion } from 'framer-motion'

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className='flex sticky top-0 w-full h-40 justify-around items-center z-50 -mt-40 '>
        <div className='flex w-full h-full sm:justify-around justify-between items-center'>
          <h1 className='flex font-black text-black text-[36px]'>CONCEPT 42</h1>
          <Hamburger />
        </div>

        <ul className='flex sm:hidden w-full h-full lg:flex gap-10 lg:text-[16px] xl:text-[18px]  text-black justify-center items-center font-Sora font-regular  '>
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
      </nav>
    </>
  )
}

export default TopBar
