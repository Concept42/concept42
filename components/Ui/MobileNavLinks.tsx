import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function MobileNavLinks() {
  return (
    <ul className='flex flex-col w-screen absolute font-Sora font-black text-[50px]  gap-10 h-screen justify-center items-center text-white  md:hidden '>
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

export default MobileNavLinks
