import { useContext, useEffect } from 'react'
import {CourseContext} from '@/contexts'
import { Courses, Container, Title, Menu, PageBanner } from '../../components'
import styles from './offer.module.css'

const CoursesList = ()=>{
    const {logout} = useContext(CourseContext)
    useEffect(()=>{
        logout()
    },[])
    return (
        <>
        <PageBanner
          title='Departamento de Educación Médica Contínua'
        />
        <Container>
          <Courses />
        </Container>
        </>
      )
}

export default CoursesList