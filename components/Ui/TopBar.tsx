import React, { useState } from 'react'
import Hamburger from './Hamburger'

import Link from 'next/link'
import { motion } from 'framer-motion'

const TopBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className='flex sticky top-0 w-full h-40 justify-around items-center z-50 -mt-40 '>
        <h1 className='flex font-black text-black text-[36px]'>CONCEPT 42</h1>
        <div className='flex justify-around items-center'>
          <Hamburger />
          <ul className=' hidden md:flex w-full h-full lg:flex gap-10 lg:text-[16px] xl:text-[18px]  text-black justify-center items-center font-Sora font-regular  '>
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
        </div>
      </nav>
    </>
  )
}

export default TopBar
