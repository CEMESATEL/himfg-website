import { useState, createContext } from "react";

export const AdminContext = createContext()

export const AdminProvider = ({ children })=>{
    const [admin, setAdmin] = useState(null)
    const saveAdmin = (admin)=>{
        setAdmin(admin)
        return localStorage.setItem('admin', JSON.stringify(admin))
    }
    const deleteAdmin = ()=>{
        setAdmin(null)
        return localStorage.clear()
    }
    return (
        <AdminContext.Provider value={{admin, saveAdmin, deleteAdmin}}>
            {children}
        </AdminContext.Provider>
    )
}