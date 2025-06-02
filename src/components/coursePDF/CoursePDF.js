import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"
import { formatDate } from "@/helpers"
import { Container, Title } from "@/components"
import { downloadPdf } from './pdf.module.css'
import { CourseContext, UserContext } from "@/contexts"

export const CoursePDF = ()=>{
    const router = useRouter()
    const { course } = useContext(CourseContext)
    const { user } = useContext(UserContext)
    const downloadPDF = () =>{
        const capture = document.querySelector('#downloadPdf');
            html2canvas(capture).then((canvas)=>{
            const doc = new jsPDF({
                orientation: "landscape",
                unit: "in",
                format: [12, 12]
            })
            doc.text(`
                Felicidades, has comprado satisfactoriamente el curso:
                ${course.course_name}

                Datos de curso:
                Costo: $ ${course.course_price} mxn
                Fecha de inicio: ${formatDate(course.course_start_date)}
                Fecha de término: ${formatDate(course.course_finish_date)}
                URL de curso:
                https://www.test.him.edu.mx/video/${course.course_url}.html
                Contraseña: ${course.course_password}

                Datos de estudiante:
                Nombre: ${user.student_name}
                Email: ${user.student_email}
                Contraseña: ${user.student_password}
            `, 1, 1);
            doc.save(`${course.course_name}.pdf`);
            })
        }
        useEffect(()=>{
            if(!course){
                router.push('/ensenanza/offer')
            }
        },[])
    return (
        <Container>
            <div className={`${downloadPdf} flexContainer`} id='downloadPdf'>
                <Title>Curso: {!course ? null : course.course_name}</Title>
                <button
                    onClick={downloadPDF}
                >
                    Descargar acceso de curso
                </button>
            </div>
        </Container>
    )
}