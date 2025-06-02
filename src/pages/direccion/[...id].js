import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import axios from "axios"
import {
    TextsPage,
    Loader,
    PagePortrait,
    LoaderPageContent,
    Container,
    Courses,
    Staff,
    PageBanner,
    EducativeOffer,
    Formats,
    HemeroOptions,
    FileList,
    Lititations,
    Convocatorias,
    Anuarios,
    Title
} from "@/components"
import Head from "next/head"

export default function Direction() {
    const id = useRouter()
    let filteredPage
    const [page, setPage] = useState(null)
    const [allPages, setAllPages] = useState([])
    const [loading, setLoading] = useState(true)
    const getLinks = async () => {
        try {
            const pages = await axios.get(`${process.env.BASE_URL_API}api/directions/all-directions`)
            if (pages.status === 200) {
                setLoading(false)
            }
            if (pages.data) {
                setAllPages(pages.data)
                filteredPage = pages.data.filter((page) => page.page_url === id.query.id[0])
                setPage(filteredPage)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getLinks()
    }, [])
    /*useEffect(() => {
        const handleRouteChange = () => {
          id.reload(document.location.reload())
        }
        id.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          id.events.off('routeChangeComplete', handleRouteChange)
        }
      },[id])*/
    return (
        <>
            {
                !loading ?
                    <>
                        {
                            !page ? null
                                :
                                allPages.filter((page) => page.page_url === id.query.id[0])
                                    .map((page) => (
                                        <>
                                            <Head>
                                                <title>HIMFG - {page.page_title}</title>
                                                <link
                                                    rel="icon"
                                                    href='https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp'
                                                    sizes="any"
                                                />
                                            </Head>
                                            {
                                                /*page.page_url==='educacion-medica-continua' || page.page_url==='educacion-medica-continua/'?
                                                <PageBanner
                                                 title={page.page_title}
                                                 banner={page.page_banner_image}
                                                 bannerResponsive={page.banner_image_responsive}
                                                 textLeft={!page.page_left_text ? false : true}
                                                 bannerLink='https://oferta-academica.himfg.edu.mx/'
                                                 bannerLinkTitle='Revisa nuestra oferta académica'
                                                >
                                                 <p>{page.page_banner_content}</p>
                                                </PageBanner>
                                                :
                                                <PageBanner
                                                 title={page.page_title}
                                                 banner={page.page_banner_image}
                                                 bannerResponsive={page.banner_image_responsive}
                                                 textLeft={!page.page_left_text ? false : true}
                                                 >
                                                     <p>{page.page_banner_content}</p>
                                                 </PageBanner>*/
                                            }
                                            {
                                                /*
                                                    <TextsPage
                                                    firstText={page.page_first_content}
                                                    secondText={page.page_second_content}
                                                    firstImage={page.page_first_image}
                                                    secondImage={page.page_second_image}
                                                    />
                                                */
                                            }
                                            <>
                                                {/*<Title>{page.page_title}</Title>*/}
                                                {
                                                    /*!page.page_titular ? null
                                                        :
                                                        <PagePortrait
                                                            image={page.page_titular_photo}
                                                            titular={page.page_titular}
                                                            titularGrade={page.page_titular_grade}
                                                        />
                                                        */
                                                }
                                                {

                                                    /*<TextsPage
                                                        page={page}
                                                    />*/

                                                }
                                                <TextsPage
                                                    page={page}
                                                />
                                            </>

                                            {
                                                /*page.page_url==='educacion-medica-continua' || page.page_url==='educacion-medica-continua/'?
                                                <Container>
                                                    <Courses/>
                                                </Container>
                                                :
                                                null*/
                                            }
                                            {
                                                page.page_url === 'pre-y-posgrado' || page.page_url === 'pre-y-posgrado/' ?
                                                    <Container>
                                                        <EducativeOffer />
                                                    </Container>
                                                    :
                                                    null
                                            }
                                            {
                                                page.page_url === 'bioestadistica-y-archivo-clinico' || page.page_url === 'bioestadistica-y-archivo-clinico/' ?
                                                    <>
                                                        <Anuarios />
                                                    </>
                                                    :
                                                    null
                                            }
                                            {
                                                page.page_url === 'investigacion' || page.page_url === 'investigacion/' ?
                                                    <Container>
                                                        <Convocatorias />
                                                        {/*<Formats/>*/}
                                                    </Container>
                                                    :
                                                    null
                                            }
                                            {
                                                page.page_url === 'hemerobiblioteca' || page.page_url === 'hemerobiblioteca/' ?
                                                    <Container>
                                                        <HemeroOptions />
                                                    </Container>
                                                    :
                                                    null
                                            }
                                            {
                                                page.page_url === 'subdireccion-recursos-financieros' || page.page_url === '/subdireccion-recursos-financieros' ?
                                                    <Container>
                                                        <FileList />
                                                    </Container>
                                                    :
                                                    null
                                            }
                                            {
                                                page.page_url === 'administracion' || page.page_url === '/administracion' ?
                                                    <Container>
                                                        <Lititations />
                                                    </Container>
                                                    :
                                                    null
                                            }
                                            {
                                                /*!page.page_staff ? null :
                                                    <>
                                                        <Staff
                                                            list={JSON.parse(page.page_staff)}
                                                        />
                                                    </>*/
                                            }
                                        </>
                                    ))
                        }
                    </>
                    :
                    <LoaderPageContent />
            }
        </>
    )
}

export const getStaticPaths = async () => {
    const response = await fetch(`${process.env.BASE_URL_API}api/directions/all-directions`)
    const json = await response.json()
    const paths = json.map((direction) => {
        return {
            params: {
                id: [
                    `${direction.page_url}`,
                ],
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const videoId = params.id ?? ''
    const config = {
        headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
    }
    const response = await fetch(
        `https://api.vimeo.com/me/folders/${videoId[1]}/videos`,
        config
    )
    const data = await response.json()
    return {
        props: {
            data: data,
            title: videoId[0] || null,
            liveVideoId: videoId[2] ? videoId[2] : null
        }
    }
}