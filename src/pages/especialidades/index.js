import Link from 'next/link'
import styles from './especialidades.module.css'
import { Container, PageBanner } from "@/components"
export default function Especialidades() {
    const especialidades = [
        {
            name: 'Reumatolgía',
            link: 'direccion/departamento-de-medicina-interna'
        },
        {
            name: 'Alergia e Inmunología',
            link: 'direccion/alergia-e-inmunologia-clinica'
        },
        {
            name: 'Audiología y Foniatria',
            link: 'direccion/departamento-de-audiologia-y-foniatria'
        },
        {
            name: 'Cardiología',
            link: 'direccion/departamento-de-cardiologia'
        },
        {
            name: 'Dermatología',
            link: 'direccion/departamento-de-dermatologia'
        },
        {
            name: 'Endocrinología',
            link: 'direccion/departamento-de-endocrinologia'
        },
        {
            name: 'Gastroenterología y Nutrición',
            link: 'direccion/gastroenterologia-y-nutricion'
        },
        {
            name: 'Genética',
            link: 'direccion/genetica-y-genomica'
        },
        {
            name: 'Hematología',
            link: 'direccion/departamento-de-hematologia'
        },
        {
            name: 'Infectología',
            link: 'direccion/departamento-de-infectologia'
        },
        {
            name: 'Psiquiatría Psicología y medicina del adolescente',
            link: 'direccion/psiquiatria-y-medicina-del-adolescente'
        },
        {
            name: 'Nefrología',
            link: 'direccion/departamento-de-nefrologia'
        },
        {
            name: 'Neonatología',
            link: 'direccion/departamento-de-neonatologia'
        },
        {
            name: 'Neumología',
            link: 'direccion/departamento-de-neumologia'
        },
        {
            name: 'Neurología',
            link: 'direccion/departamento-de-neurologia'
        },
        {
            name: 'Oncología',
            link: 'direccion/departamento-de-hemato-oncologia'
        },
        {
            name: 'Rehabilitación',
            link: 'direccion/departamento-de-rehabilitacion'
        },
        {
            name: 'CLINDI',
            link: 'direccion/clindi'
        },
        {
            name: 'Cirugía de Tórax',
            link: 'direccion/cirugia-cardiovascular-torax-y-endoscopia'
        },
        {
            name: 'Cirugía Anorrectal',
            link: 'direccion/clinica-colorrectal'
        },
        {
            name: 'Cirugía Cardiovascular',
            link: 'direccion/cirugia-cardiovascular'
        },
        {
            name: 'Cirugía General',
            link: 'direccion/cirugia-general'
        },
        {
            name: 'Cirugía Plástica',
            link: 'direccion/cirugia-plastica'
        },
        {
            name: 'Cuidados Paliativos',
            link: 'direccion/cuidados-paleativos-y-calidad-de-vida'
        },
        {
            name: 'Odontopediatría',
            link: 'direccion/departamento-de-estomatologia'
        },
        {
            name: 'Ortodoncia',
            link: 'direccion/departamento-de-ortodoncia'
        },
        {
            name: 'Cirugía maxilofacial',
            link: 'direccion/cirugia-maxilofacial'
        },
        {
            name: 'Neurocirugía',
            link: 'direccion/departamento-de-neurocirugia'
        },
        {
            name: 'Oftalmología',
            link: 'direccion/oftalmologia'
        },
        {
            name: 'Ortopedia',
            link: 'direccion/departamento-de-ortopedia'
        },
        {
            name: 'Otorrinolaringología',
            link: 'direccion/otorrinolaringologia'
        },
        {
            name: 'Urología',
            link: 'direccion/departamento-de-urologia'
        },
        {
            name: 'Medicina del Dolor y Anestesia',
            link: 'direccion/anestesia-y-algologia'
        },
        {
            name: 'Pediatría del Desarrollo',
            link: 'direccion/pediatria-del-desarrollo'
        }
    ]
    return (
        <>
            <PageBanner
                title='Especialidades'
                banner='https://himfg.edu.mx/archivos/graficos/home/especialidades.webp'
                bannerResponsive='https://himfg.edu.mx/archivos/graficos/home/especialidades.webp'
            />
            <Container>
                <div className={styles.expecialidadesWrapper}>
                    <ul className={styles.especialidadesGrid}>
                        {
                            especialidades.map((esp, i) => (
                                <li key={i}>
                                    <Link href={`${esp.link}`}>
                                        {esp.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
        </>
    )
}