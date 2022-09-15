import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Intro from '../components/Sections/Intro'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [intro, setIntro] = useState(false)

  useEffect(() => {}, [])

  return (
    <div>
      {/* <Intro /> */}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
