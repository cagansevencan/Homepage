import '../styles/globals.css'
import Head from 'next/head'
import theme from '../theme'
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import Header from "../components/header";


function MyApp({ Component, pageProps }) {
  return (
      <>
        <ChakraProvider theme={theme}>
            <CSSReset/>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Header/>
            <main>
            <Component {...pageProps} />
            </main>
        </ChakraProvider>
      </>
  )
}

export default MyApp
