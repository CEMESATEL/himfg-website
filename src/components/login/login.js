import styles from './login.module.css'
import { AiOutlineLock } from 'react-icons/ai'

export const Login = ({children, onSubmit})=>{
    return (
        <div className='flexContainer'>
            <form
            onSubmit={onSubmit}
            className={`${styles.formLogin} boxShadow`}
            >
                <label className={styles.formIcon}>
                    <AiOutlineLock />
                </label>
                {children}
            </form>
        </div>
    )
}