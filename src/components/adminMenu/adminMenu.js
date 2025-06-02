import Link from 'next/link'
import { GridContainer } from '../../components'
import styles from './adminMenu.module.css'

export const AdminMenu =()=>{
    return (
        <GridContainer>
            <Link
                className={`${styles.menuOption} boxShadow`}
                href='/admin/dashboard'
            >
                    Cursos
            </Link>
            <Link
                className={`${styles.menuOption} boxShadow`}
                href='/admin/dashboard'
            >
                    Estudiantes
            </Link>
        </GridContainer>
    )
}