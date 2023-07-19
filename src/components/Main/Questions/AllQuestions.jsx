import React from 'react'
import Questions_Body from './Questions_Body'
import Questions_Footer from './Questions_Footer'
import Questions_Header from './Questions_Header'

const AllQuestions = () => {
  return (
    <div className='questions-page'>        
        <Questions_Header/>
        <Questions_Body/>
        <Questions_Footer/>
    </div>
  )
}

export default AllQuestions