import { useState, useEffect, useContext } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"
import axios from "axios"
import Swal from "sweetalert2"
import styles from './cursos2025/video.module.css'
import { useOnChange } from "../hooks"
import { UserContext } from "@/contexts"
import { Container, GridContainer, Login } from '../components'

const Video = (props)=>{
    const id = useRouter()
    const { user }= useContext(UserContext)
    const [count, setCount] = useState(1)
    const [degrees, setDegrees] = useState(null)
    const [password, setPassword] = useState(null)
    const [course, setCourse] = useState(null)
    const [ vimeoData, setVimeoData ] = useState(null)
    const [inputData, onChange, onReset]= useOnChange()
    const getDegrees=async()=>{
        try {
            const response = await axios.get(
                `${process.env.BASE_URL_API}api/payments/all-payments`
            )
            if(response.data){
                setDegrees(response.data)
            }
        } catch (error) {
            
        }
    }
    const login = async(evt)=>{
        evt.preventDefault()
        try {
            const resp = await axios.post(
                `${process.env.BASE_URL_API}api/courses/course-login`,
                inputData
            )
            if(!resp.data.rows){
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
            setPassword(inputData)
            setCourse(resp.data.rows)
            getVimeoData({
                id: resp.data.rows[0].course_vimeo_folder
            })
            onReset()
        } catch (error) {
            throw new Error(error)
        }
    }
    const getVimeoData = async({id})=>{
        try {
            const resp = await axios.get(
                `https://api.vimeo.com/me/folders/19427745/videos?page=${count}`,
                {
                    headers: { Authorization: `Bearer 586637bf90ea7727edc8c90c95b056c3` }
                }
            )
            if(resp.status === 200){
                setVimeoData(resp.data)
            }
        } catch (error) {
            throw new Error(error)
        }
    }
    const increment = ()=>setCount(count + 1)
    const decrement = ()=> setCount(count - 1)
    useEffect(()=>{
        if(course){
            getVimeoData({id: course[0].course_vimeo_folder})
        }
    },[count])
    useEffect(()=>{
        if(window.dataLayer){
          window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1YHJW3W0J0');
        }
      }, [])
      let filteredDegrees
        if(degrees && user){
        filteredDegrees = degrees.filter((degree)=> degree.student_id === user.student_id)
        .map(degree=>degree)
    }
    useEffect(()=>{
        getDegrees()
    },[password])
    return (
        <>
            <Head>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ID_ANALYTICS}`}></script>
                <title>
                {
                !course ? 
                'Ingresar al curso'
                :
                course[0].course_name
               }
                </title>
            </Head>
            <Container>
            <h3 className={styles.videoTitle}>
               {
                !course ? 
                'Ingrese la contraseña para acceder al curso'
                :
                course[0].course_name
               }
            </h3>
            {
                !password ?
                <>
                    <Login onSubmit={login}>
                    <label>Contraseña:</label>
                    <input
                    type='password'
                    required
                    onChange={onChange}
                    name='course_password'
                    />
                    <button>Ingresar</button>
                    </Login>
                    {
                    /*id.asPath === '/cursos2025/scp-2025/' || id.asPath === '/cursos2025/scp-2025'?*/
                    <>
                        <center>
                        <br/>
                        <a
                            href='https://forms.gle/SBfHiqLYUiWY4F976'
                            className={styles.formLink}
                            target='_blank'
                        >
                            Formulario de registro a la Sesión Clínico Patológica
                        </a>
                        </center>
                        <br/>                    
                        <center>
                        <br/>
                        <p className={styles.formMessage}>
                        <b>ATENTO AVISO</b> este registro será habilitado hasta las 11:00 am
                            del 19 de Marzo del 2025, razón por la cual te sugerimos hacer tu registro
                            con tiempo para que se te pueda enviar sin contratiempos tu clave de acceso.
                        </p>
                        </center>
                    </>
                    /*:
                    null*/
                }
                </>          
            :
            <>
            {
                !course[0].course_live_video
                ? null
                :
                course.map(({course_live_video, course_id, course_name})=>(
                    <>
                    <div
                    className={`${styles.liveVideo} flexContainer boxShadow`}
                    key={course_id}
                    >
                    <iframe
                    src={`https://vimeo.com/event/${course_live_video}/embed`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    allowFullScreen
                    />
                    <iframe
                    src={`https://vimeo.com/event/${course_live_video}/chat`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    />
                    </div>
                    {
                        course_name === 'XXVI Curso de actualización en anestesiología pediátrica'
                        ?
                    <>
                    <center><h1>Aula 2</h1></center>
                    <br />
                    <br/>
                    <div
                    className={`${styles.liveVideo} flexContainer boxShadow`}
                    key={course_id}
                    >
                    <iframe
                    src={`https://vimeo.com/event/3792638/embed`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    allowFullScreen
                    />
                    <iframe
                    src={`https://vimeo.com/event/3792638/chat`}
                    frameBorder='0'
                    allow="
                    autoplay;
                    fullscreen;
                    picture-in-picture
                    "
                    />
                    </div>
                    </>
                    :
                    null
                    }
                    </>
                ))
            }
            {
                       
                       <center>
                        <br/>
                        <a
                            href='https://himfg.edu.mx/sesion-clinico-patologica/resumen-del-caso-clinico.pdf'
                            className={styles.formLink}
                            target='_blank'
                        >
                            Resumen del caso clínico
                        </a>
                        <br/>
                        <br/>
                        </center>
                        
                    }
            {
                !course[0].course_zoom_video
                ? null
                : 
                <div className={`${styles.liveVideoZoom} flexContainer`}>
                    <a
                    href={course[0].course_zoom_video}
                    target='_blank'
                    >
                        Enlace de Zoom
                    </a>
                    <span>{`ID de reunión: ${course[0].course_zoom_id}`}</span>
                    <span>{`Código de acceso: ${course[0].course_zoom_password}`}</span>
                </div>
            }
            {
                !vimeoData
                ?
                null
                :
                <>
                <h3 className={styles.videoTitle}>
                    Transmisiones anteriores
                </h3>
                <div className={`flexContainer ${styles.testLink}`}>
                {
                    course[0].test_id && user ?
                    <Link
                    href={`/test/[...id]`}
                    as ={`/test/${course[0].course_id}`}
                    target="_blank"
                    >
                        Evaluación
                    </Link>
                    :
                    null
                }
                </div>
                <GridContainer>
                {
                    vimeoData.data.map((video, i)=>(
                        <div className={`${styles.iframeVideo} boxShadow`} key={i}>
                            <iframe
                            src={video.player_embed_url}
                            frameBorder='0'
                            allow="
                            autoplay;
                            fullscreen;
                            picture-in-picture
                            "
                            allowFullScreen
                            />
                            <span>{video.name}</span>
                        </div>
                    ))
                }
                </GridContainer>
                <div className="flexContainer">
                    {
                        vimeoData.paging.next ?
                        <button
                        className={styles.viewMoreButton}
                        onClick={increment}
                        >
                            Siguiente
                        </button>
                        :
                        null
                    }
                    {
                        vimeoData.paging.previous ?
                        <button
                        className={styles.viewMoreButton}
                        onClick={decrement}
                        >
                            Anterior
                        </button>
                        :
                        null
                    }
                    {
                        vimeoData.paging.previous  && vimeoData.paging.next ?
                        <>
                            <button
                            className={styles.viewMoreButton}
                            onClick={decrement}
                            >
                            Anterior
                            </button>
                            <button
                            className={styles.viewMoreButton}
                            onClick={increment}
                            >
                            Siguiente
                            </button>
                        </>
                        :
                        null
                    }
                </div>
                </>
            }
            </>
            }
        </Container>
        </>
    )
}
export default Video