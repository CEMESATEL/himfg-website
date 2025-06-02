import Link from 'next/link'
import { Title } from '@/components'
import styles from './staff.module.css'

export const Staff = ({list})=>{
    return (
        <section className={`${styles.staffWrapper}`}>
            <h6>Staff</h6>
            <ul className={`${styles.staffList}`}>
                {
                    list.map((colaborator, i)=>(
                        <li key={i}>
                                <Link
                                    href={colaborator.link}
                                    className={styles.staffLink}
                                >
                                    {colaborator.name}
                                </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}