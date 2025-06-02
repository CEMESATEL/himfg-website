import Link from 'next/link'
import styles from './styles.module.css'
import { Title, Container } from '@/components'

export default function Informes() {
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
                <Title>Informes</Title>
                <div className={`flexContainer ${styles.fileList}`}>
                    <div>
                        <p>La Dirección de Enseñanza y Desarrollo Académico del HIMFG, se encuentra ubicada en el segundo piso del Edificio "Arturo Mundet", La ubicación del Hospital la encontrará en la parte inferior de esta página.</p>
                    </div>
                    <div>
                        <p>Diana Aideé Guerrero: Subdirectora de Enseñanza y responsable del proceso</p>
                        <p>subense@himfg.edu.mx</p>
                    </div>
                    <div>
                        <p>Edgar Barajas Colón: Jefe del Departamento de Educación de Pre y Posgrado</p>
                        <p>preposgrado@himfg.edu.mx</p>
                    </div>
                    <div>
                        <p>Mónica Jimena Olguín Quintero: Encargada de los Posgrados de Alta Especialidad en Medicina</p>
                        <p>preposgrado@himfg.edu.mx</p>
                    </div>
                    <div>
                        <p>Librado Ortínez Benavides: Dudas y recepción de documentación de Pediatría, Genética Médica y Especialidades Pediátricas.</p>
                        <p>posgrado@himfg.edu.mx</p>
                    </div>
                    <div>
                        <p>Tomás Durán Honorato: Dudas y recepción de documentación. Posgrados de Alta Especialidad en Medicina.</p>
                        <p>cepaemfedericogomez@gmail.com</p>
                    </div>
                    <div>
                        <p>Verónica Quevedo Salero: Logística, portal de internet y registro en línea.</p>
                        <p>vronicaqs@gmail.com</p>
                    </div>
                    <div>
                        <p>Nicolás Hernández Hdez.: Logística, portal de internet y registro en línea.</p>
                        <p>nicohh@himfg.edu.mx</p>
                    </div>
                    <div>
                        <p>Ubicación de la Dirección de Enseñanza y Desarrollo Académico:</p>
                        <p>Hospital Infantil de México Federico Gómez. Edificio Mundet, Segundo piso.</p>
                        <p>Dr. Márquez No. 162,</p>
                        <p>Col. Doctores, Alcaldía Cuauhtémoc</p>
                        <p>México, Ciudad de México, C.P. 06720.</p>
                    </div>
                    <div>
                        <p>Conmutador:</p>
                        <p>+52-(55) 52-28-99-17, extensiones 2344, 2380, 2056, 9071.</p>
                    </div>
                    <div>
                        <p>Fax (pedir tono):</p>
                        <p>+52-(55) 57-61-02-70.</p>
                    </div>
                    <div>
                        <p>Páginas de Internet:</p>
                        <p>Página oficial: http://www.himfg.edu.x</p>
                        <p>Portal del proceso: http://www.himfg.com.mx/convocatoria</p>
                    </div>
                    <div>
                        <h3
                            style={{
                                fontSize: '1.6rem'
                            }}
                        >
                            Ubicación:
                        </h3>
                        <br />
                        <iframe width="100%" height="325" frameBorder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=es-419&amp;geocode=&amp;q=Hospital+Infantil+de+M%C3%A9xico+Federico+G%C3%B3mez,+Doctores,+Cuauht%C3%A9moc,+Ciudad+de+M%C3%A9xico,+M%C3%A9xico&amp;aq=1&amp;oq=hospital+in&amp;sll=37.0625,-95.677068&amp;sspn=53.564699,93.076172&amp;ie=UTF8&amp;hq=Hospital+Infantil+de+M%C3%A9xico+Federico+G%C3%B3mez,&amp;hnear=Doctores,+Cuauht%C3%A9moc,+Ciudad+de+M%C3%A9xico,+Distrito+Federal,+M%C3%A9xico&amp;t=m&amp;ll=19.411223,-99.151237&amp;spn=0.01474,0.006295&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=es-419&amp;geocode=&amp;q=Hospital+Infantil+de+M%C3%A9xico+Federico+G%C3%B3mez,+Doctores,+Cuauht%C3%A9moc,+Ciudad+de+M%C3%A9xico,+M%C3%A9xico&amp;aq=1&amp;oq=hospital+in&amp;sll=37.0625,-95.677068&amp;sspn=53.564699,93.076172&amp;ie=UTF8&amp;hq=Hospital+Infantil+de+M%C3%A9xico+Federico+G%C3%B3mez,&amp;hnear=Doctores,+Cuauht%C3%A9moc,+Ciudad+de+M%C3%A9xico,+Distrito+Federal,+M%C3%A9xico&amp;t=m&amp;ll=19.411223,-99.151237&amp;spn=0.01474,0.006295" style={{ marginRight: '0' }}>Ver mapa más grande</a></small>
                    </div>
                </div>
            </Container>
        </>
    )
}