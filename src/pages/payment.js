import {useState, useEffect} from 'react'
import Script from "next/script";
import Head from "next/head";
import { useRouter } from 'next/router';
import { PaymentForm, Container, Title } from "../components";

const PaymentCourse = ()=>{
  const [course, setCourse] = useState(null)
  const router = useRouter()
  /*useEffect(()=>{
    setCourse(JSON.parse(localStorage.getItem('course')))
    if(!course){
      router.push('/ensenanza/offer')
    }
  },[])*/
  return (
    <>
      <Head>
        <title>Pago</title>
      </Head>
        <Script
          src='https://multicobros.banorte.com/orquestador/lightbox/checkoutV2.js'
          strategy="beforeInteractive"
        />
        <Script
          src='https://multicobros.banorte.com/orquestador/resources/js/jquery-3.3.1.js'
          strategy="beforeInteractive"
        />
      <Container>
        <PaymentForm />
      </Container>
    </>
  )
}

export default PaymentCourse
