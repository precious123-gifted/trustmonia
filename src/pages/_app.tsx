import '@/styles/globals.css'
import { M_PLUS_1 } from 'next/font/google'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
