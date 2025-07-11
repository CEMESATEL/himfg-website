import Head from 'next/head'
import Script from 'next/script'
import {
  Container,
  Jumbotron,
  MenuOptions,
  Mision,
  PrincipalAds,
  Privacity,
  Sipot
} from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>HIMFG - INICIO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp" />
        
      </Head>
      <Jumbotron />
      <Container>
        <MenuOptions />
      </Container>
      <Container>
        <PrincipalAds />
      </Container>
      <Mision />
      <Container>
        <Privacity />
        <Sipot />
      </Container>
    </>
  )
}
