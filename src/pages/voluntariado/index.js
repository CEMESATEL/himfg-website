import styles from './voluntariado.module.css'
import { Container, Title, PageBanner } from "@/components"
export default function Voluntariado(){
    return (
        <>
            <PageBanner
                title='Voluntariado'
                banner='https://archivos.him.edu.mx/graficos/voluntariado/BANNER.webp'
                bannerResponsive='https://archivos.him.edu.mx/graficos/voluntariado/BANNER.webp'
            />
            <Container>
                <div className={styles.voluntierWrapper}>
                    <p>
                        El Voluntariado del Hospital Infantil de México Federico Gómez fue fundado en 1943, año en que se abrieron las puertas de esta institución a los servicios públicos, constituyendo la primera manifestación de servicios voluntarios organizados que tuvo lugar en México.
                    </p>
                    <p>
                        Este primer voluntariado lo integraba un grupo de señoras, en su mayoría esposas de médicos del Hospital, encabezadas por la señora Ana Munguía de Gómez y la señorita Carmen Gómez Siegler, jefe de enfermeras en esa época. Este primer equipo voluntario contó con la asesoría del Dr. Federico Gómez Santos, director del hospital, hombre visionario que sabía que además de la ciencia, el hospital necesitaría un ambiente de cariño y confianza. El 29 de septiembre de 1943 fue firmada el Acta Constitutiva.
                    </p>
                    <p>
                        A través de los años, el trabajo del grupo voluntario ha cobrado gran relevancia y prestigio dentro del hospital; sus funciones se han ampliado, incluso en la organización de los festejos en las fechas significativas como los Días del Niño, de las Madres, del Padre, Navidad, Reyes, etc. A lo largo de todo este tiempo, el H. Cuerpo de Voluntarios "Ana Munguía de Gómez" ha contribuido generosamente al engrandecimiento del hospital.
                    </p>
                    <p>
                        Todas las voluntarias y voluntarios participan activamente en proyectos derivados de los sueños de pacientes, personal o de los mismos voluntarios, los cuales se concretan en una sola finalidad: la concreción de un México más cercano, más nuestro y siempre solidario.
                    </p>
                </div>
            </Container>
        </>
    )
}