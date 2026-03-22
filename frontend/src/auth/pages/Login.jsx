import React from 'react'
import "../auth.form.scss"
import { Link } from 'react-router'

const Login = () => {

    const handleSignIn =(e)=>{
        e.preventDefault()
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
                <input type="email" id="email" name="email" placeholder='Enter your email'/>
            </div>

            <div className='input-group'>
                <label htmlFor='password' >Password</label>
                <input type="password" id="password" name="password" placeholder='Enter your Password'/>
            </div>

            <button className='button primary-button'>Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>

        </div>
    </main>
  )
}

export default Login