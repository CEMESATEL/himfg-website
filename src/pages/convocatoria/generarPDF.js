import jsPDF from 'jspdf'
export const generarPDF = ({course, student, reference}) => {
    const doc = new jsPDF()
    doc.setFontSize(30)
    doc.setFont("helvetica", "bold")
    doc.text('Inscripción exitosa', 60, 30)
    doc.setFontSize(14)
    doc.setTextColor('#2f3542')
    doc.setFont("helvetica", "bold")
    doc.text(`Nombre: ${student.nombre}`, 10, 50)
    doc.setFont('helvetica', 'italic')
    doc.text(`Referencia: ${reference}`, 10, 60)
    /*doc.setFont("helvetica", "bold")
    doc.text('Inicia:', 10, 75)
    doc.setFont('helvetica', 'italic')
    doc.text(`${formatDate(course.course_start_date)}`, 10, 85)
    doc.setFont("helvetica", "bold")
    doc.text('Termina:', 10, 100)
    doc.setFont('helvetica', 'italic')
    doc.text(`${formatDate(course.course_finish_date)}`, 10, 110)
    if(course.course_url && course.course_password){
        doc.setFont("helvetica", "bold")
        doc.text('Contraseña de acceso al curso:',10, 125)
        doc.setFont('helvetica', 'italic')
        doc.text(`${course.course_password}`,10, 135)
        doc.setFont("helvetica", "bold")
        doc.text('Liga activa:',10, 150)
        doc.setFont('helvetica', 'italic')
        doc.setTextColor('#1e90ff')
        doc.textWithLink(
        `https://him.edu.mx/video/${course.course_url}/`
        , 10, 160,
        {url: `https://him.edu.mx/video/${course.course_url}/`}
        )
        doc.setTextColor('#2f3542')
        doc.setFont("helvetica", "bold")
        doc.text('SEDE:',10, 175)
        doc.setFont("helvetica", "italic")
        doc.text(`${course.course_place}`,10, 185)
        doc.setFont("helvetica", "bold")
        doc.text('Sus datos de acceso a la plataforma:', 10, 200)
        doc.setFont('helvetica', 'italic')
        doc.text(`Correo: ${student.student_email}`, 10, 210)
        doc.text(`Contraseña: ${student.student_password}`, 10, 220)
    }
    if(course.modality_id === 1){
        doc.setFont("helvetica", "bold")
        doc.setTextColor('#2f3542')
        doc.text('Este curso solo se impartirá de manera presencial',10, 125)
        doc.setFont("helvetica", "bold")
        doc.text('SEDE:',10, 140)
        doc.setFont("helvetica", "italic")
        doc.text(`${course.course_place}`,10, 150)
        doc.setFont("helvetica", "bold")
        doc.text('Sus datos de acceso a la plataforma:', 10, 165)
        doc.setFont('helvetica', 'italic')
        doc.text(`Correo: ${student.student_email}`, 10, 175)
        doc.text(`Contraseña: ${student.student_password}`, 10, 185)
    }
    if(course.modality_id === 2){
        doc.setFont("helvetica", "bold")
        doc.setTextColor('#2f3542')
        doc.text('Este curso solo se impartirá de manera online',10, 125)
        doc.setFont("helvetica", "bold")
        doc.text('SEDE:',10, 140)
        doc.setFont("helvetica", "italic")
        doc.text(`${course.course_place}`,10, 150)
        doc.setFont("helvetica", "bold")
        doc.text('Sus datos de acceso a la plataforma:', 10, 165)
        doc.setFont('helvetica', 'italic')
        doc.text(`Correo: ${student.student_email}`, 10, 175)
        doc.text(`Contraseña: ${student.student_password}`, 10, 185)
    }
    /*doc.setTextColor('#2f3542')
    doc.setFont("helvetica", "bold")
    doc.text(`Correo de contacto para solicitar su constancia y emitir su factura:`,10, 175)
    doc.setFont('helvetica', 'italic')
    doc.text('cursoshimfg@gmail.com', 10, 185)
    if(reference){
        doc.setFont("helvetica", "bold")
        doc.text('Referencia', 10, 235)
        doc.setFont('helvetica', 'italic')
        doc.text(`${reference}`, 10, 245)
    }*/
    doc.save(`acuse.pdf`)
  };

  export default function PDF (){
    return (
        <></>
    )
  }