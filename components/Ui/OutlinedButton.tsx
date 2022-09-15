import { motion } from 'framer-motion'

export default function OutlinedButton() {
  return (
    <>
      <div className='text cursor-pointer'>
        <div className='flex border-solid border-2 border-black fill-button p-2 lg:p-3 xl:p-5'>
          <div className='flex text w-full h-full'>Pokreni projekt</div>
        </div>
      </div>
    </>
  )
}
