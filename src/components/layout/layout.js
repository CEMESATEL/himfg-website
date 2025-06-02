import Head from "next/head"
import Script from "next/script"
import { Header } from "../../components"

export const Layout = ({children})=>{
    return (
        <>
            <Head>
                
                <link href="https://framework-gb.cdn.gob.mx/gm/accesibilidad/css/gobmx-accesibilidad.min.css" rel="stylesheet" />
            </Head>
            <Header />
            { children }
            <Script src='https://framework-gb.cdn.gob.mx/gm/accesibilidad/js/gobmx-accesibilidad.min.js'/>
        </>
    )
}