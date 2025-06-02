import { Title } from "../title/title"
import { Container } from "../container/container"
export const Mision = () => {
    return (
        <>
            <Container>
                <Title>Misión</Title>
                <p className="flexContainer" style={{lineHeight: '40px'}}>
                    El Hospital Infantil de México Federico Gómez es el medio efector del Estado Mexicano que da certeza al principio bioético de protección a salud de los ciudadanos más vulnerables, los niños, mediante medicina basada en evidencia e investigación traslacional.
                </p>
            </Container>
            <Container>
                <Title>Visión</Title>
                <p className="flexContainer" style={{lineHeight: '40px'}}>
                    Ser en el mediano plazo el primer modelo de atención pediátrica cuaternario del sistema sanitario nacional, señalado exclusivamente, como vértice del sistema, para la resolución de problemas de salud de alta complejidad, enseñanza e investigación, a través de atención centrada en las necesidades de los usuarios y en un ambiente de “Cero Daño” en un marco de equidad, inclusión y de respeto absoluto a la dignidad y autonomía de las personas.
                </p>
            </Container>
        </>
    )
}