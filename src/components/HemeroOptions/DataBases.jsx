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
                    <img src='https://d45jl3w9libvn.cloudfront.net/jaypee/static/img/pub/header-jaypee.png'/>
                </figure>
            </a>
            <a
                href='http://www.clinicalkey.es'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://blobuvap.blogs.uva.es/files/2021/03/ClinicalKey.jpg'/>
                </figure>
            </a>
            <a
                href='https://onlinelibrary.wiley.com/'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='https://onlinelibrary.wiley.com/pb-assets/hub-assets/pericles/logo-header-1690978619437.png'/>
                </figure>
            </a>
            <a
                href='http://187.141.21.244/bmhim/consulta.html'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='http://187.141.21.244//images/boletin_elsevier_4.gif'/>
                </figure>
            </a>
            <a
                href='http://187.141.21.244/repositorio/'
                terget='_blank'
                className={styles.hemeroListImage}
            >
                <figure>
                    <img src='http://187.141.21.244//images/boletin_elsevier_4.gif'/>
                </figure>
                <span>Boletín Médico del Hospital Infantil de México</span>
            </a>
        </div>
    )
}