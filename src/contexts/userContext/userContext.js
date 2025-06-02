import { createContext, useEffect, useState } from "react"
import { setItem, getItem, removeItem } from "@/helpers"

export const UserContext = createContext()

export const UserProvider = ({children})=>{
    const [user, setUser] = useState(null)
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    const login = (user)=>{
        setItem('user', user)
        setUser(getItem('user'))
    }
    const logout = ()=>{
        removeItem('user')
        setUser(null)
    }
    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}