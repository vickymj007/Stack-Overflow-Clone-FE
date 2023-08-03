import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { avatar } from './avatar'
import { formatDistanceToNow } from 'date-fns'
import { MdCake, MdLocationOn } from 'react-icons/md'
import { AiOutlineClockCircle, AiOutlineTwitter, AiFillGithub,AiFillCaretDown } from 'react-icons/ai'
import './users.css'

const UserInfo = () => {

    const {user_id}= useParams()
    const [user,setUser] = useState(null) 

    useEffect(()=>{
        axios.get(`http://localhost:9000/api/users/${user_id}`)
        .then(response =>{
            setUser(response.data)
        })
        .catch(error=>{
            console.log(error.response.data);
        })
    },[user_id])

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
                    <button>Profiles <span><AiFillCaretDown/></span></button>
                </div>
            </header>
        ) : (<div style={{textAlign:"center"}}>Loading...</div>)}
    </div>
  )
}

export default UserInfo