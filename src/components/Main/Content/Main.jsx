import React from 'react'
import Body_Main from './Body_Main'
import Side_Navbar from '../Side_Navbar/Side_Navbar'
import './Main.css'

const Main = () => {
  return (
    <div className='main-container'>
        <Side_Navbar/>
        <Body_Main/>
    </div>
  )
}

export default Main