import React, { useState, useEffect } from 'react'
import Hamburger from './Hamburger'
import { useAppSelector } from '../../store'
import { hamburgerOpen } from '../../slices/themeSlice'
import { motion } from 'framer-motion'
import NavLinks from './NavLinks'
import { useScroll } from '../../hooks/useScroll'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const TopBar: React.FC = () => {
  const hamburgerIsOpen = useAppSelector(hamburgerOpen)
  const [isOpen, setIsOpen] = useState(false)
  const scrollPosition = useScroll()

  useEffect(() => {
    setIsOpen(hamburgerIsOpen)
  }, [hamburgerIsOpen])

  return (
    <>
      <nav
        className={classNames(
          scrollPosition > 100 ? 'bg-white shadow h-20 ' : 'h-40',
          'transition-all duration-500 flex sticky top-0 w-full  justify-around items-center z-50 -mt-40 ',
        )}
      >
        <h1 className={!isOpen ? 'flex font-black text-black text-[36px]' : 'flex font-black text-white text-[36px]'}>
          CONCEPT 42
        </h1>
        <div className='flex justify-around items-center'>
          <Hamburger />
          <NavLinks />
        </div>
      </nav>
    </>
  )
}

export default TopBar
