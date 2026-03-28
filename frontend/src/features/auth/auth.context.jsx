import { useEffect, useState } from "react";
import { createContext } from "react";
import { getMe } from "../../auth/services/auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const getSetUser = async()=>{
            const response = await getMe()
            setUser(response.data)
            setLoading(false)
        }

        getSetUser()
    },[])

    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}