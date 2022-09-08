import React from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const TopBar: React.FC = () => {
  return (
    <>
      <div className='absolute bg-black opacity-50 w-full h-full '></div>
      <nav className='flex sticky top-0 w-full h-40 items-center justify-around z-50 -mt-40'>
        <Image className='' src={logo} height='38' width='269' />
        <ul className='sm:hidden lg:flex gap-10 lg:text-[19px] xl:text-[20px] leading-[33px] text-white  '>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.5 }} className='cursor-pointer '>
              Naslovnica
            </motion.li>
          </Link>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.5 }} className='cursor-pointer '>
              O nama
            </motion.li>
          </Link>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.5 }} className='cursor-pointer '>
              Usluge
            </motion.li>
          </Link>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.5 }} className='cursor-pointer '>
              Reference
            </motion.li>
          </Link>
          <Link href='/'>
            <motion.li whileHover={{ scale: 1.5 }} className='cursor-pointer '>
              Kontakt
            </motion.li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default TopBar
