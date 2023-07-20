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

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')



    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.get("http://localhost:5000/user")
        .then(response => response.data)
        .then(data =>{
            const user = data.find(person=> person.email=== email) 
            if(!user){
                throw Error("You dont have an account, Please Signup")
            }
            if(user.password !== password){
                throw Error("Password is incorrect")
            }
            dispatch(login(user))
            navigate('/questions')
        })
        .catch(error=>{
            alert(error.message)
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