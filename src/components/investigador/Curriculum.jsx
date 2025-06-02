import Swal from "sweetalert2"
import { Title } from '@/components'
import styles from './styles.module.css'
import withReactContent from "sweetalert2-react-content"

const Alert = withReactContent(Swal)

export const showCurriculum = ({ investigador }) => {
    return Alert.fire({
        html: <Curriculum investigador={investigador} />,
        customClass: {
            container: styles.curriculumWrapper
        },
        showConfirmButton: false,
        showCloseButton: true,
        width: '80%',
    })
}
const Curriculum = ({ investigador }) => {
    return (
        <section className={styles.curriculumWrapper}>
            <Title>{!investigador ? '' : investigador.nombre}</Title>
            <div className={`${styles.sintesisWrapper} flexContainer`}>
                {
                    !investigador ?
                        null :
                        <div className={styles.sintesisTextos}>
                            <div>
                                <iframe
                                    src={investigador.investigador_sintesis}
                                    frameBorder='0'
                                />
                            </div>
                        </div>
                }
            </div>
        </section>
    )
}