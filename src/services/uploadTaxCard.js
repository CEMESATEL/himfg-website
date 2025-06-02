import axios from "axios"

export const uploadTaxCard= async({file, fileName})=>{
    const formData = new FormData()
    formData.append('pdfFile', file, fileName)
    try {
      const response = await axios.post(
        'https://himfg.edu.mx/archivos/documentacion-alumnos/constancias-cursos.php',
        formData,
        {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        })
        return response
    } catch (error) {
        console.log(error)
    }
}