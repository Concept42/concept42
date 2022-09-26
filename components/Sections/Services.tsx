import React from 'react'
import SimpleCard from '../Ui/SimpleCard'
import Image from 'next/image'

function Services() {
  return (
    <>
      <div className='grid grid-flow-col grid-cols-2 w-full h-full  px-96 pb-40'>
        <div className='flex flex-col justify-start items-start w-full h-full gap-40 '>
          <SimpleCard
            bold
            titleSize='text-5xl'
            subtitle='NAŠE USLUGE'
            title='Što Mi Radimo'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed necessitatibus, recusandae placeat ut facere enim vitae repellendus voluptatibus earum.'
          />
          <SimpleCard
            subtitle='WEB DIZAJN'
            title='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
            description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed necessitatibus, recusandae placeat ut facere enim vitae repellendus voluptatibus earum.'
            button
            buttonText='Pogledaj više'
          />
        </div>
        <div className='flex flex-col justify-end items-center w-full h-full '>
          <Image src={require('../../assets/Software Developer.svg')} alt='services' width={600} />
        </div>
      </div>
      <div className='grid grid-flow-col grid-cols-2 w-full h-full px-96 '>
        <div className='flex justify-start items-center w-full h-full '>
          <Image src={require('../../assets/Software Developer.svg')} alt='services' width={600} />
        </div>
        <div className='flex justify-center items-center w-full h-full  '>
          <div>
            <SimpleCard
              subtitle='WEB DIZAJN'
              title='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
              description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed necessitatibus, recusandae placeat ut facere enim vitae repellendus voluptatibus earum.'
              button
              buttonText='Pogledaj više'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
