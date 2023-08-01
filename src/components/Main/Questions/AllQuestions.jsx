import React from 'react'
import QuestionsBody from './QuestionsBody'
import QuestionsFooter from './QuestionsFooter'
import QuestionsHeader from './QuestionsHeader'

const AllQuestions = () => {
  return (
    <div className='questions-page'>        
        <QuestionsHeader/>
        <QuestionsBody/>
        <QuestionsFooter/>
    </div>
  )
}

export default AllQuestions