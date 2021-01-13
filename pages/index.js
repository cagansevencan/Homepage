import Head from 'next/head'
import NextLink from 'next/link'
import NextImage from 'next/image'
import { Container, Link, Text } from '@chakra-ui/react'
import Social from "../components/social";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <Container maxW="2xl">
        <Text fontSize="2xl">
          Hello🖐, I'm Cagan. I currently reside in San Francisco Bay Area . At
          the moment I work part time for{' '}
          <Link as={NextLink} href="http://careusolutions.com/" isExternal>
            <a>CareU</a>
          </Link>{' '}
          as a Full Stack Developer.
        </Text>

        <Social mt={6} spotify/>

      </Container>

      <Container maxW="6xl" mt={20}>
        <NextImage
          src="/yeni2.jpeg"
          alt="Cagan Sevencan"
          width={1433}
          height={1018}
          layout="responsive"
        />
      </Container>
    </>
  )
}
