import styles from './loader.module.css'
export const Loader = ({message})=> {
    return (
        <div className={`${styles.loaderWrapper} flexContainer`}>
            <span className={styles.loader}></span>
            <span>{message}</span>
        </div>
    )
}