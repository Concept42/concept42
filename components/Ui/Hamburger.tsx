import { useState } from 'react'

const Hamburger: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const firstLine = 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out'
  const firstLineActive = 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out'
  const secondLine = 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out'
  const thirdLine = 'block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out'

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div>
      <button onClick={handleOpen} className='flex w-full h-full j text-black'>
        <div className='block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {open ? (
            <>
              {' '}
              <span className={firstLine}></span>
              <span className={secondLine}></span>
              <span className={thirdLine}></span>
            </>
          ) : (
            <>
              <span className={firstLineActive}></span>
              <span className={secondLine}></span>
              <span className={thirdLine}></span>
            </>
          )}
        </div>
      </button>
    </div>
  )
}

export default Hamburger
