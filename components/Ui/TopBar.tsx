import React from 'react'
import logo from '../../assets/Logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TopBar: React.FC = () => {
  return (
    <>
      <nav className='flex sticky top-0 w-full h-40 items-center justify-around z-50 -mt-40'>
        <Image className='' src={logo} height='30' width='212' />
        <ul className='sm:hidden lg:flex gap-10 lg:text-[16px] xl:text-[18px] leading-[33px] text-white  '>
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
