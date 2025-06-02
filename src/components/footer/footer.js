import styles from './footer.module.css'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { RiTwitterXLine } from "react-icons/ri";
export const Footer = ()=>{
    return (
        <footer className={styles.footerWrapper}>
            <ul className={`${styles.footerList} flexContainer`}>
                <div>
                    <li>Redes sociales</li>
                    <br />
                    <div className={styles.socialmedia}>
                    <li>
                        <a
                        href='https://www.facebook.com/HospitalInfantilDeMexicoFG/?locale=es_LA'
                        target={'_blank'}
                        >
                            <BsFacebook />
                        </a>
                    </li>
                    <li>
                        <a
                        href='https://twitter.com/T_HIMFG'
                        target={'_blank'}
                        >
                            <RiTwitterXLine />
                        </a>
                    </li>
                    <li>
                        <a
                        href='https://www.instagram.com/him_fg/'
                        target={'_blank'}
                        >
                            <BsInstagram />
                        </a>
                    </li>
                    <li>
                        <a
                        href='https://www.youtube.com/c/CEMESATELHIMFG/videos'
                        target={'_blank'}
                        >
                            <BsYoutube />
                        </a>
                    </li>
                    </div>
                </div>
                <div>
                    <li>Dirección</li>
                    <br />
                    <li>
                        Dr. Márquez No. 162, Col. Doctores, Alcaldía Cuauhtémoc; CDMX C.P 06720
                    </li>
                </div>
                <div>
                    <li>Teléfono</li>
                    <br />
                    <li>
                        55-52-28-99-17
                    </li>
                </div>
            </ul>
            <p className={styles.copyRight}>
                HIMFG - Todos los derechos reservados &copy;
            </p>
        </footer>
    )
}