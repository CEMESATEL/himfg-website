import styles from './hemerooptions.module.css'

export const DataBases = ()=>{
    return (
        <div className={styles.hemeroList}>
            <a
                href='https://www.jaypeedigital.com/home'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/jaypee.png'/>
                </figure>
            </a>
            <a
                href='http://www.clinicalkey.es'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/clinicalkey.jpeg'/>
                </figure>
            </a>
            <a
                href='https://onlinelibrary.wiley.com/'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/db_wiley.jpeg'/>
                </figure>
            </a>
            <a
                href='http://187.141.21.244/bmhim/consulta.html'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/bd_bm.jpeg'/>
                </figure>
            </a>
            <a
                href='http://187.141.21.244/repositorio/'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/bd_repos.jpeg'/>
                </figure>
                <span>Boletín Médico del Hospital Infantil de México</span>
            </a>
        </div>
    )
}