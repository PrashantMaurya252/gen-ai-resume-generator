import React, { useState } from 'react'
import "../auth.form.scss"
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const navigate = useNavigate()
    const {handleRegister,loading} = useAuth()
    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:"",
    })
    const [showPassword,setShowPassword] = useState(false)
    const [errorMessage,setErrorMessage] = useState({})

    const handleSignUp =(e)=>{
        e.preventDefault()
        handleRegister(formData)
        navigate("/login")
    }

    const handleOnChange = (e)=>{
        const {name,value} = e.target
        setFormData((prev)=>({...prev,[name]:value}))
    }

    if(loading){
        return (
            <main><h1>Loading ...</h1></main>
        )
    }
  return (
    <main>
        <div className='form-container'>
            <form onSubmit={handleSignUp}>
                <h1>
                Register
            </h1>
             <div className='input-group'>
                <label htmlFor='username' >Username</label>
                <input type="username" id="username" name="username" placeholder='Enter your Username' onChange={handleOnChange} value={formData.username}/>
            </div>
            <div className='input-group'>
                <label htmlFor='email' >Email</label>
                <input type="email" id="email" name="email" placeholder='Enter your email' onChange={handleOnChange} value={formData.email}/>
            </div>

            <div className='input-group'>
                <label htmlFor='password' >Password</label>
                <input type="password" id="password" name="password" placeholder='Enter your Password' onChange={handleOnChange} value={formData.password}/>
            </div>

            <button className='button primary-button'>Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            

        </div>
    </main>
  )
}

export default Register