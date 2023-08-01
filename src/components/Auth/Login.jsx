import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import stack_overflow_logo from '../../assets/stackoverflow-color-icon.svg'
import './Auth.css'
import GoogleBtn from './GoogleBtn'
import GithubBtn from './GithubBtn'
import FacebookBtn from './FacebookBtn'
import axios from 'axios'
import { login } from '../../redux/features/userSlice'
import { useDispatch } from 'react-redux'
import {toast} from 'react-toastify'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')



    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:9000/api/users/login",{email,password})
        .then(response => response.data)
        .then(data =>{
            toast.success("Successfully logged in")
            dispatch(login(data))
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/questions')
        })
        .catch(error=>{
            toast.error(error.response.data.msg)
            console.log(error);
        })
    }

  return (
    <div className='login-page'>
        <div className='login-container'>
            <div className='login-social-links'>
                <img src={stack_overflow_logo} alt="Stack overflow logo" />
                <GoogleBtn/>
                <GithubBtn/>
                <FacebookBtn/>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label> <br />
                    <input 
                        type="email" 
                        id='email' 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <Link to='/forgot-password'>Forgot password?</Link>
                    </div>
                    <input 
                        type='password' 
                        id='password' 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <input 
                    type='submit' 
                    value="Log in"
                    disabled={!email && !password}
                />
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