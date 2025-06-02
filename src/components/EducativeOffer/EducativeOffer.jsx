import Link from 'next/link'
import { Title } from '../title/title'
import styles from './educativeoffer.module.css'

export const EducativeOffer = ()=>{
    return (
        <div className={styles.educativeOfferWrapper}>
            <figure>
                <img src='https://himfg.edu.mx/archivos/graficos/ensenanza/pre-y-posgrado/oferta-academica.png'/>    
            </figure>
            <h2 className={styles.registerTitle}>
                Proceso de registro
            </h2>
                <div className={styles.convocatoriaWrapper}>
                    <Link
                        className={styles.adTitle}
                        href='/convocatoria'
                    >
                        <span>Residencias médicas 2024-2025</span>
                    </Link>
                </div>
            <div className={`flexContainer ${styles.adsWrapper}`}>
                <div>
                    <span
                        className={styles.adSubtitle}
                    >
                        Pregrado
                    </span>
                    <ul className={styles.adList}>
                        <li>
                        <Link
                        href='/inscripcion-pre-y-posgrado/pregrado'
                        >
                            Estancias, tesis, servicio social, prácticas profesionales
                        </Link>
                        </li>
                        <li>
                        <Link
                        href='/inscripcion-pre-y-posgrado/internos'
                        >
                            Médicos internos de pregrado
                        </Link>
                        </li>
                        <li>
                        <a
                            href='https://himfg.edu.mx/inscripcion-pre-y-posgrado/reglamento/reglamento-pasantes-y-MIP.pdf'
                            target='_blank'
                        >
                                Reglamento pregrado y médicos internos de pregrado
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <span
                        className={styles.adSubtitle}
                    >
                        Posgrado
                    </span>
                <ul className={styles.adList}>
                        <li>
                            <Link
                                href='/inscripcion-pre-y-posgrado/posgrado'
                            >
                                Médicos rotantes
                            </Link>
                        </li>
                        <li>
                            <a
                                href='https://himfg.edu.mx/inscripcion-pre-y-posgrado/reglamento/reglamento-rotantes-2025.pdf'
                                target='_blank'
                            >
                                Reglamento para médicos residentes en rotación
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://himfg.edu.mx/inscripcion-pre-y-posgrado/reglamento/lineamientos.pdf'
                                target='_blank'
                            >
                                Lineamientos para rotación clínica en el HIMFG
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://himfg.edu.mx/inscripcion-pre-y-posgrado/reglamento/reglamento-residentes-2025_final.pdf'
                                target='_blank'
                            >
                                Reglamento de médicos residentes
                            </a>
                        </li>
                </ul>
                </div>
            </div>            
        </div>
    )
}