import styles from './loaderpagecontent.module.css'

export const LoaderPageContent = ()=> {
    return (
        <div className={styles.loaderPageContentWrapper}>
            <span className={styles.loaderPageContent}></span>
            <span>Cargando contenido...</span>
        </div>
    )
}