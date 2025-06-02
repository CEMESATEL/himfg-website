import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useOnChange } from '../hooks'
import { UserContext } from '../contexts'
import { Container, Login, Title } from '../components'
import styles from './userlogin.module.css'

const UserLogin = ()=>{
    const router = useRouter()
    const { login, user } = useContext(UserContext)
    const [inputData, onChange, onReset] = useOnChange()
    useEffect(()=>{
        if(user){
            router.push('/direccion/educacion-medica-continua')
        }
    },[])
    const handleLogin = async(evt)=>{
        evt.preventDefault()
        try {
            const response = await axios.post(
                `${process.env.BASE_URL_API}api/auth/login-user`,
                inputData
            )
            if(response.data.rows.length === 0){
                onReset()
                evt.target.reset()
                return Swal.fire({
                    title: 'Datos incorrectos',
                    icon:'error',
                    showCloseButton:true,
                    showConfirmButton:false,
                    position:'center'
                })
            }
            login(response.data.rows[0])
            return router.push('/ensenanza/offer')
            /*if(course){
                router.push(`/payment`)
            }else{
                router.push('/ensenanza/offer')
            }*/
        } catch (error) {
            throw new Error(error)
        }
        onReset()
    }
    return (
        <Container>
            <Title>
                Iniciar sesión
            </Title>
            <Login onSubmit={handleLogin}>
                <label>Correo:</label>
                <input
                    type='email'
                    required
                    onChange={onChange}
                    name='student_email'
                />
                <label>Contraseña:</label>
                <input
                    type='password'
                    required
                    onChange={onChange}
                    name='student_password'
                />
                <button>Iniciar sesión</button>
            </Login>
            <div className={styles.registerLink}>
                <Link href='/register'>
                    Registrarse
                </Link>
            </div>
        </Container>
    )
}

export default UserLogin