import styles from './styles.module.css'
import { showCurriculum } from './Curriculum'

export const Investigador = ({ investigador }) => {
    return (
        <section className={styles.investigadorWrapper}>
            <div className={`flexContainer ${styles.investigadorTitulos}`}>
                {
                    !investigador || !investigador.investigador_foto ?
                        null :
                        <figure className={styles.investigadorImagen}>
                            <img
                                src={investigador.investigador_foto}
                                alt={investigador.investigador_nombre}
                            />
                        </figure>
                }
                <div className={styles.investigadorTextos}>
                    {
                        !investigador || !investigador.investigador_nombre? null :
                            <div className={styles.investigadorNombre}>
                                <p>{investigador.investigador_nombre}</p>
                            </div>
                    }
                    <div className={styles.investigadorLink}>
                        <button onClick={() => showCurriculum({ investigador })}>Ver síntesis curricular</button>
                    </div>
                </div>
            </div>
        </section>
    )
}