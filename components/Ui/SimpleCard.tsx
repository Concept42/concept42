import React from 'react'
import ButtonPrimary from './ButtonPrimary'

interface Props {
  subtitle: string
  title: string
  description: string
  titleSize?: string
  bold?: boolean
  button?: boolean
  buttonText?: string
}

function SimpleCard({ subtitle, buttonText, title, description, titleSize, bold, button }: Props) {
  return (
    <>
      <div className='flex flex-col w-full h-full gap-8 pr-[30%]'>
        <h2 className='font-bold tracking-widest text-sm text-secondary '>{subtitle}</h2>
        <h1 className={` ${bold ? 'font-black' : 'font-bold'} ${titleSize ? titleSize : 'text-3xl'} text-text`}>
          {title}
        </h1>
        <p className='font-normal text-lg text-text'>{description}</p>
        {button && <ButtonPrimary>{buttonText}</ButtonPrimary>}
      </div>
    </>
  )
}

export default SimpleCard
