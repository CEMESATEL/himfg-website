import { createContext, useEffect, useState } from "react"
import { setItem, getItem, removeItem } from "@/helpers"

export const CourseContext = createContext()

export const CourseProvider = ({children})=>{
    const [course, setCourse] = useState(null)
    useEffect(()=>{
        setCourse(JSON.parse(localStorage.getItem('course')))
    },[])
    const login = (course)=>{
        setItem('course', course)
        setCourse(getItem('course'))
    }
    const logout = ()=>{
        removeItem('modality')
        removeItem('course')
        setCourse(null)
    }
    return (
        <CourseContext.Provider value={{course, login, logout}}>
            {children}
        </CourseContext.Provider>
    )
}