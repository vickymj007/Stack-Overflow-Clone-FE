import React from 'react'
import { Navigate, Link, Outlet, NavLink } from 'react-router-dom'
import { avatar } from './avatar'
import { formatDistanceToNow } from 'date-fns'
import { MdCake, MdLocationOn } from 'react-icons/md'
import { AiOutlineClockCircle, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai'
import {FaDatabase } from 'react-icons/fa'
import {MdModeEditOutline } from 'react-icons/md'
import './users.css'

const CurrentUser = () => {

    const user = JSON.parse(localStorage.getItem('user'))

    if(!user){
        return <Navigate to='/login' replace={true}/>
    }

  return (
    <div className='user-info-container'>
        {user ? (
            <header>
                <img src={avatar[user.avatar_id-1]} alt='Avatar'/>
                <div>
                    <div>
                        <h2>{user.name}</h2>
                        <p><MdCake/> Member for {formatDistanceToNow(new Date(user.createdAt))} | <span><AiOutlineClockCircle/></span> Last seen this week</p>
                        <p><span><AiOutlineTwitter/> <AiFillGithub/> <MdLocationOn/></span> {user.country}</p>
                    </div>
                    <div>
                        <Link to={`/current-user/edit/${user._id}`}><button><span><MdModeEditOutline/></span> Edit</button></Link>
                        <button><span><FaDatabase/></span> Network profile</button>
                    </div>
                </div>
            </header>
        ) : (<div style={{textAlign:"center"}}>Loading...</div>)}
        <div>
            <NavLink to='/current-user/profile'>Profile</NavLink>
            <NavLink to='/current-user/activity'>Activities</NavLink>
            <NavLink to='/current-user/saves'>Saves</NavLink>
            <NavLink to={`/current-user/edit/${user._id}`}>Settings</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default CurrentUser