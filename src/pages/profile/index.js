import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { BiUserCircle } from 'react-icons/bi'
import { states } from '@/consts'
import { UserContext } from '@/contexts'
import { Container, Title } from '@/components'
import {
    profileContainer,
    profileItems,
    profiileItem,
    editProfileForm,
    openEditProfile,
    closeEditProfile,
    editProfileButton
} from './profile.module.css'


const Profile = ()=>{
    const { user, login } = useContext(UserContext)
    const [editProfile, setEditProfile] = useState(false)
    const [ formData, setFormData ] = useState(null)
    useEffect(()=>{
        if(user){
            setFormData({
                student_id: user.student_id,
                student_name: user.student_name,
                student_age: user.student_age,
                student_nationality: user.student_nationality,
                student_state: user.student_state,
                student_grade: user.student_grade,
                student_institution: user.student_institution,
                student_phone: user.student_phone,
                student_email: user.student_email,
                student_password: user.student_password
            })
        }
    },[user])
    const handleChange = (evt)=>setFormData({
        ...formData,
        [evt.target.name]: evt.target.value
    })
    const handleReset = ()=>setFormData({
        student_name: user.student_name,
        student_age: user.student_age,
        student_nationality: user.student_nationality,
        student_state: user.student_state,
        student_grade: user.student_grade,
        student_institution: user.student_institution,
        student_phone: user.student_phone,
        student_email: user.student_email,
        student_password: user.student_password
    })
    const updateProfile = async(evt)=>{
        evt.preventDefault()
        try {
            const response = await axios.put(
                `${process.env.BASE_URL_API}api/auth/update-user/${user.student_id}`,
                formData
            )
            if(response.status === 200){
                login(formData)
                Swal.fire({
                    title: `${response.data.message}`,
                    icon: 'success',
                    showCloseButton: true,
                    showCancelButton: false,
                    showConfirmButton:false,
                    focusConfirm: false,
                  })
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    return(
        <>
            {
                !user ? null:
                <Container>
                    <Title>Mis datos</Title>
                    <div className={`${profileContainer} boxShadow flexContainer`}>
                        {
                            !user ? null
                            :
                            <>
                                < BiUserCircle />
                                <div className={profileItems}>
                                        {
                                            !editProfile ?
                                            <>
                                                <span className={profiileItem}>                                            
                                                {user.student_name}
                                                </span>
                                                <span className={profiileItem}>                                        
                                                {user.student_grade}
                                                </span>
                                                <span>
                                                    <button
                                                    onClick={()=>setEditProfile(!editProfile)}
                                                    className={openEditProfile}
                                                    >
                                                    Actualizar mis datos
                                                    </button>
                                                </span>
                                            </>
                                             :
                                            null
                                        }
                                    {
                                        !editProfile ? null:
                                        <form className={editProfileForm} onSubmit={updateProfile}>
                                            <label>Nombre:</label>
                                            <input
                                            type='text'
                                            defaultValue={user.student_name}
                                            name='student_name'
                                            onChange={handleChange}                                            />
                                            <label>Edad:</label>
                                            <input
                                            type='number'
                                            defaultValue={user.student_age}
                                            name='student_age'
                                            onChange={handleChange}
                                            />
                                            <label>Nacionalidad:</label>
                                            <input
                                            type='text'
                                            defaultValue={user.student_nationality}
                                            name='student_nationality'
                                            onChange={handleChange}
                                            />
                                            <label>Lugar de procedencia:</label>
                                            <input
                                            type='text'
                                            defaultValue={user.student_state}
                                            name='student_state'
                                            onChange={handleChange}
                                            />
                                            <label>Perfil profesional:</label>
                                            <input
                                            type='text'
                                            defaultValue={user.student_grade}
                                            name='student_grade'
                                            onChange={handleChange}
                                            />
                                            <label>Institución de procedencia donde trabaja actualmente</label>
                                            <input
                                            type='text'
                                            defaultValue={user.student_institution}
                                            name='student_institution'
                                            onChange={handleChange}
                                            />                                
                                            <label>Teléfono</label>
                                            <input
                                            type='number'
                                            defaultValue={user.student_phone}
                                            name='student_phone'
                                            onChange={handleChange}
                                            />
                                            <label>Correo electrónico:</label>
                                            <input
                                            type='text'
                                            defaultValue={user.student_email}
                                            name='student_email'
                                            onChange={handleChange}
                                            />
                                            <label>Contraseña:</label>
                                            <input
                                            type='text'
                                            defaultValue={user.student_password}
                                            name='student_password'
                                            onChange={handleChange}
                                            />    
                                            <div>
                                            <button
                                                className={editProfileButton}
                                            >
                                                Actualizar
                                            </button>
                                            <button
                                                onClick={()=>{
                                                    setEditProfile(!editProfile)
                                                    handleReset()
                                                }}
                                                className={closeEditProfile}
                                            >
                                                Cancelar
                                            </button>
                                            </div>
                                        </form>
                                    }
                                </div>
                            </>
                        }
                    </div>
                </Container>
            }
        </>
    )
}
export default Profile