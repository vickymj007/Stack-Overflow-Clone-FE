import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import stack_overflow_logo from '../../assets/stackoverflow-color-icon.svg'
import './Auth.css'
import GoogleBtn from './GoogleBtn'
import GithubBtn from './GithubBtn'
import FacebookBtn from './FacebookBtn'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='login-social-links'>
                <img src={stack_overflow_logo} alt="Stack overflow logo" />
                <GoogleBtn/>
                <GithubBtn/>
                <FacebookBtn/>
            </div>
            <form className='login-form'>
                <div>
                    <label htmlFor='email'>Email</label> <br />
                    <input type="email" id='email' value={email}/>
                </div>
                <div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <Link to='/forgot-password'>Forgot password?</Link>
                    </div>
                    <input type='password' id='password' value={password}/>
                </div>
                <input type='submit' value="Log in"/>
            </form>
            <div>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                <p>Are you an employer? <Link to='#'>Sign up on Talent</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login