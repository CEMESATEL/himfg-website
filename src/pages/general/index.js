import {
    Container,
    Page,
    FileListModal,
    Staff
} from '../../components'
import { FaBook } from "react-icons/fa"
import {
    informeAutoevaluacion,
    programaInstitucional,
    informeAvanceResultados,
    informeAvanceResultados2022,
    informeAvanceResultados2023_4,
    planAnual,
    list
} from './consts'
import styles from '../../components/FileList/filelist.module.css'

const General = () => {
    return (
        <>
            <Page>
                <center>
                    <h3>
                        Adrián Chávez López
                    </h3>
                    <h4>(Director General)</h4>
                    <br />
                </center>
                <p>
                    Soy mexicano por nacimiento.
                </p>
                <p>
                    Mi máximo orgullo es mi familia, Elena, mi esposa y Fabián Emiliano, mi hijo.
                </p>
                <p>
                    Mis valores son la honestidad, la lealtad, el espíritu de servicio, el trabajo en equipo y la equidad.
                </p>
                <p>
                    Este es mi historial académico:
                </p>
                <p>
                    Licenciatura en Medicina en la Facultad de Medicina de la Universidad Nacional Autónoma de México, 1988.
                </p>
                <p>
                    Especialidad en Pediatría Médica, Hospital Infantil de México Federico Gómez, División Estudios Posgrado, Facultad de Medicina Universidad Nacional Autónoma de México, 1991. Subespecialidad en Medicina Crítica Pediátrica, HIMFG, SSA, División de Estudios de Posgrado, Facultad de Medicina Universidad Nacional Autónoma de México, 1991.
                </p>
                <p>
                    Desde 1993 trabajé como médico adscrito al Departamento de Terapia Intensiva Pediátrica del Hospital Infantil de México Federico Gómez. Fui Jefe de Servicio del mismo Departamento de 1993 a 1996. A partir de junio de 1996 y hasta enero 13 de 2024 ocupe el cargo de Jefe de Departamento.
                </p>
                <p>
                    El 13 de enero del 2024 fui designado Director General del Hospital Infantil de México Federico Gómez por Junta de Gobierno de nuestro hospital.
                </p>
                <p>
                    Tengo el privilegio de haber sido Profesor de Pediatría Médica (pre grado) y Pediatría y de Medicina Crítica Pediátrica (pos grado) en los Programas de la Facultad de Medicina de la Universidad Nacional Autónoma de México. Igualmente, por decisión de mis pares, fui el Presidente Fundador de la Sección de Medicina Crítica Pediátrica del Consejo Mexicano de Certificación en Pediatría A.C.
                </p>
                <p>
                    He trabajado en muchos lados, pero el único que me ha enamorado es el “Infantil”, donde he colaborado por 35 años ya; durante este tiempo participé en el desarrollo, consolidación y éxito de nuestro servicio, “La Terapia”, que ya desde hace muchos años ha sido la mejor de México, reconocida en América Latina y el mundo.
                </p>
                <p>
                    Junto con un grupo de colegas, amigos, desarrolle el Proyecto Estratégico Institucional para el periodo 2024 – 2029, este contiene centenares de años de experiencia y vivencias, necesarias y suficientes para proponer una nueva ruta de desarrollo que todos, juntos, vamos a implementar.
                </p>
                <p>
                    El objetivo del Proyecto es establecer un sistema de gestión hospitalaria horizontal, basado en procesos estandarizados y procedimientos específicos para cada área sustantiva del instituto, cuyas metas son garantizar: a) la atención, seguridad y satisfacción de los usuarios, b) el bienestar, seguridad y desarrollo del personal, c) la sustentabilidad social, administrativa y financiera del instituto, y d) la productividad institucional.
                </p>
            </Page>
            <Container>
                <div className={`flexContainer ${styles.fileListGrid}`}>
                    {
                        /*
                            <FileListModal
                                icon={<FaBook />}
                                title='Programa institucional HIMFG'
                                filelist={programaInstitucional}
                            />
                        */
                    }
                    <FileListModal
                        icon={<FaBook />}
                        title='Plan quinquenal 2024-2028'
                    >
                        <span>Plan quinquenal 2024-2028</span>
                        <br />
                        <p>Analicé, desarrollé y afiné mi visión sobre el proyecto a cinco años. Está dirigido hacia ser un líder en la atención médica pediátrica con calidad y eficiencia, gestionar recursos financieros suficientes, promover la investigación, actualizar la enseñanza y mejorar en lo posibles al personal.</p>
                        <br />
                        <p>Cuando pienso en el futuro, pienso en conducir a un hospital que cualquiera de nosotros buscaría para el cuidado de nuestra familia, es decir que: </p>
                        <ul>
                            <li>1. Mantener una excelente atención médica aun en tiempos de pandemia para que el paciente viva la mejor experiencia posible y se obtengan los mejores resultados clínicos. </li>
                            <li>2. El personal que labora tenga la mayor satisfacción factible. </li>
                            <li>3. Que se cuente con procesos eficientes en todas las áreas. </li>
                            <li>4. Se tengan recursos económicos óptimos. </li>
                            <li><a href='https://www.himfg.edu.mx/general/PPTChavez.pdf'>Descargar documento</a></li>
                        </ul>
                    </FileListModal>
                    <FileListModal
                        icon={<FaBook />}
                        title='Plan Anual de Trabajo 2024'
                        filelist={planAnual}
                    />
                    <FileListModal
                        icon={<FaBook />}
                        title='Informe de Avance y Resultados 2021'
                        filelist={informeAvanceResultados}
                    />
                    <FileListModal
                        icon={<FaBook />}
                        title='Informe de Avance y Resultados 2022'
                        filelist={informeAvanceResultados2022}
                    />
                    <FileListModal
                        icon={<FaBook />}
                        title='Informe de Avance y Resultados 2023 - 2024'
                        filelist={informeAvanceResultados2023_4}
                    />
                </div>
            </Container>
            <Staff list={list} />
        </>
    )
}

export default General