import '../styles/globals.css'
import Head from 'next/head'
import theme from '../theme'
import { ChakraProvider, CSSReset } from "@chakra-ui/react"


function MyApp({ Component, pageProps }) {
  return (
      <>
        <ChakraProvider theme={theme}>
            <CSSReset/>
            <Component {...pageProps} />
        </ChakraProvider>
      </>
  )
}

export default MyApp
