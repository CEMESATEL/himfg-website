import Link from 'next/link'
import { Title } from '@/components'
import styles from './styles.module.css'

export default function Convocatoria(){
   return (
    <>
        <nav className={styles.menu}>
        <ul className={styles.menuList}>
            <li>
                <Link href='/convocatoria/avisos'>
                    Avisos
                </Link>
            </li>
            <li>
                <a
                    href='https://himfg.edu.mx/convocatoria/CONVOCATORIA_2024.pdf'
                    target='_blank'
                >
                    Convocatoria PDF
                </a>
            </li>
            <li>
                <Link href='/convocatoria/registro'>
                    Registro en línea
                </Link>
            </li>
            <li>
                <a
                    href='https://himfg.edu.mx/convocatoria/flujograma.pdf'
                    target='_blank'
                >
                    Flujograma
                </a>
            </li>
            <li>
                <Link href='/convocatoria/descargas'>
                    Descargas
                </Link>
            </li>
            <li>
                <Link href='/convocatoria/preguntas-frecuentes'>
                    Preguntas frecuentes
                </Link>
            </li>
            <li>
                <Link href='/convocatoria/informes'>
                    Informes
                </Link>
            </li>
        </ul>
        </nav>
        <section className={styles.photoWrapper}>
            <figure>
                <img src='https://himfg.edu.mx/convocatoria/convocatoria24.jpg'/>
            </figure>
            <Title>CONVOCATORIA PARA ASPIRANTES A CURSOS DE ESPECIALIZACIÓN 2025</Title>
            <center><h1>BIENVENIDA</h1></center>
            <br/>
            <br/>
            <div className={styles.textWrapper}>
                <p>
                    El Instituto Nacional de Salud Hospital Infantil de México Federico Gómez (INSHIMFG) -fundado en 1943- fue el primer Instituto Nacional de Salud en México y desde entonces se ha mantenido a la vanguardia nacional e internacional de la atención, formación e investigación pediátrica. 
                </p>
                <p>
                    Parte fundamental de la misión del Hospital es formar a los mejores Pediatras y Especialistas en las ramas Pediátricas de la Medicina. La familia de egresados del HIMFG se caracteriza por un excelente nivel académico y por una atención médica con calidad y calidez. Cada año egresan más de 100 especialistas de la Institución, no sólo mexicanos sino de diversos países, lo cual hace que la influencia del Hospital en la Pediatría trascienda sus fronteras. 
                </p>
                <p>
                    En el HIMFG estarás en contacto y aprendiendo directamente de los niños con patología compleja, guiado por médicos que son pioneros nacionales en sus áreas, tanto quirúrgicas como clínicas; de esta manera participarás en la recuperación de la salud de los pacientes más desprotegidos de nuestro país. 
                </p>
                <p>
                    Además, la institución cuenta con tecnología de punta para la atención de los padecimientos más complejos que requieren de manejo especializado. Durante tú formación podrás convivir con más de 80 investigadores del Sistema Nacional de Investigadores (SNI) quienes generan conocimiento con impacto a nivel nacional e internacional de los problemas prioritarios de salud que enfrenta nuestro país y tú tendrás la oportunidad de involucrarte directamente en estas actividades. 
                </p>
                <p>
                    Contamos con 4 cursos de posgrado de ramas troncales y de entrada directa, así como 22 especialidades pediátricas y más de 20 de Alta Especialidad, teniendo la posibilidad de realizar la maestría o el doctorado en investigación de manera paralela. Es importante mencionarte que todos los cursos de especialidad médica tienen aval universitario (UNAM). ¡Te damos la bienvenida y esperamos que pronto seas parte de la gran familia INSHIMFG!
                </p>
                <p>Atentamente</p>
                <p>Dr. Adrián Chávez López</p>
                <p>Director General de INSHIMFG</p>
            </div>
        </section>
    </>
   ) 
}