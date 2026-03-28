import React, { useContext, useState } from 'react'
import "../auth.form.scss"
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { AuthContext } from '../../features/auth/auth.context'
import { loginUser } from '../services/auth.api'

const Login = () => {
    const {loading, handleLogin} = useAuth()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const {user,setUser} = context

    const handleSignIn =async(e)=>{
        e.preventDefault()
        await handleLogin({email,password})
        // const response = await loginUser({email,password})
        // console.log(response)
        navigate("/")
    }
    if(loading){
        return (
            <main><h1>Loading ...</h1></main>
        )
    }
  return (
    <main>
        <div className='form-container'>
            <form onSubmit={handleSignIn}>
                <h1>
                Login
            </h1>
            <div className='input-group'>
                <label htmlFor='email' >Email</label>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" id="email" name="email" placeholder='Enter your email'/>
            </div>

            <div className='input-group'>
                <label htmlFor='password' >Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" placeholder='Enter your Password'/>
            </div>

            <button className='button primary-button'>Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>

        </div>
    </main>
  )
}

export default Login