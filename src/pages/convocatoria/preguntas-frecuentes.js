import Link from 'next/link'
import styles from './styles.module.css'
import { Title, Container } from '@/components'

export default function PreguntasFrecuentes() {
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
                <Title>Preguntas frecuentes</Title>
                <div className={`flexContainer ${styles.fileList}`}>
                    <p>Si tiene alguna duda o pregunta, consulte la sección Informes.</p>
                    <div>
                        <p>1. ¿Dónde puedo consultar su aviso de privacidad integral?</p>
                        <p>Re: En este vínculo: aviso de privacidad integral perteneciente a esta convocatoria.</p>
                    </div>
                    <div>
                        <p>2. Mi título profesional o mi cédula están en trámite. ¿Puedo realizar mi registro?</p>
                        <p>Re: Para los aspirantes que aún no tienen título universitario ni cédula profesional debido a que se encuentran en trámite, podrán presentar su postulación presentando el acta de exámen profesional, debe presentar la constancia de terminación con los créditos al 100% y el certificado de calificaciones que expide la universidad que avala su formación. Dicho documento no es el cárdex.</p>
                    </div>
                    <div>
                        <p>3. ¿Se pueden enviar los documentos por mensajería?</p>
                        <p>Re: Sí, es posible enviarlos por mensajería, con la condición de que debe acordar su envío primero con la Sra. Juana García Chávez, quien es la responsable de este punto. Consultar el apartado Informes. Para enviarlos debe en todo momento respetar las fechas que indica la convocatoria y asegurarse que se entregue en las fechas indicadas. Por ningún motivo envíe documentos originales, ya que pueden perderse o dañarse durante el envío.</p>
                    </div>
                    <div>
                        <p>4. Tengo problemas para inscribirme en línea para las especialidades pediátricas, finalizo el llenado de la solicitud con todos los datos requeridos, pero luego, al enviar la información aparece una página donde se lee el siguiente mensaje: "Debe Leer los términos del Aviso de Privacidad y marque la opción que aparece al principio del formulario".</p>
                        <p>Re: Cuando este mensaje aparece es debido a que no se llenó algún campo del registro de manera correcta y al rectificarlo el sistema rechazó el proceso. Debe realizar nuevamente su registro. Cierre y abra nuevamente su explorador de internet, no deje campos en blanco escriba la palabra OMITIDO para cancelarlos. Los promedios deben ser en escala 0 a 10 con dos decimales.</p>
                    </div>
                    <div>
                        <p>5. Dupliqué mi registro y tengo dos claves ¿cuál debo utilizar?</p>
                        <p>Re: La que presente en su comprobante impreso al momento de entregar su documentación en ventanilla.</p>
                    </div>
                    <div>
                        <p>6. ¿Puedo enviar documentos por correo electrónico o fax?</p>
                        <p>Re: Por ningún motivo se reciben documentos escaneados, por correo electrónico ni vía fax.</p>
                    </div>
                    <div>
                        <p>7. ¿De qué tamaño deben ser las fotocopias del título?</p>
                        <p>Re: Todas las fotocopias de todos los documentos deben ser tamaño carta. Haga reducción a fotocopia de tamaño carta.</p>
                    </div>
                    <div>
                        <p>8. Extravié mi identificador de código de barras ¿qué tengo que hacer?</p>
                        <p>Re: Solicite una reposición y le será enviado vía correo electrónico.</p>
                    </div>
                    <div>
                        <p>9. ¿Qué pasa si entrego documentación los últimos días?</p>
                        <p>Re: Tiene casi tres meses para entregar su documentación, las entrevistas se le programarán en prioridad según el día que entregó documentos, los médicos extranjeros y los que vienen del interior de la república deben considerar esto ya que implicaría más días de estancia. No hay cambios una vez asignada su entrevista. Si su documentación al ser validada esta incompleta o incorrecta, no tendrá tiempo para corregirla y no recibimos documentación incompleta. Denos una buena impresión de usted, entregando todo a tiempo.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}