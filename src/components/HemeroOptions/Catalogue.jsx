import styles from './hemeroOptions.module.css'

export const Catalogue = ()=>{
    return (
        <div className={styles.hemeroList}>
            <p>Catálogo electrónico de libros y tesis de la Hemerobiblioteca </p>
            <p>Revistas y Tesis del Hospital Infantil de México Federico Gómez </p>
            <figure>
                <a
                    href='https://www.bidi.unam.mx/'
                    target='_blank'
                >
                    <img
                    src='https://archivos.him.edu.mx/graficos/ensenanza/hemerobiblioteca/hemero_catalogo.png'
                    className={styles.hemeroListImage}
                    />
                </a>
            </figure>
        </div>
    )
}