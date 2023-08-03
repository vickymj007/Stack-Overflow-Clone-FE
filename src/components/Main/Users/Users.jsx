import React, { useEffect } from 'react'
import { useSelector,useDispatch }from 'react-redux'
import { setUsers } from '../../../redux/features/allUserSlice'
import axios from 'axios'
import "./users.css"
import search_icon from '../../../assets/searchs_icon.png'
import {avatar} from './avatar.js'
import {Link} from 'react-router-dom'
import { URL } from '../../../url'

const Users = () => {
  const dispatch = useDispatch()


  const {users} = useSelector(state=>state.allUsers)



  useEffect(()=>{
    const getUsers = async()=>{
      try {
        const response = await axios.get(`${URL}/users`)
        dispatch(setUsers(response.data))
      } catch (error) {
        console.log(error.response.data);
      }
    }
    getUsers()
  },[dispatch])


  return (
    <div className='user-page'>
      <div className='user-page-header'>
        <h4>Users</h4>
        <div>
          <form>
            <img  src={search_icon} alt="Search icon" className='icons search-icon'/>
            <input type='text' placeholder='Search...'/>
          </form>
          <div>
            <p>Reputation</p>
            <p>New Users</p>
            <p>Votes</p>
            <p>Editors</p>
            <p>Moderators</p>
          </div>
        </div>
      </div>
      <div className='user-page-body'>
        {users&& users.map(user=>(
          <div className='user-card' key={user._id}>
            <img src={avatar[user.avatar_id - 1]} alt="Avatar" />
            <div>
              <Link to={`/users/${user._id}`}>{user.name}</Link>
              <p>{user.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users