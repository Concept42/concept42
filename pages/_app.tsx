import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Intro from '../components/Sections/Intro'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      {/* <Intro /> */}
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
