import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

function ButtonPrimary({ children }: Props) {
  return (
    <div className='cursor-pointer border-solid border-2 w-fit h-fit px-6 py-4 rounded-full shadow-md shadow-slate-100 transition-all duration-300 border-primary text-primary hover:bg-primary hover:text-white'>
      {children}
    </div>
  )
}

export default ButtonPrimary
