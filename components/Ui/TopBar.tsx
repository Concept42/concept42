import React from 'react'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Hamburger from './Hamburger'

const TopBar: React.FC = () => {
  return (
    <nav className='flex absolute w-full h-40 items-center justify-around z-[1]'>
      <Image className='' src={logo} height='38' width='269' />
      <ul className='sm:hidden lg:flex gap-10 lg:text-[19px] xl:text-[20px] leading-[33px] text-white  '>
        <Link href='/'>
          <li className='cursor-pointer underline decoration-transparent  transition duration-500 ease-in-out hover:decoration-white underline-offset-8 hover:text-gray-300 '>
            Naslovnica
          </li>
        </Link>
        <Link href='/'>
          <li className='cursor-pointer underline decoration-transparent  transition duration-500 ease-in-out hover:decoration-white underline-offset-8 hover:text-gray-300 '>
            O nama
          </li>
        </Link>
        <Link href='/'>
          <li className='cursor-pointer underline decoration-transparent  transition duration-500 ease-in-out hover:decoration-white underline-offset-8 hover:text-gray-300 '>
            Usluge
          </li>
        </Link>
        <Link href='/'>
          <li className='cursor-pointer underline decoration-transparent  transition duration-500 ease-in-out hover:decoration-white underline-offset-8 hover:text-gray-300 '>
            Reference
          </li>
        </Link>
        <Link href='/'>
          <li className='cursor-pointer underline decoration-transparent  transition duration-500 ease-in-out hover:decoration-white underline-offset-8 hover:text-gray-300 '>
            Kontakt
          </li>
        </Link>
      </ul>
      <Hamburger />
    </nav>
  )
}

export default TopBar
