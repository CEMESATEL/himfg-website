import { useState, useContext } from 'react'
import Link from 'next/link'
import { months } from './consts'
import styles from './courses.module.css'
import { Loader, Title, GridContainer } from '../../components'
import Card from '../../components/card/card'
import { useFetch } from '../../hooks'
import { UserContext } from '../../contexts'

export const Courses = ()=>{
    const {user} = useContext(UserContext)
    const [selectedMonth, setSelectedMonth]= useState(months[new Date().getMonth()])
    const [loading, data]= useFetch({
        url: `${process.env.BASE_URL_API}api/courses/all-courses`
    })
    let filteredCourses;
    //let nextMonth = (selectedMonth.id) + 1
    if(data) filteredCourses = data.data.filter((course)=> course.month_id === selectedMonth.id)
    return (
        <section className={styles.coursesWrapper}>
                {<ul className={`${styles.monthBar} flexContainer boxShadow`}>
                    {months.map((month)=>(
                        <li key={month.id} onClick={()=> setSelectedMonth(month)}>
                            <a href={`#cursos-2025`}>
                                {month.name}
                            </a>
                        </li>
                    ))}
                    </ul>}
            {!loading?
            <div id={`cursos-2025`}>
                <Title>Oferta educativa - {selectedMonth.name}</Title>
                <GridContainer>
                {
                    filteredCourses.map((course)=>{
                        return (
                            <Card
                                key={course.course_id}
                                course={course}
                            />
                        )
                    })
                }
                </GridContainer>
            </div>
            :<Loader message='Cargando oferta académica'/>}
            </section>   
    )
}