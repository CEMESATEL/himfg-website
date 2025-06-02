import styles from './patronato.module.css'
import { Container, Title, PageBanner } from "@/components"
export default function Voluntariado(){
    return (
        <>
            <PageBanner
                title='Patronato'
                banner='https://archivos.him.edu.mx/graficos/home/patronato.webp'
                bannerResponsive='https://archivos.him.edu.mx/graficos/home/patronato.webp'
            />
            <Container>
                <div className={styles.patronatoWrapper}>
                    <p>
                    La Fundación Amigos Históricos del Hospital Infantil de México A.C. (Patronato), es una organización estable del ámbito privado conformada por personas de la sociedad civil, que persiguen un fin común no lucrativo, en este caso, apoyar las acciones y proyectos de: Asistencia Médica, Investigación y Enseñanza del Hospital Infantil de México Federico Gómez.
                    Asimismo, la Fundación se une a los retos diarios del Hospital Infantil de México Federico Gómez, como son: Contar con equipo de vanguardia y otorgar becas de exclusividad, becas a médicos residentes y estancias cortas al área médica, en apoyo a al aprendizaje, conocimiento en nuevas técnicas médicas y de investigación, impulsando y apoyando en todo momento a este Instituto para continuar brindando la mejor atención médica a la población pediátrica.
                    </p>
                    <p>
                    Desde sus inicios ha apoyado a la niñez mexicana, mediante acciones que han logrado allegar recursos extraordinarios para el Hospital. Está conformado por personalidades con gran generosidad, hoy en día conformado por los señores:
                    </p>
                    <ul>
                        <li>Roberto Hernández Ramírez, Presidente</li>
                        <li>Ángel Losada Moreno, Secretario</li>
                        <li>Fausto Costa, Tesorero</li>
                        <li>Sissi Harp Calderoni, Vocal</li>
                        <li>Juan Beckmann Vidal, Vocal</li>
                        <li>Antonio Chedraui Obeso, Vocal</li>
                        <li>Carlos Slim Domit, Vocal</li>
                        <li>Eduardo Tricio Haro, Vocal</li>
                    </ul>
                </div>
            </Container>
        </>
    )
}