import axios from "axios";
/*export const uploadFile = async({file})=>{
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'image_himfg');
    formData.append('public_id', file.name)
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/diuxbqmn5/image/upload',
      formData
    )
    console.log(response.data.secure_url)
    return response.data.secure_url
  } catch (error) {
    console.log(error)
  }
}*/
  export const uploadFile= async({file})=>{
    const formData = new FormData()
    formData.append('file', file)
    try {
      const response = await axios.post(
        'https://himfg.edu.mx/archivos/documentacion-alumnos/upload-file.php',
        formData,
        {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        })
      if(response.status===200){
      return response.data.fileUrl
      }else{
        Swal.fire({
            icon:'error',
            title:'Error al cargar elrchivo, intente nuevamente',
            showCloseButton:true,
            showConfirmButton:false
        })
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon:'error',
        title:'Error al cargar elrchivo, intente nuevamente',
        showCloseButton:true,
        showConfirmButton:false
    })
    }
  }