import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import logo from '../../assets/logo-stackoverflow.png'
import search_icon from '../../assets/searchs_icon.png'
import inbox_logo from '../../assets/inbox-log.png'
import trophy_logo from '../../assets/trophy-icon.png'
import help_logo from '../../assets/help_logo.png'
import list_logo from '../../assets/list-icon.svg'
import stack_overflow_icon from '../../assets/stackoverflow-color-icon.svg'
import './Navbar.css'
import { logOut, login } from '../../redux/features/userSlice'

const Navbar = () => {
    const dispatch = useDispatch()
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
                        <p>{user.name.slice(0,1)}</p> 
                    </div>
                    <div className='nav-user-links'>
                        <img src={inbox_logo} alt='Inbox Logo' className='icons'/>
                    </div>
                    <div className='nav-user-links'>
                        <img src={trophy_logo} alt='Acheivements Logo' className='icons'/>
                    </div>
                    <div className='nav-user-links'>
                        <img src={help_logo} alt='Help Logo' className='icons'/>
                    </div>
                    <div className='nav-user-links' onClick={()=>setShowPopUp(!showPopUp)}>
                        <img src={list_logo} alt='List Logo' className='icons'/>
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