import { useContext } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useRouter } from "next/router"
import { AdminContext } from "../../contexts"
import { Login, Container } from "../../components"
import { useOnChange } from "../../hooks"

const Admin = ()=> {
    const {admin, saveAdmin} = useContext(AdminContext)
    const router = useRouter()
    const [inputData, onChange, onReset]= useOnChange()
    const login = async(evt)=>{
        evt.preventDefault()
        try {
            const response = await axios.post(
                `${process.env.BASE_URL_API}api/auth/login-admin`,
                inputData
                )
            if(!response.data.rows){
                evt.target.reset()
                onReset()
                return Swal.fire({
                    title: 'Datos incorrectos',
                    icon:'error',
                    showCloseButton:true,
                    showConfirmButton:false,
                    position:'center'
                })
                 
            }
            saveAdmin(inputData)
            onReset()
            return router.push('/admin/dashboard')
        } catch (error) {
            throw new Error(error)
        }
    }
    return (
        <Container>
            <Login onSubmit={login}>
                <label>Usuario:</label>
                <input
                type='text'
                required
                onChange={onChange}
                name='admin_user'
                />
                <label>Contraseña:</label>
                <input
                type='password'
                required
                onChange={onChange}
                name='admin_password'
                />
                <button>Iniciar sesión</button>
            </Login>
        </Container>
    )
}
export default Admin