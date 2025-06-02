'use client'
import axios from "axios";
import { useFetch } from "@/hooks";
import { useRouter } from "next/router";
import { Container, GridContainer, Title, Investigador } from "@/components";
export default function () {
    const router = useRouter()
    const [loading, data] = useFetch({
        url: `${process.env.BASE_URL_API}api/directions/all-investigators/${router.query.id}`
    })
    return (
        <Container>
            <Title>{/*!data || !data.data ? null : `${data.data[0].laboratorio_nombre} - Investigadores`*/}</Title>
            {
                /*!data && loading ? null :
                    <GridContainer>
                        {
                            !data ? null :
                                data.data.map((e, index) => (
                                    <Investigador
                                        key={index}
                                        investigador={e}
                                    />
                                ))
                        }
                    </GridContainer>*/
            }
        </Container>
    )
}
/*export const getStaticPaths = async () => {
    const response = await axios.get(`${process.env.BASE_URL_API}api/directions/all-investigators`)
    const json = response.data
    const paths = json.filter((e) => e.laboratorio_id)
        .map((e) => {
            return {
                params: {
                    id: `${e.laboratorio_id}`,
                }
            }
        })
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({ params }) => {
    const id = params.id ?? ''
    const response = await axios.get(
        `${process.env.BASE_URL_API}api/directions/all-investigators`
    )
    const data = response.data
    return {
        props: {
            data,
            id
        }
    }
}*/