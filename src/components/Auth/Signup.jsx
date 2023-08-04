import React, { useState } from 'react'
import GoogleBtn from './GoogleBtn'
import GithubBtn from './GithubBtn'
import FacebookBtn from './FacebookBtn'
import { Link, useNavigate } from 'react-router-dom'
import {HiMiniTrophy} from 'react-icons/hi2'
import {AiFillTags} from 'react-icons/ai'
import {BsArrowsExpand} from 'react-icons/bs'
import {RiQuestionnaireFill} from 'react-icons/ri'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import {URL}from '../../url.js'
import {toast} from 'react-toastify'


const Signup = () => {
    const navigate = useNavigate()
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [verified,setVerified] = useState(false)

    const onChange = (value)=>{
      if(value){
        setVerified(true)
      }
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      const newUser = {
        name,
        email,
        password
      }

      axios.post(`${URL}/users/signup`,newUser)
      .then(response=> response.data)
      .then(data=>{
        if(!data){
          throw Error("Unable to create new user")
        }
        toast.success("Account created successfully, Login to continue")
        navigate('/login')
      })
      .catch(error=>{
        toast.error(error.response.data)
      })

    }

  return (
    <div className='login-page'>
      <div className='sign-up-page'>
        <div className='sign-up-left-portion'>
          <h4>Join the Stack Overflow community</h4>
          <p><span><RiQuestionnaireFill/></span>Get unstuck — ask a question</p>
          <p><span><BsArrowsExpand/></span>Unlock new privileges like voting and commenting</p>
          <p><span><AiFillTags/></span>Save your favorite questions, answers, watch tags, and more</p>
          <p><span><HiMiniTrophy/></span>Earn reputation and badges</p>
          <p>Collaborate and share knowledge with a private group for FREE.<br/>
            Get Stack Overflow for Teams free for up to 50 users.</p>
        </div>
        <div className='login-container'>
            <div className='login-social-links'>
                <GoogleBtn/>
                <GithubBtn/>
                <FacebookBtn/>
            </div>
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='display-name'>Display name</label> <br />
                    <input 
                      type="text" 
                      id='display-name' 
                      value={name}
                      onChange={(e)=>setName(e.target.value)}  
                    />
                </div>
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
                    <label htmlFor='password'>Password</label>
                    <input 
                      type='password' 
                      id='password' 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
                <ReCAPTCHA
                  style={{transform:"scale(0.75)", transformOrigin:"0 0"}}
                  sitekey="6LeDayonAAAAAHrUeIZCQMXpcQZ7_S-9FDbpboZb"
                  onChange={onChange}
                />
                <div className='signup-form-checkbox'>
                  <input type='checkbox'/>
                  <span>Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</span>
                </div>
                <input 
                  type='submit' 
                  value="Sign up"
                  disabled={!verified}
                />
                <p>By clicking “Sign up”, you agree to our terms of service and acknowledge that you have read and understand our privacy policy and code of conduct.</p>
            </form>
            <div>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
                <p>Are you an employer? <Link to='#'>Sign up on Talent</Link></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup