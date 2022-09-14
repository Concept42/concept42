import { motion } from 'framer-motion'

export default function OutlinedButton() {
  return (
    <>
      <div className='text'>
        <div className='flex border-solid border-2 border-black fill-button p-5'>
          <div className='flex text w-full h-full'>Pokreni projekt</div>
        </div>
      </div>
    </>
  )
}
