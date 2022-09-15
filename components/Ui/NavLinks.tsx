import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function NavLinks() {
  return (
    <ul className=' hidden md:flex w-full h-full lg:flex gap-10 lg:text-[16px] xl:text-[18px]  text-black justify-center items-center font-Sora font-regular z-50  '>
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
  )
}

export default NavLinks
