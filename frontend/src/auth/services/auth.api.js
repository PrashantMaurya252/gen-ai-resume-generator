import axios from 'axios'



const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const api = axios.create({
    baseURL:BACKEND_URL,
    withCredentials:true
})
export const registerUser =async({username,email,password})=>{
    try {
        const res =await api.post(`/api/auth/register`,{username,email,password})
        return res.data
    } catch (error) {
        console.log("Register user error",error)
    }
}


export const loginUser =async({email,password})=>{
    try {
        const res =await api.post(`/api/auth/login`,{email,password})
        // console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const logout =async()=>{
    try {
        const res = await api.get(`/api/auth/logout`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getMe =async()=>{
    try {
        const res =await api.get(`/api/auth/get-me`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}