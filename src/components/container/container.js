import styles from './container.module.css'

export const Container = ({children})=>{
    return (
        <section className={styles.containerWrapper}>
            {children}
        </section>
    )
}