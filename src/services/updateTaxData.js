import axios from 'axios'
import Swal from 'sweetalert2'
export const updateTaxData = async({data, user_id})=>{
    try {
        const response = await axios.put(
            `${process.env.BASE_URL_API}api/auth/update-user-tax-data/${user_id}`,
            {
                student_tax_data: data
            }
        )
        if(response.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'Datos fiscales agregados correctamente',
              })
        }
        return response
    } catch (error) {
        throw new Error(error)
    }
}