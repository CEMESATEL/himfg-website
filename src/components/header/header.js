import Link from 'next/link'
import styles from './header.module.css'
import { FaBars } from "react-icons/fa6";
import { useState, useContext } from 'react'
import { UserContext } from '../../contexts'
import { Submenu } from './submenu';

export const Header = () => {
    const { user, logout } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const open = () => setIsOpen(!isOpen)
    return (
        <>
            <header className={styles.headerWrapper}>
                <nav className={`${styles.headerNav} flexContainer`}>
                    <a
                        href='https://www.gob.mx/'
                        target='_blank'
                    >
                        <img
                            src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677008056/gob-logo_bmloho.webp'}
                            alt='Gobierno de México'
                        />
                    </a>
                    <button className={styles.buttonMenu} onClick={open}>
                        Menú
                    </button>
                    <ul className={`${styles.headerNavList} ${!isOpen ? '' : styles.active}`}>
                        {
                            !user ?
                                <>
                                    <li>
                                        <Link href='/' onClick={open}>
                                            Inicio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/requisitos' onClick={open}>
                                            Consulta de primera vez
                                        </Link>
                                    </li>
                                    <li>
                                        <a href='http://himfg.com.mx/interna/transparencia/transparencia.php' target='_blank'>
                                            Transparencia
                                        </a>
                                    </li>
                                    <li>
                                        <a href='http://himfg.com.mx/interna/p_datos/pdp.php' target='_blank'>
                                            Protección de datos personales
                                        </a>
                                    </li>
                                    {/*<li>
                            <Link href='/userlogin' onClick={open}>
                                Iniciar sesión
                            </Link>
                        </li>*/}
                                    <li>
                                        <Link href='/sesion-clinico-patologica' onClick={open}>
                                            Sesión Clínico Patológica
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/dano-cero' onClick={open}>
                                            Daño cero
                                        </Link>
                                    </li>
                                    <li>
                                        <a href='https://oferta-academica.himfg.edu.mx/' onClick={open}>
                                            Oferta Académica
                                        </a>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link href='/' onClick={open}>
                                            Inicio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/video/scp-2024' onClick={open}>
                                            Sesión Clínico Patológica
                                        </Link>
                                    </li>
                                    <li>
                                        <a href='http://himfg.com.mx/interna/transparencia/transparencia.php' target='_blank'>
                                            Transparencia
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://oferta-academica.himfg.edu.mx/' onClick={open}>
                                            Oferta Académica
                                        </a>
                                    </li>
                                    <li>
                                        <Link href='/profile' onClick={open}>
                                            Perfil
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={logout}>Cerrar sesión</button>
                                    </li>
                                </>
                        }
                    </ul>
                </nav>
            </header>
            <div className={`${styles.imageContainer} flexContainer`}>
                <Submenu />
                <div className={styles.imageContainerItem}>
                    <img
                        src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677008422/secretaria-salud_tqz45u.webp'}
                        alt='Gobierno de México'
                        className={styles.imgSecretary}
                    />
                </div>
                <div className={`${styles.headerIconNav} ${styles.imageContainerItem}`}>
                    <p>Hospital Infantil de México Federico Gómez</p>
                    <img
                        src={'https://res.cloudinary.com/diuxbqmn5/image/upload/v1677114497/himfg-logo_ewzx59.webp'}
                        alt='HIMFG'
                        className={styles.logo}
                    />
                </div>
            </div>
        </>
    )
}