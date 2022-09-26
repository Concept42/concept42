import { useState, useEffect } from 'react'

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  })
  return scrollPosition
}