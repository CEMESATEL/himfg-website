import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useOnChange } from '@/hooks'
import styles from './styles.module.css'
import { Container, Title } from "@/components"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { MdOutlineMailOutline } from "react-icons/md"

export default function PosGradeForm(){
    const router = useRouter()
    const [file, setFile] = useState(null)
    const [inputData, onChange, onReset] = useOnChange()
    const [isLoading, setIsLoading] = useState(false);
    const handleFileChange=(evt)=>{
        setFile({
            [evt.target.name]:evt.target.files[0]
        })
    }
    const handleSubmit = async(evt)=>{
        evt.preventDefault()
        setIsLoading(true)
        try {
            const formData = new FormData();
            formData.append('reglamento', inputData.reglamento);
            formData.append('fecha_registro', inputData.fecha_registro);
            formData.append('estudiante_fotografia', file.estudiante_fotografia);
            formData.append('estudiante_nombre', inputData.estudiante_nombre);
            formData.append('estudiante_nacionalidad', inputData.estudiante_nacionalidad);
            formData.append('estudiante_fecha_nacimiento', inputData.estudiante_fecha_nacimiento);
            formData.append('estudiante_especialidad', inputData.estudiante_especialidad);
            formData.append('estudiante_grado', inputData.estudiante_grado);
            formData.append('estudiante_institucion_procedencia', inputData.estudiante_institucion_procedencia);
            formData.append('telefono_jefatura_procedente', inputData.telefono_jefatura_procedente);
            formData.append('fecha_inicio_periodo', inputData.fecha_inicio_periodo);
            formData.append('fecha_termino_periodo', inputData.fecha_termino_periodo);
            formData.append('estudiante_servicio', inputData.estudiante_servicio);
            formData.append('estudiante_telefono_celular', inputData.estudiante_telefono_celular);
            formData.append('estudiante_telefono_fijo', inputData.estudiante_telefono_fijo);
            formData.append('estudiante_domicilio', inputData.estudiante_domicilio);
            formData.append('estudiante_correo', inputData.estudiante_correo);
            formData.append('estudiante_telefono_familiar', inputData.estudiante_telefono_familiar);

            const response = await axios.post(
                'https://archivos.him.edu.mx/inscripciones-pos-grado/upload.php',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            if(response.status===200){
                setIsLoading(false)
                Swal.fire({
                    title:'Registro realizado con éxito'
                })
                router.push('/direccion/pre-y-posgrado')
            }
            console.log(response)
            console.log(formData)
        } catch (error) {
            console.log(error)
        }
    }
    const privacityAd = ()=> withReactContent(Swal).fire({
        html: 
        <div>
            <span>Aviso de privacidad</span>
        </div>,
        showCloseButton:true,
        showConfirmButton:false,
        customClass:{
            htmlContainer: styles.fileList
        },width:800

    })
    const rules = ()=> withReactContent(Swal).fire({
        html: 
        <>
            <span>
                LINEAMIENTOS PARA MÉDICOS RESIDENTES EN ROTACIÓN
            </span>
            <br />
            <ul className={styles.ruleList}>
                <li>
                    1) Deberá cumplir con lo dispuesto en el Reglamento de Médicos Residentes de la Dirección de
                    Enseñanza y Desarrollo Académico. No se proporcionarán prestaciones económicas, material
                    didáctico, fotocopias, uniformes ni estacionamiento; la alimentación y el lugar de descanso se
                    proporcionará únicamente durante las guardias. Cualquier falta al reglamento será causa de
                    suspensión definitiva de su estancia en el hospital.
                </li>
                <li>
                    2) Toda actividad clínica e intervención diagnóstica o terapéutica, así como realización de notas o
                    llenado de formatos del Expediente Clínico, deberá ser supervisada por un médico adscrito del
                    HIMFG o un residente de esta institución de mayor o igual jerarquía. Dichas intervenciones
                    deberán ser consignadas en el expediente clínico con nombre completo y firma de ambas
                    partes.
                </li>
                <li>
                    3) Deberá portar la credencial otorgada por la Dirección de Enseñanza y Desarrollo Académico,
                    en un lugar visible en todo momento, EN CASO CONTRARIO SE SUSPENDERA SU ESTANCIA EN
                    ESTE HOSPITAL. No hay reposición de la credencial y en caso de pérdida, se deberá levantar un
                    acta en el Ministerio Público y posterior a esto se procederá a entregar el documento de
                    conclusión.
                </li>
                <li>
                    4) Deberá conducirse con respeto y atención a todo el personal médico y no médico de la
                    institución presentándose con zapatos deportivos tipo tenis, azules, negros o color neutro;
                    pijama quirúrgica azul, negra o de color neutro y bata con el escudo de su institución. Está
                    prohibido el uso de playeras o sudaderas como parte del uniforme.
                </li>
                <li>
                    Para ingresar a quirófano, deberán usar el uniforme quirúrgico otorgado por el área de
                    quirófanos.
                </li>
                <li>
                    Es OBLIGATORIO el uso de cubrebocas en todo momento dentro del hospital.
                </li>
                <li>
                    El cabello largo deberá ser recogido durante las actividades asistenciales con los
                    pacientes.
                </li>
                <li>
                    Esta prohibido el uso de joyería y uñas largas con esmalte, gelish, acrílicos y otros
                    productos que impidan el adecuado lavado de manos
                </li>
                <li>
                    5) Los médicos no podrán iniciar actividades clínicas asistenciales hasta realizar el curso de
                    higiene de manos y medidas preventivas de infecciones nosocomiales realizado por el
                    Departamento de Epidemiología Hospitalaria.
                </li>
                <li>
                    6) No deberá de dar informes sobre diagnóstico, pronóstico o estado actual de los pacientes, a
                    menos que sea realizado bajo supervisión de un médico adscrito del HIMFG o médico
                    residente de esta institución que sea de mayor jerarquía.
                </li>
                <li>
                    7) No se autoriza que el residente rotante extraiga o utilice información de algún paciente o un
                    grupo de pacientes de este Instituto (para publicación, realizar carteles para congresos, etc.) a
                    menos de que cuente con permiso por escrito del Jefe del Departamento o Subdirector de
                    área correspondiente
                </li>
                <li>
                    8) No se autoriza tomar vacaciones durante el periodo de la rotación, ni se autorizarán permisos
                    extraordinarios que no sean avalados por escrito en forma oficial por las autoridades de
                    enseñanza de la institución de procedencia
                </li>
                <li>
                    9) Deberá de realizar el trámite de ingreso y finalización de la rotación de forma completa en la
                    Dirección de Enseñanza y Desarrollo Académico. La evaluación final la llevará a cabo el
                    profesor del servicio receptor con el visto bueno de la Dirección de Enseñanza y Desarrollo
                    Académico en el formato oficial de evaluación; se elaborará el oficio de conclusión y éste junto
                    con el formato oficial de evaluación será entregado a cambio de la credencial de
                    identificación.
                </li>
            </ul>
        </>,
        showCloseButton:true,
        showConfirmButton:false,
        customClass:{
            htmlContainer: styles.htmlContainer
        },width:800

    })
    const documentation = ()=> withReactContent(Swal).fire({
        html: 
        <>
            <span>
                ¿Qué documentos tengo que entregar?
            </span>
            <br />
            <ul className={styles.ruleList}>
                <li>1) Una fotografía tamaño infantil (puede ser a color o blanco y negro)</li>
                <li>2) Carta de aceptación HIMFG</li>
                <li>3) Carta de presentación Hospital SEDE</li>
                <li>Esquema de vacunación completo (COVID, Hepatitis B, Sarampión)</li>
                <li>Carátula de gastos médicos mayores con covertura internacional vigente (solo extranjeros)</li>
                <li>
                    Nota: Es muy importante que cada uno de tus documentos se encuentren comprimidos (máximo 2MB)
                </li>
                <li>
                    Te recomendamos utilizar alguna de las siguientes opciones para comprimir tus documentos:
                </li>
                <li>
                    <a
                        href='https://www.ilovepdf.com/es'
                        target='_blank'
                    >
                            Opción 1
                    </a>
                </li>
                <li>
                    <a
                        href='https://rb.gy/ieobpc'
                        target='_blank'
                    >
                            Opción 2
                    </a>
                </li>
            </ul>
        </>,
        showCloseButton:true,
        showConfirmButton:false,
        customClass:{
            htmlContainer: styles.htmlContainer
        },width:800

    })
    return (
        <Container>
            <Title>Cédula identificación del Residente Rotante</Title>
            <form
                className={`flexContainer ${styles.inscriptionForm}`}
                onSubmit={handleSubmit}
            >
                <label className={styles.privacityTitle}>
                    <input
                        type='checkbox'
                        onChange={onChange}
                        value='ACEPTA'
                        name='reglamento'
                        required
                        className={styles.privacityCheck}
                    />
                    &nbsp;Acepto el&nbsp;
                    <a
                        href='http://himfg.com.mx/interna/p_datos/avisopriv.php'
                        target='_blank'
                        className={styles.privacity}
                    >
                    aviso de privacidad
                    </a>
                    &nbsp;y&nbsp;
                    <span className={styles.privacity} onClick={rules}>reglamento</span>
                </label>
                <label>Fecha</label>
                <input type='date' name='fecha_registro' onChange={onChange} required/>
                <label
                className={styles.privacityTitle}
                onClick={documentation}
                >
                    Revisa la documentación que debes cargar (da click aquí)
                </label>
                <label>Deberás cargar en un solo archivo todos tus documentos (Máximo 2MB)</label>
                <input type='file' name='estudiante_fotografia' onChange={handleFileChange} required/>
                <label>Nombre</label>
                <input type='text' name='estudiante_nombre' onChange={onChange} required/>
                <label>Sexo:</label>
                <select name='estudiante_genero' onChange={onChange}>
                    <option onChange={onChange}>Masculino</option>
                    <option onChange={onChange}>Femenino</option>
                    <option onChange={onChange}>No binario</option>
                </select>
                <label>Nacionalidad</label>
                <input type='text' name='estudiante_nacionalidad' onChange={onChange} required/>
                <label>Fecha de nacimiento</label>
                <input type='date' name='estudiante_fecha_nacimiento' onChange={onChange} required/>
                <label>Especialidad</label>
                <input type='text' name='estudiante_especialidad' onChange={onChange} required/>
                <label>Grado</label>
                <input type='text' name='estudiante_grado' onChange={onChange} required/>
                <label>Institución de procedencia</label>
                <input type='text' name='estudiante_institucion_procedencia' onChange={onChange} required/>
                <label>Teléfono y extensión de la Jefatura de Enseñanza de procedencia</label>
                <input type='text' name='telefono_jefatura_procedente' onChange={onChange} required/>
                <label>Período de rotación (fecha de inicio)</label>
                <input type='date' name='fecha_inicio_periodo' onChange={onChange} required/>
                <label>Período de rotación (fecha de término)</label>
                <input type='date' name='fecha_termino_periodo' onChange={onChange} required/>
                <label>Servicio al que va a rotar</label>
                <input type='text' name='estudiante_servicio' onChange={onChange} required/>
                <label>Teléfono celular</label>
                <input type='number' name='estudiante_telefono_celular' onChange={onChange} required/>
                <label>Teléfono local</label>
                <input type='number' name='estudiante_telefono_fijo' onChange={onChange} required/>
                <label>Domicilio permanente</label>
                <input type='text' name='estudiante_domicilio' onChange={onChange} required/>
                <label>Correo electrónico</label>
                <input type='email' name='estudiante_correo' onChange={onChange} required/>
                <label>Nombre y teléfono de algún familiar (contacto de emergencia)</label>
                <input type='text' name='estudiante_telefono_familiar' onChange={onChange} required/>
                <label>Informes:</label>
                <label>Carmen Jacqueline Olazagasti</label>
                <label>Coordinación de Rotaciones</label>
                <label>
                    <b>
                    <MdOutlineMailOutline /> himfgrotaciones@gmail.com
                    </b>
                </label>
                <label>Tel. 01(55)5 228-99-17 ext. 2344</label>
                <div className={styles.inscriptionButtons}>
                    <button className={styles.buttonSubmit}>Enviar datos</button>
                    <button className={styles.buttonReset}>Borrar datos</button>
                </div>
                <label>*EL HOSPITAL INFANTIL DE MÉXICO FEDERICO GÓMEZ NO OTORGA NINGÚN TIPO DE BECA NI ESTACIONAMIENTO*</label>
                {!isLoading ? null : <span>Cargando, por favor espere...</span>}
            </form>
        </Container>
    )
}