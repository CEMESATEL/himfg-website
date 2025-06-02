import { useState, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import Swal from 'sweetalert2'
import { CourseContext, UserContext } from '@/contexts'
import { useOnChange } from '../../hooks'
import styles from './form.module.css'
import { states } from '@/consts'
import { uploadFile } from '@/services'
import { setItem, getItem, removeItem } from "@/helpers"


export const RegisterForm = ({path})=>{
    const router = useRouter()
    const { course }= useContext(CourseContext)
    const { login }= useContext(UserContext)
    const [inputData, onChange, onReset] = useOnChange()
    const [isSelected, setIsSelected] = useState(false)
    const [formData, setFormData] = useState({
        student_id: Math.floor((Math.random() * 450000) + 450000),
        student_name: undefined,
        student_grade: undefined,
        student_institution: undefined,
        student_email: undefined,
        student_password: undefined,
        student_age: undefined,
        student_graduated: undefined,
        student_nationality: undefined,
        student_license: undefined,
        student_state: undefined,
        student_phone: undefined,
        student_role: undefined,
    })
    const [image, setImage] = useState(null)
    const handleChange = (evt)=>{
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    const handleimageChange = async(evt)=>{
        try {
            const resp = await uploadFile({file: evt.target.files[0]})
            setFormData({
                ...formData,
                [evt.target.name]:resp,
            })
            setImage({
                [evt.target.name] :evt.target.files[0]
            })
        } catch (error) {
            console.log(error)
        }
    }
    const handleSecondImageChange = async(evt)=>{
        try {
            const resp = await uploadFile({file: evt.target.files[0]})
            setFormData({
                ...formData,
                [evt.target.name]:resp,
            })
            setImage({
                [evt.target.name] :evt.target.files[0]
            })
        } catch (error) {
            console.log(error)
        }
    }
    const onSubmit = async(evt) =>{
        evt.preventDefault()
        if(
            (
                !formData.student_name ||
                !formData.student_grade ||
                !formData.student_institution ||
                !formData.student_email ||
                !formData.student_password ||
                !formData.student_age ||
                !formData.student_graduated ||
                !formData.student_nationality ||
                !formData.student_license ||
                !formData.student_state ||
                !formData.student_phone ||
                !formData.student_role
            )
        ){
            Swal.fire({
                title: 'Complete los campos requeridos o revise sus archivos seleccionados (JPG, .PNG, .PDF y máximo 1MB)',
                icon: 'warning'
            })
        }else{
            try {
                const response = await axios.post(
                    `${process.env.BASE_URL_API}api/auth/create-user`, formData          
                )
                if(response.status === 200){
                    login(formData)
                    /*Swal.fire({
                        icon: 'success',
                        title: 'Registro exitoso',
                        showCloseButton: true,
                        showConfirmButton: false
                    })*/
                    if(course){
                        router.push('/payment')
                    }
                }
                evt.target.reset()
                onReset()
            } catch (error) {
                throw new Error(error)
            }
        }
    }
    if(course && course.modality_id === 1){
        setItem('modality', 'presencial')
    }
    if(course && course.modality_id === 2){
        setItem('modality', 'en_linea')
    }
    useEffect(()=>{
        if(formData.student_role === 'ESTUDIANTE'){
            setFormData({
                ...formData,
                student_grade: 'ESTUDIANTE'
            })
        }else{
            setFormData({
                ...formData,
                student_grade: undefined
            })
        }
    },[formData.student_role])
    return (
        <>
            <div className={styles.anchorLogin}>
                <span>¿Ya te has registrado?</span>
                <Link href="/userlogin">Inicia sesión para acceder</Link>
            </div>
            <form className={`flexContainer ${styles.formWrapper}`} onSubmit={onSubmit}>
            <label className={`${styles.labelTitle}`}>
                Nombre como aparecerá en su constancia:
            </label>
            <input 
                type='text'
                name='student_name'
                onChange={handleChange}
                required
            />
            <label className={styles.labelTitle}>
                Edad:
            </label>
            <input
                type='number'
                name='student_age'
                onChange={handleChange}
                required
            />
            <label className={styles.labelTitle}>
                Nacionalidad:
            </label>
            <input
                type='text'
                onChange={handleChange}
                name='student_nationality'
                required
            />
            <label className={styles.labelTitle}>
                Lugar de residencia:
            </label>
            <input
                name='student_state'
                onChange={handleChange}
                type='text'
                required
            />
            <label className={styles.labelTitle}>
                Perfil profesional:
            </label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>Personal del HIMFG</label>
                    <input
                        type='radio'
                        value='PERSONAL_HIMFG'
                        name='student_role'
                        onChange={handleChange}
                        required                        
                    />
                    {
                        formData.student_role && formData.student_role === 'PERSONAL_HIMFG' ?
                        <div>
                            {
                                !isSelected ? 
                                    <select onChange={handleChange} name='student_grade' required>
                                    <option value=''>Seleccionar</option>
                                    <option value='Médico'>Médico</option>
                                    <option value='Enfermero(a)'>
                                        Enfermero(a)
                                    </option>
                                    <option value='Biólogo'>Biólogo</option>
                                    <option value='Químico'>Químico</option>
                                    <option value='Odontólogo'>Odontólogo</option>
                                    <option value='Trabajador(a) social'>
                                        Trabajador(a) social
                                    </option>
                                </select>
                                :
                                null
                            }
                            <label>Otro (especifique):</label>
                            <input type='checkbox' onChange={()=> setIsSelected(!isSelected)}/>
                            {
                                isSelected ?
                                <input type='text' name='student_grade' onChange={handleChange}/>
                                :
                                null
                            }
                        </div>
                        :
                        null
                    }
                </div>
                <div>
                    <label>Estudiante</label>
                    <input
                        type='radio'
                        value='ESTUDIANTE'
                        name='student_role'
                        onChange={handleChange}
                        required                      
                    />
                </div>
                <div>
                    <label>Externo</label>
                    <input
                        type='radio'
                        value='EXTERNO'
                        name='student_role'
                        onChange={handleChange}
                        required                        
                    />
                    {
                        formData.student_role && formData.student_role === 'EXTERNO' ?
                        <div>
                            {
                                !isSelected ? 
                                    <select onChange={handleChange} name='student_grade' required>
                                    <option value=''>Seleccionar</option>
                                    <option value='Médico'>Médico</option>
                                    <option value='Enfermero(a)'>
                                        Enfermero(a)
                                    </option>
                                    <option value='Biólogo'>Biólogo</option>
                                    <option value='Químico'>Químico</option>
                                    <option value='Odontólogo'>Odontólogo</option>
                                    <option value='Trabajador(a) social'>
                                        Trabajador(a) social
                                    </option>
                                </select>
                                :
                                null
                            }
                            <label>Otro (especifique):</label>
                            <input type='checkbox' onChange={()=> setIsSelected(!isSelected)}/>
                            {
                                isSelected ?
                                <input type='text' name='student_grade' onChange={handleChange}/>
                                :
                                null
                            }
                        </div>
                        :
                        null
                    }
                </div>
                {/*<div>
                    <label>Otro (especifique):</label>
                    <input type='text' name='student_grade' onChange={handleChange}/>
                </div>*/}
            </div>
            {
                !formData ? null
                :
                <div className={styles.inputFile}>
                    {
                    formData.student_role
                    ?
                    <>
                        <label className={styles.labelTitle}>
                           {
                            formData.student_role === 'PERSONAL_HIMFG' ?
                            <>
                                Inserte una fotografía de su credencial vigente de personal del Hospital Infantil de México por ambos lados (en archivo .JPG, .PNG , .PDFy 1MB como máximo)
                            </>
                            :
                            null
                           }
                           {
                            formData.student_role === 'ESTUDIANTE' ?
                            <>
                                Inserte una fotografía de su credencial vigente de estudiante por ambos lados (en archivo .JPG, .PNG, .PDF y 1MB como máximo)
                            </>
                            :
                            null
                           }
                           {
                            formData.student_role === 'EXTERNO' ?
                            <>
                                Inserte una fotografía de su cédula profesional (en archivo .JPG, .PNG, .PDF y 1MB como máximo)
                            </>
                            :
                            null
                           }
                        </label>
                        {
                            formData.student_role === 'PERSONAL_HIMFG' ?
                            <>
                                <input
                                type='file'
                                name='student_license'
                                onChange={handleimageChange}
                                id='file'
                                required
                                />
                                <input
                                type='file'
                                name='student_license_part_2'
                                onChange={handleSecondImageChange}
                                required
                                id='file'
                                />
                            </>
                            :
                            null
                           }
                           {
                            formData.student_role === 'ESTUDIANTE' ?
                            <>
                               <input
                                type='file'
                                name='student_license'
                                onChange={handleimageChange}
                                id='file'
                                required
                                />
                                <input
                                type='file'
                                name='student_license_part_2'
                                onChange={handleSecondImageChange}
                                required
                                id='file'/>
                            </>
                            :
                            null
                           }
                           {
                            formData.student_role === 'EXTERNO' ?
                            <>
                                <input
                                type='file'
                                name='student_license'
                                onChange={handleimageChange}
                                id='file'
                                required
                                />
                            </>
                            :
                            null
                           }
                        <span>
                            Asegúrese de enviar un documento válido y con vigencia, de lo contrario
                            no se emitirá su constancia y tampoco tendrá la devolución de su dinero.
                        </span>
                    </>
                    :
                    null
                    }
                    {
                        /*formData.student_grade === 'Médico' || formData.student_grade === 'Enfermero'
                        ?
                        <>
                            <label className={styles.labelTitle}>Inserte una fotografía de su cédula profesional</label>
                            <input type='file' name='student_license' onChange={handleimageChange} id='file'/>
                            <span>
                                Asegúrese de enviar un documento válido y con vigencia, de lo contrario
                                no se emitirá su constancia y tampoco tendrá la devolución de su dinero.
                            </span>
                        </>
                        :
                        null*/
                    }
                </div>
            }
            <label className={styles.labelTitle}>
                Institución de procedencia donde trabaja actualmente:
            </label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>IMSS</label>
                    <input
                        type='radio'
                        value='IMSS'
                        name='student_institution'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>SSA</label>
                    <input
                        type='radio'
                        value='SSA'
                        name='student_institution'
                        onChange={handleChange}
                        required                       
                    />
                </div>
                <div>
                    <label>ISSSTE</label>
                    <input
                        type='radio'
                        value='ISSSTE'
                        name='student_institution'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>GDF</label>
                    <input
                        type='radio'
                        value='GDF'
                        name='student_institution'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>HIMFG</label>
                    <input
                        type='radio'
                        value='HIMFG'
                        name='student_institution'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Otro (especifique):</label>
                    <input type='text' name='student_institution' onChange={handleChange}/>
                </div>
            </div>
            <label className={styles.labelTitle}>
                Teléfono (celular de contacto):
            </label>
            <input
                type='number'
                name='student_phone'
                onChange={handleChange}
                required
            />
            <label className={styles.labelTitle}>
                Correo electrónico para acceder a la plataforma y para enviar su constancia:
            </label>
            <input
                type='email'
                name='student_email'
                onChange={handleChange}
                required
            />
            <label className={styles.labelTitle}>
                Genere una contraseña para ingresar a la plataforma:
            </label>
            <input
                type='password'
                name='student_password'
                onChange={handleChange}
                required
            />
            <label className={styles.labelTitle}>
                Es usted egresado de algún programa del HIMFG:
            </label>
            <div className={styles.formRatioInputs}>
                <div>
                    <label>SÍ</label>
                    <input
                        type='radio'
                        value='SÍ'
                        name='student_graduated'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>NO</label>
                    <input
                        type='radio'
                        value='NO'
                        name='student_graduated'
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            {
                course && course.modality_id === 3 ?
                <>
                    <label className={styles.labelTitle}>
                        ¿Usted toma el curso de manera presencial o en línea?
                    </label>
                    <div className={styles.formRatioInputs}>
                        {
                            course.course_max_range ?
                            <div>
                            <label>Presencial</label>
                            <input
                                type='radio'
                                value='presencial'
                                name='modality'
                                required
                                onChange={
                                    ()=> setItem('modality', 'presencial')
                                }
                            />
                            </div>
                            :
                            null
                        }
                        <div>
                            <label>En línea</label>
                            <input
                                type='radio'
                                value='en_linea'
                                name='modality'
                                required
                                onChange={                                
                                    ()=> setItem('modality', 'en_linea')
                                }
                            />
                        </div>
                    </div>
                </>
                :
                null
            }
            {
                !course ? null
                :
                <span className={styles.message}>
                    Una vez concluido su registro se te enviará un correo electrónico con tus datos de acceso. Te recomendamos guardarlo para futuros cursos
                </span>
            }
            <div className={styles.formButtons}>
                <button className={styles.buttonSuccess}>Enviar</button>
                <button
                className={styles.buttonDanger}
                type='reset'
                onClick={onReset}
                id='click'
                >
                    Cancelar
                </button>
            </div>
            </form>
        </>
    )
}