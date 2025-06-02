import Link from 'next/link'
import styles from './styles.module.css'
import { Title, Container } from '@/components'

export default function Descargas() {
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
                <Title>Descargas disponibles</Title>
                <ol className={`flexContainer ${styles.fileList}`}>
                    <li>
                        <a
                            href='http://himfg.com.mx/archivos/carta_seleccion.pdf'
                            target='_blank'
                        >
                            Carta de selección en formato .pdf (descargar)
                        </a>
                    </li>
                    <li>
                        <a
                            href='http://himfg.com.mx/archivos/curriculum_formato.pdf'
                            target='_blank'
                        >
                            Formato currículum en formato .pdf (descargar)
                        </a>
                    </li>
                    <li>
                        <a
                            href='http://himfg.com.mx/archivos/curriculum.docx'
                            target='_blank'
                        >
                            Formato currículum en formato .docx (descargar)
                        </a>
                    </li>
                    <li>
                        <a
                            href='http://himfg.com.mx/archivos/convenio.pdf'
                            target='_blank'
                        >
                            Convenio en formato .pdf (descargar)
                        </a>
                    </li>
                </ol>
            </Container>
        </>
    )
}