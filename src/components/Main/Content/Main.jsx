import React from 'react'
import Body_Main from './Body_Main'
import Side_Navbar from '../Side_Navbar/Side_Navbar'
import './Main.css'
import { Routes,Route } from 'react-router-dom'
import Tags from '../Tags/Tags'
import Users from '../Users/Users'
import Companies from '../Companies/Companies'
import Questions from '../Questions/Questions'
import QuestionInfo from '../Questions/QuestionInfo'

const Main = () => {
  return (
    <div className='main-container'>
        <Side_Navbar/>
        <Routes>
          <Route path='/' element={<Body_Main/>}/>
          <Route path='/questions'>
            <Route index={true} element={<Questions/>}/>
            <Route index={false} path='info/:question_id' element={<QuestionInfo/>}/>
          </Route>
          <Route path='/tags' element={<Tags/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/companies' element={<Companies/>}/>
        </Routes>
    </div>
  )
}

export default Main