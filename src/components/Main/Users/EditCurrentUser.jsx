import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { avatar } from './avatar'
import { useSelector, useDispatch }from 'react-redux'
import {AiFillCaretDown, AiFillCaretUp}from 'react-icons/ai'
import { login } from '../../../redux/features/userSlice'
import { URL } from '../../../url'

const EditCurrentUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const {user_id}= useParams()
    const {user} = useSelector(state=>state.user)
    const [openPopup,setOpenPopup]= useState(false)

    const [name,setName] = useState(user.name)
    const [location,setLocation] = useState(user.country)
    const [title,setTitle] = useState(user.title)
    const [avatarId,setAvatarId] = useState(user.avatar_id)

    const handleClick = (id)=>{
        setOpenPopup(false)
        setAvatarId(id)
    }

    const handleCancel = ()=>{
        window.scrollTo({top:0,behavior:"smooth"})
        navigate('/current-user')
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`${URL}/users/${user_id}`,{
            name,
            title,
            country:location,
            avatar_id:avatarId
        })
        .then(response=>response.data)
        .then(data=>{
            localStorage.setItem('user',JSON.stringify(data))
            dispatch(login(data))
            window.scrollTo({top:0,behavior:"smooth"})
            navigate('/current-user')
        })
        .catch(error=>console.log(error.response.data))
    }

    useEffect(()=>{
        const getUser = JSON.parse(localStorage.getItem('user'))
        if(getUser){
            dispatch(login(getUser))
        }else{
            navigate('/login')
        }
    },[dispatch,navigate])

  return (
    <div>
        {user ? (
            <div className='edit-user-container'>
                <h2>Edit your profile</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Profile image</label>
                        <img src={avatar[avatarId-1]} alt="Avatar" />
                        <div className='custom-select-container'>
                            <button type='button' onClick={()=>setOpenPopup(!openPopup)}>Change Avatar 
                                <span>
                                    {openPopup?
                                        <AiFillCaretUp/>
                                        :
                                        <AiFillCaretDown/>
                                    }
                                </span></button>
                            <div className={openPopup ? "open" : ""}>
                            {avatar.map((img,index)=>(
                                <div key={index} onClick={()=>handleClick(index+1)}>
                                    <img src={img} alt="Avatar"/>
                                    <span>Avatar-{index+1}</span>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='name'>Display name</label>
                        <input 
                            type="text" 
                            id="name" 
                            required={true}
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='location'>Location</label>
                        <input 
                            type="text" 
                            id="location" 
                            required={true}
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <input 
                            type="text" 
                            id="title"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            placeholder='e.g: Developer'
                        />
                    </div>
                    <div>
                        <button type='submit'>Save changes</button>

                        <button onClick={handleCancel}type='button'>Cancel</button>
                    </div>
                </form>
            </div>
        ):
        (<div>Loading...</div>)}
    </div>
  )
}

export default EditCurrentUser