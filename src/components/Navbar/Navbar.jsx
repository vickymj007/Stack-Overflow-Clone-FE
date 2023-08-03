import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import logo from '../../assets/logo-stackoverflow.png'
import search_icon from '../../assets/searchs_icon.png'
import stack_overflow_icon from '../../assets/stackoverflow-color-icon.svg'
import './Navbar.css'
import { logOut, login } from '../../redux/features/userSlice'
import {FaTrophy} from 'react-icons/fa'
import {BiSolidHelpCircle} from 'react-icons/bi'
import {FaInbox} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {avatar} from '../Main/Users/avatar.js'

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector(state => state.user)

    useEffect(()=>{
        const isUser =JSON.parse(localStorage.getItem('user'))
        if(isUser){
            dispatch(login(isUser))
        }
    },[dispatch])

    const [showPopUp,setShowPopUp] = useState(false)

    const handleLogout = ()=>{
        dispatch(logOut())
        localStorage.removeItem('user')
        navigate('/login')
    }

  return (
    <nav>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='Stack Overflow logo' className='logo'/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <img src={search_icon} alt="Search icon" className='icons search-icon'/>
                <input type='text' placeholder='Search...'/>
            </form>
            {user ? 
                <div className='user-login-info'>
                    <div className='nav-user-links'>
                        <Link to='/current-user'><img src={avatar[user.avatar_id-1]} alt="Avatar" /></Link>
                    </div>
                    <div className='nav-user-links'>
                        <FaInbox/>
                    </div>
                    <div className='nav-user-links'>
                        <FaTrophy/>
                    </div>
                    <div className='nav-user-links'>
                        <BiSolidHelpCircle/>
                    </div>
                    <div className='nav-user-links' onClick={()=>setShowPopUp(!showPopUp)}>
                        <span><GiHamburgerMenu/></span>
                        {showPopUp && 
                        <div className='logout-popup'>
                            <div className='logout-popup-head'>
                                CURRENT COMMUNITY
                            </div>
                            <div className='logout-popup-body'>
                                <div><span><img src={stack_overflow_icon} alt="Stack overflow icon" /></span>Stack Overflow</div>
                                <div className='popup-logout-btns'>
                                    <p>help</p>
                                    <p>chat</p>
                                    <p 
                                        onClick={handleLogout}
                                    >log out</p>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            :
            // <Link to='/auth' className='nav-item nav-links'>Login</Link>
                <div className='login-links'>
                    <Link 
                        className='btn login-btn'
                        to='/login'
                    >Log in</Link>
                    <Link 
                        to='/signup'
                        className='btn signup-btn'
                    >Sign up</Link>
                </div>
            }
        </div>
    </nav>
  )
}

export default Navbar