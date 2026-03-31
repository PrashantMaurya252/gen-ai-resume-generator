import { useContext, useEffect } from "react";
import { AuthContext } from "../../features/auth/auth.context";
import {loginUser,registerUser,logout,getMe} from '../services/auth.api'


export const useAuth = ()=>{
    const context = useContext(AuthContext)
    const {user,setUser,loading,setLoading} = context

    const handleLogin = async({email,password})=>{
        try {
            setLoading(true)
            const response = await loginUser({email,password})
            console.log(response)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }    
    }

    const handleRegister = async({username,email,password})=>{
        try {
            setLoading(true)
            const response = await registerUser({username,email,password})
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }    
    }

    const handleLogout = async({email,password})=>{
        try {
            setLoading(true)
            const response = await logout()
            setUser(null)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }    
    }

    useEffect(()=>{
        const getSetUser = async()=>{
            try {
                const response = await getMe()
            setUser(response.data)
            } catch (error) {
                console.log("Get User Error",error)
            }finally{
                setLoading(false)
            }
        }

        getSetUser()
        
    },[])

    return {user,loading,handleLogin,handleRegister,handleLogout}
}


