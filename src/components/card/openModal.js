import Link from 'next/link'
import 'animate.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  cardButtons,
  cardWrapper,
  cardIframe,
  cardButton,
  disabledLink
} from './card.module.css'

const CardModal = withReactContent(Swal)

export const openModal = ({course})=>{
    return CardModal.fire({
        html:
        <div className={cardWrapper}>
            {
              !course.course_pdf?
              <span>Programa no disponible</span>
              :
              <>
                <span>Programa:</span>
                <iframe
                  src={course.course_pdf}
                  className={cardIframe}
                />
              </>
            }
            <div className={cardButtons}>
              {
                !course.course_url
                ?
                <span className={disabledLink}>
                  Enlace al curso no disponible
                </span>
                :
                <Link
                  href={`/cursos2025/[...id]`}
                  as ={`/cursos2025/${course.course_url}`}
                  className={cardButton}
                >
                  Ingresar al curso
                </Link>
              }
            </div>
        </div>
        ,
        width: 1000,
        showCloseButton:true,
        showConfirmButton:false,
        showClass: {
            popup: 'animate__animated animate__fadeIn'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut'
          }
    })
}