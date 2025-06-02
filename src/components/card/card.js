import { useContext, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/helpers'
import styles from './card.module.css'
import { openModal } from './openModal'
import { UserContext, CourseContext } from '@/contexts'
import { setItem, getItem, removeItem } from "@/helpers"

const Card = ({course})=>{
    const { user }= useContext(UserContext)
    const { login } = useContext(CourseContext)
    return (
        <article className={`${styles.cardWrapper} boxShadow`}>
            <figure className={styles.cardImage}>
            <Image
                src={
                    !course.course_image ?
                    'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp'
                    :
                    course.course_image
                }
                loading='lazy'
                alt='No se pudo cargar la imágen'
                width={1000}
                height={150}
                quality
            />
            </figure>
            <h3 className={styles.courseTitle}>{course.course_name}</h3>
            <span>Inicia: {formatDate(course.course_start_date)}</span>
            <span>Termina: {formatDate(course.course_finish_date)}</span>
            { !course.course_price ? null : 
              <>
                {
                    !course.course_price ? null
                    :
                    <span>
                        Costo para externos al HIMFG: ${course.course_price}mxn
                    </span>
                }
                {
                    !course.course_student_price ? null
                    :
                    <span>
                        Costo para estudiantes: ${course.course_student_price}mxn
                    </span>
                }
                {
                    !course.course_employee_price ? null
                    :
                    <span>
                        Costo para personal del HIMFG: ${course.course_employee_price}mxn
                    </span>
                }
              </>
            }
            { course.course_price === 0 ?
              <>
                <span>
                    Gratuito
                </span>
              </>
              :
              null
            }
            {
                course.modality_id === 1 ?
                <span>
                    Modalidad: presencial
                </span>
                :
                null
            }
            {
                course.modality_id === 2 ?
                <span>
                    Modalidad: en línea
                </span>
                :
                null
            }
            {
                course.modality_id === 3 && course.course_max_range ?
                <span>Cupo límite: {course.course_max_range} personas (presencial), en línea cupo ilimitado</span>
                :
                null
            }
            {
                course.modality_id === 3 && course.course_max_range === 0 ?
                <span>Sin cupo disponible (presencial), únicamente en línea</span>
                :
                null
            }
            {
                course.modality_id !== 3 && course.course_max_range?
                <span>Cupo límite: {course.course_max_range} {course.course_id === 286 ? 'plazas' : 'personas'}</span>
                :
                null
            }
            <div className={styles.cardButtons}>
                {
                    !course.course_pdf ?
                    <span className={styles.disabledLink}>
                        Programa no disponible
                    </span>
                    :
                    <button
                    onClick={()=>openModal({course})}
                    className={styles.cardButton}
                    >
                        Programa
                    </button>
                }
                {
                    course.course_price && course.course_able && !user?
                    <Link
                        href='/register'
                        className={styles.cardButtonInscription}
                        onClick={()=> login(course)}
                    >
                        Inscripción
                    </Link>
                    :
                    null
                }
                {
                    course.course_price && course.course_able && user
                    ?
                    <Link
                        href='/payment'
                        className={styles.cardButtonInscription}
                        onClick={()=>{
                            if(course.modality_id === 1){
                                setItem('modality', 'presencial')
                            }
                            if(course.modality_id === 2){
                                setItem('modality', 'en_linea')
                            }
                            if(course.modality_id === 3){
                                setItem('modality', 'en_linea')
                            }
                            return login(course)
                        }}
                    >
                        Comprar
                    </Link>
                    :
                    null
                }
                {
                    course.course_price === 0 && course.course_able && user
                    ?
                    <Link
                        href='/payment'
                        className={styles.cardButtonInscription}
                        onClick={()=>{
                            if(course.modality_id === 1){
                                setItem('modality', 'presencial')
                            }
                            if(course.modality_id === 2){
                                setItem('modality', 'en_linea')
                            }
                            if(course.modality_id === 3){
                                setItem('modality', 'en_linea')
                            }
                            return login(course)
                        }}
                    >
                        Inscripción
                    </Link>
                    :
                    null
                }
                {
                    course.course_price === 0 && course.course_able && !user
                    ?
                    <Link
                        href='/register'
                        className={styles.cardButtonInscription}
                        onClick={()=>{
                            if(course.modality_id === 1){
                                setItem('modality', 'presencial')
                            }
                            if(course.modality_id === 2){
                                setItem('modality', 'en_linea')
                            }
                            if(course.modality_id === 3){
                                setItem('modality', 'en_linea')
                            }
                            return login(course)
                        }}
                    >
                        Inscripción
                    </Link>
                    :
                    null
                }
            </div>
        </article>
    )
}
export default memo(Card)