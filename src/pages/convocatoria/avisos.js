import Link from 'next/link'
import styles from './styles.module.css'
import { Container, Title } from "@/components"

export default function Avisos(){
    const adStyle={
        color:'red',
        fontSize:'1.3rem'
    }
    return (
        <>
            <nav className={styles.menu}>
            <ul className={styles.menuList}>
                    <li>
                        <Link href='/convocatoria'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href='/convocatoria/avisos'>
                            Avisos
                        </Link>
                    </li>
                    <li>
                        <a
                            href='http://himfg.com.mx/archivos/CONVOCATORIA_2024.pdf'
                            target='_blank'
                        >
                            Convocatoria PDF
                        </a>
                    </li>
                    <li>
                        <a href='http://ense.himfg.edu.mx/convocatoria/proceso_registro.html'>
                            Registro en línea
                        </a>
                    </li>
                    <li>
                        <a
                        href='http://himfg.com.mx/archivos/FLUJOGRAMA.pdf'
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
            <Container>
                <center><h3 className={styles.avisoTitle}>Avisos</h3></center>
                <br/>
                <Title>CONVOCATORIA PARA ASPIRANTES A CURSOS DE ESPECIALIZACIÓN 2025</Title>

                <center>
                    <h2 style={adStyle}>
                        El registro en línea solo se podrá realizar a partir del 15 de Junio de 2024
                    </h2>
                </center>
                {
                    /*<div className={`flexContainer ${styles.adsWrapper}`}>
                    <div>
                        <span className={styles.adTitle}>Aceptados</span>
                        <span>
                            CURSO UNIVERSITARIO DE ESPECIALIZACIÓN EN PEDIATRÍA Y GENÉTICA MÉDICA
                        </span>
                        <a href='/'>Ver aquí</a>
                    </div>
                    <div>
                        <span className={styles.adTitle}>Aceptados</span>
                        <span>
                        CURSOS UNIVERSITARIOS DE ESPECIALIZACIÓN Y PAEM 2024
                        </span>
                        <a href='/'>Ver aquí</a>
                    </div>
                    </div>*/
                }
            </Container>
        </>
    )
}