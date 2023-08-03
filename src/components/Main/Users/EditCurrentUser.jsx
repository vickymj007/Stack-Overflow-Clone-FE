import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { avatar } from './avatar'
import {AiFillCaretDown, AiFillCaretUp}from 'react-icons/ai'

const EditCurrentUser = () => {
    const navigate = useNavigate()
    
    //continue from here, think and change the way of getting current user info
    
    const {user_id}= useParams()
    const [user,setUser] = useState(null)

    const [openPopup,setOpenPopup]= useState(false)

    const [name,setName] = useState("")
    const [location,setLocation] = useState("")
    const [title,setTitle] = useState("")
    const [avatarId,setAvatarId] = useState(0)

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
        axios.put(`http://localhost:9000/api/users/${user_id}`,{
            name,
            title,
            country:location,
            avatar_id:avatarId
        })
        .then(response=>{

            console.log(response.data);
        })
        .catch(error=>console.log(error.response.data))
    }

    useEffect(()=>{

        axios.get(`http://localhost:9000/api/users/${user_id}`)
        .then(response =>{
            setUser(response.data)
            setName(response.data.name)
            setLocation(response.data.country)
            setTitle(response.data.title)
            setAvatarId(response.data.avatar_id - 1)
        })
        .catch(error=>{
            console.log(error.response.data);
        })
    },[user_id])

  return (
    <div>
        {user ? (
            <div className='edit-user-container'>
                <h2>Edit your profile</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Profile image</label>
                        <img src={avatar[avatarId]} alt="Avatar" />
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
                                <div key={index} onClick={()=>handleClick(index)}>
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