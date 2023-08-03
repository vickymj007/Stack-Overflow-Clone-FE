import React, { useEffect } from 'react'
import { avatar } from './avatar'
import { useSelector, useDispatch }from 'react-redux'
import { formatDistanceToNow } from 'date-fns'
import { MdCake, MdLocationOn } from 'react-icons/md'
import { login } from '../../../redux/features/userSlice'
import { AiOutlineClockCircle, AiOutlineTwitter, AiFillGithub,AiFillCaretDown } from 'react-icons/ai'
import './users.css'

const UserInfo = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)

    useEffect(()=>{
        const isUser =JSON.parse(localStorage.getItem('user'))
        if(isUser){
            dispatch(login(isUser))
        }
    },[dispatch])

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