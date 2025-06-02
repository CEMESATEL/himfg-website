import Link from "next/link"
import styles from './privacity.module.css'
export const Privacity = ()=>{
    return (
            <div className={styles.privacityWrapper}>
                <Link
                    href='/avisos-de-privacidad'
                    className={styles.privacityButton}
                >
                    Aviso de privacidad
                </Link>
            </div>
    )
}