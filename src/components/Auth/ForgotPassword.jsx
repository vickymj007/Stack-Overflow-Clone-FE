import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { URL } from '../../url'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate()
    const btnRef = useRef()
    const inputRef = useRef({})
    const [loading,setLoading]=useState(false)

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showOtpBox, setShowOtpBox] = useState(false)
    const [showPasswordBox, setShowPasswordBox] = useState(false)
    const [buttonText,setButtonText]=useState("Get OTP")

    const [otp,setOtp] = useState(new Array(4).fill(''))

    useEffect(()=>{
        inputRef.current[0].addEventListener("paste",(e)=>{
            const pastedText = e.clipboardData.getData("text")
            const fieldValues = []
            otp.forEach((val,index)=>{
                fieldValues[index] = pastedText[index]
            })
            setOtp(fieldValues)
            inputRef.current[3].focus()
        })
    },[otp])


    const handleChange = (e,index)=>{
        const {value} = e.target

        if(/[a-zA-z]/g.test(value)) return

        const currentOtp = [...otp]
        currentOtp[index] = value.slice(-1)
        setOtp(currentOtp)

        if(value && index < 3){
            inputRef.current[index+1].focus()
        }
    }
    const handleBackspace = (e,index)=>{
        if (e.key === "Backspace") {
            if(index > 0){
                inputRef.current[index -1].focus()
            }
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        const config = {
            headers: {
              "Content-Type": "application/json"
              },
              withCredentials: true
            }
            
        setLoading(true)
        if(btnRef.current.innerText === "Get OTP"){
            axios.post(`${URL}/users/forgot-password`,{email},config)
            .then(response=>{
                setButtonText("Verify OTP")
                setShowOtpBox(true)
                toast.success(response.data.msg)
                setLoading(false)
                inputRef.current[0].focus()
            })
            .catch(error=>{
                toast.error(error.response.data.msg)
                setLoading(false)
            })
        } else if(btnRef.current.innerText === "Verify OTP") {
            if(otp.some(val => val === '')){
                setLoading(false)
                return toast.warn("Please fill all the fields")
            }
            
            axios.put(`${URL}/users/forgot-password`,{otp:otp.join("")},config)
            .then(response=>{
                toast.success(response.data.msg)
                setButtonText("Change Password")
                setLoading(false)
                setShowOtpBox(false)
                setShowPasswordBox(true)
            })
            .catch(error=>{
                toast.error(error.response.data.msg)
                setLoading(false)
            })
        } else {
            if(password !== confirmPassword){
                toast.error("Password does not match")
                setLoading(false)
                return
            }
            axios.put(`${URL}/users/change-password`,{email,password})
            .then(response=>{
                toast.success(response.data.msg)
                setLoading(false)
                navigate('/login')
            })
            .catch(error=>{
                toast.error(error.response.data.msg)
                setLoading(false)
            })
        }
    }

  return (
    <div className='forgot-password-page'>
        <form className='login-form forgot-password' onSubmit={handleSubmit}>
            <p>Forgot your account's password? Enter your email address and we'll send you a OTP to change your password.</p>
            <label htmlFor="recovery-email">Email</label>
            <input
                disabled={false}
                id='recovery-email'
                type="text"
                required={true}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}    
            />
            <div className={`otp-popup ${showOtpBox && "open"}`}>
                <label>Enter OTP</label>
                <div>
                    {otp.map((val,index)=>(
                        <input 
                            type="text" 
                            key={index}
                            value={val}
                            ref={(element)=> (inputRef.current[index]=element)}
                            onChange={(e)=>handleChange(e,index)}
                            onKeyUp={(e)=>handleBackspace(e,index)}
                        />
                    ))}
                </div>
            </div>
            <div className={`change-password-popup ${showPasswordBox && "open"}`}>
                <label htmlFor="password">Enter New Password</label>
                <input
                    id='password'
                    type="password" 
                    required={false}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}    
                />
                <label htmlFor="confirm-password">Re-enter Password</label>
                <input
                    id='confirm-password'
                    type="password" 
                    required={false}
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}    
                />
            </div>
            {loading ? 
                <div className='loader'></div>
            :
            <button ref={btnRef}>{buttonText}</button>
            }
        </form>
    </div>
  )
}

export default ForgotPassword